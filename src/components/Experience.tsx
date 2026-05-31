// ================================================================
// src/components/Experience.tsx
// ================================================================
// Timeline-style work experience section.
// CHANGE: All experience data → src/data/portfolioData.ts (experiences)
// ================================================================

import React from 'react'
import { experiences } from '../data/portfolioData'
import { SectionLabel, SectionTitle } from './About'

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '6rem 2rem', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <div className="reveal">
          <SectionLabel>Work History</SectionLabel>
          <SectionTitle>Experience</SectionTitle>
        </div>

        {/* Timeline */}
        <div style={{
          position: 'relative', marginTop: '3rem',
          paddingLeft: '2rem', borderLeft: '2px solid',
          borderImage: 'linear-gradient(to bottom, #8a64ff, transparent) 1',
        }}>
          {/* CHANGE: experience entries in portfolioData.experiences */}
          {experiences.map((exp, i) => (
            <div key={i} className="reveal" style={{ position: 'relative', marginBottom: '3rem', paddingLeft: '2rem' }}>

              {/* Timeline dot */}
              <div style={{
                position: 'absolute', left: '-2.4rem', top: '0.3rem',
                width: 12, height: 12, borderRadius: '50%',
                background: 'var(--purple)', border: '2px solid var(--bg)',
                boxShadow: '0 0 12px rgba(138,100,255,0.6)',
              }} />

              {/* Date range */}
              <div style={{ fontFamily: '"DM Mono", monospace', fontSize: '0.72rem', color: 'var(--gold)', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
                {exp.period}
              </div>

              {/* Role */}
              <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.15rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.2rem' }}>
                {exp.role}
              </div>

              {/* Company + location */}
              <div style={{ fontSize: '0.9rem', color: 'var(--purple-soft)', marginBottom: '0.75rem' }}>
                {exp.company} · {exp.location}
              </div>

              {/* Bullet points */}
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {exp.bullets.map((b, j) => (
                  <li key={j} style={{
                    fontSize: '0.9rem', color: 'var(--muted)',
                    paddingLeft: '1.1rem', position: 'relative', lineHeight: 1.6,
                  }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--purple)' }}>→</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
