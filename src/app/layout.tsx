import type { Metadata } from 'next';
import { Outfit, Space_Mono } from 'next/font/google';
import './globals.css';
import { NavBar } from '@/components/NavBar';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'VisionQA — AI-Powered Visual Testing & Accessibility',
  description:
    'Visual regression testing and WCAG accessibility scanning powered by Claude Vision AI. Not pixel diffing — real semantic understanding of your UI.',
  keywords: [
    'visual testing',
    'accessibility testing',
    'WCAG',
    'Playwright',
    'AI testing',
    'visual regression',
    'QA automation',
  ],
  openGraph: {
    title: 'VisionQA — AI-Powered Visual Testing',
    description:
      'Claude Vision analyzes your screenshots like a senior QA engineer. Visual regression + WCAG accessibility in one tool.',
    type: 'website',
    url: 'https://visionqa.dev',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VisionQA — AI-Powered Visual Testing',
    description: 'Visual regression + WCAG accessibility in one tool.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${spaceMono.variable}`}>
      <body className="antialiased" style={{ fontFamily: 'var(--font-outfit, sans-serif)' }}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
