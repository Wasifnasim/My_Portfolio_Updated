// ================================================================
// src/components/Skills.tsx
// ================================================================
// Skills section with category cards.
// CHANGE: All skills → src/data/portfolioData.ts (skillCategories)
// ================================================================

import React from 'react'
import { skillCategories } from '../data/portfolioData'
import { SectionLabel, SectionTitle } from './About'

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '6rem 2rem', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <div className="reveal">
          <SectionLabel>What I Know</SectionLabel>
          <SectionTitle>Skills</SectionTitle>
        </div>

        {/* Skills grid — cards wrap automatically */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.5rem', marginTop: '3rem',
        }}>
          {/* CHANGE: skill cards data in portfolioData.skillCategories */}
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="reveal"
              style={cardStyle}
              onMouseEnter={(e) => applyCardHover(e)}
              onMouseLeave={(e) => removeCardHover(e)}
            >
              {/* Card header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.1rem' }}>
                <span style={{ fontSize: '1.3rem' }}>{cat.icon}</span>
                <span style={{
                  fontFamily: 'Syne, sans-serif', fontWeight: 700,
                  fontSize: '0.95rem', color: 'var(--purple-soft)',
                }}>
                  {cat.title}
                </span>
              </div>

              {/* Skill tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {cat.skills.map((skill) => (
                  <span key={skill} style={tagStyle}
                    onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(138,100,255,0.25)'; e.currentTarget.style.color = '#fff' }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--purple-dim)'; e.currentTarget.style.color = 'var(--purple-soft)' }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const cardStyle: React.CSSProperties = {
  background: 'var(--surface)', border: '1px solid var(--border)',
  borderRadius: 14, padding: '1.5rem',
  transition: 'transform 0.25s, border-color 0.25s, box-shadow 0.25s',
}

const tagStyle: React.CSSProperties = {
  padding: '0.3rem 0.75rem', borderRadius: 20,
  fontFamily: '"DM Mono", monospace', fontSize: '0.7rem',
  letterSpacing: '0.03em',
  background: 'var(--purple-dim)', color: 'var(--purple-soft)',
  border: '1px solid rgba(138,100,255,0.2)',
  transition: 'background 0.2s, color 0.2s',
}

const applyCardHover  = (e: React.MouseEvent<HTMLDivElement>) => {
  e.currentTarget.style.transform    = 'translateY(-6px)'
  e.currentTarget.style.borderColor  = 'rgba(138,100,255,0.45)'
  e.currentTarget.style.boxShadow    = 'var(--glow)'
}
const removeCardHover = (e: React.MouseEvent<HTMLDivElement>) => {
  e.currentTarget.style.transform    = 'translateY(0)'
  e.currentTarget.style.borderColor  = 'var(--border)'
  e.currentTarget.style.boxShadow    = 'none'
}
