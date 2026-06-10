export default function Footer() {
  return (
    <footer style={{ background: 'var(--gray-900)', padding: '32px', textAlign: 'center' }}>
      <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, color: 'var(--blue-400)', marginBottom: 8 }}>
        Cartoleria Rombon
      </p>
      <p style={{ color: 'var(--gray-500)', fontSize: 13, marginBottom: 4 }}>
        Via Rombon 23, 20134 Milano · Tel. 02 2157232
      </p>
      <p style={{ color: 'var(--gray-500)', fontSize: 12, marginTop: 16 }}>
        © {new Date().getFullYear()} Cartoleria Rombon di Mingardo Laura. Tutti i diritti riservati.
      </p>
    </footer>
  )
}
