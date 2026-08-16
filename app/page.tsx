import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { FeaturedCollections } from '@/components/featured-collections'
import { AboutMel } from '@/components/about-mel'
import { Gallery } from '@/components/gallery'
import { WhyChooseUs } from '@/components/why-choose-us'
import { Testimonials } from '@/components/testimonials'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <FeaturedCollections />
        <AboutMel />
        <Gallery />
        <WhyChooseUs />
        <Testimonials />
      </main>
      <SiteFooter />
    </div>
  )
}
