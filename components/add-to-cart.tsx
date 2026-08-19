"use client"

type AddToCartProps = {
  name: string
  price: string
  image: string
}

export default function AddToCart({
  name,
  price,
  image,
}: AddToCartProps) {
  function addToCart() {
    const cart = JSON.parse(localStorage.getItem("mels-cart") || "[]")

    const existingItem = cart.find(
      (item: { name: string }) => item.name === name
    )

    if (existingItem) {
      existingItem.quantity += 1
    } else {
      cart.push({
        name,
        price,
        image,
        quantity: 1,
      })
    }

    localStorage.setItem("mels-cart", JSON.stringify(cart))

    alert(`${name} was added to your Jun'Kit!`)
  }

  return (
    <button
      onClick={addToCart}
      className="mt-6 w-full rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition hover:opacity-90"
    >
      Add to Order
    </button>
  )
}