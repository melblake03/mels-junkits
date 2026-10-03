'use client'

import { useState } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'
import './shop.css'

const shopSections = [
  {
    title: "Jun’Kit Lanyards",
    intro: "Colorful lanyards made to brighten your everyday carry.",
    products: Array.from({ length: 9 }, (_, index) => ({
      name: `Lanyard Jun’Kit ${String(index + 1).padStart(2, '0')}`,
      image: `/shop/lanyards-${String(index + 1).padStart(2, '0')}.jpg`,
    })),
  },
  {
    title: "Jun’Keychains",
    intro: "Tiny pops of personality for your keys, bags, and favorite things.",
    products: Array.from({ length: 7 }, (_, index) => ({
      name: `Jun’Keychain ${String(index + 1).padStart(2, '0')}`,
      image: `/shop/keychains-${String(index + 1).padStart(2, '0')}.jpg`,
    })),
  },
  {
    title: "Paracord Jun’Kits",
    intro: "Playful, sturdy paracord pieces handmade one colorful detail at a time.",
    products: Array.from({ length: 6 }, (_, index) => ({
      name: `Paracord Jun’Kit ${String(index + 1).padStart(2, '0')}`,
      image: `/shop/paracord-${String(index + 1).padStart(2, '0')}.jpg`,
    })),
  },
]

export default function ShopPage() {
  const [activeImage, setActiveImage] = useState<{ name: string; image: string } | null>(null)

  return (
    <main className="shop-page">
      <header className="shop-header">
        <Link href="/" className="shop-logo-link" aria-label="Mel’s Jun’Kits home">
          <img src="/mels-logo.png" alt="Mel’s Jun’Kits" />
        </Link>
        <Link href="/#builder" className="shop-build-button">
          Build Your Jun’Kit™
        </Link>
      </header>

      <section className="shop-hero" aria-labelledby="shop-title">
        <span className="section-label">A little something cute</span>
        <h1 id="shop-title">Shop Mel&apos;s Jun&apos;Kits</h1>
        <p>Find a handmade favorite, then make it yours with a little extra joy.</p>
      </section>

      <div className="shop-sections">
        {shopSections.map((section) => (
          <section className="shop-category" key={section.title} aria-labelledby={section.title}>
            <div className="shop-category-heading">
              <span className="shop-sparkle">✦</span>
              <div>
                <h2 id={section.title}>{section.title}</h2>
                <p>{section.intro}</p>
              </div>
            </div>
            <div className="shop-photo-grid">
              {section.products.map((product) => (
                <button
                  className="shop-photo-card"
                  key={product.name}
                  type="button"
                  onClick={() => setActiveImage(product)}
                  aria-label={`Enlarge ${product.name} photo`}
                >
                  <span className="shop-photo-frame">
                    <img src={product.image} alt={product.name} loading="lazy" />
                  </span>
                  <strong>{product.name}</strong>
                  <span className="shop-view-label">View photo</span>
                </button>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="shop-builder-callout" aria-labelledby="shop-builder-title">
        <span>Ready to make it one-of-one?</span>
        <h2 id="shop-builder-title">Build your perfect Jun&apos;Kit</h2>
        <Link href="/#builder" className="shop-build-button">Build Your Jun’Kit™</Link>
      </section>

      <footer className="shop-footer">
        <Link href="/">← Back to Mel&apos;s Jun&apos;Kits</Link>
      </footer>

      {activeImage && (
        <div className="shop-lightbox" role="dialog" aria-modal="true" aria-label={`${activeImage.name} enlarged photo`} onClick={() => setActiveImage(null)}>
          <button className="shop-lightbox-close" type="button" onClick={() => setActiveImage(null)} aria-label="Close enlarged photo">
            <X size={24} />
          </button>
          <div className="shop-lightbox-content" onClick={(event) => event.stopPropagation()}>
            <img src={activeImage.image} alt={activeImage.name} />
            <strong>{activeImage.name}</strong>
          </div>
        </div>
      )}
    </main>
  )
}
