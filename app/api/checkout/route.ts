import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const items = body.items

    if (!items || !Array.isArray(items) || items.length === 0) {
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

    const origin = new URL(request.url).origin

    const squareBaseUrl =
      process.env.SQUARE_ENVIRONMENT === "production"
        ? "https://connect.squareup.com"
        : "https://connect.squareupsandbox.com"

    const response = await fetch(
      `${squareBaseUrl}/v2/online-checkout/payment-links`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
          "Square-Version": "2026-08-19",
        },
        body: JSON.stringify({
          idempotency_key: crypto.randomUUID(),

          order: {
            location_id: locationId,

            line_items: lineItems,
          },

          checkout_options: {
            redirect_url: `${origin}/checkout?success=true`,
          },

          payment_note: "Mel's Jun'Kits online order",
        }),
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

    return NextResponse.json({
      url: data.payment_link?.url,
    })
  } catch (error) {
    console.error("Checkout error:", error)

    return NextResponse.json(
      { error: "Something went wrong creating your checkout." },
      { status: 500 }
    )
  }
}