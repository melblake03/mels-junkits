'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'
import './shop.css'

type ReadyMadeProduct = {
  id: string
  name: string
  image: string
  price: number
  productId: 'lanyard' | 'keychain' | 'paracord'
}

const shopSections = [
  {
    title: "Jun’Kit Lanyards",
    intro: "Colorful lanyards made to brighten your everyday carry.",
    products: Array.from({ length: 9 }, (_, index) => ({
      id: `lanyard-${index + 1}`,
      name: `Lanyard Jun’Kit ${String(index + 1).padStart(2, '0')}`,
      image: `/shop/lanyards-${String(index + 1).padStart(2, '0')}.jpg`,
      price: 15,
      productId: 'lanyard',
    })),
  },
  {
    title: "Jun’Keychains",
    intro: "Tiny pops of personality for your keys, bags, and favorite things.",
    products: Array.from({ length: 7 }, (_, index) => ({
      id: `keychain-${index + 1}`,
      name: `Jun’Keychain ${String(index + 1).padStart(2, '0')}`,
      image: `/shop/keychains-${String(index + 1).padStart(2, '0')}.jpg`,
      price: 10,
      productId: 'keychain',
    })),
  },
  {
    title: "Paracord Jun’Kits",
    intro: "Playful, sturdy paracord pieces handmade one colorful detail at a time.",
    products: Array.from({ length: 6 }, (_, index) => ({
      id: `paracord-${index + 1}`,
      name: `Paracord Jun’Kit ${String(index + 1).padStart(2, '0')}`,
      image: `/shop/paracord-${String(index + 1).padStart(2, '0')}.jpg`,
      price: 5,
      productId: 'paracord',
    })),
  },
]

export default function ShopPage() {
  const [activeImage, setActiveImage] = useState<ReadyMadeProduct | null>(null)
  const [inventory, setInventory] = useState<Record<string, number>>({})
  const [cartMessage, setCartMessage] = useState('')
  const [cartCount, setCartCount] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const savedInventory = window.localStorage.getItem('mels-junkits-ready-made-inventory')
    setInventory(savedInventory ? JSON.parse(savedInventory) : {})

    const updateCartCount = () => {
      try {
        const cart = JSON.parse(window.localStorage.getItem('mels-junkits-cart') || '[]')
        setCartCount(cart.reduce((total: number, item: { quantity?: number }) => total + (item.quantity || 1), 0))
      } catch {
        setCartCount(0)
      }
    }

    updateCartCount()
    window.addEventListener('storage', updateCartCount)
    window.addEventListener('mels-junkits-cart-updated', updateCartCount)
    return () => {
      window.removeEventListener('storage', updateCartCount)
      window.removeEventListener('mels-junkits-cart-updated', updateCartCount)
    }
  }, [])

  function addReadyMadeToCart(product: ReadyMadeProduct) {
    if (inventory[product.id] === 0) return
    const cart = JSON.parse(window.localStorage.getItem('mels-junkits-cart') || '[]')
    if (cart.some((item: { id: string }) => item.id === product.id)) {
      setInventory((current) => ({ ...current, [product.id]: 0 }))
      return
    }
    cart.push({ id: product.id, productId: product.productId, productName: product.name, image: product.image, size: '', colors: [], letMelDesign: false, pattern: '', hardware: '', beads: '', charms: [], charmQuantity: 0, personalization: [], basePrice: product.price, designFee: 0, charmTotal: 0, personalizationTotal: 0, unitPrice: product.price, quantity: 1 })
    window.localStorage.setItem('mels-junkits-cart', JSON.stringify(cart))
    window.dispatchEvent(new Event('mels-junkits-cart-updated'))
    const nextInventory = { ...inventory, [product.id]: 0 }
    setInventory(nextInventory)
    window.localStorage.setItem('mels-junkits-ready-made-inventory', JSON.stringify(nextInventory))
    setCartMessage(`${product.name} added to your cart.`)
  }

  return (
    <main className="shop-page">
      <header className="shop-header">
        <Link href="/" className="shop-logo-link" aria-label="Mel’s Jun’Kits home">
          <img src="/mels-logo.png" alt="Mel’s Jun’Kits" />
        </Link>
        <button
          className="shop-menu-button"
          type="button"
          aria-expanded={mobileMenuOpen}
          aria-controls="shop-navigation"
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          Menu
        </button>
        <nav id="shop-navigation" className={`shop-navigation${mobileMenuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
          <Link href="/#builder" onClick={() => setMobileMenuOpen(false)}>Build Your Jun’Kit™</Link>
          <Link href="/shop" onClick={() => setMobileMenuOpen(false)}>Shop</Link>
          <Link href="/#about" onClick={() => setMobileMenuOpen(false)}>About</Link>
          <Link href="/#contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          <Link className="shop-cart-button" href="/#cart" onClick={() => setMobileMenuOpen(false)}>
            Cart ({cartCount})
          </Link>
        </nav>
      </header>

      <section
  className="shop-hero"
  aria-labelledby="shop-title"
>
  <div className="shop-hero-logo">
    <img
      src="/mels-logo.png"
      alt="Mel's Jun'Kits"
    />
  </div>

  <div className="shop-hero-copy">
    <span className="section-label">
      ✦ A little something cute ✦
    </span>

    <h1 id="shop-title">
      Shop Mel&apos;s Jun&apos;Kits
    </h1>

    <p>
      Find a handmade favorite, then make it
      yours with a little extra joy.
    </p>

    <div className="shop-hero-hearts">
      <span>♡</span>
      <span>✦</span>
      <span>♡</span>
    </div>
  </div>
</section>

      <div className="shop-sections">
        {shopSections.map((section) => (
          <section className="shop-category" key={section.title} aria-labelledby={section.title}>
            <div className="shop-category-heading">
              <span className="shop-ready-made-label">READY-MADE JUN’KITS</span>
              <span className="shop-sparkle">✦</span>
              <div>
                <h2 id={section.title}>{section.title}</h2>
                <p>{section.intro}</p>
              </div>
            </div>
            <div className="shop-photo-grid">
              {section.products.map((product) => (
                <article className="shop-product-card" key={product.name}>
                  <button className="shop-photo-card" type="button" onClick={() => setActiveImage(product)} aria-label={`Enlarge ${product.name} photo`}>
                    <span className="shop-photo-frame">
                      <img src={product.image} alt={product.name} loading="lazy" />
                    </span>
                    <strong>{product.name}</strong>
                    <span className="shop-product-price">${product.price}</span>
                    <span className={inventory[product.id] === 0 ? 'shop-sold-out' : 'shop-available'}>{inventory[product.id] === 0 ? 'SOLD OUT' : 'AVAILABLE'}</span>
                    <span className="shop-view-label">View photo</span>
                  </button>
                  {inventory[product.id] !== 0 && <button className="shop-add-button" type="button" onClick={() => addReadyMadeToCart(product)}>Add to Cart</button>}
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>

      {cartMessage && <p className="shop-cart-message" role="status">{cartMessage}</p>}

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
