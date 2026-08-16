import Image from 'next/image'
import { Palette, Shapes, Sparkle, Wand2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const STEPS = [
  {
    icon: Shapes,
    title: 'Pick your base',
    description: 'Choose a lanyard, badge reel, keychain, anklet, or a total surprise.',
  },
  {
    icon: Palette,
    title: 'Choose your colors',
    description: 'Mix hot pink, teal, purple, gold, or tell Mel your dream palette.',
  },
  {
    icon: Sparkle,
    title: 'Add the sparkle',
    description: 'Charms, letter beads, tassels, and little details that make it yours.',
  },
]

export function BuildYourJunKit() {
  return (
    <section
      id="build"
      className="scroll-mt-20 bg-gradient-to-br from-grape/10 via-secondary to-teal/10 py-16 md:py-24"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
        <div className="relative order-last md:order-first">
          <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-tr from-grape/25 via-primary/20 to-teal/25 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-card bg-card p-2 shadow-2xl shadow-grape/15">
            <Image
              src="/images/build-kit.png"
              alt="Loose colorful beads, charms and tassels ready to be assembled into a custom creation"
              width={720}
              height={540}
              className="h-full w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </div>

        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-grape/25 bg-card px-4 py-1.5 text-sm font-medium text-grape shadow-sm">
            <Wand2 className="size-4" />
            Design it your way
          </span>
          <h2 className="mt-5 text-balance font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Build Your Jun&apos;Kit
            <sup className="ml-1 align-super text-lg text-grape">TM</sup>
          </h2>
          <p className="mt-4 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
            Your imagination, Mel&apos;s hands. Create a completely custom piece in three easy steps.
          </p>

          <ol className="mt-8 space-y-5">
            {STEPS.map(({ icon: Icon, title, description }, i) => (
              <li key={title} className="flex gap-4">
                <span className="relative flex size-11 shrink-0 items-center justify-center rounded-2xl bg-card text-grape shadow-sm">
                  <Icon className="size-5" />
                  <span className="absolute -right-1.5 -top-1.5 flex size-5 items-center justify-center rounded-full bg-grape text-[0.7rem] font-bold text-grape-foreground">
                    {i + 1}
                  </span>
                </span>
                <div>
                  <h3 className="font-semibold text-foreground">{title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
                </div>
              </li>
            ))}
          </ol>

          <Button
            nativeButton={false}
            className="mt-8 h-12 rounded-full bg-grape px-8 text-base text-grape-foreground shadow-lg shadow-grape/25 hover:bg-grape/90"
            render={<a href="#contact" />}
          >
            <Sparkle className="size-5" fill="currentColor" strokeWidth={1} />
            Start Building
          </Button>
        </div>
      </div>
    </section>
  )
}
