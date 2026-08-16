import { Camera, Heart, Mail, MessageCircle, Sparkle } from 'lucide-react'
import { Button } from '@/components/ui/button'

const SHOP_LINKS = [
  { label: 'Lanyards', href: '#collections' },
  { label: 'Badge Reels', href: '#collections' },
  { label: 'Keychains', href: '#collections' },
  { label: 'Anklets', href: '#collections' },
  { label: 'Freestyle Creations', href: '#collections' },
]

const ABOUT_LINKS = [
  { label: 'About Mel', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Reviews', href: '#reviews' },
]

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Sparkle className="size-4" fill="currentColor" strokeWidth={1} />
              </span>
              <span className="font-serif text-lg font-bold">Mel&apos;s Jun&apos;Kits</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-background/70">
              Handcrafted accessories designed to help you create something that's uniquely yours.
            </p>
            <div className="mt-5 flex gap-2">
              <Button
                nativeButton={false}
                size="icon"
                variant="ghost"
                className="size-10 rounded-full bg-background/10 text-background hover:bg-background/20 hover:text-background"
                aria-label="Instagram"
                render={<a href="#" />}
              >
                <Camera className="size-5" />
              </Button>
              <Button
                nativeButton={false}
                size="icon"
                variant="ghost"
                className="size-10 rounded-full bg-background/10 text-background hover:bg-background/20 hover:text-background"
                aria-label="Message us"
                render={<a href="#" />}
              >
                <MessageCircle className="size-5" />
              </Button>
              <Button
                nativeButton={false}
                size="icon"
                variant="ghost"
                className="size-10 rounded-full bg-background/10 text-background hover:bg-background/20 hover:text-background"
                aria-label="Email"
                render={<a href="mailto:hello@melsjunkits.com" />}
              >
                <Mail className="size-5" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-base font-bold">Shop</h3>
            <ul className="mt-4 space-y-3">
              {SHOP_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-background/70 transition-colors hover:text-background"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-base font-bold">Explore</h3>
            <ul className="mt-4 space-y-3">
              {ABOUT_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-background/70 transition-colors hover:text-background"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-base font-bold">Join the Jun'Kit Club</h3>
            <p className="mt-4 text-sm leading-relaxed text-background/70">
              Be the first to hear about new Jun'Kits, exclusive collections, and special surprises from Mel.
            </p>
            <form className="mt-4 flex flex-col gap-2 sm:flex-row">
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                required
                placeholder="you@email.com"
                className="h-11 w-full rounded-full border border-background/20 bg-background/10 px-4 text-sm text-background placeholder:text-background/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <Button type="submit" className="h-11 rounded-full px-5 text-sm">
                Join
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-background/15 pt-6 text-sm text-background/60 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Mel&apos;s Jun&apos;Kits. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Made with <Heart className="size-4 text-primary" fill="currentColor" /> by Mel
          </p>
        </div>
      </div>
    </footer>
  )
}
