import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Shop | Mel's Jun'Kits",
  description: "Shop handmade Jun’Kit lanyards, Jun’Keychains, and paracord Jun’Kits from Mel’s Jun’Kits.",
}

export default function ShopLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
