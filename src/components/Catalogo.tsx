'use client'
import { useTranslation } from 'react-i18next'

const icons = ['✏️', '📂', '🖼️', '🎀', '🖨️']

export default function Catalogo() {
  const { t } = useTranslation()
  const items = t('catalog.items', { returnObjects: true }) as Array<{ name: string; products: string[] }>

  return (
    <section id="catalogo" style={{ background: 'var(--blue-50)', padding: '80px 32px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <p style={{ fontSize: 12, letterSpacing: 4, textTransform: 'uppercase', color: 'var(--blue-600)', marginBottom: 12, fontWeight: 600, textAlign: 'center' }}>
          {t('catalog.label')}
        </p>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4vw, 44px)', textAlign: 'center', color: 'var(--blue-900)', marginBottom: 56 }}>
          {t('catalog.title')}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {items.map((cat, i) => (
            <div key={i} style={{ background: 'var(--white)', borderRadius: 12, padding: '28px 24px', border: '1px solid var(--blue-100)' }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>{icons[i]}</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, color: 'var(--blue-800)', marginBottom: 16 }}>{cat.name}</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {cat.products.map((p, j) => (
                  <li key={j} style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--gray-700)', fontSize: 14 }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--blue-500)', flexShrink: 0 }} />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
