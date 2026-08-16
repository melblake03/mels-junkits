import Image from 'next/image'
import { ArrowRight, Sparkle } from 'lucide-react'
import { Button } from '@/components/ui/button'

const COLLECTIONS = [
  {
    name: 'Lanyards',
    description:
      'Handmade beaded lanyards designed to brighten your workday while showing off your unique style.',
    price: 'Starting at $18',
    image: '/images/collection-lanyards.png',
    alt: 'Handmade beaded lanyard in pink and teal with gold charms',
  },
  {
    name: 'Badge Reels',
    description:
      'Cute, colorful badge reels handcrafted to add personality to your everyday routine.',
    price: 'Starting at $12',
    image: '/images/collection-badge-reels.png',
    alt: 'Decorative handmade badge reel with pink, teal and gold floral design',
  },
  {
    name: 'Keychains',
    description:
      'Fun and functional keychains customized with beads, charms, and your favorite colors.',
    price: 'Starting at $10',
    image: '/images/collection-keychains.png',
    alt: 'Handmade beaded keychain with tassel and gold accents',
  },
  {
    name: 'Anklets',
    description:
      'Delicate handmade anklets designed to match your personality and style.',
    price: 'Starting at $15',
    image: '/images/collection-anklets.png',
    alt: 'Dainty handmade beaded anklet with gold and pearl beads',
  },
]

export function FeaturedCollections() {
  return (
    <section id="collections" className="scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Handcrafted Collections
          </p>

          <h2 className="mt-3 text-balance font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Shop My Favorite Jun&apos;Kits
          </h2>

          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Every Jun&apos;Kit is handcrafted with care and customized to match
            your unique style.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {COLLECTIONS.map((item) => (
            <article
              key={item.name}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="relative aspect-square overflow-hidden bg-secondary">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <span className="absolute left-3 top-3 rounded-full bg-card/90 px-3 py-1 text-xs font-semibold text-foreground shadow-sm backdrop-blur">
                  {item.price}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-serif text-xl font-bold text-foreground">
                  {item.name}
                </h3>

                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>

                <Button
                  nativeButton={false}
                  variant="ghost"
                  className="mt-4 h-9 justify-start rounded-full px-3 text-sm font-semibold text-primary hover:bg-secondary hover:text-primary"
                  render={<a href="/shop" />}
                >
                  View Collection
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* Freestyle Creations */}
        <article className="group mt-6 grid overflow-hidden rounded-3xl border border-grape/20 bg-gradient-to-br from-grape/10 via-card to-teal/10 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-grape/10 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden md:aspect-auto">
            <Image
              src="/images/collection-freestyle.png"
              alt="A colorful freestyle handmade creation"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="flex flex-col justify-center gap-4 p-8 md:p-10">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-grape/15 px-3 py-1 text-xs font-semibold text-grape">
              <Sparkle
                className="size-3.5"
                fill="currentColor"
                strokeWidth={1}
              />
              Designed Just for You
            </span>

            <h3 className="font-serif text-3xl font-bold text-foreground">
              Freestyle Creations
            </h3>

            <p className="text-pretty leading-relaxed text-muted-foreground">
              Can't decide? Let Mel create something completely unique using
              your favorite colors, beads, charms, and personal style. Every
              freestyle creation is one-of-a-kind.
            </p>

            <Button
              nativeButton={false}
              className="h-11 w-fit rounded-full bg-grape px-6 text-sm text-grape-foreground hover:bg-grape/90"
              render={<a href="/shop" />}
            >
              <Sparkle
                className="size-4"
                fill="currentColor"
                strokeWidth={1}
              />
              Build Your Jun&apos;Kit™
            </Button>
          </div>
        </article>
      </div>
    </section>
  )
}