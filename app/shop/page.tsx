export default function ShopPage() {
  const collections = [
  {
    emoji: "📿",
    title: "Lanyards",
    description:
      "Stylish handmade lanyards designed to brighten your workday while showing off your unique style.",
    price: "Starting at $18",
    image: "/images/ChatGPT Image Aug 16, 2026, 12_08_36 PM.png",
  },
  {
    emoji: "🪪",
    title: "Badge Reels",
    description:
      "Cute, colorful badge reels handcrafted to add personality to your everyday routine.",
    price: "Starting at $12",
    image: "/images/Purple Keychain Display in Bloom.png",
  },
  {
    emoji: "🔑",
    title: "Keychains",
    description:
      "Fun and functional keychains customized with beads, charms, and your favorite colors.",
    price: "Starting at $10",
    image: "/images/Elegant Multi-Charm Keychain Display.png",
  },
  {
    emoji: "🦶",
    title: "Anklets",
    description:
      "Delicate handmade anklets designed to match your personality and style.",
    price: "Starting at $15",
    image: "/images/Golden Beaded Charm Bracelet Flatlay.png",
  },
  {
    emoji: "✨",
    title: "Freestyle Creations",
    description:
      "Let Mel create a completely one-of-a-kind Jun'Kit designed just for you.",
    price: "Starting at $20",
    image: "/images/Colorful Keychain on a Gold Stand.png",
  },
]

  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Shop the Collection
          </p>

          <h1 className="mt-3 font-serif text-5xl font-bold">
            Find Your Perfect Jun'Kit
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Every piece is handcrafted with love and customized to match your
            unique style. Launch Collection pricing is available for a limited
            time.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {collections.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {item.image ? (
  <div className="mb-5 overflow-hidden rounded-2xl">
    <img
      src={item.image}
      alt={item.title}
      className="h-64 w-full object-cover"
    />
  </div>
) : (
  <div className="text-5xl">{item.emoji}</div>
)}

              <h2 className="mt-5 font-serif text-2xl font-bold">
                {item.title}
              </h2>

              <p className="mt-3 leading-relaxed text-muted-foreground">
                {item.description}
              </p>

              <p className="mt-6 text-lg font-semibold text-primary">
                {item.price}
              </p>

              <button className="mt-6 w-full rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition hover:opacity-90">
                View Collection
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
