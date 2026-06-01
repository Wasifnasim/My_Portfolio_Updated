// ================================================================
// src/components/Navigation.tsx
// ================================================================
// Fixed top navigation bar with logo and section links.
// On mobile: hamburger button opens a slide-down menu.
// CHANGE: Add or remove items in the `navLinks` array below.
// ================================================================

import React, { useState, useEffect } from 'react'
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
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Darken nav slightly on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu when a link is clicked
  const handleLinkClick = () => setMenuOpen(false)

  const linkStyle: React.CSSProperties = {
    fontFamily: '"DM Mono", monospace',
    fontSize: '0.78rem',
    color: 'var(--muted)',
    textDecoration: 'none',
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    transition: 'color 0.2s',
    display: 'block',
    padding: '0.2rem 0',
  }

  return (
    <>
      <style>{`
        .nav-desktop-links { display: flex; gap: 2rem; list-style: none; }
        .nav-hamburger      { display: none; }

        @media (max-width: 768px) {
          .nav-desktop-links { display: none !important; }
          .nav-hamburger      { display: flex !important; }
        }

        .hamburger-bar {
          width: 22px;
          height: 2px;
          background: var(--purple-soft);
          border-radius: 2px;
          transition: transform 0.3s, opacity 0.3s;
        }

        .mobile-menu {
          position: fixed;
          top: 60px;
          left: 0; right: 0;
          background: rgba(7, 5, 15, 0.97);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border);
          padding: 1.5rem 2rem;
          z-index: 999;
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          transform: translateY(-10px);
          opacity: 0;
          pointer-events: none;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }

        .mobile-menu.open {
          transform: translateY(0);
          opacity: 1;
          pointer-events: all;
        }

        .mobile-nav-link {
          font-family: "DM Mono", monospace;
          font-size: 0.85rem;
          color: var(--muted);
          text-decoration: none;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 0.85rem 0;
          border-bottom: 1px solid var(--border);
          transition: color 0.2s, padding-left 0.2s;
          display: block;
        }

        .mobile-nav-link:last-child { border-bottom: none; }
        .mobile-nav-link:hover { color: var(--purple-soft); padding-left: 0.5rem; }
      `}</style>

      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '1rem 2rem',
        backdropFilter: 'blur(18px)',
        background: scrolled ? 'rgba(7,5,15,0.92)' : 'rgba(7,5,15,0.75)',
        borderBottom: '1px solid var(--border)',
        transition: 'background 0.3s',
      }}>
        {/* ── Logo ── */}
        <a href="#home" style={{
          fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.1rem',
          color: 'var(--purple-soft)', letterSpacing: '0.04em', textDecoration: 'none',
          flexShrink: 0,
        }}>
          {personalInfo.initials}
        </a>

        {/* ── Desktop nav links ── */}
        <ul className="nav-desktop-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} style={linkStyle}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--purple-soft)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* ── Mobile hamburger button ── */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            display: 'none',   // overridden by media query
            flexDirection: 'column', gap: '5px', padding: '4px',
          }}
        >
          <span className="hamburger-bar" style={{
            transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
          }} />
          <span className="hamburger-bar" style={{
            opacity: menuOpen ? 0 : 1,
          }} />
          <span className="hamburger-bar" style={{
            transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
          }} />
        </button>
      </nav>

      {/* ── Mobile slide-down menu ── */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="mobile-nav-link"
            onClick={handleLinkClick}
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  )
}
