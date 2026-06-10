import Hoverable from './Hoverable'

export default function Hero() {
  return (
    <section style={{
      background: 'linear-gradient(135deg, var(--blue-900) 0%, var(--blue-700) 60%, var(--blue-500) 100%)',
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      padding: '100px 32px 60px', position: 'relative', overflow: 'hidden',
    }}>
      {/* Decorative circles */}
      <div style={{ position: 'absolute', top: -80, right: -80, width: 400, height: 400, borderRadius: '50%', background: 'rgba(96,165,250,0.12)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: -60, left: -60, width: 300, height: 300, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <p style={{ fontSize: 13, letterSpacing: 4, textTransform: 'uppercase', color: 'var(--blue-400)', marginBottom: 20, fontWeight: 500 }}>
          Via Rombon 23 · Milano Lambrate
        </p>
        <h1 style={{ fontSize: 'clamp(40px, 7vw, 80px)', fontWeight: 700, color: 'var(--white)', marginBottom: 24, lineHeight: 1.1 }}>
          Cartoleria Rombon
        </h1>
        <p style={{ fontSize: 'clamp(16px, 2.5vw, 22px)', color: 'var(--blue-100)', marginBottom: 48, maxWidth: 560, margin: '0 auto 48px', lineHeight: 1.7 }}>
          Il tuo punto di riferimento a Lambrate per cancelleria, fotocopie, spedizioni e molto altro.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Hoverable as="a" href="#servizi" style={{
            background: 'var(--white)', color: 'var(--blue-800)', padding: '14px 32px',
            borderRadius: 6, fontWeight: 600, fontSize: 15, transition: 'transform 0.2s',
          }}
            hoverStyle={{ transform: 'translateY(-2px)' }}>
            I nostri servizi
          </Hoverable>
          <Hoverable as="a" href="#orari" style={{
            background: 'transparent', color: 'var(--white)', padding: '14px 32px',
            borderRadius: 6, fontWeight: 600, fontSize: 15, border: '2px solid rgba(255,255,255,0.4)', transition: 'border-color 0.2s',
          }}
            hoverStyle={{ borderColor: 'white' }}>
            Orari e contatti
          </Hoverable>
        </div>
      </div>
    </section>
  )
}
