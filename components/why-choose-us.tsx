import { Gem, HandHeart, Palette, Truck } from 'lucide-react'

const REASONS = [
  {
    icon: HandHeart,
    title: 'Handmade with Love',
    text: 'Each piece is made by hand, never mass-produced, so it feels truly special.',
  },
  {
    icon: Palette,
    title: 'Fully Customizable',
    text: 'Pick your colors, charms, and style to make it uniquely yours.',
  },
  {
    icon: Gem,
    title: 'Premium Materials',
    text: 'Quality beads, hardware, and gold-tone accents built to last.',
  },
  {
    icon: Truck,
    title: 'Carefully Shipped',
    text: 'Lovingly packaged and shipped fast, straight to your door.',
  },
]

export function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="scroll-mt-20 bg-gradient-to-b from-secondary/50 to-background py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            The Mel difference
          </p>
          <h2 className="mt-3 text-balance font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Why Choose Us
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-3xl border border-border bg-card p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
            >
              <span className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Icon className="size-6" />
              </span>
              <h3 className="mt-5 font-serif text-xl font-bold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
