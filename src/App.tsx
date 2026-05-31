// ================================================================
// src/App.tsx  —  Root component
// ================================================================
// This file assembles all sections in order.
// CHANGE: Comment out any section import + JSX tag to hide it.
// CHANGE: Reorder the JSX tags to reorder sections on the page.
// ================================================================

import React, { useEffect } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'
import Achievements from './components/Achievements'
export default function App() {
  // ── Scroll reveal: adds .visible class to elements with .reveal
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.reveal').forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      {/* ── UI Utilities ──────────────────────────── */}
      <CustomCursor />
      <ScrollProgress />
      <BackToTop />

      {/* ── Background decorations ────────────────── */}
      <div className="bg-grid" />
      <div className="bg-orb bg-orb-1" />
      <div className="bg-orb bg-orb-2" />

      {/* ── Navigation bar ────────────────────────── */}
      <Navigation />

      {/* ── Page sections — reorder or remove here ── */}
      <main>
        <Hero />
        <div className="divider" />
        <About />
        <div className="divider" />
        <Skills />
        <div className="divider" />
        <Experience />
        <div className="divider" />
        <Projects />
        <div className="divider" />
        <Education />
        <div className="divider" />
        <Achievements />
        <div className="divider" />
        <Certifications />
        <div className="divider" />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
