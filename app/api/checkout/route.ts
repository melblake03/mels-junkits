import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const items = body.items
    const customer = body.customer
    const deliveryMethod = body.deliveryMethod
    const shippingAddress = body.shippingAddress

    if (!Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { error: "Your cart is empty." },
        { status: 400 }
      )
    }

    const accessToken = process.env.SQUARE_ACCESS_TOKEN
    const locationId = process.env.SQUARE_LOCATION_ID

    if (!accessToken || !locationId) {
      return NextResponse.json(
        { error: "Square is not configured yet." },
        { status: 500 }
      )
    }

    const lineItems = items.map((item: any) => ({
      name: item.productName || "Mel's Jun'Kit",
      quantity: String(item.quantity || 1),
      base_price_money: {
        amount: Math.round(Number(item.unitPrice) * 100),
        currency: "USD",
      },
    }))

    // Shipping is $5 for shipping orders and $0 for local pickup.
    const shippingFee = deliveryMethod === "shipping" ? 500 : 0

    if (shippingFee > 0) {
      lineItems.push({
        name: "Shipping",
        quantity: "1",
        base_price_money: {
          amount: shippingFee,
          currency: "USD",
        },
      })
    }

    const origin = new URL(request.url).origin

    const squareBaseUrl =
      process.env.SQUARE_ENVIRONMENT === "production"
        ? "https://connect.squareup.com"
        : "https://connect.squareupsandbox.com"

    const checkoutOptions: Record<string, unknown> = {
      redirect_url: `${origin}/checkout?success=true`,
      merchant_support_email: "hello@melsjunkits.com",
    }

    // Let Square collect a shipping address when shipping is selected.
    if (deliveryMethod === "shipping") {
      checkoutOptions.ask_for_shipping_address = true
    }

    const requestBody: Record<string, unknown> = {
      idempotency_key: crypto.randomUUID(),

      order: {
        location_id: locationId,
        line_items: lineItems,
      },

      checkout_options: checkoutOptions,

      payment_note: "Mel's Jun'Kits online order",
    }

    // Pre-fill the buyer's email when available.
    if (customer?.email) {
      requestBody.pre_populated_data = {
        buyer_email: customer.email,
      }
    }

    const response = await fetch(
      `${squareBaseUrl}/v2/online-checkout/payment-links`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
          "Square-Version": "2026-08-19",
        },
        body: JSON.stringify(requestBody),
      }
    )

    const data = await response.json()

    if (!response.ok) {
      console.error("Square error:", data)

      return NextResponse.json(
        {
          error:
            data?.errors?.[0]?.detail ||
            "Square could not create the checkout.",
        },
        { status: response.status }
      )
    }

    const checkoutUrl = data?.payment_link?.url

    if (!checkoutUrl) {
      console.error("Square response did not include a payment URL:", data)

      return NextResponse.json(
        { error: "Square did not return a checkout link." },
        { status: 500 }
      )
    }

    return NextResponse.json({
      url: checkoutUrl,
    })
  } catch (error) {
    console.error("Checkout error:", error)

    return NextResponse.json(
      { error: "Something went wrong creating your checkout." },
      { status: 500 }
    )
  }
}