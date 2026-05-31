// ================================================================
// src/components/BackToTop.tsx
// ================================================================
// Floating "↑" button that appears after scrolling 400px.
// ================================================================

import React, { useEffect, useState } from 'react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      title="Back to top"
      style={{
        position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 999,
        width: 44, height: 44, borderRadius: 10,
        // CHANGE: button background gradient
        background: 'linear-gradient(135deg, #8a64ff, #5030cc)',
        border: 'none', cursor: 'pointer', color: '#fff', fontSize: '1.1rem',
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        transition: 'opacity 0.3s, transform 0.2s',
        boxShadow: '0 4px 16px rgba(138,100,255,0.4)',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-3px)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
    >
      ↑
    </button>
  )
}
