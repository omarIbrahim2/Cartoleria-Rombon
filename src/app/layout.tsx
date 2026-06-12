import type { Metadata } from 'next'
import './globals.css'
import I18nProvider from '@/providers/I18nProvider'

export const metadata: Metadata = {
  title: 'Cartoleria Rombon — Via Rombon 23, Milano',
  description: 'Cartoleria, fotocopie, belle arti, Fermopoint, GLS, UPS, BRT — Via Rombon 23, Lambrate Milano',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  )
}
