// ================================================================
// src/components/Achievements.tsx
// ================================================================
// Matches your site's exact CSS variables, fonts, and card style.
//
// SETUP (3 steps):
//   1. Drop this file into src/components/
//   2. In App.tsx — add import + JSX (see bottom of this file)
//   3. In Navigation.tsx — add { label: 'Achievements', href: '#achievements' }
//
// TO ADD YOUR IMAGES:
//   - Put photos in /public/img/achievements/  (e.g. award1.jpg)
//   - Set  image: "/img/achievements/award1.jpg"  in the achievements array
//   - Leave  image: ""  to show a gradient placeholder
// ================================================================

import React, { useState } from 'react'

// ================================================================
// ✅ EDIT: Main featured achievement cards (the stacked section)
// ================================================================
const achievements = [
  {
    id: 1,
    title: "University Ranker #1",
    subtitle: "Rashtrasant Tukadoji Maharaj Nagpur University",
    year: "2025",
    // CHANGE: set your image path e.g. "/img/achievements/rank1.jpg"
    image: "",
    // CHANGE: shown only when image is empty — pick any gradient
    placeholderGradient: "linear-gradient(135deg, #0e0a1f 0%, #2a1860 50%, #0e0a1f 100%)",
    description:
      "Recognized for academic excellence with an 8.13 SGPA across all subjects in the B.Tech AI & Data Science program at Anjuman College of Engineering and Technology.",
    tags: ["Academic Excellence", "8.13 SGPA", "AI & Data Science"],
    tagIcons: ["🏆", "⭐", "🎓"],
  },
  {
    id: 2,
    title: "Co-Founder & Workshop Lead",
    subtitle: "Codeflux Company · Nagpur",
    year: "2025",
    image: "",
    placeholderGradient: "linear-gradient(135deg, #070d1f 0%, #0d2654 50%, #070d1f 100%)",
    description:
      "Co-founded Codeflux and led 17+ AI/ML workshops for students, professionals, and non-professionals. Drove analytics, growth strategy, and tech branding for the startup.",
    tags: ["Leadership", "17+ Workshops", "AI/ML Training"],
    tagIcons: ["🌟", "📢", "🤖"],
  },
  {
    id: 3,
    title: "ML Internship",
    subtitle: "NU Intelligence · Nagpur",
    year: "Jan – Feb 2025",
    image: "",
    placeholderGradient: "linear-gradient(135deg, #070f12 0%, #0d3040 50%, #070f12 100%)",
    description:
      "Completed hands-on machine learning internship implementing supervised and unsupervised learning algorithms, data preprocessing pipelines, and real-world model building.",
    tags: ["Machine Learning", "Python", "Data Preprocessing"],
    tagIcons: ["🔬", "🐍", "📊"],
  },
  // ── ADD MORE FEATURED CARDS HERE ──────────────────────────────
  // {
  //   id: 4,
  //   title: "Your Achievement",
  //   subtitle: "Organization Name",
  //   year: "2026",
  //   image: "/img/achievements/your-photo.jpg",
  //   placeholderGradient: "linear-gradient(135deg, #1a0e0e 0%, #4a1f1f 50%, #1a0e0e 100%)",
  //   description: "Describe your achievement here...",
  //   tags: ["Tag 1", "Tag 2", "Tag 3"],
  //   tagIcons: ["🏅", "💡", "🔥"],
  // },
]

// ================================================================
// COMPONENT — no edits needed below unless changing layout/design
// ================================================================
export default function Achievements() {
  const [activeIdx, setActiveIdx] = useState(0)
  const count = achievements.length
  const active = achievements[activeIdx]

  return (
    <section
      id="achievements"
      style={{ padding: '6rem 2rem', position: 'relative', zIndex: 1 }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* ── Section Header — matches your SectionLabel + SectionTitle style */}
        <div className="reveal" style={{ marginBottom: '4rem' }}>
          <div style={{
            fontFamily: '"DM Mono", monospace',
            fontSize: '0.72rem',
            letterSpacing: '0.18em',
            color: 'var(--purple)',
            textTransform: 'uppercase',
            marginBottom: '0.75rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
          }}>
            <span style={{ width: 24, height: 1, background: 'var(--purple)', display: 'inline-block' }} />
            Milestones
          </div>
          <h2 style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            background: 'linear-gradient(135deg, var(--text) 30%, var(--purple-soft))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Achievements
          </h2>
        </div>

        {/* ── Main layout: stacked cards + detail panel */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'center',
          marginBottom: '5rem',
        }}>

          {/* ── LEFT: Stacked cards */}
          <div style={{
            position: 'relative',
            height: 400,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            {achievements.map((ach, i) => {
              const offset   = i - activeIdx
              const isActive = i === activeIdx
              const absOff   = Math.abs(offset)

              const translateY = isActive ? 0 : offset * 20
              const translateX = isActive ? 0 : offset * 10
              const scale      = isActive ? 1 : Math.max(0.88 - absOff * 0.04, 0.78)
              const rotateZ    = isActive ? 0 : offset * 3
              const zIdx       = count - absOff
              const opacity    = isActive ? 1 : Math.max(1 - absOff * 0.25, 0.4)

              return (
                <div
                  key={ach.id}
                  onClick={() => !isActive && setActiveIdx(i)}
                  style={{
                    position: 'absolute',
                    width: '100%',
                    maxWidth: 440,
                    height: isActive ? 370 : 340,
                    borderRadius: 16,
                    overflow: 'hidden',
                    cursor: isActive ? 'default' : 'pointer',
                    zIndex: zIdx,
                    opacity,
                    transform: `translateX(${translateX}px) translateY(${translateY}px) scale(${scale}) rotateZ(${rotateZ}deg)`,
                    transition: 'all 0.55s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    // matches your site's card border style
                    border: isActive
                      ? '1px solid rgba(138,100,255,0.45)'
                      : '1px solid var(--border)',
                    boxShadow: isActive
                      ? 'var(--glow), 0 24px 60px rgba(0,0,0,0.5)'
                      : '0 8px 30px rgba(0,0,0,0.35)',
                    background: 'var(--surface)',
                  }}
                >
                  {/* Card image or gradient placeholder */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    // CHANGE: replace with your image — ach.image is set in the achievements array above
                    background: ach.image
                      ? `url(${ach.image}) center/cover no-repeat`
                      : ach.placeholderGradient,
                  }} />

                  {/* Dark overlay so text is always readable */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(7,5,15,0.97) 38%, rgba(7,5,15,0.55) 65%, rgba(7,5,15,0.2) 100%)',
                  }} />

                  {/* Purple glow accent — top right */}
                  <div style={{
                    position: 'absolute', top: -50, right: -50,
                    width: 180, height: 180, borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(138,100,255,0.25), transparent 70%)',
                    filter: 'blur(24px)',
                    opacity: isActive ? 1 : 0.4,
                    transition: 'opacity 0.4s',
                  }} />

                  {/* Active card top stripe — matches your purple theme */}
                  {isActive && (
                    <div style={{
                      position: 'absolute', top: 0, left: 0, right: 0, height: 2,
                      background: 'linear-gradient(90deg, transparent, var(--purple), transparent)',
                    }} />
                  )}

                  {/* Card bottom content */}
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    padding: '1.6rem',
                  }}>
                    {/* Year badge — matches your skill-tag style */}
                    <div style={{
                      display: 'inline-block',
                      padding: '0.2rem 0.65rem',
                      borderRadius: 20,
                      background: 'var(--purple-dim)',
                      border: '1px solid rgba(138,100,255,0.2)',
                      fontFamily: '"DM Mono", monospace',
                      fontSize: '0.68rem',
                      letterSpacing: '0.08em',
                      color: 'var(--purple-soft)',
                      marginBottom: '0.7rem',
                    }}>
                      {ach.year}
                    </div>

                    {/* Title */}
                    <div style={{
                      fontFamily: 'Syne, sans-serif',
                      fontSize: isActive ? '1.4rem' : '1.1rem',
                      fontWeight: 800,
                      color: 'var(--text)',
                      lineHeight: 1.2,
                      marginBottom: '0.3rem',
                      transition: 'font-size 0.4s ease',
                    }}>
                      {ach.title}
                    </div>

                    {/* Subtitle */}
                    <div style={{
                      fontFamily: '"DM Mono", monospace',
                      fontSize: '0.72rem',
                      color: 'var(--purple-soft)',
                      letterSpacing: '0.03em',
                      opacity: isActive ? 1 : 0.6,
                      transition: 'opacity 0.4s',
                    }}>
                      {ach.subtitle}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* ── RIGHT: Detail panel — animates in on card change */}
          <div
            key={activeIdx}
            style={{ animation: 'achSlideIn 0.45s cubic-bezier(0.34,1.56,0.64,1) both' }}
          >
            {/* Matches your timeline-period style */}
            <div style={{
              fontFamily: '"DM Mono", monospace',
              fontSize: '0.72rem',
              color: 'var(--gold)',
              letterSpacing: '0.08em',
              marginBottom: '0.5rem',
            }}>
              {active.year}
            </div>

            {/* Title */}
            <h3 style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 800,
              color: 'var(--text)',
              lineHeight: 1.15,
              marginBottom: '0.4rem',
            }}>
              {active.title}
            </h3>

            {/* Org — matches your timeline-company style */}
            <div style={{
              fontSize: '0.9rem',
              color: 'var(--purple-soft)',
              marginBottom: '1.2rem',
              fontWeight: 500,
            }}>
              {active.subtitle}
            </div>

            {/* Purple divider line */}
            <div style={{
              width: 40, height: 2, borderRadius: 2,
              background: 'linear-gradient(90deg, var(--purple), transparent)',
              marginBottom: '1.2rem',
            }} />

            {/* Description */}
            <p style={{
              color: 'var(--muted)',
              fontSize: '0.95rem',
              lineHeight: 1.8,
              marginBottom: '1.8rem',
            }}>
              {active.description}
            </p>

            {/* Tags — matches your skill-tag style exactly */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2.2rem' }}>
              {active.tags.map((tag, j) => (
                <span key={j} style={{
                  padding: '0.3rem 0.75rem',
                  borderRadius: 20,
                  fontFamily: '"DM Mono", monospace',
                  fontSize: '0.7rem',
                  letterSpacing: '0.03em',
                  background: 'var(--purple-dim)',
                  color: 'var(--purple-soft)',
                  border: '1px solid rgba(138,100,255,0.2)',
                  display: 'flex', alignItems: 'center', gap: '0.35rem',
                }}>
                  <span style={{ fontSize: '0.85rem' }}>{active.tagIcons[j]}</span>
                  {tag}
                </span>
              ))}
            </div>

            {/* Navigation: dots + arrows */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
              {achievements.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => setActiveIdx(i)}
                  style={{
                    width: i === activeIdx ? 26 : 8,
                    height: 8,
                    borderRadius: 4,
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    background: i === activeIdx
                      ? 'var(--purple)'
                      : 'rgba(138,100,255,0.2)',
                    transition: 'all 0.35s cubic-bezier(0.34,1.56,0.64,1)',
                  }}
                />
              ))}

              <div style={{ marginLeft: 'auto', display: 'flex', gap: '0.45rem' }}>
                {['←', '→'].map((arrow, d) => (
                  <button
                    key={arrow}
                    aria-label={d === 0 ? 'Previous slide' : 'Next slide'}
                    onClick={() => setActiveIdx((p) => (p + (d === 0 ? -1 : 1) + count) % count)}
                    style={{
                      width: 36, height: 36, borderRadius: 8,
                      border: '1px solid var(--border)',
                      background: 'var(--surface)',
                      color: 'var(--purple-soft)',
                      fontSize: '1rem', cursor: 'pointer',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      transition: 'border-color 0.2s, background 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(138,100,255,0.5)'
                      e.currentTarget.style.background  = 'var(--purple-dim)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border)'
                      e.currentTarget.style.background  = 'var(--surface)'
                    }}
                  >
                    {arrow}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>


      </div>

      {/* Keyframe for detail panel slide-in */}
      <style>{`
        @keyframes achSlideIn {
          from { opacity: 0; transform: translateX(28px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  )
}

// ================================================================
// HOW TO ADD TO App.tsx:
// ================================================================
//
// 1. Add this import at the top of App.tsx:
//    import Achievements from './components/Achievements'
//
// 2. Add these two lines inside <main> wherever you want it
//    (e.g. after Certifications):
//
//    <div className="divider" />
//    <Achievements />
//
// ================================================================
