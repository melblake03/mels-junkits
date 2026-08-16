import Image from 'next/image'
import { Heart, Palette, Sparkle } from 'lucide-react'

const HIGHLIGHTS = [
  {
    icon: Heart,
    label: 'Handmade with Love',
    text: "Every Jun'Kit is handcrafted with care from start to finish.",
  },
  {
    icon: Palette,
    label: 'Made Just for You',
    text: 'Choose the colors, charms, and details that match your personality.',
  },
  {
    icon: Sparkle,
    label: 'One-of-a-Kind',
    text: "No two Jun'Kits are exactly alike—each one is uniquely yours.",
  },
]

export function AboutMel() {
  return (
    <section id="about" className="scroll-mt-20 bg-secondary/50 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2 md:gap-14 lg:px-8">
        {/* Image */}
        <div className="relative order-last md:order-first">
          <div className="absolute -inset-3 -rotate-2 rounded-[2.5rem] bg-gradient-to-tr from-teal/20 to-primary/20 blur-xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-card bg-card p-2 shadow-xl">
            <Image
              src="/images/about-mel.png"
              alt="Mel crafting handmade Jun'Kits"
              width={640}
              height={640}
              className="h-full w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            About Mel
          </p>

          <h2 className="mt-3 text-balance font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Meet Mel
          </h2>

          <p className="mt-4 text-lg text-muted-foreground">
            The creative heart behind every handmade Jun&apos;Kit.
          </p>

          <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              Hi, I'm Mel! My creative journey began with macramé, and before
              long I discovered paracord bracelets. I loved experimenting with
              different techniques, adding vibrant colors, beads, charms, and
              anything else I could imagine to create something truly unique.
            </p>

            <p>
              As I started wearing my creations, friends and coworkers began
              asking if I could make custom pieces just for them. Seeing how
              much joy my handmade designs brought to others inspired me to turn
              my passion into <strong>Mel&apos;s Jun&apos;Kits</strong>—a place
              where creativity, color, and personalization come together in
              every handcrafted piece.
            </p>

            <p>
              Today, every Jun&apos;Kit is made with the same excitement and
              attention to detail that started this journey. Whether you're
              looking for something fun, meaningful, or completely
              one-of-a-kind, I'm honored to create something that's uniquely
              yours.
            </p>
          </div>

          <dl className="mt-10 grid gap-4 sm:grid-cols-3">
            {HIGHLIGHTS.map(({ icon: Icon, label, text }) => (
              <div
                key={label}
                className="rounded-2xl border border-border bg-card p-4 shadow-sm"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-4 w-4" fill="currentColor" strokeWidth={1} />
                </span>

                <dt className="mt-3 font-semibold text-foreground">
                  {label}
                </dt>

                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {text}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}