import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Docs — VisionQA',
  description: 'Get started with VisionQA in minutes. Installation, configuration, and API reference.',
};

// ─── Reusable components ──────────────────────────────────────────────────────

function CodeBlock({
  filename,
  language,
  children,
}: {
  filename?: string;
  language?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="rounded-xl overflow-hidden border mb-6"
      style={{ borderColor: 'var(--border)', background: '#0d0d16' }}
    >
      {filename && (
        <div
          className="flex items-center gap-3 px-4 py-2.5 border-b"
          style={{ borderColor: 'var(--border)', background: '#0d0d16' }}
        >
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 opacity-50" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 opacity-50" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 opacity-50" />
          </div>
          <span
            className="text-xs"
            style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-space-mono, monospace)' }}
          >
            {filename}
          </span>
          {language && (
            <span
              className="ml-auto text-xs px-2 py-0.5 rounded"
              style={{
                color: 'var(--text-muted)',
                background: 'rgba(136,136,160,0.1)',
                fontFamily: 'sans-serif',
              }}
            >
              {language}
            </span>
          )}
        </div>
      )}
      <pre
        className="px-5 py-5 overflow-x-auto text-sm leading-relaxed"
        style={{ fontFamily: 'var(--font-space-mono, monospace)' }}
      >
        {children}
      </pre>
    </div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-xl font-bold mt-12 mb-4"
      style={{ color: 'var(--text)' }}
    >
      {children}
    </h2>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3
      className="text-base font-semibold mt-8 mb-3"
      style={{ color: 'var(--text)' }}
    >
      {children}
    </h3>
  );
}

function Callout({
  type,
  children,
}: {
  type: 'info' | 'warning' | 'tip';
  children: React.ReactNode;
}) {
  const config = {
    info:    { color: '#00b8d4', bg: 'rgba(0,184,212,0.07)',  border: 'rgba(0,184,212,0.25)',  icon: 'ℹ' },
    warning: { color: '#ffd580', bg: 'rgba(255,213,128,0.07)', border: 'rgba(255,213,128,0.25)', icon: '⚠' },
    tip:     { color: '#00e5a0', bg: 'rgba(0,229,160,0.07)',  border: 'rgba(0,229,160,0.25)',  icon: '✦' },
  }[type];

  return (
    <div
      className="flex gap-3 p-4 rounded-xl border mb-6 text-sm leading-relaxed"
      style={{
        background: config.bg,
        borderColor: config.border,
        color: 'var(--text-muted)',
      }}
    >
      <span className="flex-shrink-0 font-bold" style={{ color: config.color }}>
        {config.icon}
      </span>
      <div>{children}</div>
    </div>
  );
}

// ─── Sidebar nav ──────────────────────────────────────────────────────────────

const navSections = [
  { label: 'Getting Started', items: ['Installation', 'Configuration', 'First Test'] },
  { label: 'API Reference', items: ['vqa.analyze()', 'vqa.snapshot()', 'vqa.setBaseline()'] },
  { label: 'Guides', items: ['CI/CD Setup', 'Allowed Changes', 'Strictness Levels'] },
  { label: 'Integrations', items: ['GitHub Actions', 'GitLab CI', 'CircleCI'] },
];

function DocsSidebar() {
  return (
    <aside className="hidden lg:block w-56 flex-shrink-0">
      <div className="sticky top-24">
        {navSections.map((section) => (
          <div key={section.label} className="mb-7">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--text-muted)' }}
            >
              {section.label}
            </p>
            <ul className="space-y-1.5">
              {section.items.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                    className="block text-sm py-1 px-2 rounded-lg transition-colors hover:text-white"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
}

// ─── API Reference table ──────────────────────────────────────────────────────

const apiMethods = [
  {
    method: 'vqa.analyze(options)',
    description: 'Capture a screenshot and run AI analysis + accessibility scan.',
    returns: 'Promise<AnalysisResult>',
  },
  {
    method: 'vqa.snapshot(name)',
    description: 'Save a named screenshot without running analysis.',
    returns: 'Promise<Snapshot>',
  },
  {
    method: 'vqa.setBaseline(name)',
    description: 'Mark the current screenshot as the regression baseline.',
    returns: 'Promise<void>',
  },
  {
    method: 'vqa.configure(config)',
    description: 'Override project configuration for the current test.',
    returns: 'void',
  },
];

const analyzeOptions = [
  { name: 'pageName', type: 'string', required: true, description: 'Human-readable name for the page/state being tested.' },
  { name: 'strictness', type: '"low" | "medium" | "high"', required: false, description: 'AI sensitivity. Defaults to project setting.' },
  { name: 'allowedChanges', type: 'string[]', required: false, description: 'Element types to ignore: "timestamp", "avatar", "ad", "dynamic".' },
  { name: 'wcag', type: 'boolean', required: false, description: 'Run WCAG 2.1 AA accessibility scan. Default: true.' },
  { name: 'selector', type: 'string', required: false, description: 'CSS selector to scope analysis to a specific element.' },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function DocsPage() {
  return (
    <div
      className="min-h-screen pt-16"
      style={{ background: 'var(--bg)' }}
    >
      {/* Docs header */}
      <div
        className="border-b px-6 py-10"
        style={{
          borderColor: 'var(--border)',
          background: 'linear-gradient(180deg, rgba(0,229,160,0.04) 0%, transparent 100%)',
        }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 text-xs mb-3" style={{ color: 'var(--text-muted)' }}>
            <Link href="/" className="hover:opacity-80 transition-opacity" style={{ color: '#00e5a0' }}>
              VisionQA
            </Link>
            <span>/</span>
            <span>Docs</span>
          </div>
          <h1
            className="text-3xl font-bold mb-2"
            style={{ color: 'var(--text)' }}
          >
            Documentation
          </h1>
          <p style={{ color: 'var(--text-muted)' }}>
            Everything you need to integrate VisionQA into your Playwright test suite.
          </p>
        </div>
      </div>

      {/* Docs body */}
      <div className="max-w-5xl mx-auto px-6 py-12 flex gap-12">
        <DocsSidebar />

        <article className="flex-1 min-w-0">
          {/* ── Installation ── */}
          <div id="installation">
            <SectionHeading>Installation</SectionHeading>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
              Install the VisionQA Playwright adapter alongside your existing test setup.
            </p>

            <Callout type="info">
              VisionQA requires Node.js 18+ and Playwright 1.40+. It works alongside{' '}
              <code
                className="px-1 py-0.5 rounded text-xs"
                style={{ background: 'rgba(0,184,212,0.15)', color: '#00b8d4' }}
              >
                @playwright/test
              </code>{' '}
              without replacing it.
            </Callout>

            <CodeBlock filename="terminal" language="bash">
              <span style={{ color: 'var(--text-muted)' }}># npm</span>
              {'\n'}
              <span style={{ color: '#00e5a0' }}>npm</span>
              <span style={{ color: 'var(--text)' }}> install --save-dev </span>
              <span style={{ color: '#00b8d4' }}>@visionqa/playwright</span>
              {'\n\n'}
              <span style={{ color: 'var(--text-muted)' }}># yarn</span>
              {'\n'}
              <span style={{ color: '#00e5a0' }}>yarn</span>
              <span style={{ color: 'var(--text)' }}> add --dev </span>
              <span style={{ color: '#00b8d4' }}>@visionqa/playwright</span>
              {'\n\n'}
              <span style={{ color: 'var(--text-muted)' }}># pnpm</span>
              {'\n'}
              <span style={{ color: '#00e5a0' }}>pnpm</span>
              <span style={{ color: 'var(--text)' }}> add -D </span>
              <span style={{ color: '#00b8d4' }}>@visionqa/playwright</span>
            </CodeBlock>
          </div>

          {/* ── Configuration ── */}
          <div id="configuration">
            <SectionHeading>Configuration</SectionHeading>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
              Create a{' '}
              <code
                className="px-1 py-0.5 rounded text-xs"
                style={{ background: 'rgba(136,136,160,0.1)', color: 'var(--text)' }}
              >
                visionqa.config.ts
              </code>{' '}
              in your project root:
            </p>

            <CodeBlock filename="visionqa.config.ts" language="TypeScript">
              <span style={{ color: 'var(--text-muted)' }}>// visionqa.config.ts</span>
              {'\n'}
              <span style={{ color: '#00e5a0' }}>import</span>
              <span style={{ color: 'var(--text)' }}> {'{ defineConfig }'} </span>
              <span style={{ color: '#00e5a0' }}>from</span>
              <span style={{ color: '#ffd580' }}> &apos;@visionqa/playwright&apos;</span>
              <span style={{ color: '#8888a0' }}>;</span>
              {'\n\n'}
              <span style={{ color: '#00e5a0' }}>export default</span>
              <span style={{ color: '#79b8ff' }}> defineConfig</span>
              <span style={{ color: '#8888a0' }}>{'({'}</span>
              {'\n'}
              {'  '}
              <span style={{ color: '#00b8d4' }}>apiKey</span>
              <span style={{ color: '#8888a0' }}>: </span>
              <span style={{ color: '#79b8ff' }}>process</span>
              <span style={{ color: '#8888a0' }}>.</span>
              <span style={{ color: '#00b8d4' }}>env</span>
              <span style={{ color: '#8888a0' }}>.</span>
              <span style={{ color: 'var(--text)' }}>VISIONQA_API_KEY</span>
              <span style={{ color: '#8888a0' }}>,</span>
              {'\n'}
              {'  '}
              <span style={{ color: '#00b8d4' }}>projectId</span>
              <span style={{ color: '#8888a0' }}>: </span>
              <span style={{ color: '#ffd580' }}>&apos;my-app&apos;</span>
              <span style={{ color: '#8888a0' }}>,</span>
              {'\n'}
              {'  '}
              <span style={{ color: '#00b8d4' }}>strictness</span>
              <span style={{ color: '#8888a0' }}>: </span>
              <span style={{ color: '#ffd580' }}>&apos;medium&apos;</span>
              <span style={{ color: '#8888a0' }}>,</span>
              {'     '}
              <span style={{ color: 'var(--text-muted)' }}>// &apos;low&apos; | &apos;medium&apos; | &apos;high&apos;</span>
              {'\n'}
              {'  '}
              <span style={{ color: '#00b8d4' }}>wcag</span>
              <span style={{ color: '#8888a0' }}>: </span>
              <span style={{ color: '#c792ea' }}>true</span>
              <span style={{ color: '#8888a0' }}>,</span>
              {'            '}
              <span style={{ color: 'var(--text-muted)' }}>// run WCAG 2.1 AA by default</span>
              {'\n'}
              {'  '}
              <span style={{ color: '#00b8d4' }}>allowedChanges</span>
              <span style={{ color: '#8888a0' }}>: [</span>
              <span style={{ color: '#ffd580' }}>&apos;timestamp&apos;</span>
              <span style={{ color: '#8888a0' }}>, </span>
              <span style={{ color: '#ffd580' }}>&apos;avatar&apos;</span>
              <span style={{ color: '#8888a0' }}>],</span>
              {'\n'}
              {'  '}
              <span style={{ color: '#00b8d4' }}>retention</span>
              <span style={{ color: '#8888a0' }}>: </span>
              <span style={{ color: '#f78c6c' }}>30</span>
              <span style={{ color: '#8888a0' }}>,</span>
              {'          '}
              <span style={{ color: 'var(--text-muted)' }}>// days to keep screenshots</span>
              {'\n'}
              <span style={{ color: '#8888a0' }}>{'}'});</span>
            </CodeBlock>

            <Callout type="tip">
              Set{' '}
              <code
                className="px-1 py-0.5 rounded text-xs"
                style={{ background: 'rgba(0,229,160,0.1)', color: '#00e5a0' }}
              >
                VISIONQA_API_KEY
              </code>{' '}
              in your CI environment secrets. Get your key from the{' '}
              <Link href="/dashboard" className="hover:opacity-80" style={{ color: '#00e5a0' }}>
                Dashboard
              </Link>
              .
            </Callout>
          </div>

          {/* ── First Test ── */}
          <div id="first-test">
            <SectionHeading>First Test</SectionHeading>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
              Import from{' '}
              <code
                className="px-1 py-0.5 rounded text-xs"
                style={{ background: 'rgba(136,136,160,0.1)', color: 'var(--text)' }}
              >
                @visionqa/playwright
              </code>{' '}
              instead of{' '}
              <code
                className="px-1 py-0.5 rounded text-xs"
                style={{ background: 'rgba(136,136,160,0.1)', color: 'var(--text)' }}
              >
                @playwright/test
              </code>
              . Everything else is identical.
            </p>

            <CodeBlock filename="tests/homepage.spec.ts" language="TypeScript">
              <span style={{ color: '#00e5a0' }}>import</span>
              <span style={{ color: 'var(--text)' }}> {'{ test, expect }'} </span>
              <span style={{ color: '#00e5a0' }}>from</span>
              <span style={{ color: '#ffd580' }}> &apos;@visionqa/playwright&apos;</span>
              <span style={{ color: '#8888a0' }}>;</span>
              {'\n\n'}
              <span style={{ color: '#79b8ff' }}>test</span>
              <span style={{ color: '#8888a0' }}>(</span>
              <span style={{ color: '#ffd580' }}>&apos;homepage visual review&apos;</span>
              <span style={{ color: '#8888a0' }}>, </span>
              <span style={{ color: '#00e5a0' }}>async</span>
              <span style={{ color: '#8888a0' }}> ({'{ '}</span>
              <span style={{ color: '#00b8d4' }}>page</span>
              <span style={{ color: '#8888a0' }}>, </span>
              <span style={{ color: '#00b8d4' }}>vqa</span>
              <span style={{ color: '#8888a0' }}> {'}'}) </span>
              <span style={{ color: '#00e5a0' }}>=&gt;</span>
              <span style={{ color: '#8888a0' }}> {'{'}</span>
              {'\n'}
              {'  '}
              <span style={{ color: '#00e5a0' }}>await</span>
              <span style={{ color: 'var(--text)' }}> page</span>
              <span style={{ color: '#8888a0' }}>.</span>
              <span style={{ color: '#79b8ff' }}>goto</span>
              <span style={{ color: '#8888a0' }}>(</span>
              <span style={{ color: '#ffd580' }}>&apos;https://myapp.com&apos;</span>
              <span style={{ color: '#8888a0' }}>);</span>
              {'\n\n'}
              {'  '}
              <span style={{ color: '#00e5a0' }}>const</span>
              <span style={{ color: 'var(--text)' }}> result </span>
              <span style={{ color: '#8888a0' }}>= </span>
              <span style={{ color: '#00e5a0' }}>await</span>
              <span style={{ color: 'var(--text)' }}> vqa</span>
              <span style={{ color: '#8888a0' }}>.</span>
              <span style={{ color: '#79b8ff' }}>analyze</span>
              <span style={{ color: '#8888a0' }}>({'{'}</span>
              {'\n'}
              {'    '}
              <span style={{ color: '#00b8d4' }}>pageName</span>
              <span style={{ color: '#8888a0' }}>: </span>
              <span style={{ color: '#ffd580' }}>&apos;Homepage&apos;</span>
              <span style={{ color: '#8888a0' }}>,</span>
              {'\n'}
              {'    '}
              <span style={{ color: '#00b8d4' }}>strictness</span>
              <span style={{ color: '#8888a0' }}>: </span>
              <span style={{ color: '#ffd580' }}>&apos;medium&apos;</span>
              <span style={{ color: '#8888a0' }}>,</span>
              {'\n'}
              {'  '}
              <span style={{ color: '#8888a0' }}>{'}'});</span>
              {'\n\n'}
              {'  '}
              <span style={{ color: 'var(--text-muted)' }}>// result.report contains the natural language AI analysis</span>
              {'\n'}
              {'  '}
              <span style={{ color: 'var(--text-muted)' }}>// result.violations lists each accessibility or visual issue</span>
              {'\n'}
              {'  '}
              <span style={{ color: '#79b8ff' }}>expect</span>
              <span style={{ color: '#8888a0' }}>(result.</span>
              <span style={{ color: '#00b8d4' }}>passed</span>
              <span style={{ color: '#8888a0' }}>).</span>
              <span style={{ color: '#79b8ff' }}>toBe</span>
              <span style={{ color: '#8888a0' }}>(</span>
              <span style={{ color: '#c792ea' }}>true</span>
              <span style={{ color: '#8888a0' }}>);</span>
              {'\n'}
              <span style={{ color: '#8888a0' }}>{'}'});</span>
            </CodeBlock>

            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
              Run your tests normally:
            </p>

            <CodeBlock filename="terminal" language="bash">
              <span style={{ color: '#79b8ff' }}>npx playwright test</span>
              {'\n'}
              <span style={{ color: 'var(--text-muted)' }}># → VisionQA results appear in Playwright HTML report</span>
              {'\n'}
              <span style={{ color: 'var(--text-muted)' }}># → AI analysis uploaded to your dashboard</span>
            </CodeBlock>
          </div>

          {/* ── API Reference ── */}
          <div id="api-reference">
            <SectionHeading>API Reference</SectionHeading>

            {/* Methods table */}
            <div
              className="rounded-xl overflow-hidden border mb-8"
              style={{ borderColor: 'var(--border)' }}
            >
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: 'var(--card)', borderBottom: '1px solid var(--border)' }}>
                    <th className="text-left px-4 py-3" style={{ color: 'var(--text-muted)' }}>
                      Method
                    </th>
                    <th className="text-left px-4 py-3" style={{ color: 'var(--text-muted)' }}>
                      Description
                    </th>
                    <th className="text-left px-4 py-3" style={{ color: 'var(--text-muted)' }}>
                      Returns
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {apiMethods.map((m, i) => (
                    <tr
                      key={i}
                      style={{
                        borderBottom:
                          i < apiMethods.length - 1 ? '1px solid var(--border)' : 'none',
                      }}
                    >
                      <td className="px-4 py-3">
                        <code
                          style={{
                            color: '#00e5a0',
                            fontFamily: 'var(--font-space-mono, monospace)',
                            fontSize: '0.75rem',
                          }}
                        >
                          {m.method}
                        </code>
                      </td>
                      <td className="px-4 py-3" style={{ color: 'var(--text-muted)' }}>
                        {m.description}
                      </td>
                      <td className="px-4 py-3">
                        <code
                          style={{
                            color: '#79b8ff',
                            fontFamily: 'var(--font-space-mono, monospace)',
                            fontSize: '0.75rem',
                          }}
                        >
                          {m.returns}
                        </code>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <SubHeading>vqa.analyze() options</SubHeading>

            <div
              className="rounded-xl overflow-hidden border mb-8"
              style={{ borderColor: 'var(--border)' }}
            >
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: 'var(--card)', borderBottom: '1px solid var(--border)' }}>
                    <th className="text-left px-4 py-3" style={{ color: 'var(--text-muted)' }}>
                      Option
                    </th>
                    <th className="text-left px-4 py-3" style={{ color: 'var(--text-muted)' }}>
                      Type
                    </th>
                    <th className="text-left px-4 py-3" style={{ color: 'var(--text-muted)' }}>
                      Required
                    </th>
                    <th className="text-left px-4 py-3" style={{ color: 'var(--text-muted)' }}>
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {analyzeOptions.map((o, i) => (
                    <tr
                      key={i}
                      style={{
                        borderBottom:
                          i < analyzeOptions.length - 1 ? '1px solid var(--border)' : 'none',
                      }}
                    >
                      <td className="px-4 py-3">
                        <code
                          style={{
                            color: '#00b8d4',
                            fontFamily: 'var(--font-space-mono, monospace)',
                            fontSize: '0.75rem',
                          }}
                        >
                          {o.name}
                        </code>
                      </td>
                      <td className="px-4 py-3">
                        <code
                          style={{
                            color: '#ffd580',
                            fontFamily: 'var(--font-space-mono, monospace)',
                            fontSize: '0.7rem',
                          }}
                        >
                          {o.type}
                        </code>
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className="text-xs px-2 py-0.5 rounded-full"
                          style={
                            o.required
                              ? { background: 'rgba(0,229,160,0.1)', color: '#00e5a0' }
                              : { background: 'rgba(136,136,160,0.1)', color: 'var(--text-muted)' }
                          }
                        >
                          {o.required ? 'required' : 'optional'}
                        </span>
                      </td>
                      <td className="px-4 py-3" style={{ color: 'var(--text-muted)' }}>
                        {o.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ── CI/CD Setup ── */}
          <div id="ci-cd-setup">
            <SectionHeading>CI/CD Setup</SectionHeading>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
              Add VisionQA to your GitHub Actions workflow to get PR comments and status checks automatically.
            </p>

            <CodeBlock filename=".github/workflows/visionqa.yml" language="YAML">
              <span style={{ color: '#00b8d4' }}>name</span>
              <span style={{ color: '#8888a0' }}>: </span>
              <span style={{ color: '#ffd580' }}>VisionQA Visual Tests</span>
              {'\n'}
              <span style={{ color: '#00b8d4' }}>on</span>
              <span style={{ color: '#8888a0' }}>: [</span>
              <span style={{ color: '#ffd580' }}>push</span>
              <span style={{ color: '#8888a0' }}>, </span>
              <span style={{ color: '#ffd580' }}>pull_request</span>
              <span style={{ color: '#8888a0' }}>]</span>
              {'\n\n'}
              <span style={{ color: '#00b8d4' }}>jobs</span>
              <span style={{ color: '#8888a0' }}>:</span>
              {'\n'}
              {'  '}
              <span style={{ color: '#00b8d4' }}>visual-test</span>
              <span style={{ color: '#8888a0' }}>:</span>
              {'\n'}
              {'    '}
              <span style={{ color: '#00b8d4' }}>runs-on</span>
              <span style={{ color: '#8888a0' }}>: </span>
              <span style={{ color: '#ffd580' }}>ubuntu-latest</span>
              {'\n'}
              {'    '}
              <span style={{ color: '#00b8d4' }}>steps</span>
              <span style={{ color: '#8888a0' }}>:</span>
              {'\n'}
              {'      - '}
              <span style={{ color: '#00b8d4' }}>uses</span>
              <span style={{ color: '#8888a0' }}>: </span>
              <span style={{ color: '#ffd580' }}>actions/checkout@v4</span>
              {'\n'}
              {'      - '}
              <span style={{ color: '#00b8d4' }}>uses</span>
              <span style={{ color: '#8888a0' }}>: </span>
              <span style={{ color: '#ffd580' }}>actions/setup-node@v4</span>
              {'\n'}
              {'        '}
              <span style={{ color: '#00b8d4' }}>with</span>
              <span style={{ color: '#8888a0' }}>:</span>
              {'\n'}
              {'          '}
              <span style={{ color: '#00b8d4' }}>node-version</span>
              <span style={{ color: '#8888a0' }}>: </span>
              <span style={{ color: '#f78c6c' }}>20</span>
              {'\n'}
              {'      - '}
              <span style={{ color: '#00b8d4' }}>run</span>
              <span style={{ color: '#8888a0' }}>: </span>
              <span style={{ color: '#ffd580' }}>npm ci</span>
              {'\n'}
              {'      - '}
              <span style={{ color: '#00b8d4' }}>run</span>
              <span style={{ color: '#8888a0' }}>: </span>
              <span style={{ color: '#ffd580' }}>npx playwright install --with-deps</span>
              {'\n'}
              {'      - '}
              <span style={{ color: '#00b8d4' }}>run</span>
              <span style={{ color: '#8888a0' }}>: </span>
              <span style={{ color: '#ffd580' }}>npx playwright test</span>
              {'\n'}
              {'        '}
              <span style={{ color: '#00b8d4' }}>env</span>
              <span style={{ color: '#8888a0' }}>:</span>
              {'\n'}
              {'          '}
              <span style={{ color: '#00b8d4' }}>VISIONQA_API_KEY</span>
              <span style={{ color: '#8888a0' }}>: </span>
              <span style={{ color: '#c792ea' }}>${'{'}</span>
              <span style={{ color: 'var(--text)' }}>{' secrets.VISIONQA_API_KEY '}</span>
              <span style={{ color: '#c792ea' }}>{'}'}</span>
            </CodeBlock>
          </div>

          {/* Bottom nav */}
          <div
            className="flex justify-between mt-16 pt-8 border-t"
            style={{ borderColor: 'var(--border)' }}
          >
            <div />
            <Link
              href="/dashboard"
              className="flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-80"
              style={{ color: '#00e5a0' }}
            >
              Open Dashboard
              <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M8.22 2.97a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06l2.97-2.97H3.75a.75.75 0 010-1.5h7.44L8.22 4.03a.75.75 0 010-1.06z"
                />
              </svg>
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
