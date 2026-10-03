"use client"

import { useEffect, useMemo, useState } from "react"

type ProductId =
  | "beaded"
  | "keychain"
  | "junklet"
  | "lanyard"
  | "badge"
  | "paracord"

type Product = {
  id: ProductId
  name: string
  description: string
  price: number
  image: string
  sizes?: {
    name: string
    description: string
    price: number
  }[]
}

type CartItem = {
  id: string
  productId: ProductId
  productName: string
  image: string
  size: string
  colors: string[]
  letMelDesign: boolean
  pattern: string
  hardware: string
  beads: string
  charms: string[]
  charmQuantity: number
  personalization: string[]
  basePrice: number
  designFee: number
  charmTotal: number
  personalizationTotal: number
  unitPrice: number
  quantity: number
}

const products: Product[] = [
  {
    id: "beaded",
    name: "Beaded Jun’Kit",
    description: "Starting at $20",
    price: 20,
    image: "/beaded-junkit.png",
  },
  {
    id: "keychain",
    name: "Jun’Keychain",
    description: "Starting at $15",
    price: 15,
    image: "/keychain-junkit.png",
  },
  {
    id: "junklet",
    name: "Jun’Klet",
    description: "Anklet / Bracelet",
    price: 5,
    image: "/junklet.png",
    sizes: [
      {
        name: "Small",
        description: "8.5–9 in",
        price: 5,
      },
      {
        name: "Medium",
        description: "9.5–10 in",
        price: 7,
      },
      {
        name: "Large",
        description: "10.5–11 in",
        price: 9,
      },
    ],
  },
  {
    id: "lanyard",
    name: "Jun’Kit Lanyard",
    description: "Starting at $12",
    price: 12,
    image: "/lanyard-junkit.png",
    sizes: [
      {
        name: "Short / Wristlet",
        description: "12–18 in",
        price: 12,
      },
      {
        name: "Standard Neck",
        description: "34–44 in total",
        price: 15,
      },
      {
        name: "Extra Long",
        description: "45–48+ in",
        price: 20,
      },
    ],
  },
  {
    id: "badge",
    name: "Badge Reel Jun’Kit",
    description: "$5",
    price: 5,
    image: "/badge-reel (2).png",
  },
  {
    id: "paracord",
    name: "Paracord Jun’Kit",
    description: "Starting at $7",
    price: 7,
    image: "/paracord-bracelet.png",
    sizes: [
      {
        name: "Small",
        description: "6–6.5 in",
        price: 7,
      },
      {
        name: "Medium",
        description: "7–7.5 in",
        price: 9,
      },
      {
        name: "Large",
        description: "8–9 in",
        price: 11,
      },
    ],
  },
]

const colors = [
  "Black",
  "White",
  "Pink",
  "Hot Pink",
  "Baby Pink",
  "Purple",
  "Lavender",
  "Blue",
  "Baby Blue",
  "Royal Blue",
  "Teal",
  "Turquoise",
  "Green",
  "Mint",
  "Yellow",
  "Gold",
  "Orange",
  "Red",
  "Burgundy",
  "Brown",
  "Cream",
  "Clear",
  "Rainbow",
]

const paracordPatterns = [
  {
    id: "cobra-dna",
    name: "Cobra DNA",
    image: "/Cobra DNA.jpg",
  },
  {
    id: "cobra",
    name: "Cobra",
    image: "/Cobra.jpg",
  },
  {
    id: "heart",
    name: "Heart",
    image: "/Heart.jpg",
  },
  {
    id: "stripe",
    name: "Stripe",
    image: "/Stripe.jpg",
  },
  {
    id: "x-pattern",
    name: "X Pattern",
    image: "/X.jpg",
  },
]

const hardwareOptions = [
  {
    id: "gold",
    name: "Gold",
    symbol: "✦",
  },
  {
    id: "black",
    name: "Black",
    symbol: "●",
  },
  {
    id: "rose-gold",
    name: "Rose Gold",
    symbol: "✧",
  },
  {
    id: "silver",
    name: "Silver",
    symbol: "◆",
  },
]

const beads = [
  {
    id: "acrylic",
    name: "Acrylic Beads",
    image: "/acrylic beads.jpg",
  },
  {
    id: "silicone",
    name: "Silicone Beads",
    image: "/silicone beads.jpg",
  },
]

const charms = [
  {
    id: "cassette",
    name: "Cassette Charms",
    image: "/01_Cassette_Charms.jpg",
  },
  {
    id: "key",
    name: "Key Charms",
    image: "/02_Key_Charms.jpg",
  },
  {
    id: "kitty",
    name: "Kitty Charms",
    image: "/03_Kitty_Charms.jpg",
  },
  {
    id: "cross",
    name: "Cross Charms",
    image: "/cross.jpg",
  },
  {
    id: "crystal",
    name: "Crystal Charms",
    image: "/05_Crystal_Charms.avif",
  },
  {
    id: "flower",
    name: "Flower Charms",
    image: "/06_Flower_Charms.jpg",
  },
  {
    id: "lollipop",
    name: "Lollipop Charms",
    image: "/07_Lollipop_Charms.jpg",
  },
  {
    id: "gummy-bear",
    name: "Gummy Bear Charms",
    image: "/08_Gummy_Bear_Charms.jpg",
  },
  {
    id: "random",
    name: "Random Charms",
    image: "/09_Random_Charms.jpg",
  },
  {
    id: "cat-key",
    name: "Cat Key Charms",
    image: "/10_CatKey_Charms.jpg",
  },
  {
    id: "dice",
    name: "Dice Charms",
    image: "/die.avif",
  },
  {
    id: "elephant",
    name: "Elephant Charms",
    image: "/elephant.avif",
  },
  {
    id: "poodle",
    name: "Poodle Charms",
    image: "/poodle.avif",
  },
  {
    id: "safety-pin",
    name: "Safety Pin Charms",
    image: "/safety pin.avif",
  },
  {
    id: "sanrio-heart",
    name: "Sanrio Heart Charms",
    image: "/sanrio heart.avif",
  },
  {
    id: "small-tassel",
    name: "Small Tassel Charms",
    image: "/small tassel.avif",
  },
  {
    id: "silicone-o",
    name: "Silicone O Beads",
    image: "/o silicone bead.jpg",
  },
  {
    id: "character",
    name: "Character Beads",
    image: "/random cartoon.jpg",
  },
  {
    id: "sports",
    name: "Sports Beads",
    image: "/sports.jpg",
  },
]

const designFees: Record<ProductId, number> = {
  beaded: 7,
  keychain: 7,
  junklet: 3,
  lanyard: 7,
  badge: 2,
  paracord: 7,
}

/* =========================================
   WHICH PRODUCTS USE PARACORD?
========================================= */

const productsWithParacord: ProductId[] = [
  "keychain",
  "junklet",
  "lanyard",
  "paracord",
]

/* =========================================
   CHARM PRICING
========================================= */

function bundlePrice(count: number) {
  if (count <= 0) return 0
  if (count === 1) return 2
  if (count === 2) return 3
  if (count === 3) return 4
  return 5
}

/* =========================================
   PERSONALIZATION PRICING
========================================= */

function personalizationPrice(text: string) {
  return (text.match(/[A-Za-z]/g) || []).length
}

/* =========================================
   RANDOM SELECTION
========================================= */

function randomItem<T>(items: T[]) {
  return items[
    Math.floor(Math.random() * items.length)
  ]
}

export default function Home() {
  const [productId, setProductId] =
    useState<ProductId>("beaded")

  const [selectedSize, setSelectedSize] =
    useState("")

  const [selectedColors, setSelectedColors] =
    useState<string[]>([])

  const [letMelDesign, setLetMelDesign] =
    useState(false)

  const [selectedPattern, setSelectedPattern] =
    useState("")

  const [selectedHardware, setSelectedHardware] =
    useState("")

  const [selectedBeads, setSelectedBeads] =
    useState("")

  const [selectedCharms, setSelectedCharms] =
    useState<string[]>([])

  const [charmQuantity, setCharmQuantity] =
    useState(0)

  const [personalizationInput, setPersonalizationInput] =
    useState("")

  const [personalizationItems, setPersonalizationItems] =
    useState<string[]>([])

  /* =========================================
     REAL CART
  ========================================= */

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

useEffect(() => {
  localStorage.setItem(
    "mels-junkits-cart",
    JSON.stringify(cartItems)
  )
}, [cartItems])

  const [isCartOpen, setIsCartOpen] = useState(false)

  const selectedProduct = useMemo(
    () =>
      products.find(
        (product) => product.id === productId
      ) ?? products[0],
    [productId]
  )

  const hasParacord =
    productsWithParacord.includes(productId)

  const hardwareStep = hasParacord ? 4 : 3
  const beadsStep = hasParacord ? 5 : 4
  const charmsStep = hasParacord ? 6 : 5

  const personalizationStep =
    letMelDesign
      ? 3
      : hasParacord
        ? 7
        : 6

  const selectedSizeOption = useMemo(() => {
    if (
      !selectedProduct.sizes ||
      !selectedSize
    ) {
      return null
    }

    return (
      selectedProduct.sizes.find(
        (size) =>
          size.name === selectedSize
      ) ?? null
    )
  }, [selectedProduct, selectedSize])

  const basePrice = selectedSizeOption
    ? selectedSizeOption.price
    : selectedProduct.price

  const designFee = letMelDesign
    ? designFees[productId]
    : 0

  const actualCharmCount = letMelDesign
    ? charmQuantity
    : selectedCharms.length

  const charmTotal =
    bundlePrice(actualCharmCount)

  const personalizationTotal =
    personalizationItems.reduce(
      (total, item) =>
        total + personalizationPrice(item),
      0
    )

  const total =
    basePrice +
    designFee +
    charmTotal +
    personalizationTotal

  /* =========================================
     CART TOTALS
  ========================================= */

  const cartCount = useMemo(
    () =>
      cartItems.reduce(
        (sum, item) =>
          sum + item.quantity,
        0
      ),
    [cartItems]
  )

  const cartTotal = useMemo(
    () =>
      cartItems.reduce(
        (sum, item) =>
          sum +
          item.unitPrice *
            item.quantity,
        0
      ),
    [cartItems]
  )

  /* =========================================
     PRODUCT SELECTION
  ========================================= */

  function chooseProduct(id: ProductId) {
    setProductId(id)
    setSelectedSize("")
    setSelectedColors([])
    setSelectedPattern("")
    setSelectedHardware("")
    setSelectedBeads("")
    setSelectedCharms([])
    setCharmQuantity(0)
    setPersonalizationItems([])
    setPersonalizationInput("")
    setLetMelDesign(false)
  }

  /* =========================================
     COLORS
  ========================================= */

  function toggleColor(name: string) {
    if (
      selectedColors.includes(name)
    ) {
      setSelectedColors(
        selectedColors.filter(
          (color) => color !== name
        )
      )

      return
    }

    if (
      selectedColors.length >= 3
    ) {
      return
    }

    setSelectedColors([
      ...selectedColors,
      name,
    ])
  }

  /* =========================================
     CHARMS
  ========================================= */

  function toggleCharm(id: string) {
    if (letMelDesign) {
      return
    }

    if (
      selectedCharms.includes(id)
    ) {
      setSelectedCharms(
        selectedCharms.filter(
          (charm) => charm !== id
        )
      )

      return
    }

    if (
      selectedCharms.length >= 4
    ) {
      return
    }

    setSelectedCharms([
      ...selectedCharms,
      id,
    ])
  }

  /* =========================================
     LET MEL DESIGN IT
  ========================================= */

  function handleLetMelDesign() {
    const newValue = !letMelDesign

    setLetMelDesign(newValue)

    if (newValue) {
      setSelectedPattern("")
      setSelectedHardware("")
      setSelectedBeads("")
      setSelectedCharms([])
      setCharmQuantity(0)
    } else {
      setCharmQuantity(0)
    }
  }

  /* =========================================
     SURPRISE ME
  ========================================= */

  function surpriseParacord() {
    const selected = randomItem(
      paracordPatterns
    )

    if (selected) {
      setSelectedPattern(selected.id)
    }
  }

  function surpriseHardware() {
    const selected = randomItem(
      hardwareOptions
    )

    if (selected) {
      setSelectedHardware(selected.id)
    }
  }

  function surpriseBeads() {
    const selected = randomItem(beads)

    if (selected) {
      setSelectedBeads(selected.id)
    }
  }

  /* =========================================
     PERSONALIZATION
  ========================================= */

  function addPersonalization() {
    const value =
      personalizationInput.trim()

    if (!value) {
      return
    }

    if (
      !/^[A-Za-z ]+$/.test(value)
    ) {
      alert(
        "Personalization can only contain letters and spaces."
      )

      return
    }

    if (
      personalizationItems.includes(value)
    ) {
      setPersonalizationInput("")
      return
    }

    setPersonalizationItems([
      ...personalizationItems,
      value,
    ])

    setPersonalizationInput("")
  }

  function removePersonalization(
    index: number
  ) {
    setPersonalizationItems(
      personalizationItems.filter(
        (_, itemIndex) =>
          itemIndex !== index
      )
    )
  }

  function handlePersonalizationKeyDown(
    event: KeyboardEvent<HTMLInputElement>
  ) {
    if (event.key === "Enter") {
      event.preventDefault()
      addPersonalization()
    }
  }

  /* =========================================
     ADD TO CART
  ========================================= */

  function addToCart() {
    if (
      selectedProduct.sizes &&
      !selectedSize
    ) {
      alert(
        "Please choose a size before adding your Jun’Kit to the cart."
      )
      return
    }

    if (
      selectedColors.length === 0
    ) {
      alert(
        "Please choose at least one color before adding your Jun’Kit to the cart."
      )
      return
    }

    if (
      !letMelDesign &&
      hasParacord &&
      !selectedPattern
    ) {
      alert(
        "Please choose a paracord design before adding your Jun’Kit to the cart."
      )
      return
    }

    if (
      !letMelDesign &&
      !selectedHardware
    ) {
      alert(
        "Please choose your hardware before adding your Jun’Kit to the cart."
      )
      return
    }

    if (
      !letMelDesign &&
      !selectedBeads
    ) {
      alert(
        "Please choose your beads before adding your Jun’Kit to the cart."
      )
      return
    }

    const newItem: CartItem = {
      id:
        typeof crypto !== "undefined" &&
        crypto.randomUUID
          ? crypto.randomUUID()
          : `${Date.now()}-${Math.random()}`,

      productId,

      productName:
        selectedProduct.name,

      image:
        selectedProduct.image,

      size:
        selectedSize || "Standard",

      colors: [
        ...selectedColors,
      ],

      letMelDesign,

      pattern:
        selectedPattern,

      hardware:
        selectedHardware,

      beads:
        selectedBeads,

      charms: [
        ...selectedCharms,
      ],

      charmQuantity:
        actualCharmCount,

      personalization: [
        ...personalizationItems,
      ],

      basePrice,

      designFee,

      charmTotal,

      personalizationTotal,

      unitPrice: total,

      quantity: 1,
    }

    setCartItems(
      (current) => [
        ...current,
        newItem,
      ]
    )

    setIsCartOpen(true)
  }

  /* =========================================
     CART QUANTITY
  ========================================= */

  function changeCartQuantity(
    id: string,
    change: number
  ) {
    setCartItems(
      (current) =>
        current
          .map((item) => {
            if (item.id !== id) {
              return item
            }

            return {
              ...item,
              quantity:
                item.quantity +
                change,
            }
          })
          .filter(
            (item) =>
              item.quantity > 0
          )
    )
  }

  /* =========================================
     REMOVE CART ITEM
  ========================================= */

  function removeFromCart(id: string) {
    setCartItems(
      (current) =>
        current.filter(
          (item) =>
            item.id !== id
        )
    )
  }

  /* =========================================
     CLEAR CART
  ========================================= */

  function clearCart() {
    if (cartItems.length === 0) {
      return
    }

    const confirmed =
      window.confirm(
        "Are you sure you want to clear your cart?"
      )

    if (confirmed) {
      setCartItems([])
    }
  }

  function continueShopping() {
    setIsCartOpen(false)
    window.requestAnimationFrame(() => {
      document.getElementById("builder")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    })
  }

  return (
    <main className="site-page">

      {/* =========================================
          HEADER
      ========================================= */}

      <header className="site-header">

        <div className="announcement">
          Black Woman-Owned • Handmade in
          Kansas City, Missouri • Shipping
          Nationwide + Local Pickup
        </div>

        <div className="header-inner">

          <div className="brand">
            <span>
              Mel’s Jun’Kits
            </span>

            <small>
              Build Your Jun’Kit™
            </small>
          </div>

          <nav className="site-nav">

            <a href="#builder">
              Build Your Jun’Kit
            </a>

            <a href="#about">
              About
            </a>

            <a href="#contact">
              Contact
            </a>

            <button
              type="button"
              className="cart-button"
              onClick={() =>
                setIsCartOpen(true)
              }
            >
              🛍️ Cart ({cartCount})
            </button>

          </nav>

        </div>

      </header>


      {/* =========================================
          HERO
      ========================================= */}

      <section className="hero">

        <div className="hero-content">

          <p className="eyebrow">
            HANDMADE • CUSTOM • ONE-OF-A-KIND
          </p>

          <h1>
            Build Your
            <br />
            <span>
              Jun’Kit™
            </span>
          </h1>

          <p className="hero-text">
            Pick your colors, add your
            personality, and create something
            that is completely yours.
          </p>

          <a
            href="#builder"
            className="hero-button"
          >
            Start Building 💕
          </a>

        </div>

      </section>


      {/* =========================================
          BUILDER
      ========================================= */}

      <section
        id="builder"
        className="builder-section"
      >

        <div className="builder-heading">

          <p className="eyebrow">
            LET’S CREATE
          </p>

          <h2>
            Build Your Jun’Kit™
          </h2>

          <p>
            Choose your Jun’Kit and customize
            it your way.
          </p>

        </div>


        <div className="builder-layout">

          <div className="builder-main">

            {/* STEP 1 */}

            <section className="builder-card">

              <div className="step-heading">

                <span className="step-number">
                  1
                </span>

                <div>
                  <h3>
                    Pick Your Jun’Kit
                  </h3>

                  <p>
                    Choose the base for your
                    creation.
                  </p>
                </div>

              </div>

              <div className="product-choice-grid">

                {products.map(
                  (product) => (

                    <button
                      key={product.id}
                      type="button"
                      className={`product-choice ${
                        productId ===
                        product.id
                          ? "selected"
                          : ""
                      }`}
                      onClick={() =>
                        chooseProduct(
                          product.id
                        )
                      }
                    >

                      <div className="product-choice-image">

                        <img
                          src={
                            product.image
                          }
                          alt={
                            product.name
                          }
                        />

                      </div>

                      <strong>
                        {product.name}
                      </strong>

                      <span>
                        {product.description}
                      </span>

                    </button>

                  )
                )}

              </div>

              {selectedProduct.sizes && (

                <div className="subsection">

                  <div className="subsection-heading">

                    <h4>
                      Choose Your Size
                    </h4>

                    <span>
                      Required
                    </span>

                  </div>

                  <div className="size-grid">

                    {selectedProduct.sizes.map(
                      (size) => (

                        <button
                          key={size.name}
                          type="button"
                          className={`size-option ${
                            selectedSize ===
                            size.name
                              ? "selected"
                              : ""
                          }`}
                          onClick={() =>
                            setSelectedSize(
                              size.name
                            )
                          }
                        >

                          <strong>
                            {size.name}
                          </strong>

                          <span>
                            {size.description}
                          </span>

                          <b>
                            ${size.price}
                          </b>

                        </button>

                      )
                    )}

                  </div>

                </div>

              )}

            </section>


            {/* STEP 2 COLORS */}

            <section className="builder-card">

              <div className="step-heading">

                <span className="step-number">
                  2
                </span>

                <div>

                  <h3>
                    Choose Your Colors
                  </h3>

                  <p>
                    Pick up to 3 colors.
                  </p>

                </div>

                <span className="counter">
                  {selectedColors.length}/3
                </span>

              </div>

              <div className="color-grid">

                {colors.map(
                  (color) => {

                    const colorClass =
                      color
                        .toLowerCase()
                        .replace(
                          /\s+/g,
                          "-"
                        )

                    return (

                      <button
                        key={color}
                        type="button"
                        className={`color-option color-${colorClass} ${
                          selectedColors.includes(
                            color
                          )
                            ? "selected"
                            : ""
                        }`}
                        onClick={() =>
                          toggleColor(color)
                        }
                      >

                        <span
                          className={`color-swatch color-${colorClass}`}
                        />

                        <span>
                          {color}
                        </span>

                        {selectedColors.includes(
                          color
                        ) && (

                          <span className="check">
                            ✓
                          </span>

                        )}

                      </button>

                    )
                  }
                )}

              </div>

            </section>


            {/* LET MEL DESIGN */}

            <section className="builder-card design-card">

              <div className="design-content">

                <div>

                  <p className="eyebrow">
                    MAKE IT EASY
                  </p>

                  <h3>
                    Let Mel Design It 💕
                  </h3>

                  <p>
                    Tell me your colors and
                    personalization, then let
                    me create the rest.
                  </p>

                  <strong>
                    +${designFees[productId]}{" "}
                    design fee
                  </strong>

                </div>

                <button
                  type="button"
                  className={`design-toggle ${
                    letMelDesign
                      ? "active"
                      : ""
                  }`}
                  onClick={
                    handleLetMelDesign
                  }
                >

                  {letMelDesign
                    ? "✓ Mel Will Design It"
                    : "Let Mel Design It"}

                </button>

              </div>

              {letMelDesign && (

                <div className="design-notice">

                  <p>
                    ✨ Mel will choose your
                    {hasParacord
                      ? " paracord design,"
                      : ""}
                    {" "}hardware, beads, and
                    actual charms.
                  </p>

                  <div className="mel-charm-quantity">

                    <h4>
                      How Many Charms Would
                      You Like?
                    </h4>

                    <p>
                      You choose the quantity.
                      Mel chooses the charms
                      to create your look.
                    </p>

                    <div className="charm-quantity-grid">

                      {[1, 2, 3, 4].map(
                        (count) => (

                          <button
                            key={count}
                            type="button"
                            className={
                              charmQuantity ===
                              count
                                ? "selected"
                                : ""
                            }
                            onClick={() =>
                              setCharmQuantity(
                                count
                              )
                            }
                          >

                            <strong>
                              {count}{" "}
                              {count === 1
                                ? "Charm"
                                : "Charms"}
                            </strong>

                            <span>
                              $
                              {bundlePrice(
                                count
                              )}
                            </span>

                          </button>

                        )
                      )}

                    </div>

                  </div>

                </div>

              )}

            </section>


            {/* CUSTOMER DESIGN OPTIONS */}

            {!letMelDesign && (

              <>

                {hasParacord && (

                  <section className="builder-card">

                    <div className="step-heading">

                      <span className="step-number">
                        3
                      </span>

                      <div>

                        <h3>
                          Pick Your Paracord Design
                        </h3>

                        <p>
                          Choose a paracord pattern
                          for your Jun’Kit.
                        </p>

                      </div>

                    </div>

                    <div className="pattern-grid">

                      {paracordPatterns.map(
                        (pattern) => (

                          <button
                            key={pattern.id}
                            type="button"
                            className={`pattern-card ${
                              selectedPattern ===
                              pattern.id
                                ? "selected"
                                : ""
                            }`}
                            onClick={() =>
                              setSelectedPattern(
                                pattern.id
                              )
                            }
                          >

                            <div className="pattern-image">

                              <img
                                src={
                                  pattern.image
                                }
                                alt={
                                  pattern.name
                                }
                              />

                            </div>

                            <strong>
                              {pattern.name}
                            </strong>

                            {selectedPattern ===
                              pattern.id && (

                              <span className="selected-check">
                                ✓
                              </span>

                            )}

                          </button>

                        )
                      )}

                    </div>

                    <button
                      type="button"
                      className="surprise-me-button"
                      onClick={
                        surpriseParacord
                      }
                    >
                      ✨ Surprise Me
                    </button>

                  </section>

                )}


                {/* HARDWARE */}

                <section className="builder-card">

                  <div className="step-heading">

                    <span className="step-number">
                      {hardwareStep}
                    </span>

                    <div>

                      <h3>
                        Choose Your Hardware
                      </h3>

                      <p>
                        Pick your hardware
                        finish.
                      </p>

                    </div>

                  </div>

                  <div className="hardware-grid">

                    {hardwareOptions.map(
                      (hardware) => (

                        <button
                          key={hardware.id}
                          type="button"
                          className={`hardware-option ${
                            selectedHardware ===
                            hardware.id
                              ? "selected"
                              : ""
                          }`}
                          onClick={() =>
                            setSelectedHardware(
                              hardware.id
                            )
                          }
                        >

                          <span className="hardware-symbol">
                            {hardware.symbol}
                          </span>

                          <strong>
                            {hardware.name}
                          </strong>

                        </button>

                      )
                    )}

                  </div>

                  <button
                    type="button"
                    className="surprise-me-button"
                    onClick={
                      surpriseHardware
                    }
                  >
                    ✨ Surprise Me
                  </button>

                </section>


                {/* BEADS */}

                <section className="builder-card">

                  <div className="step-heading">

                    <span className="step-number">
                      {beadsStep}
                    </span>

                    <div>

                      <h3>
                        Choose Your Beads
                      </h3>

                      <p>
                        Select your bead
                        style.
                      </p>

                    </div>

                  </div>

                  <div className="bead-grid">

                    {beads.map(
                      (bead) => (

                        <button
                          key={bead.id}
                          type="button"
                          className={`bead-option ${
                            selectedBeads ===
                            bead.id
                              ? "selected"
                              : ""
                          }`}
                          onClick={() =>
                            setSelectedBeads(
                              bead.id
                            )
                          }
                        >

                          <div className="bead-preview">

                            <img
                              src={
                                bead.image
                              }
                              alt={
                                bead.name
                              }
                            />

                          </div>

                          <strong>
                            {bead.name}
                          </strong>

                          {selectedBeads ===
                            bead.id && (

                            <span className="selected-check">
                              ✓
                            </span>

                          )}

                        </button>

                      )
                    )}

                  </div>

                  <button
                    type="button"
                    className="surprise-me-button"
                    onClick={
                      surpriseBeads
                    }
                  >
                    ✨ Surprise Me
                  </button>

                </section>


                {/* CHARMS */}

                <section className="builder-card">

                  <div className="step-heading">

                    <span className="step-number">
                      {charmsStep}
                    </span>

                    <div>

                      <h3>
                        Choose Your Charms
                      </h3>

                      <p>
                        Choose up to 4 charms.
                      </p>

                    </div>

                    <span className="counter">
                      {selectedCharms.length}/4
                    </span>

                  </div>

                  <div className="bundle-pricing">

                    <span>
                      Charm pricing:
                    </span>

                    <strong>
                      1 = $2 • 2 = $3 •
                      3 = $4 • 4 = $5
                    </strong>

                  </div>

                  <div className="all-charms-grid">

                    {charms.map(
                      (charm) => (

                        <button
                          key={charm.id}
                          type="button"
                          className={`charm-option ${
                            selectedCharms.includes(
                              charm.id
                            )
                              ? "selected"
                              : ""
                          }`}
                          onClick={() =>
                            toggleCharm(
                              charm.id
                            )
                          }
                        >

                          <div className="charm-image">

                            <img
                              src={
                                charm.image
                              }
                              alt={
                                charm.name
                              }
                            />

                          </div>

                          <span>
                            {charm.name}
                          </span>

                          {selectedCharms.includes(
                            charm.id
                          ) && (

                            <span className="selected-check">
                              ✓
                            </span>

                          )}

                        </button>

                      )
                    )}

                  </div>

                </section>

              </>

            )}


            {/* PERSONALIZATION */}

            <section className="builder-card">

              <div className="step-heading">

                <span className="step-number">
                  {personalizationStep}
                </span>

                <div>

                  <h3>
                    Personalize Your Jun’Kit
                  </h3>

                  <p>
                    Add names or phrases.
                  </p>

                </div>

              </div>

              <div className="personalization-box">

                <label htmlFor="personalization">
                  Enter a name or phrase
                </label>

                <div className="personalization-input-row">

                  <input
                    id="personalization"
                    type="text"
                    value={
                      personalizationInput
                    }
                    onChange={(event) =>
                      setPersonalizationInput(
                        event.target.value
                      )
                    }
                    onKeyDown={
                      handlePersonalizationKeyDown
                    }
                    placeholder="Example: Melody, Mom, Boss Lady..."
                  />

                  <button
                    type="button"
                    onClick={
                      addPersonalization
                    }
                    disabled={
                      !personalizationInput.trim()
                    }
                  >
                    Add
                  </button>

                </div>

                <p className="personalization-help">
                  $1 per letter. Spaces do not
                  count. Letters only.
                </p>

                {personalizationItems.length >
                  0 && (

                  <div className="personalization-list">

                    {personalizationItems.map(
                      (item, index) => (

                        <div
                          key={`${item}-${index}`}
                          className="personalization-item"
                        >

                          <span>
                            {item}
                          </span>

                          <strong>
                            $
                            {personalizationPrice(
                              item
                            )}
                          </strong>

                          <button
                            type="button"
                            onClick={() =>
                              removePersonalization(
                                index
                              )
                            }
                            aria-label={`Remove ${item}`}
                          >
                            ×
                          </button>

                        </div>

                      )
                    )}

                  </div>

                )}

                <div className="bundle-pricing personalization-pricing">

                  <span>
                    Personalization:
                  </span>

                  <strong>
                    $1 per letter
                  </strong>

                </div>

                {personalizationItems.length >
                  0 && (

                  <p className="personalization-note">

                    Personalization total:{" "}
                    <strong>
                      $
                      {personalizationTotal.toFixed(
                        2
                      )}
                    </strong>

                  </p>

                )}

              </div>

            </section>

          </div>


          {/* =========================================
              YOUR CREATION SUMMARY
          ========================================= */}

          <aside className="summary-card">

            <div className="summary-header">

              <p className="eyebrow">
                YOUR CREATION
              </p>

              <h3>
                Your Jun’Kit
              </h3>

            </div>

            <div className="summary-product-image">

              <img
                src={
                  selectedProduct.image
                }
                alt={
                  selectedProduct.name
                }
              />

            </div>

            <div className="summary-product">

              <strong>
                {selectedProduct.name}
              </strong>

              {selectedSize && (
                <span>
                  {selectedSize}
                </span>
              )}

            </div>

            {selectedColors.length >
              0 && (

              <div className="summary-line">

                <span>
                  Colors
                </span>

                <strong>
                  {selectedColors.join(
                    ", "
                  )}
                </strong>

              </div>

            )}

            {letMelDesign && (

              <div className="summary-line">

                <span>
                  Design
                </span>

                <strong>
                  Let Mel Design It
                </strong>

              </div>

            )}

            {!letMelDesign &&
              hasParacord &&
              selectedPattern && (

              <div className="summary-line">

                <span>
                  Pattern
                </span>

                <strong>
                  {
                    paracordPatterns.find(
                      (pattern) =>
                        pattern.id ===
                        selectedPattern
                    )?.name
                  }
                </strong>

              </div>

            )}

            {!letMelDesign &&
              selectedHardware && (

              <div className="summary-line">

                <span>
                  Hardware
                </span>

                <strong>
                  {
                    hardwareOptions.find(
                      (hardware) =>
                        hardware.id ===
                        selectedHardware
                    )?.name
                  }
                </strong>

              </div>

            )}

            {!letMelDesign &&
              selectedBeads && (

              <div className="summary-line">

                <span>
                  Beads
                </span>

                <strong>
                  {
                    beads.find(
                      (bead) =>
                        bead.id ===
                        selectedBeads
                    )?.name
                  }
                </strong>

              </div>

            )}

            {actualCharmCount > 0 && (

              <div className="summary-line">

                <span>
                  Charms
                </span>

                <strong>
                  {actualCharmCount}

                  {letMelDesign
                    ? " — Mel’s Choice"
                    : ""}
                </strong>

              </div>

            )}

            {personalizationItems.length >
              0 && (

              <div className="summary-line summary-personalization">

                <span>
                  Personalization
                </span>

                <strong>
                  {personalizationItems.join(
                    ", "
                  )}
                </strong>

              </div>

            )}

            <div className="summary-divider" />

            <div className="price-row">

              <span>
                Base price
              </span>

              <strong>
                ${basePrice.toFixed(2)}
              </strong>

            </div>

            {designFee > 0 && (

              <div className="price-row">

                <span>
                  Design fee
                </span>

                <strong>
                  +${designFee.toFixed(2)}
                </strong>

              </div>

            )}

            {charmTotal > 0 && (

              <div className="price-row">

                <span>
                  Charms
                </span>

                <strong>
                  +${charmTotal.toFixed(2)}
                </strong>

              </div>

            )}

            {personalizationTotal > 0 && (

              <div className="price-row">

                <span>
                  Personalization
                </span>

                <strong>
                  +$
                  {personalizationTotal.toFixed(
                    2
                  )}
                </strong>

              </div>

            )}

            <div className="total-row">

              <span>
                Total
              </span>

              <strong>
                ${total.toFixed(2)}
              </strong>

            </div>

            <button
              type="button"
              className="add-cart-button"
              onClick={addToCart}
            >
              Add to Cart 💕
            </button>

            <p className="summary-note">
              Handmade with love in Kansas
              City, Missouri.
            </p>

          </aside>

        </div>

      </section>


      {/* =========================================
          ABOUT
      ========================================= */}

      <section
        id="about"
        className="info-section"
      >

        <div className="info-card">

          <p className="eyebrow">
            ABOUT MEL’S JUN’KITS
          </p>

          <h2>
            Made Your Way.
          </h2>

          <p>
            Mel’s Jun’Kits is a handmade
            freestyle shop where you get to
            choose the colors, details, names,
            and personality behind your piece.
          </p>

          <p>
            Every Jun’Kit is handmade in
            Kansas City, Missouri and created
            with love.
          </p>

        </div>

      </section>


      {/* =========================================
          CONTACT
      ========================================= */}

      <section
        id="contact"
        className="contact-section"
      >

        <div className="contact-card">

          <p className="eyebrow">
            LET’S CREATE
          </p>

          <h2>
            Have a custom idea?
          </h2>

          <p>
            Want something completely
            different? Freestyle creations are
            welcome.
          </p>

          <a
            href="mailto:hello@melsjunkits.com"
            className="contact-button"
          >
            Contact Mel 💌
          </a>

        </div>

      </section>


      {/* =========================================
          FOOTER
      ========================================= */}

      <footer className="site-footer">

        <strong>
          Mel’s Jun’Kits♡
        </strong>

        <p>
          Handmade in Kansas City,
          Missouri • Shipping Nationwide +
          Local Pickup
        </p>

        <small>
          © {new Date().getFullYear()}
          {" "}
          Mel’s Jun’Kits. All rights reserved.
        </small>

      </footer>


      {/* =========================================
          CART OVERLAY + DRAWER
      ========================================= */}

      {isCartOpen && (

        <div
          className="cart-overlay"
          onClick={() =>
            setIsCartOpen(false)
          }
        >

          <aside
            className="cart-drawer"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            {/* CART HEADER */}

            <div className="cart-header">

              <div>

                <p className="eyebrow">
                  SHOPPING CART
                </p>

                <h2>
                  Your Cart
                </h2>

              </div>

              <button
                type="button"
                className="cart-close"
                onClick={() =>
                  setIsCartOpen(false)
                }
                aria-label="Close cart"
              >
                ×
              </button>

            </div>


            {/* EMPTY CART */}

            {cartItems.length === 0 ? (

              <div className="cart-empty">

                <div className="cart-empty-icon">
                  🛍️
                </div>

                <h3>
                  Your cart is empty
                </h3>

                <p>
                  Your next Jun’Kit is waiting
                  to be created. 💕
                </p>

                <button
                  type="button"
                  className="cart-continue-button"
                  onClick={continueShopping}
                >
                  ← Continue Shopping
                </button>

              </div>

            ) : (

              <>

                {/* CART ITEMS */}

                <div className="cart-items">

                  {cartItems.map(
                    (item) => {

                      const patternName =
                        paracordPatterns.find(
                          (pattern) =>
                            pattern.id ===
                            item.pattern
                        )?.name

                      const hardwareName =
                        hardwareOptions.find(
                          (hardware) =>
                            hardware.id ===
                            item.hardware
                        )?.name

                      const beadName =
                        beads.find(
                          (bead) =>
                            bead.id ===
                            item.beads
                        )?.name

                      const charmNames =
                        item.charms
                          .map(
                            (charmId) =>
                              charms.find(
                                (charm) =>
                                  charm.id ===
                                  charmId
                              )?.name
                          )
                          .filter(Boolean)

                      return (

                        <div
                          key={item.id}
                          className="cart-item"
                        >

                          {/* IMAGE */}

                          <div className="cart-item-image">

                            <img
                              src={item.image}
                              alt={
                                item.productName
                              }
                            />

                          </div>


                          {/* DETAILS */}

                          <div className="cart-item-content">

                            <div className="cart-item-title-row">

                              <div>

                                <h3>
                                  {
                                    item.productName
                                  }
                                </h3>

                                {item.size && (

                                  <span>
                                    Size:{" "}
                                    {item.size}
                                  </span>

                                )}

                              </div>

                              <button
                                type="button"
                                className="cart-remove"
                                onClick={() =>
                                  removeFromCart(
                                    item.id
                                  )
                                }
                                aria-label={`Remove ${item.productName}`}
                              >
                                ×
                              </button>

                            </div>


                            {/* CUSTOMIZATION */}

                            <div className="cart-customization">

                              {item.colors.length >
                                0 && (

                                <div>
                                  <strong>
                                    Colors:
                                  </strong>{" "}
                                  {item.colors.join(
                                    ", "
                                  )}
                                </div>

                              )}

                              {item.letMelDesign && (

                                <div>
                                  <strong>
                                    Design:
                                  </strong>{" "}
                                  Let Mel Design It
                                </div>

                              )}

                              {!item.letMelDesign &&
                                patternName && (

                                <div>
                                  <strong>
                                    Paracord:
                                  </strong>{" "}
                                  {patternName}
                                </div>

                              )}

                              {!item.letMelDesign &&
                                hardwareName && (

                                <div>
                                  <strong>
                                    Hardware:
                                  </strong>{" "}
                                  {hardwareName}
                                </div>

                              )}

                              {!item.letMelDesign &&
                                beadName && (

                                <div>
                                  <strong>
                                    Beads:
                                  </strong>{" "}
                                  {beadName}
                                </div>

                              )}

                              {item.charmQuantity >
                                0 && (

                                <div>
                                  <strong>
                                    Charms:
                                  </strong>{" "}
                                  {item.charmQuantity}

                                  {item.letMelDesign
                                    ? " — Mel’s Choice"
                                    : charmNames.length >
                                        0
                                      ? ` — ${charmNames.join(
                                          ", "
                                        )}`
                                      : ""}
                                </div>

                              )}

                              {item.personalization.length >
                                0 && (

                                <div>
                                  <strong>
                                    Personalized:
                                  </strong>{" "}
                                  {item.personalization.join(
                                    ", "
                                  )}
                                </div>

                              )}

                            </div>


                            {/* PRICE + QUANTITY */}

                            <div className="cart-item-bottom">

                              <div className="cart-quantity">

                                <button
                                  type="button"
                                  onClick={() =>
                                    changeCartQuantity(
                                      item.id,
                                      -1
                                    )
                                  }
                                  aria-label="Decrease quantity"
                                >
                                  −
                                </button>

                                <span>
                                  {item.quantity}
                                </span>

                                <button
                                  type="button"
                                  onClick={() =>
                                    changeCartQuantity(
                                      item.id,
                                      1
                                    )
                                  }
                                  aria-label="Increase quantity"
                                >
                                  +
                                </button>

                              </div>

                              <strong className="cart-item-price">
                                $
                                {(
                                  item.unitPrice *
                                  item.quantity
                                ).toFixed(2)}
                              </strong>

                            </div>

                          </div>

                        </div>

                      )
                    }
                  )}

                </div>


                {/* CART FOOTER */}

                <div className="cart-footer">

                  <button
                    type="button"
                    className="clear-cart-button"
                    onClick={clearCart}
                  >
                    Clear Cart
                  </button>


                  <div className="cart-subtotal">

                    <span>
                      Subtotal
                    </span>

                    <strong>
                      $
                      {cartTotal.toFixed(
                        2
                      )}
                    </strong>

                  </div>


                  <button
                    type="button"
                    className="checkout-button"
                    onClick={() => {
                      window.location.href = "/checkout"
                    }}
                  >
                    Continue to Checkout
                  </button>


                  <button
                    type="button"
                    className="continue-shopping-button"
onClick={continueShopping}
                >
                  ← Continue Shopping
                  </button>

                </div>

              </>

            )}

          </aside>

        </div>

      )}

    </main>
  )
}
