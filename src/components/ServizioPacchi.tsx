'use client'
import { useTranslation, Trans } from 'react-i18next'
import Link from 'next/link'
import Hoverable from './Hoverable'

const carriersMeta = [
  { name: 'Fermopoint', logo: '📫', color: '#e8f4fd', border: '#2563b0', url: 'https://www.fermopoint.it/traccia-un-ritiro' },
  { name: 'GLS',        logo: '🔵', color: '#eff6ff', border: '#3b82f6', url: 'https://gls-group.com/IT/it/servizi-online/ricerca-spedizioni' },
  { name: 'UPS',        logo: '🟡', color: '#fffbeb', border: '#f59e0b', url: 'https://www.ups.com/track?loc=it_IT&requester=ST/' },
  { name: 'BRT',        logo: '🔴', color: '#fef2f2', border: '#dc2626', url: 'https://services.brt.it/it/tracking' },
]

export default function ServizioPacchi() {
  const { t } = useTranslation()
  const carriersText = t('parcels.carriers', { returnObjects: true }) as Array<{ desc: string; badge: string }>
  const carriers = carriersMeta.map((m, i) => ({ ...m, ...carriersText[i] }))

  return (
    <section id="pacchi" style={{ background: 'var(--white)', padding: '80px 32px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <p style={{ fontSize: 12, letterSpacing: 4, textTransform: 'uppercase', color: 'var(--blue-600)', marginBottom: 12, fontWeight: 600, textAlign: 'center' }}>
          {t('parcels.label')}
        </p>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4vw, 44px)', textAlign: 'center', color: 'var(--blue-900)', marginBottom: 16 }}>
          {t('parcels.title')}
        </h2>
        <p style={{ textAlign: 'center', color: 'var(--gray-500)', fontSize: 16, maxWidth: 560, margin: '0 auto 56px', lineHeight: 1.7 }}>
          {t('parcels.subtitle')}
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
          {carriers.map((c, i) => {
            const card = (
              <Hoverable key={i} style={{
                background: c.color, borderRadius: 12, padding: '28px 24px',
                border: `2px solid ${c.border}30`, position: 'relative', overflow: 'hidden',
                transition: 'transform 0.2s, box-shadow 0.2s', cursor: 'pointer',
              }}
                hoverStyle={{ transform: 'translateY(-4px)', boxShadow: `0 8px 24px ${c.border}25` }}>
                <span style={{
                  position: 'absolute', top: 16, right: 16, background: c.border, color: 'white',
                  fontSize: 10, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase',
                  padding: '3px 10px', borderRadius: 20,
                }}>{c.badge}</span>
                <div style={{ fontSize: 40, marginBottom: 12 }}>{c.logo}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, color: 'var(--blue-900)', marginBottom: 10 }}>{c.name}</h3>
                <p style={{ color: 'var(--gray-700)', fontSize: 14, lineHeight: 1.7 }}>{c.desc}</p>
              </Hoverable>
            )
            return (
              <Link key={i} href={c.url} target="_blank" rel="noopener noreferrer" style={{ display: 'block', color: 'inherit' }}>
                {card}
              </Link>
            )
          })}
        </div>

        {/* Info strip */}
        <div style={{
          marginTop: 40, background: 'var(--blue-900)', borderRadius: 12, padding: '24px 32px',
          display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap',
        }}>
          <span style={{ fontSize: 28 }}>💡</span>
          <div>
            <p style={{ color: 'var(--white)', fontWeight: 600, marginBottom: 4 }}>{t('parcels.info_title')}</p>
            <p style={{ color: 'var(--blue-100)', fontSize: 14 }}>{t('parcels.info_desc')}</p>
          </div>
        </div>

        {/* Announcement */}
        <Hoverable
          className="announcement-pulse"
          style={{
            marginTop: 20, background: '#fefce8', border: '2px solid #f59e0b', borderRadius: 12,
            padding: '24px 32px', display: 'flex', alignItems: 'flex-start', gap: 16, flexWrap: 'wrap',
            position: 'relative', overflow: 'hidden', transition: 'transform 0.2s, box-shadow 0.2s',
          }}
          hoverStyle={{ transform: 'translateY(-4px)', boxShadow: '0 8px 24px rgba(245,158,11,0.25)' }}>
          <span style={{
            position: 'absolute', top: 16, right: 16, background: '#f59e0b', color: '#fff',
            fontSize: 10, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase',
            padding: '3px 10px', borderRadius: 20,
          }}>{t('parcels.announcement_badge')}</span>
          <span className="announcement-icon" style={{ fontSize: 36 }}>📢</span>
          <div style={{ flex: 1 }}>
            <p style={{ color: '#92400e', fontWeight: 700, fontSize: 17, marginBottom: 6 }}>
              {t('parcels.announcement_title')}
            </p>
            <p style={{ color: '#78350f', fontSize: 14, lineHeight: 1.7 }}>
              <Trans
                i18nKey="parcels.announcement_desc"
                components={{ bold: <strong /> }}
              />
            </p>
          </div>
        </Hoverable>
      </div>
    </section>
  )
}
