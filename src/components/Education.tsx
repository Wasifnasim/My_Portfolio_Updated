// ================================================================
// src/components/Education.tsx
// ================================================================
// Education timeline section — vertical glowing line with year badges,
// cards, descriptions and tags.
// CHANGE: All education data → src/data/portfolioData.ts (education)
// ================================================================

import React from 'react'
import { education } from '../data/portfolioData'
import { SectionLabel, SectionTitle } from './About'

export default function Education() {
  return (
    <section id="education" style={{ padding: '6rem 2rem', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <div className="reveal">
          <SectionLabel>Academic Background</SectionLabel>
          <SectionTitle>Education</SectionTitle>
        </div>

        {/* Timeline container */}
        <div style={{ marginTop: '3rem', position: 'relative', paddingLeft: '2.5rem' }}>

          {/* Vertical timeline line */}
          <div style={{
            position: 'absolute',
            left: '0.75rem',
            top: 0,
            bottom: 0,
            width: '3px',
            background: 'linear-gradient(180deg, var(--purple), rgba(138,100,255,0.15) 100%)',
            borderRadius: '3px',
          }} />

          {education.map((edu, i) => (
            <div
              key={i}
              className="reveal"
              style={{
                position: 'relative',
                marginBottom: i < education.length - 1 ? '2.5rem' : 0,
              }}
            >
              {/* Timeline dot */}
              <div style={{
                position: 'absolute',
                left: '-1.85rem',
                top: '0.5rem',
                width: '14px',
                height: '14px',
                borderRadius: '50%',
                background: 'var(--purple)',
                border: '3px solid var(--bg)',
                boxShadow: '0 0 12px rgba(138,100,255,0.5)',
                zIndex: 2,
              }} />

              {/* Year badge */}
              <div style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, var(--purple), #6c47e6)',
                color: '#fff',
                fontFamily: '"DM Mono", monospace',
                fontSize: '0.78rem',
                fontWeight: 700,
                padding: '0.25rem 0.85rem',
                borderRadius: '6px',
                marginBottom: '0.9rem',
                letterSpacing: '0.5px',
              }}>
                {edu.icon} {edu.period}{edu.status === 'Ongoing' ? ' – Current' : ''}
              </div>

              {/* Card */}
              <div
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderLeft: '3px solid var(--purple)',
                  borderRadius: '0 14px 14px 0',
                  padding: '1.5rem 1.8rem',
                  transition: 'border-color 0.3s, box-shadow 0.3s, transform 0.3s',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(138,100,255,0.45)'
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(138,100,255,0.12)'
                  e.currentTarget.style.transform = 'translateX(4px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.borderLeftColor = 'var(--purple)'
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.transform = 'translateX(0)'
                }}
              >
                {/* Degree title */}
                <h3 style={{
                  fontFamily: 'Syne, sans-serif',
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  color: 'var(--text)',
                  marginBottom: '0.35rem',
                }}>
                  {edu.degree}
                </h3>

                {/* School name */}
                <p style={{
                  fontSize: '0.92rem',
                  color: 'var(--purple-soft)',
                  fontStyle: 'italic',
                  marginBottom: '0.5rem',
                }}>
                  {edu.school}
                </p>

                {/* Description */}
                {edu.description && (
                  <p style={{
                    fontSize: '0.88rem',
                    color: 'var(--muted)',
                    lineHeight: 1.6,
                    marginBottom: '0.8rem',
                  }}>
                    {edu.description}
                  </p>
                )}

                {/* Achievement badge */}
                {edu.badge && (
                  <div style={{
                    display: 'inline-block',
                    background: 'var(--purple-dim)',
                    border: '1px solid rgba(138,100,255,0.2)',
                    padding: '0.2rem 0.65rem',
                    borderRadius: 20,
                    fontSize: '0.75rem',
                    color: 'var(--gold)',
                    fontFamily: '"DM Mono", monospace',
                    fontWeight: 600,
                    marginBottom: edu.tags && edu.tags.length > 0 ? '0.8rem' : 0,
                  }}>
                    {edu.badge}
                  </div>
                )}

                {/* Tags */}
                {edu.tags && edu.tags.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {edu.tags.map((tag, j) => (
                      <span key={j} style={{
                        background: 'rgba(138,100,255,0.08)',
                        border: '1px solid rgba(138,100,255,0.18)',
                        color: 'var(--purple-soft)',
                        fontSize: '0.72rem',
                        padding: '0.22rem 0.7rem',
                        borderRadius: 20,
                        fontFamily: '"DM Mono", monospace',
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
