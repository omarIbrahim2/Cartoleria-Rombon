'use client'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()
  return (
    <footer style={{ background: 'var(--gray-900)', padding: '32px', textAlign: 'center' }}>
      <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, color: 'var(--blue-400)', marginBottom: 8 }}>
        Cartoleria Rombon
      </p>
      <p style={{ color: 'var(--gray-500)', fontSize: 13, marginBottom: 4 }}>
        {t('footer.address')}
      </p>
      <p style={{ color: 'var(--gray-500)', fontSize: 12, marginTop: 16 }}>
        {t('footer.rights', { year: new Date().getFullYear() })}
      </p>
    </footer>
  )
}
