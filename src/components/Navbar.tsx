'use client'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { t, i18n } = useTranslation()

  const links = [
    { href: '#servizi', label: t('nav.services') },
    { href: '#pacchi', label: t('nav.parcels') },
    { href: '#catalogo', label: t('nav.catalog') },
    { href: '#orari', label: t('nav.hours') },
  ]

  const toggleLang = () => i18n.changeLanguage(i18n.language === 'it' ? 'en' : 'it')

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: 'var(--blue-900)', borderBottom: '1px solid var(--blue-800)',
      padding: '0 32px', display: 'flex', alignItems: 'center',
      justifyContent: 'space-between', height: 64,
    }}>
      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: 'var(--white)', letterSpacing: 0.5 }}>
        Cartoleria Rombon
      </div>

      {/* Desktop */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="nav-desktop">
        {links.map(l => (
          <a key={l.href} href={l.href} style={{ color: 'var(--blue-100)', fontSize: 14, fontWeight: 500, letterSpacing: 0.5, transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--white)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--blue-100)')}>
            {l.label}
          </a>
        ))}
        <button
          onClick={toggleLang}
          style={{
            background: 'none', border: '1px solid var(--blue-600)', borderRadius: 6,
            color: 'var(--blue-100)', fontSize: 13, fontWeight: 700, padding: '4px 12px',
            cursor: 'pointer', letterSpacing: 1, transition: 'border-color 0.2s, color 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--white)'; e.currentTarget.style.color = 'var(--white)' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--blue-600)'; e.currentTarget.style.color = 'var(--blue-100)' }}>
          {i18n.language === 'it' ? 'EN' : 'IT'}
        </button>
      </div>

      {/* Mobile burger */}
      <div style={{ display: 'none', alignItems: 'center', gap: 12 }} className="nav-mobile-right">
        <button
          onClick={toggleLang}
          style={{
            background: 'none', border: '1px solid var(--blue-600)', borderRadius: 6,
            color: 'var(--blue-100)', fontSize: 12, fontWeight: 700, padding: '3px 10px',
            cursor: 'pointer',
          }}>
          {i18n.language === 'it' ? 'EN' : 'IT'}
        </button>
        <button onClick={() => setOpen(!open)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'white', fontSize: 24 }} className="nav-burger">☰</button>
      </div>

      {open && (
        <div style={{ position: 'absolute', top: 64, left: 0, right: 0, background: 'var(--blue-900)', padding: '16px 32px', display: 'flex', flexDirection: 'column', gap: 16 }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ color: 'var(--blue-100)', fontSize: 16 }}>{l.label}</a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-right { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
