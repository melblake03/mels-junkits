"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"

type CartItem = {
  id: string
  productName: string
  image?: string
  size: string
  colors: string[]
  letMelDesign: boolean
  pattern: string
  hardware: string
  beads: string
  charms: string[]
  charmQuantity: number
  personalization: string[]
  unitPrice: number
  quantity: number
}

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

useEffect(() => {
  const savedCart = localStorage.getItem("mels-junkits-cart")

  if (savedCart) {
    try {
      setCartItems(JSON.parse(savedCart))
    } catch {
      localStorage.removeItem("mels-junkits-cart")
    }
  }
}, [])
  const [deliveryMethod, setDeliveryMethod] = useState("shipping")

  const [customerName, setCustomerName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [zip, setZip] = useState("")

  const subtotal = useMemo(
    () =>
      cartItems.reduce(
        (total, item) => total + item.unitPrice * item.quantity,
        0
      ),
    [cartItems]
  )

  const shipping = deliveryMethod === "shipping" ? 5 : 0
  const total = subtotal + shipping

  async function handleCheckout() {
  if (cartItems.length === 0) {
    alert("Your cart is empty.")
    return
  }

  if (!customerName || !email || !phone) {
    alert("Please complete your contact information.")
    return
  }

  if (
    deliveryMethod === "shipping" &&
    (!address || !city || !state || !zip)
  ) {
    alert("Please complete your shipping address.")
    return
  }

  try {
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: cartItems,
        customer: {
          name: customerName,
          email,
          phone,
        },
        deliveryMethod,
        shippingAddress:
          deliveryMethod === "shipping"
            ? {
                address,
                city,
                state,
                zip,
              }
            : null,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      alert(data.error || "Unable to start Square checkout.")
      return
    }

    if (data.url) {
      window.location.href = data.url
      return
    }

    alert("Square checkout could not be created.")
  } catch (error) {
    console.error(error)
    alert("Something went wrong connecting to Square.")
  }
}

  return (
    <main className="checkout-page">
      <section className="checkout-hero">
        <div className="checkout-badge">💕 MEL'S JUN'KITS</div>

        <h1>Checkout</h1>

        <p>
          You're almost there! Complete your information below and
          we'll get your Jun'Kit ready.
        </p>
      </section>

      <div className="checkout-container">
        <div className="checkout-form">
          {/* CONTACT INFORMATION */}
          <section className="checkout-card">
            <div className="checkout-section-title">
              <span>01</span>
              <div>
                <h2>Contact Information</h2>
                <p>How can we reach you?</p>
              </div>
            </div>

            <div className="checkout-grid">
              <label>
                Full Name
                <input
                  type="text"
                  placeholder="Your name"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                />
              </label>

              <label>
                Email Address
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>

              <label>
                Phone Number
                <input
                  type="tel"
                  placeholder="(555) 555-5555"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </label>
            </div>
          </section>

          {/* DELIVERY */}
          <section className="checkout-card">
            <div className="checkout-section-title">
              <span>02</span>
              <div>
                <h2>Delivery</h2>
                <p>How would you like to receive your order?</p>
              </div>
            </div>

            <div className="delivery-options">
              <button
                type="button"
                className={
                  deliveryMethod === "shipping"
                    ? "delivery-option active"
                    : "delivery-option"
                }
                onClick={() => setDeliveryMethod("shipping")}
              >
                <strong>🚚 Shipping</strong>
                <small>U.S. shipping</small>
              </button>

              <button
                type="button"
                className={
                  deliveryMethod === "pickup"
                    ? "delivery-option active"
                    : "delivery-option"
                }
                onClick={() => setDeliveryMethod("pickup")}
              >
                <strong>📍 Local Pickup</strong>
                <small>Kansas City, Missouri</small>
              </button>
            </div>

            {deliveryMethod === "shipping" && (
              <div className="shipping-fields">
                <label className="full-width">
                  Street Address
                  <input
                    type="text"
                    placeholder="123 Main Street"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </label>

                <label>
                  City
                  <input
                    type="text"
                    placeholder="Kansas City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </label>

                <label>
                  State
                  <input
                    type="text"
                    placeholder="MO"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  />
                </label>

                <label>
                  ZIP Code
                  <input
                    type="text"
                    placeholder="64101"
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                  />
                </label>
              </div>
            )}

            {deliveryMethod === "pickup" && (
              <div className="pickup-message">
                <strong>📍 Kansas City Local Pickup</strong>
                <p>
                  Pickup details will be provided after your order
                  is confirmed.
                </p>
              </div>
            )}
          </section>

          {/* PAYMENT */}
          <section className="checkout-card">
            <div className="checkout-section-title">
              <span>03</span>
              <div>
                <h2>Payment</h2>
                <p>Secure payment through Square</p>
              </div>
            </div>

            <div className="payment-message">
              <div className="payment-icon">💳</div>

              <div>
                <strong>Secure Checkout</strong>
                <p>
                  You'll be securely redirected to Square to complete
                  your payment.
                </p>
              </div>
            </div>

            <button
              type="button"
              className="checkout-pay-button"
              onClick={handleCheckout}
            >
              Continue to Square
              <span>→</span>
            </button>

  <p className="secure-note">
  🔒 Secure payment • Your information is protected
  </p>

  <Link href="/#builder" className="checkout-continue-shopping">
  ← Continue Shopping
  </Link>
  </section>
        </div>

        {/* ORDER SUMMARY */}
        <aside className="checkout-summary">
          <div className="summary-header">
            <span>Your Order</span>
            <span>🛍️</span>
          </div>

          {cartItems.length === 0 ? (
            <div className="empty-checkout">
              <div>🛍️</div>
              <h3>Your cart is empty</h3>
              <p>
                Build something cute and come back when you're
                ready!
              </p>

              <Link href="/" className="back-to-shop">
                Build Your Jun'Kit™
              </Link>
            </div>
          ) : (
            <>
              <div className="checkout-items">
                {cartItems.map((item) => (
                  <div className="checkout-item" key={item.id}>
                    <div className="checkout-item-image">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.productName}
                        />
                      ) : (
                        <span>💕</span>
                      )}
                    </div>

                    <div className="checkout-item-info">
                      <strong>{item.productName}</strong>

                      <small>
                        Size: {item.size}
                      </small>

                      <small>
                        Qty: {item.quantity}
                      </small>

                      <strong>
                        ${(item.unitPrice * item.quantity).toFixed(2)}
                      </strong>
                    </div>
                  </div>
                ))}
              </div>

              <div className="checkout-totals">
                <div>
                  <span>Subtotal</span>
                  <strong>${subtotal.toFixed(2)}</strong>
                </div>

                <div>
                  <span>
                    {deliveryMethod === "shipping"
                      ? "Shipping"
                      : "Pickup"}
                  </span>

                  <strong>
                    {shipping === 0
                      ? "FREE"
                      : `$${shipping.toFixed(2)}`}
                  </strong>
                </div>

                <div className="checkout-total">
                  <span>Total</span>
                  <strong>${total.toFixed(2)}</strong>
                </div>
              </div>
            </>
          )}

          <div className="checkout-trust">
            <div>✨ Handmade in Kansas City</div>
            <div>💕 Made with love</div>
            <div>📦 U.S. shipping available</div>
          </div>
        </aside>
      </div>
    </main>
  )
}
