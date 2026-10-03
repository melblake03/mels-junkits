"use client"

import { useState } from "react"

const categories = [
  {
    id: "lanyards",
    title: "Jun’Kit Lanyards",
    description: "Handmade lanyards with colors, beads, charms, and details that make yours unique.",
    price: "Starting at $12",
    images: Array.from({ length: 9 }, (_, i) => `/shop/lanyards/lanyards-${String(i + 1).padStart(2, "0")}.jpg`),
  },
  {
    id: "keychains",
    title: "Jun’Keychains",
    description: "Custom keychains made to add personality to your keys, bag, or everyday carry.",
    price: "$15",
    images: Array.from({ length: 7 }, (_, i) => `/shop/keychains/keychains-${String(i + 1).padStart(2, "0")}.jpg`),
  },
  {
    id: "paracord",
    title: "Paracord Jun’Kits",
    description: "Hand-braided paracord pieces in different patterns and color combinations.",
    price: "Starting at $7",
    images: Array.from({ length: 6 }, (_, i) => `/shop/paracord/paracord-${String(i + 1).padStart(2, "0")}.jpg`),
  },
]

export default function ShopPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedAlt, setSelectedAlt] = useState("")

  function openImage(src: string, alt: string) {
    setSelectedImage(src)
    setSelectedAlt(alt)
  }

  return (
    <main className="shop-page">
      <style jsx global>{`
        * { box-sizing: border-box; }
        body { margin: 0; background: #fff9fb; color: #211b1e; }
        a { color: inherit; }
        .shop-page { min-height: 100vh; background: linear-gradient(180deg, #fff9fb 0%, #ffffff 45%, #fff7fa 100%); }
        .shop-header { position: sticky; top: 0; z-index: 20; background: rgba(255,255,255,.94); backdrop-filter: blur(12px); border-bottom: 1px solid rgba(0,0,0,.07); }
        .shop-header-inner { max-width: 1180px; margin: 0 auto; padding: 16px 24px; display: flex; align-items: center; justify-content: space-between; gap: 20px; }
        .brand { text-decoration: none; display: flex; flex-direction: column; line-height: 1.05; }
        .brand strong { font-size: 1.15rem; }
        .brand span { font-size: .78rem; opacity: .68; margin-top: 4px; }
        .shop-nav { display: flex; align-items: center; gap: 18px; font-size: .92rem; font-weight: 700; }
        .shop-nav a { text-decoration: none; }
        .shop-nav a:hover { text-decoration: underline; }
        .shop-hero { max-width: 1180px; margin: 0 auto; padding: 76px 24px 46px; text-align: center; }
        .eyebrow { margin: 0 0 10px; font-size: .76rem; font-weight: 800; letter-spacing: .16em; }
        .shop-hero h1 { margin: 0; font-size: clamp(2.6rem, 7vw, 5rem); line-height: .98; letter-spacing: -.04em; }
        .shop-hero h1 span { display: block; }
        .shop-hero p { max-width: 680px; margin: 22px auto 0; font-size: 1.05rem; line-height: 1.7; opacity: .76; }
        .shop-button { display: inline-flex; align-items: center; justify-content: center; margin-top: 28px; padding: 13px 20px; border-radius: 999px; background: #211b1e; color: white; text-decoration: none; font-weight: 800; box-shadow: 0 10px 24px rgba(33,27,30,.15); }
        .shop-content { max-width: 1180px; margin: 0 auto; padding: 0 24px 80px; }
        .category { padding: 42px 0 58px; }
        .category + .category { border-top: 1px solid rgba(0,0,0,.08); }
        .category-heading { display: flex; justify-content: space-between; align-items: end; gap: 24px; margin-bottom: 22px; }
        .category-heading h2 { margin: 0; font-size: clamp(1.7rem, 4vw, 2.5rem); letter-spacing: -.03em; }
        .category-heading p { max-width: 600px; margin: 8px 0 0; line-height: 1.55; opacity: .72; }
        .price { white-space: nowrap; font-weight: 900; }
        .photo-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; }
        .photo-card { border: 0; padding: 0; background: #fff; border-radius: 20px; overflow: hidden; cursor: pointer; box-shadow: 0 8px 26px rgba(0,0,0,.08); text-align: left; }
        .photo-card img { display: block; width: 100%; aspect-ratio: 3 / 4; object-fit: cover; transition: transform .3s ease; }
        .photo-card:hover img { transform: scale(1.025); }
        .photo-label { padding: 13px 15px 15px; font-weight: 800; font-size: .92rem; }
        .future-card { min-height: 220px; border: 1px dashed rgba(0,0,0,.2); border-radius: 20px; display: flex; align-items: center; justify-content: center; text-align: center; padding: 28px; background: rgba(255,255,255,.6); }
        .future-card strong { display: block; margin-bottom: 7px; }
        .future-card p { margin: 0; opacity: .65; line-height: 1.5; }
        .shop-footer { border-top: 1px solid rgba(0,0,0,.08); text-align: center; padding: 35px 24px 50px; }
        .shop-footer p { opacity: .7; }
        .lightbox { position: fixed; inset: 0; z-index: 100; background: rgba(0,0,0,.82); display: flex; align-items: center; justify-content: center; padding: 24px; }
        .lightbox-inner { position: relative; max-width: 900px; max-height: 92vh; }
        .lightbox img { display: block; max-width: 100%; max-height: 88vh; object-fit: contain; border-radius: 14px; }
        .close { position: absolute; right: -8px; top: -48px; border: 0; background: white; color: #211b1e; width: 38px; height: 38px; border-radius: 50%; font-size: 1.5rem; cursor: pointer; }
        @media (max-width: 800px) {
          .shop-nav a:not(:last-child) { display: none; }
          .photo-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }
          .category-heading { align-items: start; flex-direction: column; }
          .price { white-space: normal; }
        }
        @media (max-width: 520px) {
          .shop-header-inner { padding: 14px 16px; }
          .shop-hero { padding: 54px 18px 34px; }
          .shop-content { padding: 0 16px 60px; }
          .photo-grid { grid-template-columns: 1fr 1fr; }
          .photo-label { font-size: .8rem; }
        }
      `}</style>

      <header className="shop-header">
        <div className="shop-header-inner">
          <a className="brand" href="/">
            <strong>Mel’s Jun’Kits</strong>
            <span>Build Your Jun’Kit™</span>
          </a>
          <nav className="shop-nav" aria-label="Shop navigation">
            <a href="/">Build Your Jun’Kit</a>
            <a href="#shop">Shop</a>
            <a href="/#about">About</a>
            <a href="/#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="shop-hero" id="shop">
        <p className="eyebrow">SHOP JUN’KITS</p>
        <h1>
          See what Mel has created.
          <span>Then build your own. 💕</span>
        </h1>
        <p>
          Browse real Jun’Kits handmade by Mel. Use these creations for inspiration,
          then head to the builder to choose your colors, details, charms, and personalization.
        </p>
        <a className="shop-button" href="/#builder">Build Your Jun’Kit™</a>
      </section>

      <div className="shop-content">
        {categories.map((category) => (
          <section className="category" key={category.id}>
            <div className="category-heading">
              <div>
                <p className="eyebrow">{category.id === "lanyards" ? "HANDMADE + CUSTOM" : category.id === "keychains" ? "CUSTOM + PERSONAL" : "BRAIDED + BOLD"}</p>
                <h2>{category.title}</h2>
                <p>{category.description}</p>
              </div>
              <div className="price">{category.price}</div>
            </div>

            <div className="photo-grid">
              {category.images.map((src, index) => (
                <button
                  className="photo-card"
                  type="button"
                  key={src}
                  onClick={() => openImage(src, `${category.title} example ${index + 1}`)}
                  aria-label={`View ${category.title} photo ${index + 1}`}
                >
                  <img src={src} alt={`${category.title} example ${index + 1}`} loading="lazy" />
                  <div className="photo-label">{category.title}</div>
                </button>
              ))}
            </div>
          </section>
        ))}

        <section className="category">
          <div className="category-heading">
            <div>
              <p className="eyebrow">COMING TO THE SHOP</p>
              <h2>More Jun’Kits</h2>
              <p>More real-life product photos will be added as new pieces are photographed.</p>
            </div>
          </div>
          <div className="photo-grid">
            {[
              ["Beaded Jun’Kit", "Starting at $20"],
              ["Jun’Klet", "Anklet / Bracelet"],
              ["Badge Reel Jun’Kit", "$5"],
            ].map(([title, price]) => (
              <div className="future-card" key={title}>
                <div>
                  <strong>{title}</strong>
                  <p>{price}<br />New photos coming soon.</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <footer className="shop-footer">
        <strong>Mel’s Jun’Kits♡</strong>
        <p>Handmade in Kansas City, Missouri • Shipping Nationwide + Local Pickup</p>
        <a className="shop-button" href="/#builder">Create Your Jun’Kit 💕</a>
      </footer>

      {selectedImage && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Product photo" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-inner" onClick={(event) => event.stopPropagation()}>
            <button className="close" type="button" onClick={() => setSelectedImage(null)} aria-label="Close photo">×</button>
            <img src={selectedImage} alt={selectedAlt} />
          </div>
        </div>
      )}
    </main>
  )
}
