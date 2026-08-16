'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Menu, ShoppingBag, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'Home', href: '#top' },
  { label: 'Shop', href: '/shop' },
  { label: "Build Your Jun'Kit", href: '#build' },
  { label: 'About Mel', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8"
      >
        <a href="#top" className="flex items-center gap-2.5">
          <Image
            src="/images/logo.png"
            alt="Mel's Jun'Kits logo"
            width={40}
            height={40}
            className="size-9 rounded-full object-contain"
          />
          <span className="font-serif text-lg font-bold leading-none tracking-tight text-foreground">
            Mel&apos;s Jun&apos;Kits
          </span>
        </a>

        <ul className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
                {link.label === "Build Your Jun'Kit" && (
                  <sup className="ml-0.5 text-[0.6rem] text-primary">TM</sup>
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button
            nativeButton={false}
            className="hidden h-10 rounded-full px-5 text-sm lg:inline-flex"
            render={<a href="/shop" />}
          >
            <ShoppingBag className="size-4" />
            Shop Now
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="size-10 rounded-full lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </nav>

      <div
        className={cn(
          'grid overflow-hidden border-t border-border/60 bg-background/95 backdrop-blur-md transition-all duration-300 lg:hidden',
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr] border-t-0',
        )}
      >
        <div className="min-h-0">
          <ul className="flex flex-col gap-1 px-4 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  {link.label}
                  {link.label === "Build Your Jun'Kit" && (
                    <sup className="ml-0.5 text-[0.6rem] text-primary">TM</sup>
                  )}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <Button
                nativeButton={false}
                className="h-11 w-full rounded-full text-sm"
                render={<a href="#collections" onClick={() => setOpen(false)} />}
              >
                <ShoppingBag className="size-4" />
                Shop Now
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
