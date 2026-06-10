import Hoverable from './Hoverable'

const carriers = [
  {
    name: 'Fermopoint',
    logo: '📫',
    color: '#e8f4fd',
    border: '#2563b0',
    desc: 'Ritiro e deposito pacchi Fermopoint. Ricevi i tuoi ordini direttamente in negozio, disponibile anche fuori orario di consegna.',
    badge: 'Ritiro & Deposito',
  },
  {
    name: 'GLS',
    logo: '🟡',
    color: '#fffbeb',
    border: '#f59e0b',
    desc: 'Punto di raccolta GLS autorizzato. Spedisci o ritira i tuoi pacchi GLS comodamente in negozio.',
    badge: 'Spedizioni',
  },
  {
    name: 'UPS',
    logo: '🟤',
    color: '#fdf4ec',
    border: '#92400e',
    desc: 'Access Point UPS ufficiale. Ritiro pacchi non consegnati e spedizioni verso tutto il mondo.',
    badge: 'Access Point',
  },
  {
    name: 'BRT',
    logo: '🔴',
    color: '#fef2f2',
    border: '#dc2626',
    desc: 'Punto di ritiro BRT (Bartolini). Gestisci le tue spedizioni BRT senza code, direttamente qui da noi.',
    badge: 'Punto Ritiro',
  },
]

export default function ServizioPacchi() {
  return (
    <section id="pacchi" style={{ background: 'var(--white)', padding: '80px 32px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <p style={{ fontSize: 12, letterSpacing: 4, textTransform: 'uppercase', color: 'var(--blue-600)', marginBottom: 12, fontWeight: 600, textAlign: 'center' }}>
          Spedizioni e ritiri
        </p>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4vw, 44px)', textAlign: 'center', color: 'var(--blue-900)', marginBottom: 16 }}>
          Servizio Pacchi
        </h2>
        <p style={{ textAlign: 'center', color: 'var(--gray-500)', fontSize: 16, maxWidth: 560, margin: '0 auto 56px', lineHeight: 1.7 }}>
          Siamo punto di ritiro e spedizione per i principali corrieri. Un solo posto per tutte le tue spedizioni.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
          {carriers.map((c, i) => (
            <Hoverable key={i} style={{
              background: c.color, borderRadius: 12, padding: '28px 24px',
              border: `2px solid ${c.border}30`, position: 'relative', overflow: 'hidden',
              transition: 'transform 0.2s, box-shadow 0.2s',
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
          ))}
        </div>

        {/* Info strip */}
        <div style={{
          marginTop: 40, background: 'var(--blue-900)', borderRadius: 12, padding: '24px 32px',
          display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap',
        }}>
          <span style={{ fontSize: 28 }}>💡</span>
          <div>
            <p style={{ color: 'var(--white)', fontWeight: 600, marginBottom: 4 }}>Nessun costo aggiuntivo per il ritiro</p>
            <p style={{ color: 'var(--blue-100)', fontSize: 14 }}>Porta semplicemente il tuo codice di ritiro o l'avviso di consegna mancata. Pensiamo a tutto noi.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
