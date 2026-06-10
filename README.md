# Cartoleria Rombon — Sito Web v2

Next.js **16.2.9** · React 19 · TypeScript

## Avvio rapido
```bash
npm install
npm run dev
# → http://localhost:3000
```

## Pubblicare gratis su Vercel
1. Crea account su vercel.com
2. Carica il progetto su GitHub
3. Importa il repo su Vercel → pubblica automaticamente

## Struttura
```
src/
  app/              → layout.tsx, page.tsx, globals.css
  components/
    Navbar.tsx
    Hero.tsx
    Services.tsx        ← 6 servizi configurati
    ServizioPacchi.tsx  ← Fermopoint + GLS + UPS + BRT
    Catalogo.tsx
    Orari.tsx           ← link Google Maps aggiornato
    Footer.tsx
```

## Modifiche rispetto a v1
- ⬆️ Next.js 14 → 16.2.9 (React 19)
- 🎨 Tema blu (era crema/terracotta)
- 🛠️ Services: 6 card con hover animation
- 📦 ServizioPacchi: Fermopoint + GLS + UPS + BRT
- 📍 Link Google Maps aggiornato
