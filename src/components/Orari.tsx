import Hoverable from './Hoverable'

const orari = [
  { giorno: 'Lunedì – Venerdì', ore: '08:30 – 13:00 / 15:00 – 19:00' },
  { giorno: 'Sabato', ore: '08:30 – 13:00' },
  { giorno: 'Domenica', ore: 'Chiuso' },
]

export default function Orari() {
  return (
    <section id="orari" style={{ background: 'var(--blue-900)', padding: '80px 32px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 48 }}>
        {/* Orari */}
        <div>
          <p style={{ fontSize: 12, letterSpacing: 4, textTransform: 'uppercase', color: 'var(--blue-400)', marginBottom: 12, fontWeight: 600 }}>Quando siamo aperti</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, color: 'var(--white)', marginBottom: 32 }}>Orari</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {orari.map((o, i) => (
              <div key={i} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 0', borderBottom: '1px solid rgba(255,255,255,0.1)',
                flexWrap: 'wrap', gap: 8,
              }}>
                <span style={{ color: 'var(--blue-100)', fontWeight: 500 }}>{o.giorno}</span>
                <span style={{ color: o.ore === 'Chiuso' ? 'var(--blue-400)' : 'var(--white)', fontWeight: 600 }}>{o.ore}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contatti */}
        <div>
          <p style={{ fontSize: 12, letterSpacing: 4, textTransform: 'uppercase', color: 'var(--blue-400)', marginBottom: 12, fontWeight: 600 }}>Dove siamo</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, color: 'var(--white)', marginBottom: 32 }}>Contatti</h2>
          {[
            { icon: '📍', label: 'Indirizzo', value: 'Via Rombon 23, 20134 Milano' },
            { icon: '📞', label: 'Telefono', value: '02 2157232' },
            { icon: '🚇', label: 'Metro', value: 'M2 Lambrate (5 min a piedi)' },
          ].map((c, i) => (
            <div key={i} style={{ display: 'flex', gap: 16, padding: '14px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <span style={{ fontSize: 20 }}>{c.icon}</span>
              <div>
                <p style={{ fontSize: 11, color: 'var(--blue-400)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 2 }}>{c.label}</p>
                <p style={{ color: 'var(--white)', fontWeight: 400 }}>{c.value}</p>
              </div>
            </div>
          ))}
          <Hoverable
            as="a"
            href="https://share.google/nzifmPniQXonyZfv3"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 28,
              background: 'var(--blue-600)', color: 'white', padding: '12px 24px',
              borderRadius: 6, fontSize: 14, fontWeight: 600, transition: 'background 0.2s',
            }}
            hoverStyle={{ background: 'var(--blue-500)' }}>
            📍 Aprire in Google Maps
          </Hoverable>
        </div>
      </div>
    </section>
  )
}
