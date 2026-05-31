// ================================================================
// src/components/Navigation.tsx
// ================================================================
// Fixed top navigation bar with logo and section links.
// CHANGE: Add or remove items in the `navLinks` array below.
// ================================================================

import React from 'react'
import { personalInfo } from '../data/portfolioData'

// ── CHANGE: Add / remove nav links here ──────────────────────────
const navLinks = [
  { label: 'About',          href: '#about' },
  { label: 'Skills',         href: '#skills' },
  { label: 'Experience',     href: '#experience' },
  { label: 'Projects',       href: '#projects' },
  { label: 'Education',      href: '#education' },
  { label: 'Achievements',   href: '#achievements' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact',        href: '#contact' },
]

export default function Navigation() {
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '1.1rem 2.5rem',
      backdropFilter: 'blur(18px)',
      background: 'rgba(7,5,15,0.75)',
      borderBottom: '1px solid var(--border)',
    }}>
      {/* ── Logo — CHANGE: update initials in portfolioData.ts ── */}
      <a href="#home" style={{
        fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.1rem',
        color: 'var(--purple-soft)', letterSpacing: '0.04em', textDecoration: 'none',
      }}>
        {personalInfo.initials}
      </a>

      {/* ── Nav links (hidden on mobile via media query) ── */}
      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} style={{
              fontFamily: '"DM Mono", monospace', fontSize: '0.78rem',
              color: 'var(--muted)', textDecoration: 'none',
              letterSpacing: '0.06em', textTransform: 'uppercase',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--purple-soft)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
