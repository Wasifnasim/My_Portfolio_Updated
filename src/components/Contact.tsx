// ================================================================
// src/components/Contact.tsx
// ================================================================
// Contact section with clickable contact cards and a contact form.
// ================================================================

import React from 'react'
import { personalInfo } from '../data/portfolioData'
import { SectionLabel, SectionTitle } from './About'

const contactCards = [
  {
    icon: '📧',
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: '📱',
    label: 'Phone',
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'wasifnasim',
    href: personalInfo.linkedin,
  },
  {
    icon: '💻',
    label: 'GitHub',
    value: 'Wasifnasim',
    href: personalInfo.github,
  },
]

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '6rem 2rem 8rem', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <div className="reveal" style={{ marginBottom: '4rem' }}>
          <SectionLabel>Let's Connect</SectionLabel>
          <SectionTitle>Get In Touch</SectionTitle>
        </div>

        <div className="reveal" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3rem',
        }}>
          {/* Left Column: Contact Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            {contactCards.map((card) => (
              <a key={card.label} href={card.href} target={card.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener" style={cardStyle}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(138,100,255,0.5)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.background = 'var(--surface2)' }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.background = 'var(--surface)' }}
              >
                <div style={{ fontSize: '1.6rem', color: 'var(--purple-soft)' }}>{card.icon}</div>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text)', fontWeight: 600, marginBottom: '0.2rem' }}>
                    {card.label}
                  </div>
                  <div style={{ fontFamily: '"DM Mono", monospace', fontSize: '0.75rem', color: 'var(--purple-soft)' }}>
                    {card.value}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Right Column: Contact Form */}
          <div style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: 14,
            padding: '2.5rem',
            boxShadow: '0 8px 30px rgba(0,0,0,0.2)'
          }}>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }} onSubmit={(e) => e.preventDefault()}>
              <div>
                <label style={labelStyle}>Name</label>
                <input type="text" style={inputStyle} placeholder="Your Name" />
              </div>
              
              <div>
                <label style={labelStyle}>Email</label>
                <input type="email" style={inputStyle} placeholder="Your Email" />
              </div>

              <div>
                <label style={labelStyle}>Subject</label>
                <input type="text" style={inputStyle} placeholder="Subject" />
              </div>

              <div>
                <label style={labelStyle}>Message</label>
                <textarea rows={5} style={{ ...inputStyle, resize: 'vertical' }} placeholder="Your Message" />
              </div>

              <button type="submit" style={{
                padding: '0.8rem 1.8rem', borderRadius: 6,
                background: 'linear-gradient(135deg, #8a64ff, #5030cc)', 
                color: '#fff', fontFamily: 'Outfit, sans-serif',
                fontWeight: 600, fontSize: '0.95rem', border: 'none',
                cursor: 'pointer', marginTop: '0.5rem', alignSelf: 'flex-start',
                boxShadow: '0 4px 15px rgba(138,100,255,0.3)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(138,100,255,0.4)' }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(138,100,255,0.3)' }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

const cardStyle: React.CSSProperties = {
  background: 'var(--surface)', border: '1px solid var(--border)',
  borderRadius: 12, padding: '1.2rem 1.8rem',
  textDecoration: 'none', display: 'flex',
  alignItems: 'center', gap: '1.2rem',
  transition: 'border-color 0.2s, transform 0.2s, background 0.2s',
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: 'Outfit, sans-serif',
  fontSize: '0.85rem',
  fontWeight: 600,
  color: 'var(--text)',
  marginBottom: '0.4rem',
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '0.85rem 1rem',
  background: 'rgba(7, 5, 15, 0.5)',
  border: '1px solid var(--border)',
  borderRadius: 8,
  fontFamily: 'Outfit, sans-serif',
  fontSize: '0.9rem',
  color: 'var(--text)',
  outline: 'none',
  transition: 'border-color 0.2s',
}
