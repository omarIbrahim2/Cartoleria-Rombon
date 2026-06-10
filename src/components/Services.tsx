import Hoverable from './Hoverable'

const services = [
  { icon: '✏️', title: 'Cancelleria & Ufficio', desc: 'Penne, matite, quaderni, agende, raccoglitori, buste, cartelline e tutto il necessario per scuola e ufficio.' },
  { icon: '🖨️', title: 'Fotocopie & Stampa', desc: 'Fotocopie in bianco/nero e a colori, stampa documenti, plastificazione e rilegatura al momento.' },
  { icon: '🎨', title: 'Belle Arti', desc: 'Colori acrilici, ad olio, acquarelli, tele, pennelli e materiali per artisti professionisti e hobbisti.' },
  { icon: '🎁', title: 'Articoli Regalo', desc: 'Biglietti d\'auguri, carte da regalo, nastri, fiocchi e articoli per confezionamento e cerimonie.' },
  { icon: '🖼️', title: 'Personalizzazione', desc: 'Stampa su tazza, cuscini, teli mare, calendari personalizzati e gadget con le tue foto o loghi.' },
  { icon: '📦', title: 'Spedizioni & Pacchi', desc: 'Ritiro e consegna pacchi con Fermopoint, GLS, UPS e BRT. Imballaggi disponibili in negozio.' },
]

export default function Services() {
  return (
    <section id="servizi" style={{ background: 'var(--gray-50)', padding: '80px 32px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <p style={{ fontSize: 12, letterSpacing: 4, textTransform: 'uppercase', color: 'var(--blue-600)', marginBottom: 12, fontWeight: 600, textAlign: 'center' }}>
          Cosa facciamo
        </p>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4vw, 44px)', textAlign: 'center', color: 'var(--blue-900)', marginBottom: 56 }}>
          I nostri servizi
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          {services.map((s, i) => (
            <Hoverable key={i} style={{
              background: 'var(--white)', borderRadius: 12, padding: '32px 28px',
              border: '1px solid var(--gray-200)', transition: 'box-shadow 0.2s, transform 0.2s',
            }}
              hoverStyle={{ boxShadow: '0 8px 32px rgba(37,99,176,0.12)', transform: 'translateY(-4px)' }}>
              <div style={{ fontSize: 36, marginBottom: 16 }}>{s.icon}</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, color: 'var(--blue-800)', marginBottom: 10 }}>{s.title}</h3>
              <p style={{ color: 'var(--gray-500)', fontSize: 15, lineHeight: 1.7 }}>{s.desc}</p>
            </Hoverable>
          ))}
        </div>
      </div>
    </section>
  )
}
