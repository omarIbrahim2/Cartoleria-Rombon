import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import ServizioPacchi from '@/components/ServizioPacchi'
import Catalogo from '@/components/Catalogo'
import Orari from '@/components/Orari'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <ServizioPacchi />
        <Catalogo />
        <Orari />
      </main>
      <Footer />
    </>
  )
}
