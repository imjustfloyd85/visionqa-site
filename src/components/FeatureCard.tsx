'use client';

import { useState } from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  tag: string;
  tagColor: string;
}

export function FeatureCard({ title, description, icon, tag, tagColor }: FeatureCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02]"
      style={{
        background: 'var(--card)',
        borderColor: hovered ? 'rgba(0,229,160,0.3)' : 'var(--border)',
        boxShadow: hovered ? '0 0 30px rgba(0,229,160,0.08)' : 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Icon + tag row */}
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{
            background: 'rgba(0,229,160,0.1)',
            color: '#00e5a0',
          }}
        >
          {icon}
        </div>
        <span
          className="text-xs font-semibold px-2.5 py-1 rounded-full border"
          style={{
            color: tagColor,
            borderColor: `${tagColor}40`,
            background: `${tagColor}10`,
          }}
        >
          {tag}
        </span>
      </div>

      <h3
        className="text-base font-semibold mb-2"
        style={{ color: 'var(--text)' }}
      >
        {title}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
        {description}
      </p>
    </div>
  );
}
