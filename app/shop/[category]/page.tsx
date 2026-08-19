import AddToCart from "@/components/add-to-cart"
const products = {
  lanyards: [
    {
      name: "Custom Handmade Lanyard",
      price: "$18",
      image: "/images/lanyard.png",
      description:
        "A handmade lanyard created with colorful beads and details to match your style.",
    },
  ],

  "badge-reels": [
    {
      name: "Purple Beaded Badge Reel",
      price: "$12",
      image: "/images/badge-reel.png",
      description:
        "A colorful handmade badge reel designed to add personality to your everyday look.",
    },
  ],

  keychains: [
    {
      name: "Colorful Handmade Keychain",
      price: "$10",
      image: "/images/keychain.png",
      description:
        "A fun handmade keychain featuring colorful beads and charms.",
    },
  ],

  anklets: [
    {
      name: "Golden Beaded Charm Anklet",
      price: "$15",
      image: "/images/anklet.png",
      description:
        "A beautiful beaded anklet finished with playful charms and golden details.",
    },
  ],

  "freestyle-creations": [
    {
      name: "Custom Freestyle Jun'Kit",
      price: "$20",
      image: "/images/freestyle.png",
      description:
        "A one-of-a-kind creation designed by Mel just for you.",
    },
  ],
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const { category } = await params

  const items = products[category as keyof typeof products] || []

  const title = category
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Mel's Jun'Kits
          </p>

          <h1 className="mt-3 font-serif text-5xl font-bold">
            {title}
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            Handmade with love and created to match your style.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((product) => (
            <div
              key={product.name}
              className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm"
            >
              <div className="h-80 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-6">
                <h2 className="font-serif text-2xl font-bold">
                  {product.name}
                </h2>

                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {product.description}
                </p>

                <p className="mt-5 text-xl font-semibold text-primary">
                  {product.price}
                </p>

                <AddToCart
                  name={product.name}
                  price={product.price}
                  image={product.image}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}