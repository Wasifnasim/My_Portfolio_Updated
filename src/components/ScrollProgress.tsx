// ================================================================
// src/components/ScrollProgress.tsx
// ================================================================
// Thin progress bar at the very top of the page.
// CHANGE: Modify the background gradient to change bar color.
// ================================================================

import React, { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [pct, setPct] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight
      setPct((window.scrollY / max) * 100)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      style={{
        position: 'fixed', top: 0, left: 0, height: 2, zIndex: 2000,
        // CHANGE: update gradient stops to change progress bar color
        background: 'linear-gradient(90deg, #8a64ff, #f0c060)',
        width: `${pct}%`,
        transition: 'width 0.1s linear',
      }}
    />
  )
}
