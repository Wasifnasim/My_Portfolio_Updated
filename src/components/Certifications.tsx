// ================================================================
// src/components/Certifications.tsx
// ================================================================
// Certification cards grid with notable accomplishments style.
// Includes a sleek glassmorphic modal to view certificates.
// ================================================================

import React, { useState, useEffect } from 'react'
import { SectionLabel, SectionTitle } from './About'

const notableCards = [
  {
    icon: "📊",
    title: "Tata Data Visualisation",
    org: "Tata Group",
    year: "2024",
    description: "Completed enterprise-level data visualisation simulation — empowering business with effective insights.",
    image: "/img/certifications/tata.jpg",
  },
  {
    icon: "🔍",
    title: "Deloitte Analytics Simulation",
    org: "Deloitte Australia",
    year: "2024",
    description: "Solved real-world analytics problems in a professional consulting job simulation.",
    image: "/img/certifications/deloitte.jpg",
  },
  {
    icon: "🗄️",
    title: "SQL Skill Up",
    org: "GeeksforGeeks",
    year: "2024",
    description: "Completed structured SQL skill-building program covering joins, subqueries, and optimization.",
    image: "/img/certifications/sql.jpg",
  },
  {
    icon: "🐍",
    title: "Python for Data Science",
    org: "Skill Up",
    year: "2024",
    description: "Completed Python for Data Science certification covering pandas, numpy, and visualization.",
    image: "/img/certifications/python.jpg",
  },
]

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<typeof notableCards[0] | null>(null)

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedCert(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

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
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 14,
                padding: '1.4rem',
                transition: 'transform 0.25s, border-color 0.25s, box-shadow 0.25s',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
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
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 2,
                background: 'linear-gradient(90deg, transparent, var(--purple), transparent)',
                opacity: 0.5,
              }} />

              <div style={{ fontSize: '1.6rem', marginBottom: '0.85rem' }}>
                {card.icon}
              </div>

              <div style={{
                fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.95rem',
                color: 'var(--text)', marginBottom: '0.25rem', lineHeight: 1.3,
              }}>
                {card.title}
              </div>

              <div style={{
                fontFamily: '"DM Mono", monospace', fontSize: '0.72rem', color: 'var(--purple)', marginBottom: '0.3rem',
              }}>
                {card.org}
              </div>

              <div style={{
                fontFamily: '"DM Mono", monospace', fontSize: '0.65rem', color: 'var(--gold)', marginBottom: '0.7rem',
              }}>
                📅 {card.year}
              </div>

              <p style={{ fontSize: '0.83rem', color: 'var(--muted)', lineHeight: 1.65, flexGrow: 1, marginBottom: '1.2rem' }}>
                {card.description}
              </p>
              
              <button
                onClick={() => setSelectedCert(card)}
                style={{
                  background: 'var(--purple-dim)',
                  border: '1px solid rgba(138,100,255,0.4)',
                  color: 'var(--purple-soft)',
                  padding: '0.6rem',
                  borderRadius: '6px',
                  fontFamily: '"DM Mono", monospace',
                  fontSize: '0.75rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  width: '100%',
                  marginTop: 'auto',
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
                View Certificate
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ── MODAL OVERLAY ── */}
      {selectedCert && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 9999,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: 'rgba(5, 5, 12, 0.8)',
          backdropFilter: 'blur(12px)',
          animation: 'fadeIn 0.3s ease',
          padding: '1rem',
        }}>
          {/* Modal Container */}
          <div style={{
            width: '100%', maxWidth: 900,
            background: '#151722',
            borderRadius: 16,
            boxShadow: '0 24px 60px rgba(0,0,0,0.6)',
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.1)',
            display: 'flex', flexDirection: 'column',
          }}>
            
            {/* Header / Banner */}
            <div style={{
              background: 'linear-gradient(90deg, #5f2bdf 0%, #465ae6 100%)',
              padding: '1.5rem 2rem',
              position: 'relative',
            }}>
              <h3 style={{
                fontFamily: 'Syne, sans-serif', fontSize: '1.4rem', fontWeight: 700,
                color: '#fff', margin: '0 0 0.4rem 0',
              }}>
                {selectedCert.title}
              </h3>
              <div style={{
                fontFamily: '"DM Mono", monospace', fontSize: '0.8rem', color: 'rgba(255,255,255,0.8)',
                display: 'flex', alignItems: 'center', gap: '0.8rem',
              }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#fff' }}/>
                  {selectedCert.org}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#fff' }}/>
                  {selectedCert.year}
                </span>
              </div>
              
              <button
                onClick={() => setSelectedCert(null)}
                style={{
                  position: 'absolute', top: '1.5rem', right: '2rem',
                  background: 'rgba(255,255,255,0.15)',
                  border: 'none', width: 32, height: 32, borderRadius: '50%',
                  color: '#fff', fontSize: '1.1rem', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.25)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
              >
                ✕
              </button>
            </div>

            {/* Main Content Area */}
            <div style={{
              display: 'flex', gap: '1.5rem', padding: '1.5rem 2rem',
              flexDirection: window.innerWidth < 768 ? 'column' : 'row',
            }}>
              {/* Left: Image Preview */}
              <div style={{
                flex: '2',
                background: '#0d0f18',
                borderRadius: 12,
                border: '1px solid rgba(255,255,255,0.05)',
                padding: '1rem',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                minHeight: 320,
              }}>
                <div style={{
                  width: '100%', height: '100%',
                  backgroundImage: `url(${selectedCert.image})`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  opacity: selectedCert.image.includes('jpg') ? 0.3 : 1, // subtle opacity logic if image doesn't exist yet
                }} />
                {/* Fallback text if no image yet */}
                <div style={{
                  position: 'absolute', color: 'var(--muted)',
                  fontFamily: '"DM Mono", monospace', fontSize: '0.8rem',
                  pointerEvents: 'none',
                }}>
                  Upload your certificate image here
                </div>
              </div>

              {/* Right: Info Panels */}
              <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                
                {/* Details Panel */}
                <div style={{
                  background: '#1a1d2d', borderRadius: 10, padding: '1.2rem',
                  border: '1px solid rgba(255,255,255,0.05)', flex: 1,
                }}>
                  <div style={{ fontFamily: 'Syne, sans-serif', color: '#fff', fontWeight: 600, marginBottom: '1rem' }}>
                    Details
                  </div>
                  <div style={{ marginBottom: '1rem' }}>
                    <div style={{ color: 'var(--muted)', fontSize: '0.75rem', marginBottom: '0.2rem' }}>Issuer</div>
                    <div style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 500 }}>{selectedCert.org}</div>
                  </div>
                  <div>
                    <div style={{ color: 'var(--muted)', fontSize: '0.75rem', marginBottom: '0.2rem' }}>Year</div>
                    <div style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 500 }}>{selectedCert.year}</div>
                  </div>
                </div>

                {/* Status Panel */}
                <div style={{
                  background: 'linear-gradient(135deg, rgba(20,40,30,0.8), #111a18)',
                  borderRadius: 10, padding: '1.2rem',
                  border: '1px solid rgba(50,200,100,0.1)',
                }}>
                  <div style={{ fontFamily: 'Syne, sans-serif', color: '#4ade80', fontWeight: 600, marginBottom: '0.6rem' }}>
                    Status
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#fff', fontSize: '0.9rem', marginBottom: '0.4rem' }}>
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 8px #4ade80' }}/>
                    Verified
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.75rem' }}>
                    Completed and verified.
                  </div>
                </div>

              </div>
            </div>

            {/* Footer */}
            <div style={{
              padding: '1.2rem 2rem',
              borderTop: '1px solid rgba(255,255,255,0.05)',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              background: 'rgba(0,0,0,0.15)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--muted)', fontSize: '0.75rem', fontFamily: '"DM Mono", monospace' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#5f2bdf' }}/>
                  Professional Certification
                </span>
                <span>Press <kbd style={{ background: '#2a2d3d', padding: '2px 6px', borderRadius: 4, color: '#fff' }}>ESC</kbd> to close</span>
              </div>
              
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a
                  href={selectedCert.image}
                  download
                  style={{
                    background: '#16a34a', color: '#fff', padding: '0.6rem 1.4rem', borderRadius: 6,
                    fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', fontWeight: 600,
                    textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = '#15803d'}
                  onMouseLeave={(e) => e.currentTarget.style.background = '#16a34a'}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                  Download
                </a>
                <button
                  onClick={() => setSelectedCert(null)}
                  style={{
                    background: '#374151', color: '#fff', border: 'none', padding: '0.6rem 1.4rem', borderRadius: 6,
                    fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', fontWeight: 500, cursor: 'pointer',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = '#4b5563'}
                  onMouseLeave={(e) => e.currentTarget.style.background = '#374151'}
                >
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; backdrop-filter: blur(0px); }
          to { opacity: 1; backdrop-filter: blur(12px); }
        }
      `}</style>
    </section>
  )
}
