import Image from 'next/image'
import { Heart } from 'lucide-react'

const GALLERY = [
  { src: '/images/gallery-1.png', alt: 'Beaded phone charm strap in pink and teal', ratio: 'aspect-[3/4]' },
  { src: '/images/gallery-5.png', alt: 'Colorful beaded keychains with tassels', ratio: 'aspect-square' },
  { src: '/images/gallery-3.png', alt: 'Custom name lanyard spelled in letter beads', ratio: 'aspect-[4/5]' },
  { src: '/images/gallery-2.png', alt: 'Stack of handmade beaded bracelets on marble', ratio: 'aspect-square' },
  { src: '/images/gallery-4.png', alt: 'Glitter badge reel with a butterfly charm', ratio: 'aspect-[3/4]' },
  { src: '/images/gallery-6.png', alt: 'Delicate beaded anklet with a gold shell charm', ratio: 'aspect-[4/5]' },
  { src: '/images/collection-freestyle.png', alt: 'A colorful freestyle beaded creation', ratio: 'aspect-square' },
  { src: '/images/collection-lanyards.png', alt: 'Beaded lanyard in pink and teal with charms', ratio: 'aspect-[4/5]' },
]

export function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Made with Love
          </p>
          <h2 className="mt-3 text-balance font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Inspired by You, Handmade by Mel
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Every creation tells a story. Browse a few of my favorites and imagine what we can create together.
          </p>
        </div>

        <div className="mt-12 columns-2 gap-4 lg:columns-3 [&>*]:mb-4">
          {GALLERY.map((item) => (
            <figure
              key={item.src}
              className="group relative block break-inside-avoid overflow-hidden rounded-3xl border border-border bg-secondary shadow-sm"
            >
              <div className={`relative ${item.ratio}`}>
                <Image
                  src={item.src || '/placeholder.svg'}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-foreground/50 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="flex items-center gap-1.5 rounded-full bg-card/90 px-3 py-1 text-xs font-semibold text-primary shadow-sm backdrop-blur">
                  <Heart className="size-3.5" fill="currentColor" />
                  Made by Mel
                </span>
              </div>
              <figcaption className="sr-only">{item.alt}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
