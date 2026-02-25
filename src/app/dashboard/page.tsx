import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dashboard — VisionQA',
  description: 'VisionQA test results dashboard',
};

// ─── Mock data ────────────────────────────────────────────────────────────────

const recentRuns = [
  {
    id: 'run-1a2b',
    page: 'Homepage',
    branch: 'main',
    commit: 'a3f9c12',
    status: 'passed',
    analyses: 12,
    violations: 0,
    duration: '4.2s',
    timestamp: '2 min ago',
    aiSummary: 'No visual regressions detected. Layout consistent with baseline.',
  },
  {
    id: 'run-3c4d',
    page: 'Checkout Flow',
    branch: 'feat/new-payment-ui',
    commit: 'b7d2e45',
    status: 'failed',
    analyses: 8,
    violations: 3,
    duration: '3.8s',
    timestamp: '18 min ago',
    aiSummary:
      'Button color contrast ratio 2.4:1 (requires 4.5:1). Submit button partially obscured on mobile viewport.',
  },
  {
    id: 'run-5e6f',
    page: 'Dashboard',
    branch: 'main',
    commit: 'c1f8a77',
    status: 'passed',
    analyses: 6,
    violations: 0,
    duration: '2.1s',
    timestamp: '1 hr ago',
    aiSummary: 'All elements rendered correctly. No accessibility violations.',
  },
  {
    id: 'run-7g8h',
    page: 'Settings Page',
    branch: 'fix/dark-mode',
    commit: 'd9c3b21',
    status: 'warning',
    analyses: 4,
    violations: 1,
    duration: '1.9s',
    timestamp: '3 hr ago',
    aiSummary: 'Minor: form label association missing on email input. Not critical.',
  },
  {
    id: 'run-9i0j',
    page: 'Landing Page',
    branch: 'main',
    commit: 'e5a7f93',
    status: 'passed',
    analyses: 15,
    violations: 0,
    duration: '6.7s',
    timestamp: '5 hr ago',
    aiSummary: 'Hero section, pricing table, and footer all pass visual and accessibility checks.',
  },
];

const projects = [
  { name: 'my-app', passRate: 94, runs: 142, analyses: 1840 },
  { name: 'admin-panel', passRate: 88, runs: 67, analyses: 724 },
  { name: 'mobile-web', passRate: 100, runs: 23, analyses: 198 },
];

const usageData = {
  used: 68,
  total: 100,
  resetDate: 'Mar 1, 2026',
  plan: 'Free',
};

// ─── Stat Card ────────────────────────────────────────────────────────────────

function StatCard({
  label,
  value,
  sub,
  color,
}: {
  label: string;
  value: string | number;
  sub?: string;
  color?: string;
}) {
  return (
    <div
      className="rounded-xl p-5 border"
      style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
    >
      <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--text-muted)' }}>
        {label}
      </p>
      <p
        className="text-2xl font-bold mb-1"
        style={{ color: color || 'var(--text)' }}
      >
        {value}
      </p>
      {sub && (
        <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
          {sub}
        </p>
      )}
    </div>
  );
}

// ─── Status Badge ─────────────────────────────────────────────────────────────

function StatusBadge({ status }: { status: string }) {
  const config = {
    passed:  { bg: 'rgba(0,229,160,0.1)',  border: 'rgba(0,229,160,0.25)',  color: '#00e5a0',  label: 'Passed'  },
    failed:  { bg: 'rgba(239,68,68,0.1)',  border: 'rgba(239,68,68,0.25)',  color: '#ef4444',  label: 'Failed'  },
    warning: { bg: 'rgba(255,213,128,0.1)', border: 'rgba(255,213,128,0.25)', color: '#ffd580', label: 'Warning' },
    running: { bg: 'rgba(0,184,212,0.1)',  border: 'rgba(0,184,212,0.25)',  color: '#00b8d4',  label: 'Running' },
  }[status] ?? { bg: 'rgba(136,136,160,0.1)', border: 'rgba(136,136,160,0.25)', color: '#8888a0', label: status };

  return (
    <span
      className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border"
      style={{ background: config.bg, borderColor: config.border, color: config.color }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full"
        style={{ background: config.color }}
      />
      {config.label}
    </span>
  );
}

// ─── Pass Rate Ring ───────────────────────────────────────────────────────────

function PassRateRing({ percent, size = 64 }: { percent: number; size?: number }) {
  const r = (size - 8) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (percent / 100) * circ;

  const color = percent >= 90 ? '#00e5a0' : percent >= 70 ? '#ffd580' : '#ef4444';

  return (
    <svg width={size} height={size} className="flex-shrink-0">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke="var(--border)"
        strokeWidth="6"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke={color}
        strokeWidth="6"
        strokeDasharray={circ}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="12"
        fontWeight="700"
        fill={color}
      >
        {percent}%
      </text>
    </svg>
  );
}

// ─── Usage Meter ──────────────────────────────────────────────────────────────

function UsageMeter() {
  const pct = (usageData.used / usageData.total) * 100;
  const color = pct >= 90 ? '#ef4444' : pct >= 70 ? '#ffd580' : '#00e5a0';

  return (
    <div
      className="rounded-xl p-5 border"
      style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: 'var(--text-muted)' }}>
            Monthly Usage
          </p>
          <p className="text-sm font-bold" style={{ color: 'var(--text)' }}>
            {usageData.used} / {usageData.total} analyses
          </p>
        </div>
        <span
          className="text-xs px-2 py-0.5 rounded-full font-semibold"
          style={{ background: 'rgba(0,229,160,0.1)', color: '#00e5a0' }}
        >
          {usageData.plan}
        </span>
      </div>

      <div
        className="h-2 rounded-full overflow-hidden mb-2"
        style={{ background: 'var(--border)' }}
      >
        <div
          className="h-full rounded-full transition-all"
          style={{
            width: `${pct}%`,
            background: `linear-gradient(90deg, #00e5a0, ${color})`,
          }}
        />
      </div>

      <div className="flex justify-between">
        <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
          {usageData.total - usageData.used} remaining
        </p>
        <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
          Resets {usageData.resetDate}
        </p>
      </div>

      <div className="mt-4">
        <Link
          href="/#pricing"
          className="text-xs font-semibold transition-opacity hover:opacity-80"
          style={{ color: '#00e5a0' }}
        >
          Upgrade for 1,000 analyses/mo →
        </Link>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function DashboardPage() {
  const totalPassed = recentRuns.filter((r) => r.status === 'passed').length;
  const passRate = Math.round((totalPassed / recentRuns.length) * 100);

  return (
    <div
      className="min-h-screen pt-16"
      style={{ background: 'var(--bg)' }}
    >
      {/* Page header */}
      <div
        className="border-b px-6 py-6"
        style={{ borderColor: 'var(--border)', background: 'var(--card)' }}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h1 className="text-xl font-bold" style={{ color: 'var(--text)' }}>
                Dashboard
              </h1>
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, #00e5a0, #00b8d4)',
                  color: '#0a0a0f',
                }}
              >
                Coming Soon
              </span>
            </div>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              This is a static mockup. Real-time data coming with full launch.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/docs"
              className="px-4 py-2 text-sm font-medium rounded-lg border transition-colors hover:opacity-80"
              style={{
                color: 'var(--text)',
                borderColor: 'var(--border)',
                background: 'transparent',
              }}
            >
              Docs
            </Link>
            <button
              className="px-4 py-2 text-sm font-semibold rounded-lg transition-all hover:opacity-90"
              style={{
                background: 'linear-gradient(135deg, #00e5a0, #00b8d4)',
                color: '#0a0a0f',
              }}
            >
              + New Project
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard
            label="Pass Rate"
            value={`${passRate}%`}
            sub="Last 5 runs"
            color="#00e5a0"
          />
          <StatCard
            label="Total Analyses"
            value="2,762"
            sub="This month"
          />
          <StatCard
            label="Violations Found"
            value="4"
            sub="Last 30 days"
            color="#ffd580"
          />
          <StatCard
            label="Avg. Run Time"
            value="3.7s"
            sub="Per page"
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left column: Recent runs */}
          <div className="lg:col-span-2">
            <div
              className="rounded-2xl border overflow-hidden"
              style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
            >
              <div
                className="px-6 py-4 border-b flex items-center justify-between"
                style={{ borderColor: 'var(--border)' }}
              >
                <h2 className="text-sm font-semibold" style={{ color: 'var(--text)' }}>
                  Recent Test Runs
                </h2>
                <button
                  className="text-xs font-medium transition-opacity hover:opacity-80"
                  style={{ color: '#00e5a0' }}
                >
                  View all
                </button>
              </div>

              <div>
                {recentRuns.map((run, i) => (
                  <div
                    key={run.id}
                    className="px-6 py-4 border-b last:border-b-0 hover:opacity-80 transition-opacity cursor-pointer"
                    style={{ borderColor: 'var(--border)' }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <span
                            className="text-sm font-semibold"
                            style={{ color: 'var(--text)' }}
                          >
                            {run.page}
                          </span>
                          <StatusBadge status={run.status} />
                        </div>

                        {/* Meta row */}
                        <div
                          className="flex items-center gap-3 text-xs mb-2 flex-wrap"
                          style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-space-mono, monospace)' }}
                        >
                          <span
                            className="px-1.5 py-0.5 rounded"
                            style={{ background: 'rgba(0,229,160,0.08)', color: '#00e5a0' }}
                          >
                            {run.branch}
                          </span>
                          <span>{run.commit}</span>
                          <span>{run.analyses} screenshots</span>
                          <span>{run.duration}</span>
                          <span>{run.timestamp}</span>
                        </div>

                        {/* AI summary */}
                        <p
                          className="text-xs leading-relaxed italic"
                          style={{ color: 'var(--text-muted)' }}
                        >
                          <span
                            className="not-italic font-semibold mr-1"
                            style={{ color: '#00b8d4' }}
                          >
                            AI:
                          </span>
                          {run.aiSummary}
                        </p>
                      </div>

                      {run.violations > 0 && (
                        <div
                          className="flex-shrink-0 flex flex-col items-center justify-center w-12 h-12 rounded-xl border"
                          style={{
                            background: 'rgba(239,68,68,0.06)',
                            borderColor: 'rgba(239,68,68,0.2)',
                          }}
                        >
                          <span
                            className="text-lg font-bold"
                            style={{ color: '#ef4444', lineHeight: 1 }}
                          >
                            {run.violations}
                          </span>
                          <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                            issues
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column: sidebar widgets */}
          <div className="flex flex-col gap-6">
            {/* Usage meter */}
            <UsageMeter />

            {/* Projects */}
            <div
              className="rounded-xl border p-5"
              style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
            >
              <h2
                className="text-sm font-semibold mb-4"
                style={{ color: 'var(--text)' }}
              >
                Projects
              </h2>
              <div className="space-y-4">
                {projects.map((project) => (
                  <div key={project.name}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2.5">
                        <PassRateRing percent={project.passRate} size={40} />
                        <div>
                          <p
                            className="text-sm font-medium"
                            style={{
                              color: 'var(--text)',
                              fontFamily: 'var(--font-space-mono, monospace)',
                            }}
                          >
                            {project.name}
                          </p>
                          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                            {project.runs} runs · {project.analyses} analyses
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick actions */}
            <div
              className="rounded-xl border p-5"
              style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
            >
              <h2
                className="text-sm font-semibold mb-4"
                style={{ color: 'var(--text)' }}
              >
                Quick Actions
              </h2>
              <div className="space-y-2">
                {[
                  { label: 'View API Key', icon: '🔑' },
                  { label: 'Download Report', icon: '📄' },
                  { label: 'Configure Strictness', icon: '⚙️' },
                  { label: 'Invite Team Member', icon: '👤' },
                ].map((action) => (
                  <button
                    key={action.label}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-left transition-all hover:opacity-80"
                    style={{
                      color: 'var(--text)',
                      background: 'rgba(136,136,160,0.06)',
                      border: '1px solid var(--border)',
                    }}
                  >
                    <span>{action.icon}</span>
                    {action.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Upgrade CTA */}
            <div
              className="rounded-xl border p-5 relative overflow-hidden"
              style={{
                background:
                  'linear-gradient(135deg, rgba(0,229,160,0.06), rgba(0,184,212,0.06))',
                borderColor: 'rgba(0,229,160,0.25)',
              }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-2"
                style={{ color: '#00e5a0' }}
              >
                Team Plan
              </p>
              <p
                className="text-sm font-bold mb-1"
                style={{ color: 'var(--text)' }}
              >
                $49 / month
              </p>
              <p className="text-xs mb-4" style={{ color: 'var(--text-muted)' }}>
                1,000 analyses, 5 projects, GitHub PR checks, 30-day retention.
              </p>
              <Link
                href="/#pricing"
                className="block text-center py-2 rounded-lg text-sm font-semibold transition-all hover:opacity-90"
                style={{
                  background: 'linear-gradient(135deg, #00e5a0, #00b8d4)',
                  color: '#0a0a0f',
                }}
              >
                Upgrade Now
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom info banner */}
        <div
          className="mt-8 rounded-2xl border p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          style={{
            background: 'rgba(0,184,212,0.04)',
            borderColor: 'rgba(0,184,212,0.2)',
          }}
        >
          <div className="flex items-start gap-3">
            <span className="text-xl">🚀</span>
            <div>
              <p className="text-sm font-semibold mb-1" style={{ color: 'var(--text)' }}>
                Full dashboard launching soon
              </p>
              <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                This is a preview mockup. Real-time test results, diff viewer, team management, and
                trend charts are in development.
              </p>
            </div>
          </div>
          <Link
            href="/docs"
            className="flex-shrink-0 px-4 py-2 rounded-lg text-sm font-semibold border transition-all hover:opacity-80"
            style={{
              color: '#00b8d4',
              borderColor: 'rgba(0,184,212,0.3)',
              background: 'transparent',
            }}
          >
            Read the Docs
          </Link>
        </div>
      </div>
    </div>
  );
}
