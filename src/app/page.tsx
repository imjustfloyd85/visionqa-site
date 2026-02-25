import Link from 'next/link';
import { FeatureCard } from '@/components/FeatureCard';

// ─── Hero Section ─────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(var(--border) 1px, transparent 1px),
            linear-gradient(90deg, var(--border) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial glow behind hero */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse, rgba(0,229,160,0.07) 0%, rgba(0,184,212,0.05) 40%, transparent 70%)',
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        {/* Eyebrow badge */}
        <div className="animate-fade-up inline-flex items-center gap-2 mb-8">
          <span
            className="px-4 py-1.5 rounded-full text-xs font-semibold border"
            style={{
              background: 'rgba(0,229,160,0.08)',
              borderColor: 'rgba(0,229,160,0.25)',
              color: '#00e5a0',
              letterSpacing: '0.05em',
            }}
          >
            Powered by Claude Vision AI
          </span>
        </div>

        {/* Headline */}
        <h1
          className="animate-fade-up-delay-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6"
          style={{ color: 'var(--text)' }}
        >
          AI-Powered Visual Testing{' '}
          <br className="hidden sm:block" />
          <span className="gradient-text">That Understands Your UI</span>
        </h1>

        {/* Subheadline */}
        <p
          className="animate-fade-up-delay-2 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: 'var(--text-muted)' }}
        >
          Visual regression + WCAG accessibility in one tool.{' '}
          <strong style={{ color: 'var(--text)' }}>Claude Vision</strong> analyzes your
          screenshots like a senior QA engineer.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center items-center mb-14">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-base font-semibold transition-all duration-200 hover:opacity-90 hover:scale-[1.02] animate-pulse-glow"
            style={{
              background: 'linear-gradient(135deg, #00e5a0, #00b8d4)',
              color: '#0a0a0f',
            }}
          >
            Get Started Free
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M8.22 2.97a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06l2.97-2.97H3.75a.75.75 0 010-1.5h7.44L8.22 4.03a.75.75 0 010-1.06z"
              />
            </svg>
          </Link>
          <Link
            href="/docs"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-base font-semibold border transition-all duration-200 hover:border-opacity-60"
            style={{
              color: 'var(--text)',
              borderColor: 'var(--border)',
              background: 'transparent',
            }}
          >
            View Docs
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8.75 1.75a.75.75 0 00-1.5 0v5.5h-5.5a.75.75 0 000 1.5h5.5v5.5a.75.75 0 001.5 0v-5.5h5.5a.75.75 0 000-1.5h-5.5v-5.5z" />
            </svg>
          </Link>
        </div>

        {/* npm install snippet */}
        <div
          className="animate-fade-up-delay-4 inline-flex items-center gap-3 px-5 py-3 rounded-xl border text-sm"
          style={{
            background: '#0d0d16',
            borderColor: 'var(--border)',
            fontFamily: 'var(--font-space-mono, monospace)',
          }}
        >
          <span style={{ color: 'var(--text-muted)' }}>$</span>
          <span style={{ color: '#00e5a0' }}>npm</span>
          <span style={{ color: 'var(--text)' }}>install</span>
          <span style={{ color: '#00b8d4' }}>@visionqa/playwright</span>
          <button
            className="ml-2 p-1 rounded transition-colors hover:opacity-70"
            style={{ color: 'var(--text-muted)' }}
            title="Copy"
            aria-label="Copy install command"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
              <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z" />
              <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z" />
            </svg>
          </button>
        </div>

        {/* Social proof */}
        <p className="mt-6 text-xs" style={{ color: 'var(--text-muted)' }}>
          No credit card required &nbsp;·&nbsp; 100 free analyses/month &nbsp;·&nbsp; Setup in 5
          minutes
        </p>
      </div>
    </section>
  );
}

// ─── How It Works ─────────────────────────────────────────────────────────────

const steps = [
  {
    number: '01',
    title: 'Capture',
    description:
      'Run your Playwright tests. VisionQA automatically intercepts and captures screenshots at every assertion point — no extra code needed.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Analyze',
    description:
      'Claude Vision AI examines each screenshot for visual quality, layout regressions, broken elements, and WCAG 2.1 AA accessibility violations.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Report',
    description:
      'Get detailed, actionable reports with natural language explanations. Every issue described in plain English — what broke, where, and why it matters.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
];

function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: '#00e5a0' }}
          >
            How It Works
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold"
            style={{ color: 'var(--text)' }}
          >
            From test to insight in{' '}
            <span className="gradient-text">three steps</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="relative grid md:grid-cols-3 gap-8">
          {/* Connector line (desktop only) */}
          <div
            className="hidden md:block absolute top-14 left-1/6 right-1/6 h-px"
            style={{
              background:
                'linear-gradient(90deg, transparent, var(--border), var(--border), transparent)',
            }}
          />

          {steps.map((step, i) => (
            <div key={i} className="relative flex flex-col items-center text-center">
              {/* Icon circle */}
              <div
                className="relative w-28 h-28 rounded-2xl flex items-center justify-center mb-6 border"
                style={{
                  background: 'var(--card)',
                  borderColor: 'var(--border)',
                }}
              >
                {/* Step number */}
                <span
                  className="absolute -top-2.5 -right-2.5 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{
                    background: 'linear-gradient(135deg, #00e5a0, #00b8d4)',
                    color: '#0a0a0f',
                  }}
                >
                  {i + 1}
                </span>
                <div style={{ color: '#00e5a0' }}>{step.icon}</div>
              </div>

              <h3
                className="text-xl font-bold mb-3"
                style={{ color: 'var(--text)' }}
              >
                {step.title}
              </h3>
              <p
                className="text-sm leading-relaxed max-w-xs"
                style={{ color: 'var(--text-muted)' }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Features ─────────────────────────────────────────────────────────────────

const features = [
  {
    title: 'AI Visual Analysis',
    description:
      'Not pixel diffing. Claude Vision semantically understands your UI — it knows a button from a nav, a form from a modal.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    tag: 'Core',
    tagColor: '#00e5a0',
  },
  {
    title: 'Visual Regression',
    description:
      'Detect layout shifts, broken elements, and unintended design changes between builds. Catch regressions before your users do.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
    tag: 'Core',
    tagColor: '#00e5a0',
  },
  {
    title: 'WCAG 2.1 AA',
    description:
      'Automated accessibility scanning with axe-core integration. Every screenshot checked against WCAG 2.1 Level AA standards.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
    tag: 'Accessibility',
    tagColor: '#00b8d4',
  },
  {
    title: 'CI/CD Native',
    description:
      'GitHub Actions, GitLab CI, CircleCI — first-class support. Runs in your pipeline with PR comments and status checks.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    tag: 'Integration',
    tagColor: '#c792ea',
  },
  {
    title: 'Smart Filtering',
    description:
      '"Allowed changes" let you declare which parts of the UI can shift — timestamps, avatars, ad banners, dynamic data. No more false positives.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
      </svg>
    ),
    tag: 'Smart',
    tagColor: '#ffd580',
  },
  {
    title: 'Configurable Strictness',
    description:
      'Low, Medium, or High sensitivity thresholds per project and per environment. Run loose in dev, tight in production.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
    tag: 'Config',
    tagColor: '#f78c6c',
  },
];

function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: '#00e5a0' }}
          >
            Features
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: 'var(--text)' }}
          >
            Everything visual QA{' '}
            <span className="gradient-text">should be</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            Built for teams who ship fast and care about quality. AI-first, not AI-bolted-on.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <FeatureCard
              key={i}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              tag={feature.tag}
              tagColor={feature.tagColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Code Example ─────────────────────────────────────────────────────────────

function CodeExampleSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div
          className="rounded-3xl overflow-hidden border"
          style={{ borderColor: 'var(--border)' }}
        >
          {/* Header strip */}
          <div
            className="px-8 py-8 flex flex-col md:flex-row md:items-center gap-8"
            style={{
              background:
                'linear-gradient(135deg, rgba(0,229,160,0.06), rgba(0,184,212,0.06))',
              borderBottom: '1px solid var(--border)',
            }}
          >
            <div className="flex-1">
              <p
                className="text-sm font-semibold uppercase tracking-widest mb-2"
                style={{ color: '#00e5a0' }}
              >
                Developer Experience
              </p>
              <h2
                className="text-2xl sm:text-3xl font-bold mb-2"
                style={{ color: 'var(--text)' }}
              >
                Looks like a Playwright test.
                <br />
                Works like a QA team.
              </h2>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                One import, one call. The AI handles the rest.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {[
                { icon: '⚡', label: '~2s per analysis' },
                { icon: '🔄', label: 'Runs in CI/CD' },
                { icon: '📝', label: 'Natural language reports' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-sm"
                  style={{ color: 'var(--text-muted)' }}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Code block */}
          <div className="code-block rounded-none border-0">
            {/* File tab */}
            <div
              className="flex items-center gap-2 px-6 py-3 border-b"
              style={{ background: '#0d0d16', borderColor: 'var(--border)' }}
            >
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500 opacity-60" />
                <span className="w-3 h-3 rounded-full bg-yellow-500 opacity-60" />
                <span className="w-3 h-3 rounded-full bg-green-500 opacity-60" />
              </div>
              <span
                className="ml-2 text-xs"
                style={{
                  color: 'var(--text-muted)',
                  fontFamily: 'var(--font-space-mono, monospace)',
                }}
              >
                homepage.spec.ts
              </span>
            </div>

            {/* Code */}
            <pre
              className="px-6 py-6 overflow-x-auto text-sm leading-relaxed"
              style={{
                background: '#0d0d16',
                fontFamily: 'var(--font-space-mono, monospace)',
              }}
            >
              <code>
                <span className="token-keyword">import</span>
                <span className="token-var"> {'{ test }'} </span>
                <span className="token-keyword">from</span>
                <span className="token-string"> &apos;@visionqa/playwright&apos;</span>
                <span className="token-punc">;</span>
                {'\n\n'}
                <span className="token-fn">test</span>
                <span className="token-punc">(</span>
                <span className="token-string">&apos;homepage visual review&apos;</span>
                <span className="token-punc">, </span>
                <span className="token-keyword">async</span>
                <span className="token-punc"> ({'{ '}</span>
                <span className="token-prop">page</span>
                <span className="token-punc">, </span>
                <span className="token-prop">vqa</span>
                <span className="token-punc"> {'}'}) </span>
                <span className="token-keyword">=&gt;</span>
                <span className="token-punc"> {'{'}</span>
                {'\n'}
                {'  '}
                <span className="token-comment">// Navigate to your page as usual</span>
                {'\n'}
                {'  '}
                <span className="token-keyword">await</span>
                <span className="token-var"> page</span>
                <span className="token-punc">.</span>
                <span className="token-fn">goto</span>
                <span className="token-punc">(</span>
                <span className="token-string">&apos;https://myapp.com&apos;</span>
                <span className="token-punc">);</span>
                {'\n\n'}
                {'  '}
                <span className="token-comment">// VisionQA analyzes the full page</span>
                {'\n'}
                {'  '}
                <span className="token-keyword">const</span>
                <span className="token-var"> result </span>
                <span className="token-punc">= </span>
                <span className="token-keyword">await</span>
                <span className="token-var"> vqa</span>
                <span className="token-punc">.</span>
                <span className="token-fn">analyze</span>
                <span className="token-punc">({'{'}</span>
                {'\n'}
                {'    '}
                <span className="token-prop">pageName</span>
                <span className="token-punc">: </span>
                <span className="token-string">&apos;Homepage&apos;</span>
                <span className="token-punc">,</span>
                {'\n'}
                {'    '}
                <span className="token-prop">strictness</span>
                <span className="token-punc">: </span>
                <span className="token-string">&apos;medium&apos;</span>
                <span className="token-punc">,</span>
                {'\n'}
                {'    '}
                <span className="token-prop">allowedChanges</span>
                <span className="token-punc">: [</span>
                <span className="token-string">&apos;timestamp&apos;</span>
                <span className="token-punc">, </span>
                <span className="token-string">&apos;avatar&apos;</span>
                <span className="token-punc">],</span>
                {'\n'}
                {'  '}
                <span className="token-punc">{'}'});</span>
                {'\n\n'}
                {'  '}
                <span className="token-comment">// Natural language report is attached to the test</span>
                {'\n'}
                {'  '}
                <span className="token-fn">expect</span>
                <span className="token-punc">(result.</span>
                <span className="token-prop">passed</span>
                <span className="token-punc">).</span>
                <span className="token-fn">toBe</span>
                <span className="token-punc">(</span>
                <span className="token-bool">true</span>
                <span className="token-punc">);</span>
                {'\n'}
                <span className="token-punc">{'}'});</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Pricing ──────────────────────────────────────────────────────────────────

const pricingTiers = [
  {
    name: 'Free',
    price: '$0',
    period: '/mo',
    description: 'Perfect for solo developers and side projects.',
    features: [
      '100 analyses / month',
      '1 project',
      '1 user',
      '7-day history retention',
      'Community support',
    ],
    cta: 'Start Free',
    popular: false,
  },
  {
    name: 'Team',
    price: '$49',
    period: '/mo',
    description: 'For growing teams who ship fast.',
    features: [
      '1,000 analyses / month',
      '5 projects',
      '5 users',
      '30-day history retention',
      'GitHub PR checks',
      'Slack notifications',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Business',
    price: '$149',
    period: '/mo',
    description: 'Full-featured for established products.',
    features: [
      '5,000 analyses / month',
      '20 projects',
      '20 users',
      '90-day history retention',
      'Full API access',
      'Priority support',
      'Custom rules engine',
    ],
    cta: 'Start Free Trial',
    popular: false,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For orgs that need control and guarantees.',
    features: [
      'Unlimited analyses',
      'Unlimited projects & users',
      'SSO / SAML',
      '99.99% uptime SLA',
      'Dedicated support',
      'Self-hosted option',
      'Custom AI models',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

function PricingSection() {
  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: '#00e5a0' }}
          >
            Pricing
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: 'var(--text)' }}
          >
            Simple, transparent{' '}
            <span className="gradient-text">pricing</span>
          </h2>
          <p className="text-base" style={{ color: 'var(--text-muted)' }}>
            Start free. Scale when you need to. No surprise bills.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingTiers.map((tier, i) => (
            <div
              key={i}
              className={`relative flex flex-col rounded-2xl border p-6 transition-all duration-300 ${
                tier.popular ? 'pricing-card-popular scale-[1.02]' : ''
              }`}
              style={{
                background: tier.popular ? undefined : 'var(--card)',
                borderColor: tier.popular ? 'rgba(0,229,160,0.4)' : 'var(--border)',
                boxShadow: tier.popular
                  ? '0 0 40px rgba(0,229,160,0.12), 0 0 80px rgba(0,184,212,0.06)'
                  : 'none',
              }}
            >
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="badge-new">Most Popular</span>
                </div>
              )}

              <div className="mb-6">
                <p
                  className="text-sm font-semibold mb-1"
                  style={{ color: tier.popular ? '#00e5a0' : 'var(--text-muted)' }}
                >
                  {tier.name}
                </p>
                <div className="flex items-baseline gap-1 mb-2">
                  <span
                    className="text-3xl font-bold"
                    style={{ color: 'var(--text)' }}
                  >
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className="text-sm" style={{ color: 'var(--text-muted)' }}>
                      {tier.period}
                    </span>
                  )}
                </div>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  {tier.description}
                </p>
              </div>

              <ul className="flex-1 space-y-3 mb-8">
                {tier.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2.5 text-sm">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      className="flex-shrink-0"
                    >
                      <path
                        d="M11.6667 3.5L5.25 9.91667L2.33333 7"
                        stroke="#00e5a0"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span style={{ color: 'var(--text)' }}>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/dashboard"
                className={`w-full text-center py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:scale-[1.02] ${
                  tier.popular ? '' : 'border'
                }`}
                style={
                  tier.popular
                    ? {
                        background: 'linear-gradient(135deg, #00e5a0, #00b8d4)',
                        color: '#0a0a0f',
                      }
                    : {
                        color: 'var(--text)',
                        borderColor: 'var(--border)',
                        background: 'transparent',
                      }
                }
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Comparison ───────────────────────────────────────────────────────────────

const comparisonRows = [
  { feature: 'AI understands UI semantically', vq: true, percy: false, applitools: 'partial', chromatic: false },
  { feature: 'Natural language reports', vq: true, percy: false, applitools: false, chromatic: false },
  { feature: 'WCAG 2.1 AA accessibility', vq: true, percy: false, applitools: 'add-on', chromatic: 'partial' },
  { feature: 'Smart allowed-changes rules', vq: true, percy: false, applitools: 'partial', chromatic: false },
  { feature: 'CI/CD GitHub PR checks', vq: true, percy: true, applitools: true, chromatic: true },
  { feature: 'Playwright native', vq: true, percy: true, applitools: true, chromatic: false },
  { feature: 'Free tier', vq: true, percy: false, applitools: false, chromatic: true },
];

function CellIcon({ value }: { value: boolean | string }) {
  if (value === true) {
    return (
      <span
        className="inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold"
        style={{ background: 'rgba(0,229,160,0.15)', color: '#00e5a0' }}
      >
        ✓
      </span>
    );
  }
  if (value === false) {
    return (
      <span
        className="inline-flex items-center justify-center w-6 h-6 rounded-full text-xs"
        style={{ background: 'rgba(136,136,160,0.1)', color: 'var(--text-muted)' }}
      >
        ✕
      </span>
    );
  }
  return (
    <span
      className="inline-flex items-center justify-center text-xs px-2 py-0.5 rounded-full border"
      style={{
        color: '#ffd580',
        borderColor: '#ffd58040',
        background: '#ffd58010',
      }}
    >
      {value}
    </span>
  );
}

function ComparisonSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: '#00e5a0' }}
          >
            Why VisionQA
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold"
            style={{ color: 'var(--text)' }}
          >
            Built different from{' '}
            <span className="gradient-text">day one</span>
          </h2>
        </div>

        <div
          className="rounded-2xl overflow-hidden border"
          style={{ borderColor: 'var(--border)', background: 'var(--card)' }}
        >
          <div className="overflow-x-auto">
            <table className="comparison-table w-full min-w-[640px]">
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <th className="text-left">Feature</th>
                  <th className="text-center col-visionqa">
                    <div className="flex items-center justify-center gap-1.5">
                      <div
                        className="w-5 h-5 rounded text-xs font-bold flex items-center justify-center"
                        style={{
                          background: 'linear-gradient(135deg, #00e5a0, #00b8d4)',
                          color: '#0a0a0f',
                        }}
                      >
                        VQ
                      </div>
                      <span className="gradient-text">VisionQA</span>
                    </div>
                  </th>
                  <th className="text-center">Percy</th>
                  <th className="text-center">Applitools</th>
                  <th className="text-center">Chromatic</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i}>
                    <td
                      className="text-sm"
                      style={{ color: 'var(--text)' }}
                    >
                      {row.feature}
                    </td>
                    <td className="text-center col-visionqa">
                      <CellIcon value={row.vq} />
                    </td>
                    <td className="text-center">
                      <CellIcon value={row.percy} />
                    </td>
                    <td className="text-center">
                      <CellIcon value={row.applitools} />
                    </td>
                    <td className="text-center">
                      <CellIcon value={row.chromatic} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── CTA Banner ───────────────────────────────────────────────────────────────

function CTASection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div
          className="rounded-3xl px-8 py-16 border relative overflow-hidden"
          style={{ borderColor: 'rgba(0,229,160,0.25)' }}
        >
          {/* Background glow */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse at center, rgba(0,229,160,0.07) 0%, transparent 70%)',
            }}
          />

          <div className="relative">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: '#00e5a0' }}
            >
              Get started today
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ color: 'var(--text)' }}
            >
              Stop guessing.{' '}
              <span className="gradient-text">Start knowing.</span>
            </h2>
            <p
              className="text-base mb-10 max-w-lg mx-auto leading-relaxed"
              style={{ color: 'var(--text-muted)' }}
            >
              Join hundreds of teams using VisionQA to ship UI changes with confidence.
              Free tier, forever. No credit card required.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-base font-semibold transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
                style={{
                  background: 'linear-gradient(135deg, #00e5a0, #00b8d4)',
                  color: '#0a0a0f',
                }}
              >
                Get Started Free
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M8.22 2.97a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06l2.97-2.97H3.75a.75.75 0 010-1.5h7.44L8.22 4.03a.75.75 0 010-1.06z"
                  />
                </svg>
              </Link>
              <Link
                href="/docs"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-base font-semibold border transition-all duration-200 hover:border-opacity-60"
                style={{
                  color: 'var(--text)',
                  borderColor: 'var(--border)',
                }}
              >
                Read the docs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer
      className="border-t px-6 py-16"
      style={{ borderColor: 'var(--border)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
                style={{
                  background: 'linear-gradient(135deg, #00e5a0, #00b8d4)',
                  color: '#0a0a0f',
                }}
              >
                VQ
              </div>
              <span className="font-semibold" style={{ color: 'var(--text)' }}>
                VisionQA
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
              AI-powered visual testing and accessibility scanning. Built for teams who ship fast.
            </p>
            <p className="text-xs" style={{ color: 'var(--text-muted)', opacity: 0.6 }}>
              A product of{' '}
              <a href="https://haivio.com" className="hover:opacity-80 transition-opacity" style={{ color: '#00e5a0' }}>
                Haivio, Inc.
              </a>
            </p>
          </div>

          {/* Product */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: 'var(--text-muted)' }}
            >
              Product
            </p>
            <ul className="space-y-3">
              {[
                { label: 'Features', href: '/#features' },
                { label: 'Pricing', href: '/#pricing' },
                { label: 'Changelog', href: '#' },
                { label: 'Roadmap', href: '#' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm nav-link"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Developers */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: 'var(--text-muted)' }}
            >
              Developers
            </p>
            <ul className="space-y-3">
              {[
                { label: 'Docs', href: '/docs' },
                { label: 'API Reference', href: '/docs' },
                { label: 'GitHub', href: 'https://github.com' },
                { label: 'Status', href: '#' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm nav-link"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Haivio Ecosystem */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: 'var(--text-muted)' }}
            >
              Haivio Ecosystem
            </p>
            <ul className="space-y-3">
              {[
                { label: 'HAVEN', href: '#', desc: 'Property mgmt' },
                { label: 'Accord', href: '#', desc: 'Contract AI' },
                { label: 'Sentinel', href: '#', desc: 'Security' },
                { label: 'Haivio.com', href: 'https://haivio.com', desc: 'Home' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm nav-link flex items-center gap-1.5"
                  >
                    {link.label}
                    <span className="text-xs" style={{ color: 'var(--text-muted)', opacity: 0.5 }}>
                      {link.desc}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ borderColor: 'var(--border)' }}
        >
          <p className="text-sm" style={{ color: 'var(--text-muted)', opacity: 0.6 }}>
            &copy; 2026 Haivio, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Privacy', 'Terms', 'Security'].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-sm nav-link"
                style={{ opacity: 0.6 }}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <hr className="section-divider" />
      <HowItWorksSection />
      <hr className="section-divider" />
      <FeaturesSection />
      <hr className="section-divider" />
      <CodeExampleSection />
      <hr className="section-divider" />
      <PricingSection />
      <hr className="section-divider" />
      <ComparisonSection />
      <hr className="section-divider" />
      <CTASection />
      <Footer />
    </main>
  );
}
