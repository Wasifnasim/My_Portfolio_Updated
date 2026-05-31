// ================================================================
// src/components/Certifications.tsx
// ================================================================
// Certification cards grid with notable accomplishments style.
// ================================================================

import React from 'react'
import { SectionLabel, SectionTitle } from './About'

const notableCards = [
  {
    icon: "📊",
    title: "Tata Data Visualisation",
    org: "Tata Group (Job Simulation)",
    year: "2024",
    description: "Completed enterprise-level data visualisation simulation — empowering business with effective insights.",
  },
  {
    icon: "🔍",
    title: "Deloitte Analytics Simulation",
    org: "Deloitte Australia",
    year: "2024",
    description: "Solved real-world analytics problems in a professional consulting job simulation.",
  },
  {
    icon: "🗄️",
    title: "SQL Skill Up",
    org: "GeeksforGeeks",
    year: "2024",
    description: "Completed structured SQL skill-building program covering joins, subqueries, and optimization.",
  },
  {
    icon: "🐍",
    title: "Python for Data Science",
    org: "Skill Up",
    year: "2024",
    description: "Completed Python for Data Science certification covering pandas, numpy, and visualization.",
  },
  // ── ADD MORE SMALL CARDS HERE ──────────────────────────────────
  // {
  //   icon: "🏅",
  //   title: "Your Achievement",
  //   org: "Organization",
  //   year: "2025",
  //   description: "Short description.",
  // },
]

export default function Certifications() {
  return (
    <section id="certifications" style={{ padding: '6rem 2rem', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <div className="reveal">
          <SectionLabel>Credentials</SectionLabel>
          <SectionTitle>Certifications</SectionTitle>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: '1.2rem', marginTop: '3rem',
        }}>
          {notableCards.map((card, i) => (
            <div
              key={i}
              className="reveal"
              style={{
                // matches your project-card / cert-card style exactly
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 14,
                padding: '1.4rem',
                transition: 'transform 0.25s, border-color 0.25s, box-shadow 0.25s',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform    = 'translateY(-6px)'
                e.currentTarget.style.borderColor  = 'rgba(138,100,255,0.45)'
                e.currentTarget.style.boxShadow    = 'var(--glow)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform    = 'translateY(0)'
                e.currentTarget.style.borderColor  = 'var(--border)'
                e.currentTarget.style.boxShadow    = 'none'
              }}
            >
              {/* Matches your project card top-stripe on hover */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 2,
                background: 'linear-gradient(90deg, transparent, var(--purple), transparent)',
                opacity: 0.5,
              }} />

              {/* Icon — matches your cert-icon style */}
              <div style={{
                fontSize: '1.6rem',
                marginBottom: '0.85rem',
              }}>
                {card.icon}
              </div>

              {/* Title */}
              <div style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 700,
                fontSize: '0.95rem',
                color: 'var(--text)',
                marginBottom: '0.25rem',
                lineHeight: 1.3,
              }}>
                {card.title}
              </div>

              {/* Org — matches your cert-issuer style */}
              <div style={{
                fontFamily: '"DM Mono", monospace',
                fontSize: '0.72rem',
                color: 'var(--purple)',
                marginBottom: '0.3rem',
              }}>
                {card.org}
              </div>

              {/* Year — matches your timeline-period style */}
              <div style={{
                fontFamily: '"DM Mono", monospace',
                fontSize: '0.65rem',
                color: 'var(--gold)',
                marginBottom: '0.7rem',
              }}>
                📅 {card.year}
              </div>

              <p style={{
                fontSize: '0.83rem',
                color: 'var(--muted)',
                lineHeight: 1.65,
              }}>
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
