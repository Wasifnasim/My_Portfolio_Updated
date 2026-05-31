// ================================================================
// src/components/Hero.tsx
// ================================================================
// Landing section with name, typewriter role, bio, social links,
// and an animated avatar orb.
//
// TO CHANGE YOUR PHOTO:
//   1. Add your image to /public/img/  (e.g. profile.jpg)
//   2. Open src/data/portfolioData.ts
//   3. Set  profilePhoto: "/img/profile.jpg"
//   4. Set  usePhoto: true
//   The emoji avatar will be replaced with your actual photo.
//
// ALL other text changes → src/data/portfolioData.ts
// ================================================================

import React, { useEffect, useState } from 'react'
import { personalInfo } from '../data/portfolioData'

export default function Hero() {
  // ── Typewriter effect ──────────────────────────────────────────
  const [displayed, setDisplayed] = useState('')
  const [roleIdx,   setRoleIdx]   = useState(0)
  const [deleting,  setDeleting]  = useState(false)

  useEffect(() => {
    const roles = personalInfo.roles
    const cur   = roles[roleIdx]
    let timer: ReturnType<typeof setTimeout>

    if (!deleting && displayed.length < cur.length) {
      timer = setTimeout(() => setDisplayed(cur.slice(0, displayed.length + 1)), 90)
    } else if (!deleting && displayed.length === cur.length) {
      timer = setTimeout(() => setDeleting(true), 1600)
    } else if (deleting && displayed.length > 0) {
      timer = setTimeout(() => setDisplayed(cur.slice(0, displayed.length - 1)), 55)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIdx((i) => (i + 1) % roles.length)
    }
    return () => clearTimeout(timer)
  }, [displayed, deleting, roleIdx])

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        padding: '7rem 2rem 4rem', position: 'relative', zIndex: 1,
      }}
    >
      <div style={{
        maxWidth: 1100, margin: '0 auto',
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', gap: '4rem', width: '100%',
        flexWrap: 'wrap',
      }}>

        {/* ── LEFT: Text content ─────────────────────────────────── */}
        <div style={{ flex: 1, minWidth: 280 }}>

          {/* Greeting label */}
          <p className="hero-greeting" style={{
            fontFamily: '"DM Mono", monospace', fontSize: '0.9rem',
            color: 'var(--purple)', letterSpacing: '0.12em',
            marginBottom: '1rem',
            animation: 'fadeUp 0.6s 0.2s both',
          }}>
            {/* CHANGE: greeting text in portfolioData.ts or directly here */}
            // Hello, world
          </p>

          {/* Full name — split for styling */}
          <h1 style={{
            fontFamily: 'Syne, sans-serif', fontWeight: 800,
            fontSize: 'clamp(2.4rem, 6vw, 4.2rem)', lineHeight: 1.05,
            marginBottom: '1rem',
            animation: 'fadeUp 0.6s 0.4s both',
          }}>
            {/* CHANGE: name in portfolioData.ts */}
            Mohammad<br />
            <span style={{
              background: 'linear-gradient(120deg, #c4b0ff, #8a64ff, #5030cc)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>
              Wasifullah
            </span>
            <br />Nasim
          </h1>

          {/* Typewriter role */}
          <div style={{
            fontFamily: '"DM Mono", monospace', fontSize: '1.05rem',
            color: 'var(--gold)', marginBottom: '1.5rem', minHeight: '1.6em',
            animation: 'fadeUp 0.6s 0.6s both',
          }}>
            {/* CHANGE: roles array in portfolioData.ts */}
            <span className="typewriter-cursor">{displayed}</span>
          </div>

          {/* Bio */}
          <p style={{
            color: 'var(--muted)', fontSize: '1rem', lineHeight: 1.7,
            maxWidth: 520, marginBottom: '2.5rem',
            animation: 'fadeUp 0.6s 0.8s both',
          }}>
            {/* CHANGE: heroBio in portfolioData.ts */}
            {personalInfo.heroBio}
          </p>

          {/* CTA Buttons */}
          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: '1rem',
            alignItems: 'center', marginBottom: '2.5rem',
            animation: 'fadeUp 0.6s 1s both',
          }}>
            {/* CHANGE: Set hasResume: true in portfolioData.ts to show Download Resume button */}
            {personalInfo.hasResume && (
              <a href={personalInfo.resumePath} download style={btnPrimary}>
                ↓ Download Resume
              </a>
            )}
            <a href="#contact"  style={btnOutline}>Get in Touch</a>
            <a href="#projects" style={btnOutline}>View Projects</a>
          </div>

          {/* Social links */}
          <div style={{ display: 'flex', gap: '1rem', animation: 'fadeUp 0.6s 1.1s both' }}>
            {/* GitHub — CHANGE: github URL in portfolioData.ts */}
            <a href={personalInfo.github} target="_blank" rel="noopener" style={socialLink} title="GitHub"
              onMouseEnter={(e) => applyHoverSocial(e)} onMouseLeave={(e) => removeHoverSocial(e)}>
              <GithubIcon />
            </a>
            {/* LinkedIn — CHANGE: linkedin URL in portfolioData.ts */}
            <a href={personalInfo.linkedin} target="_blank" rel="noopener" style={socialLink} title="LinkedIn"
              onMouseEnter={(e) => applyHoverSocial(e)} onMouseLeave={(e) => removeHoverSocial(e)}>
              <LinkedinIcon />
            </a>
            {/* Email — CHANGE: email in portfolioData.ts */}
            <a href={`mailto:${personalInfo.email}`} style={socialLink} title="Email"
              onMouseEnter={(e) => applyHoverSocial(e)} onMouseLeave={(e) => removeHoverSocial(e)}>
              <EmailIcon />
            </a>
          </div>
        </div>

        {/* ── RIGHT: Avatar orb ──────────────────────────────────── */}
        <div style={{
          flex: '0 0 340px', display: 'flex', justifyContent: 'center',
          animation: 'fadeIn 1s 0.5s both', position: 'relative',
        }}>
          <div style={{ position: 'relative' }}>

            {/* Avatar circle */}
            <div style={{
              width: 300, height: 300, borderRadius: '50%',
              background: 'linear-gradient(135deg, #1e1535, #2d1f4a)',
              border: '2px solid rgba(138,100,255,0.3)',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              position: 'relative', overflow: 'hidden',
              boxShadow: 'var(--glow), inset 0 0 60px rgba(138,100,255,0.1)',
            }}>
              {/* Spinning conic gradient ring */}
              <div style={{
                position: 'absolute', top: '-40%', left: '-40%',
                width: '180%', height: '180%',
                background: 'conic-gradient(from 0deg, transparent 0%, rgba(138,100,255,0.15) 30%, transparent 60%)',
                animation: 'spin 8s linear infinite',
              }} />

              {/* ── PROFILE PHOTO / AVATAR ────────────────────────
                  CHANGE: Set usePhoto: true in portfolioData.ts after adding
                  your photo to /public/img/profile.jpg
                  ─────────────────────────────────────────────── */}
              {personalInfo.usePhoto ? (
                <img
                  src={personalInfo.profilePhoto}
                  alt={personalInfo.name}
                  style={{
                    width: '100%', height: '100%', objectFit: 'cover',
                    borderRadius: '50%', position: 'relative', zIndex: 1,
                  }}
                />
              ) : (
                <>
                  {/* Emoji placeholder — shown until you add a real photo */}
                  <div style={{ fontSize: '5rem', zIndex: 1, filter: 'drop-shadow(0 0 20px rgba(138,100,255,0.6))' }}>
                    👨‍💻
                  </div>
                  <div style={{
                    fontFamily: 'Syne, sans-serif', fontSize: '0.85rem',
                    fontWeight: 700, color: 'var(--purple-soft)',
                    letterSpacing: '0.1em', zIndex: 1, marginTop: '0.5rem',
                  }}>
                    {/* CHANGE: shortName in portfolioData.ts */}
                    WASIF NASIM
                  </div>
                  <div style={{
                    fontFamily: '"DM Mono", monospace', fontSize: '0.68rem',
                    color: 'var(--gold)', zIndex: 1, marginTop: '0.25rem',
                  }}>
                    {personalInfo.tagline}
                  </div>
                </>
              )}
            </div>

            {/* Floating stat badges */}
            {personalInfo.heroStats.map((stat, i) => (
              <div key={i} style={{
                position: 'absolute',
                ...(i === 0 ? { top: 10, right: -30 } : { bottom: 30, left: -40 }),
                borderRadius: 10, padding: '0.6rem 1rem',
                background: 'var(--surface)', border: '1px solid var(--border)',
                backdropFilter: 'blur(10px)',
                fontFamily: '"DM Mono", monospace', fontSize: '0.7rem',
                color: 'var(--muted)', zIndex: 2,
                animation: `floatBadge 4s ease-in-out infinite`,
                animationDelay: `${i * 1.5}s`,
              }}>
                <strong style={{ color: 'var(--purple-soft)', fontSize: '1rem', display: 'block' }}>
                  {stat.value}
                </strong>
                {stat.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '2rem', left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem',
        color: 'var(--muted)', fontSize: '0.8rem', zIndex: 1,
      }}>
        <span style={{ fontFamily: '"DM Mono", monospace', fontSize: '0.7rem', letterSpacing: '0.08em' }}>
          SCROLL
        </span>
        <div style={{
          width: 1, height: 40,
          background: 'linear-gradient(to bottom, var(--purple), transparent)',
          animation: 'floatBadge 2s ease-in-out infinite',
        }} />
      </div>

      {/* Inline keyframes */}
      <style>{`
        @keyframes fadeUp  { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
        @keyframes fadeIn  { from { opacity:0; } to { opacity:1; } }
      `}</style>
    </section>
  )
}

// ── Inline styles (extracted for clarity) ──────────────────────
const btnPrimary: React.CSSProperties = {
  padding: '0.75rem 1.8rem', borderRadius: 6,
  background: 'linear-gradient(135deg, #8a64ff, #5030cc)', // CHANGE: button color
  color: '#fff', fontFamily: 'Outfit, sans-serif',
  fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none',
  boxShadow: '0 4px 20px rgba(138,100,255,0.4)',
  transition: 'transform 0.2s, box-shadow 0.2s',
  display: 'inline-block',
}

const btnOutline: React.CSSProperties = {
  padding: '0.75rem 1.8rem', borderRadius: 6,
  border: '1.5px solid var(--border)', color: 'var(--purple-soft)',
  fontFamily: 'Outfit, sans-serif', fontWeight: 500,
  fontSize: '0.9rem', textDecoration: 'none',
  background: 'transparent', transition: 'border-color 0.2s, background 0.2s',
  display: 'inline-block',
}

const socialLink: React.CSSProperties = {
  width: 42, height: 42, borderRadius: 8,
  border: '1px solid var(--border)',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  color: 'var(--muted)', textDecoration: 'none', fontSize: '1.1rem',
  transition: 'border-color 0.2s, color 0.2s, background 0.2s',
}

const applyHoverSocial  = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.currentTarget.style.borderColor = 'var(--purple)'
  e.currentTarget.style.color       = 'var(--purple-soft)'
  e.currentTarget.style.background  = 'var(--purple-dim)'
}
const removeHoverSocial = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.currentTarget.style.borderColor = 'var(--border)'
  e.currentTarget.style.color       = 'var(--muted)'
  e.currentTarget.style.background  = 'transparent'
}

// ── SVG Icons ───────────────────────────────────────────────────
const GithubIcon  = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .3C5.4.3 0 5.7 0 12.3c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 016 0C17 4.7 18 5 18 5c.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6C20.6 22.1 24 17.6 24 12.3 24 5.7 18.6.3 12 .3z"/></svg>
const LinkedinIcon= () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 110-4.14 2.07 2.07 0 010 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg>
const EmailIcon   = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
