import Image from 'next/image'
import { Heart, ShoppingBag, Sparkle, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sparkles } from '@/components/sparkles'

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-secondary via-background to-background"
    >
      <Sparkles />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-14 sm:px-6 md:grid-cols-2 md:gap-8 md:pb-24 md:pt-20 lg:px-8">
        <div className="text-center md:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card px-4 py-1.5 text-sm font-medium text-primary shadow-sm">
            <Heart className="size-4" fill="currentColor" />
            💖 Handmade in Kansas City
          </span>

         <h1 className="mt-6 text-balance font-serif text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
  Create Something{' '}
  <span className="bg-gradient-to-r from-primary via-primary to-gold bg-clip-text text-transparent">
    That's Uniquely Yours
  </span>
</h1>

          <p className="mx-auto mt-8 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground md:mx-0">
 Handmade lanyards, badge reels, keychains, anklets, and one-of-a-kind creations crafted to reflect your unique style.
</p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:justify-start">
            <Button
              nativeButton={false}
              className="h-12 w-full rounded-full px-8 text-base shadow-lg shadow-primary/25 sm:w-auto"
              render={<a href="#collections" />}
            >
              <ShoppingBag className="size-5" />
              Shop Now
            </Button>
            <Button
              nativeButton={false}
              variant="outline"
              className="h-12 w-full rounded-full border-grape/30 bg-card/60 px-8 text-base text-grape hover:bg-grape/10 hover:text-grape sm:w-auto"
              render={<a href="#build" />}
            >
              <Sparkle className="size-5" fill="currentColor" strokeWidth={1} />
              Build Your Jun&apos;Kit
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3 md:justify-start">
            <div className="flex text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4" fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Loved by <span className="font-semibold text-foreground">500+</span> happy customers
            </p>
          </div>
        </div>

        <div className="animate-bob relative mx-auto w-full max-w-md">
          <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-tr from-primary/30 via-grape/20 to-teal/30 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-card bg-card p-2 shadow-2xl shadow-primary/15">
            <Image
              src="/images/hero-collage.png"
              alt="A bright collage of handmade beaded lanyards, badge reels, keychains and anklets in pink, teal, purple and gold"
              width={720}
              height={720}
              priority
              className="h-full w-full rounded-[1.5rem] object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 flex items-center gap-2 rounded-2xl border border-border bg-card px-4 py-3 shadow-xl">
            <span className="flex size-9 items-center justify-center rounded-full bg-teal/15 text-teal">
              <Heart className="size-4" fill="currentColor" />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-foreground">Made with love</p>
              <p className="text-xs text-muted-foreground">One piece at a time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
