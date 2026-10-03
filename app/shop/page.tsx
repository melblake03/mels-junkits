'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'
import './shop.css'

type ProductId =
  | 'beaded'
  | 'junklet'
  | 'lanyard'
  | 'keychain'
  | 'badge'
  | 'paracord'

type ReadyMadeProduct = {
  id: string
  name: string
  image: string
  price: number
  productId: ProductId
}

type ShopSection = {
  title: string
  intro: string
  products: ReadyMadeProduct[]
}

const shopSections: ShopSection[] = [
  {
    title: "Beaded Jun’Kits",
    intro:
      "Colorful handmade beaded pieces made to add a little personality to your everyday.",
    products: [
      {
        id: "beaded-01",
        name: "Beaded Jun’Kit",
        image: "/beaded-junkit.png",
        price: 20,
        productId: "beaded",
      },
    ],
  },

  {
    title: "Jun’Klets",
    intro:
      "Cute handmade anklets and bracelets made just for you.",
    products: [
      {
        id: "junklet-01",
        name: "Jun’Klet",
        image: "/junklet.png",
        price: 3,
        productId: "junklet",
      },
    ],
  },

  {
    title: "Badge Reel Jun’Kits",
    intro:
      "Add a little personality to your everyday badge or work essentials.",
    products: [
      {
        id: "badge-01",
        name: "Badge Reel Jun’Kit",
        image: "/badge-reel (2).png",
        price: 3,
        productId: "badge",
      },
    ],
  },

  {
    title: "Jun’Kit Lanyards",
    intro:
      "Colorful lanyards made to brighten your everyday carry.",
    products: Array.from({ length: 9 }, (_, index) => ({
      id: `lanyard-${index + 1}`,
      name: `Lanyard Jun’Kit ${String(index + 1).padStart(2, '0')}`,
      image: `/shop/lanyards-${String(index + 1).padStart(2, '0')}.jpg`,
      price: 15,
      productId: "lanyard" as ProductId,
    })),
  },

  {
    title: "Jun’Keychains",
    intro:
      "Tiny pops of personality for your keys, bags, and favorite things.",
    products: Array.from({ length: 7 }, (_, index) => ({
      id: `keychain-${index + 1}`,
      name: `Jun’Keychain ${String(index + 1).padStart(2, '0')}`,
      image: `/shop/keychains-${String(index + 1).padStart(2, '0')}.jpg`,
      price: 10,
      productId: "keychain" as ProductId,
    })),
  },

  {
    title: "Paracord Jun’Kits",
    intro:
      "Playful, sturdy paracord pieces handmade one colorful detail at a time.",
    products: Array.from({ length: 6 }, (_, index) => ({
      id: `paracord-${index + 1}`,
      name: `Paracord Jun’Kit ${String(index + 1).padStart(2, '0')}`,
      image: `/shop/paracord-${String(index + 1).padStart(2, '0')}.jpg`,
      price: 5,
      productId: "paracord" as ProductId,
    })),
  },
]

export default function ShopPage() {
  const [activeImage, setActiveImage] =
    useState<ReadyMadeProduct | null>(null)

  const [inventory, setInventory] =
    useState<Record<string, number>>({})

  const [cartMessage, setCartMessage] =
    useState('')

  useEffect(() => {
    const savedInventory = window.localStorage.getItem(
      'mels-junkits-ready-made-inventory'
    )

    setInventory(
      savedInventory
        ? JSON.parse(savedInventory)
        : {}
    )
  }, [])

  function addReadyMadeToCart(
    product: ReadyMadeProduct
  ) {
    // If inventory says zero, the item is sold out.
    if (inventory[product.id] === 0) {
      return
    }

    const cart = JSON.parse(
      window.localStorage.getItem(
        'mels-junkits-cart'
      ) || '[]'
    )

    // Prevent the same ready-made item from being
    // added twice.
    if (
      cart.some(
        (item: { id: string }) =>
          item.id === product.id
      )
    ) {
      setInventory((current) => ({
        ...current,
        [product.id]: 0,
      }))

      return
    }

    cart.push({
      id: product.id,
      productId: product.productId,
      productName: product.name,
      image: product.image,

      size: '',
      colors: [],

      letMelDesign: false,

      pattern: '',
      hardware: '',
      beads: '',

      charms: [],
      charmQuantity: 0,

      personalization: [],

      basePrice: product.price,
      designFee: 0,
      charmTotal: 0,
      personalizationTotal: 0,

      unitPrice: product.price,
      quantity: 1,
    })

    window.localStorage.setItem(
      'mels-junkits-cart',
      JSON.stringify(cart)
    )

    const nextInventory = {
      ...inventory,
      [product.id]: 0,
    }

    setInventory(nextInventory)

    window.localStorage.setItem(
      'mels-junkits-ready-made-inventory',
      JSON.stringify(nextInventory)
    )

    setCartMessage(
      `${product.name} added to your cart.`
    )

    // Clear the message after a few seconds.
    window.setTimeout(() => {
      setCartMessage('')
    }, 3000)
  }

  return (
    <main className="shop-page">

      {/* =========================================
          SHOP HEADER
      ========================================= */}

      <header className="shop-header">

        <Link
          href="/"
          className="shop-logo-link"
          aria-label="Mel’s Jun’Kits home"
        >
          <img
            src="/mels-logo.png"
            alt="Mel’s Jun’Kits"
          />
        </Link>

        <Link
          href="/#builder"
          className="shop-build-button"
        >
          Build Your Jun’Kit™
        </Link>

      </header>


      {/* =========================================
          SHOP HERO
      ========================================= */}

  <section
className="shop-hero"
  aria-labelledby="shop-title"
  >
  <img
  className="shop-hero-image"
  src="/mels-logo.png"
  alt="Mel's Jun'Kits"
  />
<div className="shop-hero-logo">
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


      {/* =========================================
          READY-MADE SHOP SECTIONS
      ========================================= */}

      <div className="shop-sections">

        {shopSections.map((section) => (

          <section
            className="shop-category"
            key={section.title}
            aria-labelledby={section.title}
          >

            {/* CATEGORY HEADING */}

            <div className="shop-category-heading">

              <span className="shop-ready-made-label">
                READY-MADE JUN’KITS
              </span>

              <span
                className="shop-sparkle"
                aria-hidden="true"
              >
                ✦
              </span>

              <div>

                <h2 id={section.title}>
                  {section.title}
                </h2>

                <p>
                  {section.intro}
                </p>

              </div>

            </div>


            {/* PRODUCT PHOTOS */}

            <div className="shop-photo-grid">

              {section.products.map(
                (product) => (

                  <article
                    className="shop-product-card"
                    key={product.id}
                  >

                    <button
                      className="shop-photo-card"
                      type="button"
                      onClick={() =>
                        setActiveImage(product)
                      }
                      aria-label={`Enlarge ${product.name} photo`}
                    >

                      <span className="shop-photo-frame">

                        <img
                          src={product.image}
                          alt={product.name}
                          loading="lazy"
                        />

                      </span>

                      <strong>
                        {product.name}
                      </strong>

                      <span className="shop-product-price">
                        ${product.price}
                      </span>

                      <span
                        className={
                          inventory[product.id] === 0
                            ? 'shop-sold-out'
                            : 'shop-available'
                        }
                      >
                        {inventory[product.id] === 0
                          ? 'SOLD OUT'
                          : 'AVAILABLE'}
                      </span>

                      <span className="shop-view-label">
                        View photo
                      </span>

                    </button>


                    {/* ADD TO CART */}

                    {inventory[product.id] !== 0 && (

                      <button
                        className="shop-add-button"
                        type="button"
                        onClick={() =>
                          addReadyMadeToCart(product)
                        }
                      >
                        Add to Cart
                      </button>

                    )}

                  </article>

                )
              )}

            </div>

          </section>

        ))}

      </div>


      {/* =========================================
          CART MESSAGE
      ========================================= */}

      {cartMessage && (

        <p
          className="shop-cart-message"
          role="status"
        >
          {cartMessage}
        </p>

      )}


      {/* =========================================
          CUSTOM BUILDER CALLOUT
      ========================================= */}

      <section
        className="shop-builder-callout"
        aria-labelledby="shop-builder-title"
      >

        <span>
          Ready to make it one-of-one? 💕
        </span>

        <h2 id="shop-builder-title">
          Build your perfect Jun&apos;Kit
        </h2>

        <p>
          Pick your colors, hardware, beads,
          charms, personalization, and more.
        </p>

        <Link
          href="/#builder"
          className="shop-build-button"
        >
          Build Your Jun’Kit™
        </Link>

      </section>


      {/* =========================================
          FOOTER
      ========================================= */}

      <footer className="shop-footer">

        <Link href="/">
          ← Back to Mel&apos;s Jun’Kits
        </Link>

        <span>
          Handmade with love in Kansas City 💕
        </span>

      </footer>


      {/* =========================================
          PHOTO LIGHTBOX
      ========================================= */}

      {activeImage && (

        <div
          className="shop-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeImage.name} enlarged photo`}
          onClick={() =>
            setActiveImage(null)
          }
        >

          <button
            className="shop-lightbox-close"
            type="button"
            onClick={() =>
              setActiveImage(null)
            }
            aria-label="Close enlarged photo"
          >
            <X size={24} />
          </button>


          <div
            className="shop-lightbox-content"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <img
              src={activeImage.image}
              alt={activeImage.name}
            />

            <strong>
              {activeImage.name}
            </strong>

            <span>
              ${activeImage.price}
            </span>

          </div>

        </div>

      )}

    </main>
  )
}
