// ================================================================
// src/components/Footer.tsx
// ================================================================
// CHANGE: Update the name or year directly here if needed.
// ================================================================

import React from 'react'
import { personalInfo } from '../data/portfolioData'

export default function Footer() {
  return (
    <footer style={{
      textAlign: 'center', padding: '2rem',
      borderTop: '1px solid var(--border)',
      fontFamily: '"DM Mono", monospace', fontSize: '0.72rem',
      color: 'var(--muted)',
    }}>
      {/* CHANGE: Footer text */}
      Built with{' '}
      <span style={{ color: 'var(--purple)' }}>♥</span>
      {' '}by {personalInfo.shortName} ·{' '}
      <span style={{ color: 'var(--purple)' }}>{new Date().getFullYear()}</span>
    </footer>
  )
}
