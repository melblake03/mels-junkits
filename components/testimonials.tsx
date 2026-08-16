import { Quote, Star } from 'lucide-react'

const TESTIMONIALS = [
  {
    quote:
      'My custom lanyard is absolutely gorgeous! The colors are exactly what I asked for and the quality is amazing. I get compliments at work every single day.',
    name: 'Jasmine R.',
    role: 'Nurse',
    initials: 'JR',
  },
  {
    quote:
      'Mel made me a set of matching keychains for my bridesmaids and they were the perfect little gift. So thoughtful, so pretty, and made with real care.',
    name: 'Alyssa M.',
    role: 'Bride-to-be',
    initials: 'AM',
  },
  {
    quote:
      'The badge reel sparkles just like I hoped and it has held up beautifully. Ordering was easy and Mel kept me updated the whole way. 10/10!',
    name: 'Danielle P.',
    role: 'Teacher',
    initials: 'DP',
  },
]

export function Testimonials() {
  return (
    <section id="reviews" className="scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
  REAL STORIES
</p>
          <h2 className="mt-3 text-balance font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Why Customers Love Mel's Jun'Kits
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-3xl border border-border bg-card p-6 shadow-sm"
            >
              <Quote className="size-8 text-primary/30" fill="currentColor" strokeWidth={0} />
              <div className="mt-3 flex text-gold" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4" fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-foreground/90">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <span className="flex size-11 items-center justify-center rounded-full bg-primary/10 font-serif text-sm font-bold text-primary">
                  {t.initials}
                </span>
                <span className="leading-tight">
                  <span className="block font-semibold text-foreground">{t.name}</span>
                  <span className="block text-sm text-muted-foreground">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
