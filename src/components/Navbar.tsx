'use client'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const links = [
    { href: '#servizi', label: 'Servizi' },
    { href: '#pacchi', label: 'Servizio Pacchi' },
    { href: '#catalogo', label: 'Catalogo' },
    { href: '#orari', label: 'Orari & Contatti' },
  ]
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
      <div style={{ display: 'flex', gap: 32 }} className="nav-desktop">
        {links.map(l => (
          <a key={l.href} href={l.href} style={{ color: 'var(--blue-100)', fontSize: 14, fontWeight: 500, letterSpacing: 0.5, transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--white)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--blue-100)')}>
            {l.label}
          </a>
        ))}
      </div>
      {/* Mobile burger */}
      <button onClick={() => setOpen(!open)} style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', color: 'white', fontSize: 24 }} className="nav-burger">☰</button>
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
          .nav-burger { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
