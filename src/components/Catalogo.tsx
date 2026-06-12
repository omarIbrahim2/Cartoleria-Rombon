const categorie = [
  { icon: '✏️', nome: 'Cancelleria', prodotti: ['Quaderni a righe e quadretti', 'Diari e agende annuali', 'Blocchi notes', 'Post-it e memo pad', 'Penne a sfera e gel', 'Matite e matite colorate', 'Evidenziatori', 'Pennarelli e marcatori'] },
  { icon: '📂', nome: 'Organizzazione', prodotti: ['Raccoglitori e cartelline', 'Buste e portalistini', 'Rubbriche e schedari', 'Spillatrici e perforatrici'] },
  { icon: '🖼️', nome: 'Belle Arti', prodotti: ['Colori acrilici e ad olio', 'Pennelli e tavolozze', 'Tele e blocchi da disegno', 'Acquarelli e pastelli'] },
  { icon: '🎀', nome: 'Articoli Regalo', prodotti: ['Biglietti e cartes', 'Carta da regalo e nastri', 'Scatole e confezionamento', 'Decorazioni e fiocchi'] },
  { icon: '🖨️', nome: 'Carta & Stampa', prodotti: ['Risme di carta A4/A3', 'Carta fotografica', 'Etichette adesive', 'Carta speciale per inkjet'] },
]

export default function Catalogo() {
  return (
    <section id="catalogo" style={{ background: 'var(--blue-50)', padding: '80px 32px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <p style={{ fontSize: 12, letterSpacing: 4, textTransform: 'uppercase', color: 'var(--blue-600)', marginBottom: 12, fontWeight: 600, textAlign: 'center' }}>
          Cosa trovi da noi
        </p>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4vw, 44px)', textAlign: 'center', color: 'var(--blue-900)', marginBottom: 56 }}>
          Il nostro catalogo
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {categorie.map((cat, i) => (
            <div key={i} style={{ background: 'var(--white)', borderRadius: 12, padding: '28px 24px', border: '1px solid var(--blue-100)' }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>{cat.icon}</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, color: 'var(--blue-800)', marginBottom: 16 }}>{cat.nome}</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {cat.prodotti.map((p, j) => (
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
