// ================================================================
// src/components/CustomCursor.tsx
// ================================================================
// Custom purple dot cursor with a trailing ring.
// CHANGE: To disable custom cursor, remove <CustomCursor /> from
//         App.tsx and delete `cursor: none` from body in index.css
// CHANGE: Adjust dot/ring sizes in the style objects below.
// ================================================================

import React, { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot  = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    const move = (e: MouseEvent) => {
      dot.style.left  = e.clientX + 'px'
      dot.style.top   = e.clientY + 'px'
      setTimeout(() => {
        ring.style.left = e.clientX + 'px'
        ring.style.top  = e.clientY + 'px'
      }, 80)
    }

    const enlarge = () => {
      dot.style.transform  = 'translate(-50%,-50%) scale(2.2)'
      dot.style.background = '#f0c060' // CHANGE: cursor hover color
    }
    const shrink = () => {
      dot.style.transform  = 'translate(-50%,-50%) scale(1)'
      dot.style.background = '#8a64ff' // CHANGE: cursor default color
    }

    document.addEventListener('mousemove', move)
    document.querySelectorAll('a,button').forEach((el) => {
      el.addEventListener('mouseenter', enlarge)
      el.addEventListener('mouseleave', shrink)
    })

    return () => document.removeEventListener('mousemove', move)
  }, [])

  const dotStyle: React.CSSProperties = {
    position: 'fixed', top: 0, left: 0,
    width: 14, height: 14,               // CHANGE: cursor dot size
    background: '#8a64ff',               // CHANGE: cursor dot color
    borderRadius: '50%',
    pointerEvents: 'none', zIndex: 9999,
    transform: 'translate(-50%,-50%)',
    transition: 'transform 0.08s, background 0.2s',
    mixBlendMode: 'screen',
  }

  const ringStyle: React.CSSProperties = {
    position: 'fixed', top: 0, left: 0,
    width: 36, height: 36,               // CHANGE: ring size
    border: '1.5px solid rgba(138,100,255,0.5)', // CHANGE: ring color
    borderRadius: '50%',
    pointerEvents: 'none', zIndex: 9998,
    transform: 'translate(-50%,-50%)',
    transition: 'transform 0.18s ease-out',
  }

  return (
    <>
      <div ref={dotRef}  style={dotStyle} />
      <div ref={ringRef} style={ringStyle} />
    </>
  )
}
