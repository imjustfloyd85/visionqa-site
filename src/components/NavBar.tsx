'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? 'rgba(10, 10, 15, 0.92)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
            style={{
              background: 'linear-gradient(135deg, #00e5a0, #00b8d4)',
              color: '#0a0a0f',
            }}
          >
            VQ
          </div>
          <span className="font-semibold text-base" style={{ color: 'var(--text)' }}>
            VisionQA
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/#features" className="nav-link text-sm font-medium">
            Features
          </Link>
          <Link href="/#pricing" className="nav-link text-sm font-medium">
            Pricing
          </Link>
          <Link href="/docs" className="nav-link text-sm font-medium">
            Docs
          </Link>
          <Link href="/dashboard" className="nav-link text-sm font-medium">
            Dashboard
          </Link>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/dashboard"
            className="text-sm font-medium nav-link"
          >
            Sign in
          </Link>
          <Link
            href="/dashboard"
            className="text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
            style={{
              background: 'linear-gradient(135deg, #00e5a0, #00b8d4)',
              color: '#0a0a0f',
            }}
          >
            Get Started Free
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-lg"
          style={{ color: 'var(--text-muted)' }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            {menuOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t"
          style={{
            background: 'rgba(10, 10, 15, 0.97)',
            borderColor: 'var(--border)',
          }}
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            <Link
              href="/#features"
              className="nav-link text-sm font-medium py-2"
              onClick={() => setMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/#pricing"
              className="nav-link text-sm font-medium py-2"
              onClick={() => setMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/docs"
              className="nav-link text-sm font-medium py-2"
              onClick={() => setMenuOpen(false)}
            >
              Docs
            </Link>
            <Link
              href="/dashboard"
              className="nav-link text-sm font-medium py-2"
              onClick={() => setMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              href="/dashboard"
              className="text-sm font-semibold px-4 py-2.5 rounded-lg text-center"
              style={{
                background: 'linear-gradient(135deg, #00e5a0, #00b8d4)',
                color: '#0a0a0f',
              }}
              onClick={() => setMenuOpen(false)}
            >
              Get Started Free
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
