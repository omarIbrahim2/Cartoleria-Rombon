'use client'
import { useTranslation } from 'react-i18next'
import Hoverable from './Hoverable'

const icons = ['✏️', '🖨️', '🎨', '🎁', '🖼️', '📦']

export default function Services() {
  const { t } = useTranslation()
  const items = t('services.items', { returnObjects: true }) as Array<{ title: string; desc: string }>

  return (
    <section id="servizi" style={{ background: 'var(--gray-50)', padding: '80px 32px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <p style={{ fontSize: 12, letterSpacing: 4, textTransform: 'uppercase', color: 'var(--blue-600)', marginBottom: 12, fontWeight: 600, textAlign: 'center' }}>
          {t('services.label')}
        </p>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4vw, 44px)', textAlign: 'center', color: 'var(--blue-900)', marginBottom: 56 }}>
          {t('services.title')}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          {items.map((s, i) => (
            <Hoverable key={i} style={{
              background: 'var(--white)', borderRadius: 12, padding: '32px 28px',
              border: '1px solid var(--gray-200)', transition: 'box-shadow 0.2s, transform 0.2s',
            }}
              hoverStyle={{ boxShadow: '0 8px 32px rgba(37,99,176,0.12)', transform: 'translateY(-4px)' }}>
              <div style={{ fontSize: 36, marginBottom: 16 }}>{icons[i]}</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, color: 'var(--blue-800)', marginBottom: 10 }}>{s.title}</h3>
              <p style={{ color: 'var(--gray-500)', fontSize: 15, lineHeight: 1.7 }}>{s.desc}</p>
            </Hoverable>
          ))}
        </div>
      </div>
    </section>
  )
}
