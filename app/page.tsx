import Hero from '@/components/Hero'
import WhatWeDo from '@/components/WhatWeDo'
import WhyAI from '@/components/WhyAI'
import SystemsMap from '@/components/SystemsMap'
import StudioFlagships from '@/components/StudioFlagships'
import ClientMVPs from '@/components/ClientMVPs'
import LabsExperiments from '@/components/LabsExperiments'
import HowEngagementsWork from '@/components/HowEngagementsWork'
import PricingPhilosophy from '@/components/PricingPhilosophy'
import StartABuild from '@/components/StartABuild'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WhatWeDo />
      <WhyAI />
      <SystemsMap />
      <StudioFlagships />
      <ClientMVPs />
      <LabsExperiments />
      <HowEngagementsWork />
      <PricingPhilosophy />
      <StartABuild />
      <Footer />
    </main>
  )
}
