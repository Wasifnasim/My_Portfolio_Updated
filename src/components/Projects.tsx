// ================================================================
// src/components/Projects.tsx
// ================================================================
// Grid of project cards.
// CHANGE: All project data → src/data/portfolioData.ts (projects)
// CHANGE: Add your actual GitHub repo links in portfolioData.ts
// ================================================================

import React from 'react'
import { projects } from '../data/portfolioData'
import { SectionLabel, SectionTitle } from './About'

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '6rem 2rem', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <div className="reveal">
          <SectionLabel>What I've Built</SectionLabel>
          <SectionTitle>Projects</SectionTitle>
        </div>

        {/* Project cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '1.5rem', marginTop: '3rem',
        }}>
          {/* CHANGE: project entries in portfolioData.projects */}
          {projects.map((proj) => (
            <div
              key={proj.name}
              className="reveal"
              style={cardStyle}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-7px)'; e.currentTarget.style.borderColor = 'rgba(138,100,255,0.5)'; e.currentTarget.style.boxShadow = 'var(--glow)' }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none' }}
            >
              {/* Header row: icon + year */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '1.8rem' }}>{proj.icon}</span>
                <span style={{ fontFamily: '"DM Mono", monospace', fontSize: '0.72rem', color: 'var(--muted)' }}>
                  {proj.year}{proj.ongoing ? ' · Ongoing' : ''}
                </span>
              </div>

              {/* Project name */}
              <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.05rem', fontWeight: 700, color: 'var(--text)', marginTop: '0.75rem' }}>
                {proj.name}
              </div>

              {/* Description */}
              <p style={{ fontSize: '0.87rem', color: 'var(--muted)', lineHeight: 1.6, marginTop: '0.6rem', flexGrow: 1 }}>
                {proj.description}
              </p>

              {/* Tech stack pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginTop: '1rem' }}>
                {proj.tech.map((t) => (
                  <span key={t} style={{
                    padding: '0.2rem 0.6rem', borderRadius: 4,
                    fontFamily: '"DM Mono", monospace', fontSize: '0.65rem',
                    background: 'rgba(138,100,255,0.1)', color: 'var(--purple-soft)',
                    border: '1px solid rgba(138,100,255,0.15)',
                  }}>
                    {t}
                  </span>
                ))}
              </div>

              {/* GitHub link */}
              {/* CHANGE: Update proj.link in portfolioData.ts for each project */}
              <a href={proj.link} target="_blank" rel="noopener" style={{
                fontFamily: '"DM Mono", monospace', fontSize: '0.75rem',
                color: 'var(--purple)', textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                marginTop: '1rem', transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--purple-soft)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--purple)')}
              >
                GitHub ↗
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const cardStyle: React.CSSProperties = {
  background: 'var(--surface)', border: '1px solid var(--border)',
  borderRadius: 16, padding: '1.7rem',
  transition: 'transform 0.25s, border-color 0.25s, box-shadow 0.25s',
  display: 'flex', flexDirection: 'column',
}
