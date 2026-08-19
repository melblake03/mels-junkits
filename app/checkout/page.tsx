'use client'

import Link from 'next/link'

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Mel&apos;s Jun&apos;Kits
          </p>

          <h1 className="mt-3 font-serif text-5xl font-bold">
            Checkout
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Almost yours! Enter your information below to complete your order.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_380px]">
          {/* Customer Information */}
          <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
            <h2 className="font-serif text-2xl font-bold">
              Your Information
            </h2>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium">First Name</label>
                <input
                  type="text"
                  className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-primary"
                  placeholder="First name"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Last Name</label>
                <input
                  type="text"
                  className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-primary"
                  placeholder="Last name"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-primary"
                  placeholder="you@example.com"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-sm font-medium">Phone</label>
                <input
                  type="tel"
                  className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-primary"
                  placeholder="(555) 555-5555"
                />
              </div>
            </div>

            <h2 className="mt-10 font-serif text-2xl font-bold">
              Shipping Address
            </h2>

            <div className="mt-6 grid gap-5">
              <div>
                <label className="text-sm font-medium">Address</label>
                <input
                  type="text"
                  className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-primary"
                  placeholder="Street address"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-3">
                <div>
                  <label className="text-sm font-medium">City</label>
                  <input
                    type="text"
                    className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-primary"
                    placeholder="City"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">State</label>
                  <input
                    type="text"
                    className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-primary"
                    placeholder="State"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">ZIP Code</label>
                  <input
                    type="text"
                    className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-primary"
                    placeholder="ZIP"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="h-fit rounded-3xl border border-border bg-card p-8 shadow-sm">
            <h2 className="font-serif text-2xl font-bold">
              Order Summary
            </h2>

            <div className="mt-6 flex justify-between">
              <span>Items</span>
              <span>$18.00</span>
            </div>

            <div className="mt-4 flex justify-between">
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>

            <div className="my-6 border-t border-border" />

            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>
              <span>$18.00</span>
            </div>

            <button
              type="button"
              className="mt-8 w-full rounded-full bg-primary px-6 py-4 font-semibold text-primary-foreground transition hover:opacity-90"
            >
              Place Order
            </button>

            <Link
              href="/cart"
              className="mt-4 block text-center text-sm underline underline-offset-4"
            >
              Back to Cart
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}