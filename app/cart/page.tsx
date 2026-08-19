"use client"

import { useEffect, useState } from "react"

type CartItem = {
  name: string
  price: string
  image: string
  quantity: number
}

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([])

  useEffect(() => {
    const savedCart = JSON.parse(
      localStorage.getItem("mels-cart") || "[]"
    )
    setCart(savedCart)
  }, [])

  function updateCart(updatedCart: CartItem[]) {
    setCart(updatedCart)
    localStorage.setItem("mels-cart", JSON.stringify(updatedCart))
  }

  function increaseQuantity(index: number) {
    const updated = [...cart]
    updated[index].quantity += 1
    updateCart(updated)
  }

  function decreaseQuantity(index: number) {
    const updated = [...cart]

    if (updated[index].quantity > 1) {
      updated[index].quantity -= 1
    } else {
      updated.splice(index, 1)
    }

    updateCart(updated)
  }

  function removeItem(index: number) {
    const updated = [...cart]
    updated.splice(index, 1)
    updateCart(updated)
  }

  function getPrice(price: string) {
    return Number(price.replace("$", ""))
  }

  const total = cart.reduce(
    (sum, item) => sum + getPrice(item.price) * item.quantity,
    0
  )

  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Your Jun'Kit
          </p>

          <h1 className="mt-3 font-serif text-5xl font-bold">
            Shopping Cart
          </h1>
        </div>

        {cart.length === 0 ? (
          <div className="mt-16 rounded-3xl border border-border bg-card p-12 text-center">
            <p className="text-lg text-muted-foreground">
              Your Jun'Kit is empty.
            </p>

            <a
              href="/shop"
              className="mt-6 inline-block rounded-full bg-primary px-8 py-3 font-medium text-primary-foreground"
            >
              Continue Shopping
            </a>
          </div>
        ) : (
          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_350px]">
            <div className="space-y-5">
              {cart.map((item, index) => (
                <div
                  key={`${item.name}-${index}`}
                  className="flex gap-5 rounded-3xl border border-border bg-card p-5 shadow-sm"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-28 w-28 rounded-2xl object-cover"
                  />

                  <div className="flex-1">
                    <h2 className="font-serif text-xl font-bold">
                      {item.name}
                    </h2>

                    <p className="mt-2 font-semibold text-primary">
                      {item.price}
                    </p>

                    <div className="mt-4 flex items-center gap-3">
                      <button
                        onClick={() => decreaseQuantity(index)}
                        className="h-9 w-9 rounded-full border border-border"
                      >
                        −
                      </button>

                      <span className="min-w-6 text-center">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => increaseQuantity(index)}
                        className="h-9 w-9 rounded-full border border-border"
                      >
                        +
                      </button>

                      <button
                        onClick={() => removeItem(index)}
                        className="ml-4 text-sm text-muted-foreground underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="h-fit rounded-3xl border border-border bg-card p-7 shadow-sm">
              <h2 className="font-serif text-2xl font-bold">
                Order Summary
              </h2>

              <div className="mt-6 flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold">
                  ${total.toFixed(2)}
                </span>
              </div>

              <div className="my-6 border-t border-border" />

              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <button
                className="mt-7 w-full rounded-full bg-primary px-6 py-4 font-medium text-primary-foreground transition hover:opacity-90"
                onClick={() =>
                  alert(
                    "Checkout is coming next! Your Jun'Kit is saved."
                  )
                }
              >
                Continue to Checkout
              </button>

              <a
                href="/shop"
                className="mt-4 block text-center text-sm text-muted-foreground underline"
              >
                Continue Shopping
              </a>
            </div>
          </div>
        )}
      </section>
    </main>
  )
}