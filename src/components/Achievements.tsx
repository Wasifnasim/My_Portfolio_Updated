// ================================================================
// src/components/Achievements.tsx
// ================================================================
// Achievement cards with multi-image slideshow support.
// Each achievement can have an array of images.
//
// TO ADD IMAGES:
//   - Put photos in /public/img/achievements/
//   - Add paths to the `images` array for each achievement
// ================================================================

import React, { useState, useEffect } from 'react'

// ================================================================
// ✅ EDIT: Main featured achievement cards
// ================================================================
const achievements = [
  {
    id: 1,
    title: "University Ranker #1",
    subtitle: "Rashtrasant Tukadoji Maharaj Nagpur University",
    year: "2025",
    // CHANGE: Added placeholder paths for your university rank images
    images: [
      "/img/achievements/rank1.jpeg",
      "/img/achievements/rank2.jpeg",
      "/img/achievements/rank3.jpeg",
    ],
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
    // CHANGE: Added your 3 Codeflux workshop images here
    images: [
      "/img/achievements/codeflux1.jpeg",
      "/img/achievements/codeflux2.jpeg",
      "/img/achievements/codeflux3.jpeg",
    ],
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
    images: [] as string[],
    placeholderGradient: "linear-gradient(135deg, #070f12 0%, #0d3040 50%, #070f12 100%)",
    description:
      "Completed hands-on machine learning internship implementing supervised and unsupervised learning algorithms, data preprocessing pipelines, and real-world model building.",
    tags: ["Machine Learning", "Python", "Data Preprocessing"],
    tagIcons: ["🔬", "🐍", "📊"],
  },
]

// ================================================================
// Image Slideshow Hook (Auto-rotates for the stacked cards)
// ================================================================
function useSlideshow(imageCount: number, interval = 3500) {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    if (imageCount <= 1) return
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % imageCount)
    }, interval)
    return () => clearInterval(timer)
  }, [imageCount, interval])

  return currentSlide
}

// ================================================================
// Auto Slideshow Component (For the stacked cards on the left)
// ================================================================
function AutoImageSlideshow({ images, placeholderGradient }: {
  images: string[]
  placeholderGradient: string
}) {
  const currentSlide = useSlideshow(images.length)

  if (images.length === 0) {
    return (
      <div style={{
        position: 'absolute', inset: 0,
        background: placeholderGradient,
      }} />
    )
  }

  return (
    <>
      {images.map((img, i) => (
        <div
          key={img}
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: i === currentSlide ? 1 : 0,
            transition: 'opacity 0.9s ease-in-out',
            zIndex: i === currentSlide ? 1 : 0,
          }}
        />
      ))}

      {/* Slide indicator dots */}
      {images.length > 1 && (
        <div style={{
          position: 'absolute', bottom: 70, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', gap: '6px', zIndex: 5,
        }}>
          {images.map((_, i) => (
            <div key={i} style={{
              width: i === currentSlide ? 18 : 6,
              height: 6,
              borderRadius: 3,
              background: i === currentSlide ? 'var(--purple)' : 'rgba(255,255,255,0.35)',
              transition: 'all 0.4s cubic-bezier(0.34,1.56,0.64,1)',
              boxShadow: i === currentSlide ? '0 0 8px rgba(138,100,255,0.5)' : 'none',
            }} />
          ))}
        </div>
      )}
    </>
  )
}

// ================================================================
// Manual Slideshow Component (For the detail panel on the right)
// ================================================================
function ManualImageSlideshow({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0)
  const [showImages, setShowImages] = useState(false)

  // Reset current slide to 0 and hide when images change (user clicks a new card)
  useEffect(() => {
    setCurrent(0)
    setShowImages(false)
  }, [images])

  if (images.length === 0) return null

  const handleNext = () => setCurrent((prev) => (prev + 1) % images.length)
  const handlePrev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length)

  if (!showImages) {
    return (
      <div style={{ marginBottom: '2rem' }}>
        <button 
          onClick={() => setShowImages(true)} 
          style={{
            padding: '0.6rem 1.2rem', borderRadius: 8, border: '1px solid rgba(138,100,255,0.4)',
            background: 'var(--purple-dim)', color: 'var(--purple-soft)',
            fontFamily: '"DM Mono", monospace', fontSize: '0.75rem', cursor: 'pointer',
            letterSpacing: '0.05em', transition: 'all 0.3s ease',
            display: 'flex', alignItems: 'center', gap: '0.5rem'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--purple)'
            e.currentTarget.style.color = '#fff'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'var(--purple-dim)'
            e.currentTarget.style.color = 'var(--purple-soft)'
          }}
        >
          📷 View Event Gallery ({images.length} photos)
        </button>
      </div>
    )
  }

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      maxWidth: '380px',
      height: 160,
      borderRadius: 12,
      overflow: 'hidden',
      marginBottom: '2rem',
      border: '1px solid var(--border)',
      background: 'var(--surface)',
    }}>
      {images.map((img, i) => (
        <div key={img} style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: i === current ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out',
        }} />
      ))}

      {/* Image counter badge */}
      {images.length > 1 && (
        <div style={{
          position: 'absolute', top: 10, right: 10,
          background: 'rgba(7,5,15,0.8)',
          backdropFilter: 'blur(8px)',
          border: '1px solid var(--border)',
          borderRadius: 20,
          padding: '0.2rem 0.6rem',
          fontFamily: '"DM Mono", monospace',
          fontSize: '0.65rem',
          color: 'var(--text)',
          letterSpacing: '0.05em',
          zIndex: 3,
        }}>
          📷 {current + 1} / {images.length}
        </div>
      )}

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button onClick={handlePrev} aria-label="Previous image" style={{
            position: 'absolute', top: '50%', left: 10, transform: 'translateY(-50%)',
            width: 32, height: 32, borderRadius: '50%',
            background: 'rgba(7,5,15,0.7)', border: '1px solid rgba(255,255,255,0.1)',
            color: '#fff', fontSize: '1rem', cursor: 'pointer', zIndex: 3,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backdropFilter: 'blur(4px)',
          }}>
            ←
          </button>
          <button onClick={handleNext} aria-label="Next image" style={{
            position: 'absolute', top: '50%', right: 10, transform: 'translateY(-50%)',
            width: 32, height: 32, borderRadius: '50%',
            background: 'rgba(7,5,15,0.7)', border: '1px solid rgba(255,255,255,0.1)',
            color: '#fff', fontSize: '1rem', cursor: 'pointer', zIndex: 3,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backdropFilter: 'blur(4px)',
          }}>
            →
          </button>

          {/* Slide dots */}
          <div style={{
            position: 'absolute', bottom: 10, left: '50%', transform: 'translateX(-50%)',
            display: 'flex', gap: '5px', zIndex: 3,
          }}>
            {images.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} aria-label={`Go to image ${i + 1}`} style={{
                width: i === current ? 16 : 6,
                height: 6,
                borderRadius: 3,
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                background: i === current ? 'var(--purple)' : 'rgba(255,255,255,0.4)',
                transition: 'all 0.3s ease',
                boxShadow: i === current ? '0 0 8px rgba(138,100,255,0.5)' : 'none',
              }} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

// ================================================================
// MAIN COMPONENT
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

        {/* ── Section Header */}
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

          {/* ── LEFT: Stacked cards with auto slideshow */}
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
                    border: isActive
                      ? '1px solid rgba(138,100,255,0.45)'
                      : '1px solid var(--border)',
                    boxShadow: isActive
                      ? 'var(--glow), 0 24px 60px rgba(0,0,0,0.5)'
                      : '0 8px 30px rgba(0,0,0,0.35)',
                    background: 'var(--surface)',
                  }}
                >
                  {/* Auto Slideshow images or gradient placeholder */}
                  <AutoImageSlideshow
                    images={ach.images}
                    placeholderGradient={ach.placeholderGradient}
                  />

                  {/* Dark overlay so text is always readable */}
                  <div style={{
                    position: 'absolute', inset: 0, zIndex: 2,
                    background: 'linear-gradient(to top, rgba(7,5,15,0.97) 38%, rgba(7,5,15,0.55) 65%, rgba(7,5,15,0.2) 100%)',
                  }} />

                  {/* Purple glow accent — top right */}
                  <div style={{
                    position: 'absolute', top: -50, right: -50,
                    width: 180, height: 180, borderRadius: '50%', zIndex: 3,
                    background: 'radial-gradient(circle, rgba(138,100,255,0.25), transparent 70%)',
                    filter: 'blur(24px)',
                    opacity: isActive ? 1 : 0.4,
                    transition: 'opacity 0.4s',
                  }} />

                  {/* Active card top stripe */}
                  {isActive && (
                    <div style={{
                      position: 'absolute', top: 0, left: 0, right: 0, height: 2, zIndex: 4,
                      background: 'linear-gradient(90deg, transparent, var(--purple), transparent)',
                    }} />
                  )}

                  {/* Card bottom content */}
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    padding: '1.6rem', zIndex: 4,
                  }}>
                    {/* Year badge */}
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

          {/* ── RIGHT: Detail panel */}
          <div
            key={activeIdx}
            style={{ animation: 'achSlideIn 0.45s cubic-bezier(0.34,1.56,0.64,1) both' }}
          >
            {/* Year */}
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

            {/* Org */}
            <div style={{
              fontSize: '0.9rem',
              color: 'var(--purple-soft)',
              marginBottom: '1.2rem',
              fontWeight: 500,
            }}>
              {active.subtitle}
            </div>

            {/* Purple divider */}
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

            {/* Tags */}
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

            {/* Manual Slideshow Preview (with arrows) moved below tags */}
            <ManualImageSlideshow images={active.images} />

            {/* Navigation: dots + arrows (for changing achievements) */}
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
