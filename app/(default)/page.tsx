"use client"

import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import Advantages from '@/components/advantages'
import Industry from '@/components/industry'

export default function Home() {
  return (
    <>
      <Hero />
      <Advantages />
      <Features />
      <Industry />
      {/* <FeaturesBlocks /> */}
      <Testimonials />
      {/* <Newsletter /> */}
    </>
  )
}
