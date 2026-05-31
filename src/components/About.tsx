// ================================================================
// src/components/About.tsx
// ================================================================
// About section with bio paragraphs, info cards, stats, and award.
// CHANGE: All text data → src/data/portfolioData.ts
// ================================================================

import React from 'react'
import { personalInfo, award } from '../data/portfolioData'

/**
 * Parses text with **bold markers** and renders highlighted words
 * as gradient-colored spans. Plain text stays normal.
 */
function renderHighlightedText(text: string) {
  // Split on **...** markers, capturing the inner text
  const parts = text.split(/\*\*(.*?)\*\*/g)
  return parts.map((part, i) =>
    // Odd indices are the captured groups (highlighted words)
    i % 2 === 1 ? (
      <span key={i} style={{
        color: 'var(--purple-soft)',
        fontWeight: 600,
      }}>
        {part}
      </span>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    )
  )
}

export default function About() {
  return (
    <section id="about" className="page-section">
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Section header */}
        <div className="reveal">
          <SectionLabel>Who I Am</SectionLabel>
          <SectionTitle>About Me</SectionTitle>
        </div>

        {/* Two-column grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem', marginTop: '3rem',
        }}>

          {/* Left — bio text */}
          <div className="reveal">
            {/* CHANGE: paragraphs in portfolioData.aboutParagraphs */}
            {personalInfo.aboutParagraphs.map((para, i) => (
              <p key={i} style={{
                color: 'var(--muted)', fontSize: '1rem',
                lineHeight: 1.8, marginBottom: '1.2rem',
              }}>
                {renderHighlightedText(para)}
              </p>
            ))}

            {/* Stats row */}
            <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem', flexWrap: 'wrap' }}>
              {/* CHANGE: stats in portfolioData.aboutStats */}
              {personalInfo.aboutStats.map((stat) => (
                <div key={stat.label} style={{ textAlign: 'center' }}>
                  <div style={{
                    fontFamily: 'Syne, sans-serif', fontSize: '2.2rem', fontWeight: 800,
                    background: 'linear-gradient(120deg, var(--purple-soft), var(--gold))',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    fontFamily: '"DM Mono", monospace', fontSize: '0.7rem',
                    color: 'var(--muted)', letterSpacing: '0.08em',
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Award banner */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(240,192,96,0.08), rgba(138,100,255,0.08))',
              border: '1px solid rgba(240,192,96,0.25)', borderRadius: 12,
              padding: '1.2rem 1.5rem', display: 'flex', alignItems: 'center',
              gap: '1rem', marginTop: '2rem',
            }}>
              <div style={{ fontSize: '2rem' }}>{award.icon}</div>
              <div>
                {/* CHANGE: award text in portfolioData.award */}
                <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, color: 'var(--gold)', fontSize: '0.95rem' }}>
                  {award.title}
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--muted)', marginTop: '0.2rem' }}>
                  {award.subtitle}
                </div>
              </div>
            </div>
          </div>

          {/* Right — info cards */}
          <div className="reveal about-info-cards">
            {infoRows.map((row) => (
              <div key={row.key} style={infoRowStyle}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(138,100,255,0.4)'; e.currentTarget.style.background = 'var(--surface2)' }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--surface)' }}
              >
                <div style={{ fontSize: '1.1rem', flexShrink: 0 }}>{row.icon}</div>
                <div>
                  <div style={{ fontFamily: '"DM Mono", monospace', fontSize: '0.72rem', color: 'var(--purple)', letterSpacing: '0.06em', marginBottom: '0.2rem' }}>
                    {row.key}
                  </div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text)' }}>{row.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Info rows — CHANGE values in portfolioData.ts or directly here
const infoRows = [
  { icon: '🎓', key: 'Degree',    value: 'B.Tech in AI & Data Science (2023–2027)' },
  { icon: '🏫', key: 'College',   value: 'Anjuman College of Engineering & Technology, Nagpur' },
  { icon: '📍', key: 'Location',  value: personalInfo.location },
  { icon: '📧', key: 'Email',     value: personalInfo.email },
  { icon: '📱', key: 'Phone',     value: personalInfo.phone },
  { icon: '🎯', key: 'Interests', value: personalInfo.interests.join(' · ') },
]

const infoRowStyle: React.CSSProperties = {
  display: 'flex', gap: '1rem', alignItems: 'flex-start',
  padding: '0.9rem 1.1rem', borderRadius: 10,
  background: 'var(--surface)', border: '1px solid var(--border)',
  transition: 'border-color 0.2s, background 0.2s',
}

// ── Shared sub-components ──────────────────────────────────────
export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      fontFamily: '"DM Mono", monospace', fontSize: '0.72rem',
      letterSpacing: '0.18em', color: 'var(--purple)',
      textTransform: 'uppercase', marginBottom: '0.75rem',
      display: 'flex', alignItems: 'center', gap: '0.6rem',
    }}>
      <span style={{ width: 24, height: 1, background: 'var(--purple)', display: 'inline-block' }} />
      {children}
    </div>
  )
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{
      fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2rem, 5vw, 3rem)',
      fontWeight: 800, lineHeight: 1.1,
      background: 'linear-gradient(135deg, var(--text) 30%, var(--purple-soft))',
      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
    }}>
      {children}
    </h2>
  )
}
