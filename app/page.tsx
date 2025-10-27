// app/page.tsx
import Navbar from '@/components/ui/Navbar'
import Hero from '@/components/ui/Hero'
import Mission from '@/components/ui/Mission'
import Features from '@/components/ui/Features'
import HowItWorks from '@/components/ui/HowItWorks'
import Steps from '@/components/ui/Steps'
import Testimonials from '@/components/ui/Testimonials'
import CTA from '@/components/ui/CTA'
import Footer from '@/components/ui/Footer'

export default function Home() {
  return (
    <main className="bg-[#f6f7f8] text-[#0f1720]">
      <Navbar />
      <Hero />
      <Mission />
      <Features />
      <HowItWorks />
      <Steps />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
