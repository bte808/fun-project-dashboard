import AppKit
import Foundation
import WebKit

struct ScenarioResult: Decodable {
  let ok: Bool
  let message: String?
}

final class BrowserSmokeRunner: NSObject, WKNavigationDelegate {
  private let webView: WKWebView
  private let fileURL: URL
  private let rootURL: URL
  private var finished = false
  private(set) var exitCode: Int32 = 1

  init(fileURL: URL) {
    self.fileURL = fileURL
    self.rootURL = fileURL.deletingLastPathComponent()

    let configuration = WKWebViewConfiguration()
    configuration.websiteDataStore = .nonPersistent()
    configuration.preferences.javaScriptCanOpenWindowsAutomatically = false

    self.webView = WKWebView(
      frame: NSRect(x: 0, y: 0, width: 390, height: 844),
      configuration: configuration
    )

    super.init()
    self.webView.navigationDelegate = self
  }

  func start() {
    webView.loadFileURL(fileURL, allowingReadAccessTo: rootURL)

    DispatchQueue.main.asyncAfter(deadline: .now() + 20) { [weak self] in
      guard let self, !self.finished else { return }
      fputs("Browser smoke test timed out while loading the dashboard.\n", stderr)
      self.finish(with: 2)
    }
  }

  func webView(_ webView: WKWebView, didFail navigation: WKNavigation!, withError error: Error) {
    fail("Navigation failed: \(error.localizedDescription)", code: 3)
  }

  func webView(_ webView: WKWebView, didFailProvisionalNavigation navigation: WKNavigation!, withError error: Error) {
    fail("Initial load failed: \(error.localizedDescription)", code: 4)
  }

  func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
    DispatchQueue.main.asyncAfter(deadline: .now() + 0.2) { [weak self] in
      self?.waitUntilReady(attempt: 0)
    }
  }

  private func waitUntilReady(attempt: Int) {
    evaluate(script: readinessScript, label: "readiness") { [weak self] result in
      guard let self else { return }

      if result == "ready" {
        self.runScenario()
        return
      }

      if attempt >= 40 {
        self.fail("Dashboard never finished rendering controls and data.", code: 5)
        return
      }

      DispatchQueue.main.asyncAfter(deadline: .now() + 0.1) { [weak self] in
        self?.waitUntilReady(attempt: attempt + 1)
      }
    }
  }

  private func runScenario() {
    evaluate(script: scenarioScript, label: "scenario") { [weak self] result in
      guard let self else { return }
      guard let payload = result.data(using: .utf8) else {
        self.fail("Scenario result is not valid UTF-8.", code: 8)
        return
      }

      let decoder = JSONDecoder()
      guard let scenario = try? decoder.decode(ScenarioResult.self, from: payload) else {
        self.fail("Scenario result is not valid JSON: \(result)", code: 9)
        return
      }

      if !scenario.ok {
        self.fail("Browser smoke assertion failed: \(scenario.message ?? "unknown error")", code: 10)
        return
      }

      print(result)
      self.finish(with: 0)
    }
  }

  private func evaluate(script: String, label: String, completion: @escaping (String) -> Void) {
    webView.evaluateJavaScript(script) { [weak self] value, error in
      guard let self else { return }

      if let error {
        self.fail("JavaScript \(label) failed: \(error.localizedDescription)", code: 6)
        return
      }

      guard let result = value as? String else {
        self.fail("JavaScript \(label) returned an unexpected result.", code: 7)
        return
      }

      completion(result)
    }
  }

  private func fail(_ message: String, code: Int32) {
    guard !finished else { return }
    fputs("\(message)\n", stderr)
    finish(with: code)
  }

  private func finish(with code: Int32) {
    guard !finished else { return }
    finished = true
    exitCode = code
    NSApplication.shared.terminate(nil)
  }

  private let readinessScript = """
  (() => {
    const hasData = Array.isArray(window.FUN_PROJECT_DASHBOARD_DATA?.projects);
    const hasControls = document.querySelector('#project-grid') && document.querySelector('#view-tabs button[data-view="all"]');
    const hasFeedback = document.querySelector('#feedback')?.textContent?.trim();
    return hasData && hasControls && hasFeedback ? 'ready' : 'waiting';
  })();
  """

  private let scenarioScript = """
  (() => {
    try {
      const assert = (condition, message) => {
        if (!condition) throw new Error(message);
      };

      const widthLimit = Math.ceil(window.innerWidth) + 1;
      const projectData = window.FUN_PROJECT_DASHBOARD_DATA?.projects || [];
      const todayProjects = projectData.filter((project) => project.today?.updated);
      const reviewProjects = projectData.filter((project) => project.needsReview);
      const getCards = () => [...document.querySelectorAll('.project-card')];
      const getCardNames = () => getCards().map((card) => card.querySelector('h3 a')?.textContent?.trim() || '');
      const clickTab = (view) => {
        const tab = document.querySelector(`#view-tabs button[data-view="${view}"]`);
        assert(tab, `missing ${view} tab`);
        tab.click();
        const activeTab = document.querySelector(`#view-tabs button[data-view="${view}"]`);
        assert(activeTab?.getAttribute('aria-pressed') === 'true', `${view} tab did not become active`);
        return activeTab;
      };
      const checkNoOverflow = (phase) => {
        const widths = [
          document.documentElement.scrollWidth,
          document.body.scrollWidth,
          ...[...document.querySelectorAll('.shell, .topbar, .toolbar, .project-grid, .project-card')].map((node) => node.scrollWidth)
        ];
        const maxWidth = Math.max(...widths);
        assert(maxWidth <= widthLimit, `${phase} overflow detected: max scrollWidth ${maxWidth}, innerWidth ${window.innerWidth}`);
        return maxWidth;
      };

      assert(projectData.length > 0, 'dashboard data is empty');
      assert(getCards().length === todayProjects.length, `expected ${todayProjects.length} cards in today view, got ${getCards().length}`);
      const initialMaxWidth = checkNoOverflow('initial');

      const searchInput = document.querySelector('#search');
      assert(searchInput, 'missing search input');

      let searchView = 'today';
      if (todayProjects.length === 0) {
        clickTab('all');
        searchView = 'all';
        assert(getCards().length === projectData.length, `expected ${projectData.length} cards in all view, got ${getCards().length}`);
      }

      const targetName = getCardNames()[0];
      assert(targetName, 'missing first project card');

      searchInput.value = targetName;
      searchInput.dispatchEvent(new Event('input', { bubbles: true }));
      assert(getCards().length === 1, `search should narrow results to one project, got ${getCards().length}`);
      assert(getCardNames()[0] === targetName, `search did not keep the expected project: ${targetName}`);

      if (targetName.includes('-')) {
        const spacedName = targetName.split('-').slice(-2).join(' ');
        searchInput.value = spacedName;
        searchInput.dispatchEvent(new Event('input', { bubbles: true }));
        assert(getCardNames().includes(targetName), `space-separated search did not match hyphenated project: ${spacedName}`);
      }

      const detailsButton = document.querySelector('.project-card button[data-toggle]');
      assert(detailsButton, 'missing details toggle button');
      detailsButton.click();
      assert(document.querySelector('.project-card .details.is-open'), 'details panel did not open after click');

      searchInput.value = '';
      searchInput.dispatchEvent(new Event('input', { bubbles: true }));

      clickTab('review');
      assert(getCards().length === reviewProjects.length, `expected ${reviewProjects.length} review cards, got ${getCards().length}`);

      const feedback = document.querySelector('#feedback')?.textContent || '';
      assert(/当前显示\\s+\\d+\\s+个项目/.test(feedback), `feedback did not update after interactions: ${feedback}`);

      const postInteractionMaxWidth = checkNoOverflow('post-interaction');

      return JSON.stringify({
        ok: true,
        innerWidth: window.innerWidth,
        initialMaxWidth,
        postInteractionMaxWidth,
        todayProjects: todayProjects.length,
        reviewProjects: reviewProjects.length,
        searchView,
        searchedProject: targetName,
        feedback
      });
    } catch (error) {
      return JSON.stringify({
        ok: false,
        message: error?.message || String(error)
      });
    }
  })();
  """
}

let arguments = CommandLine.arguments
guard arguments.count >= 2 else {
  fputs("Usage: swift scripts/browser-smoke.swift /absolute/path/to/index.html\n", stderr)
  exit(64)
}

let app = NSApplication.shared
app.setActivationPolicy(.prohibited)

let fileURL = URL(fileURLWithPath: arguments[1])
let runner = BrowserSmokeRunner(fileURL: fileURL)

DispatchQueue.main.async {
  runner.start()
}

app.run()
exit(runner.exitCode)
