// Master Product Catalog - Culture Kicks Vadodara (@culturkicks.store)
// Reflecting actual hyped silhouettes sold in-store: On Running, Travis Scott, Jordans, Dunks, Sambas

export const PRODUCTS = [
  {
    id: "ck-travis-fragment-jordan-1",
    name: "Travis Scott x Fragment x Air Jordan 1 Low OG",
    slug: "travis-scott-fragment-air-jordan-1-low",
    tagline: "The Holy Grail Collaboration • Military Blue & Sail",
    category: "Hype & Grails",
    price: 78999,
    originalPrice: 89999,
    isHero: true,
    isNew: true,
    isBestSeller: true,
    rating: 5.0,
    reviewCount: 42,
    description: "One of the most coveted sneaker collaborations in history. Features premium white tumbled leather, backwards oversized royal blue swoosh, vintage sail midsole, and dual Fragment Design lightning bolt and Cactus Jack embroidery.",
    story: "Direct from our authenticated vault at Culture Kicks Vadodara. Includes original triple-branded collector box, plastic sleeve, and 4 lace sets (Sail, Military Blue, Cactus Pink, and Black).",
    specs: [
      { label: "Authentication", value: "100% Verified Culture Kicks Tag" },
      { label: "Condition", value: "Brand New Deadstock (DSWT)" },
      { label: "Packaging", value: "Original Box + Fragment Plastic Sleeve" },
      { label: "Lace Sets", value: "Sail, Blue, Pink & Black Laces" },
      { label: "Origin", value: "Nike Jordan x Hiroshi Fujiwara x Travis Scott" }
    ],
    features: [
      "Inverted lateral oversized swoosh in Military Blue",
      "Cactus Jack face and Fragment Design lightning bolt heel stamps",
      "Aged vintage pre-yellowed sail midsole",
      "Available for immediate in-store inspection at Aries Prime Vadodara"
    ],
    colorways: [
      {
        name: "Military Blue, Sail & White",
        code: "military-blue",
        hex: "#1E3A8A",
        accentHex: "#111827",
        soleHex: "#FEF3C7",
        image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1200&q=80",
        gallery: [
          "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1200&q=80"
        ]
      },
      {
        name: "Reverse Mocha & Sail",
        code: "reverse-mocha",
        hex: "#78350F",
        accentHex: "#FEF3C7",
        soleHex: "#FEF3C7",
        image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=1200&q=80",
        gallery: [
          "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=1200&q=80"
        ]
      }
    ],
    sizes: [7, 8, 9, 10, 11],
    sizesInStock: [7, 8, 9, 10],
    reviews: [
      {
        author: "Harshil P. (Vadodara)",
        verified: true,
        rating: 5,
        date: "2 days ago",
        title: "Legit checked 100% authentic",
        comment: "Picked these up directly from Culture Kicks store at Aries Prime. Box, extra pink laces, blacklight stamp all verified. Best sneaker store in Gujarat."
      },
      {
        author: "Tanmay S. (Ahmedabad)",
        verified: true,
        rating: 5,
        date: "1 week ago",
        title: "Fast express dispatch",
        comment: "Ordered through WhatsApp and got delivery the very next day. Double-boxed and bubble wrapped with authenticity tag."
      }
    ]
  },
  {
    id: "ck-on-cloudmonster-2",
    name: "On Running Cloudmonster 2",
    slug: "on-cloudmonster-2-frost",
    tagline: "Maximum CloudTec® Cushioning • Frost Grey & Coral",
    category: "Running & Performance",
    price: 18999,
    originalPrice: 20999,
    isHero: false,
    isNew: true,
    isBestSeller: true,
    rating: 4.9,
    reviewCount: 58,
    description: "The monster sensation from Switzerland featured in our viral reel. Packed with the biggest CloudTec® elements ever engineered for sensational bounce and soft landings.",
    story: "One of our fastest-selling models at Culture Kicks. Ideal for street style, marathon training, and all-day comfort.",
    specs: [
      { label: "Cushioning", value: "Max CloudTec® Dual-Density Helion™" },
      { label: "Speedboard", value: "Polypropylene Explosive Rocker" },
      { label: "Drop", value: "6mm" },
      { label: "Weight", value: "295g" }
    ],
    features: [
      "Ultra-breathable engineered recycled mesh",
      "Radical rocker shape pushes your momentum forward",
      "Grip rubber compound for asphalt and wet pavement"
    ],
    colorways: [
      {
        name: "Frost Grey & Coral",
        code: "frost-grey",
        hex: "#94A3B8",
        accentHex: "#F43F5E",
        soleHex: "#E2E8F0",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80",
        gallery: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80"]
      },
      {
        name: "Triple Black Eclipse",
        code: "all-black",
        hex: "#0F172A",
        accentHex: "#334155",
        soleHex: "#0F172A",
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1200&q=80",
        gallery: ["https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1200&q=80"]
      }
    ],
    sizes: [7, 8, 9, 10, 11, 12],
    sizesInStock: [7, 8, 9, 10, 11],
    reviews: [
      {
        author: "Rohan D. (Vadodara)",
        verified: true,
        rating: 5,
        date: "3 days ago",
        title: "Walking on clouds",
        comment: "Saw them on Culture Kicks reel, walked into the Vasna road store and bought them immediately. Unbelievable comfort."
      }
    ]
  },
  {
    id: "ck-air-jordan-4-bred",
    name: "Air Jordan 4 Retro 'Bred Reimagined'",
    slug: "air-jordan-4-retro-bred-reimagined",
    tagline: "Iconic 1989 Tinker Hatfield Classic in Premium Leather",
    category: "Air Jordans",
    price: 29999,
    originalPrice: 34999,
    isHero: false,
    isNew: true,
    isBestSeller: true,
    rating: 5.0,
    reviewCount: 76,
    description: "A luxurious reimagining of Michael Jordan's 1989 'The Shot' silhouette. Upgrades original nubuck to rich, supple black tumbled leather with classic Nike Air heel branding.",
    story: "Displayed front and center on the Culture Kicks sneaker wall. A cornerstone for any serious collector.",
    specs: [
      { label: "Material", value: "Premium Full-Grain Tumbled Leather" },
      { label: "Heel Logo", value: "Original 'Nike Air' Branding" },
      { label: "Colorway", value: "Black / Fire Red / Cement Grey / Summit White" }
    ],
    features: [
      "Mesh quarter panel netting with grey support wings",
      "Visible Air-Sole unit in the heel",
      "Polyurethane midsole with cement grey accents"
    ],
    colorways: [
      {
        name: "Black, Cement & Fire Red",
        code: "bred",
        hex: "#111111",
        accentHex: "#EF4444",
        soleHex: "#9CA3AF",
        image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=80",
        gallery: ["https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=80"]
      }
    ],
    sizes: [7, 8, 9, 10, 11, 12],
    sizesInStock: [8, 9, 10, 11],
    reviews: [
      {
        author: "Manan K. (Surat)",
        verified: true,
        rating: 5,
        date: "1 week ago",
        title: "Leather quality is insane",
        comment: "Drove down from Surat specifically for these. Culture Kicks had my size 10 in stock ready to go. Great guys."
      }
    ]
  },
  {
    id: "ck-nike-dunk-low-panda",
    name: "Nike Dunk Low Retro 'Panda'",
    slug: "nike-dunk-low-retro-panda",
    tagline: "The Everyday Streetwear Staple • White & Black",
    category: "Nike Dunks",
    price: 11499,
    originalPrice: 12999,
    isHero: false,
    isNew: false,
    isBestSeller: true,
    rating: 4.8,
    reviewCount: 124,
    description: "The most versatile sneaker of modern street culture. Crisp white leather base with bold black overlays and timeless low-cut padded collar.",
    story: "Always stocked at Culture Kicks. A guaranteed pairing with cargos, denim, or sweatpants.",
    specs: [
      { label: "Upper", value: "Genuine Leather Overlays" },
      { label: "Midsole", value: "Lightweight Cushioning Foam" },
      { label: "Outsole", value: "Durable Rubber Pivot Circle Traction" }
    ],
    features: [
      "Perforations on toe for breathability",
      "Stitched cupsole construction",
      "Authentic Nike tongue label embroidery"
    ],
    colorways: [
      {
        name: "Classic White & Black",
        code: "panda",
        hex: "#FFFFFF",
        accentHex: "#000000",
        soleHex: "#000000",
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1200&q=80",
        gallery: ["https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1200&q=80"]
      }
    ],
    sizes: [6, 7, 8, 9, 10, 11],
    sizesInStock: [6, 7, 8, 9, 10, 11],
    reviews: [
      {
        author: "Dhruv P.",
        verified: true,
        rating: 5,
        date: "5 days ago",
        title: "100% authentic pandas",
        comment: "Hard to find genuine pairs online without fakes. Culture Kicks is genuine and verified."
      }
    ]
  },
  {
    id: "ck-adidas-samba-og",
    name: "Adidas Originals Samba OG",
    slug: "adidas-originals-samba-og-green",
    tagline: "Terrace Classic with Gum Sole • Cloud White & Green",
    category: "Heritage & Streetwear",
    price: 9999,
    originalPrice: 11499,
    isHero: false,
    isNew: false,
    isBestSeller: true,
    rating: 4.9,
    reviewCount: 88,
    description: "From 1950s football pitches to current global runway trends. Smooth leather upper, suede T-toe cap, and dark gum rubber outsole.",
    story: "Visible in the Culture Kicks store shelves. A timeless, slim vintage profile loved by fashion enthusiasts.",
    specs: [
      { label: "Toe Cap", value: "Suede T-Toe Overlay" },
      { label: "Outsole", value: "Low-Profile Natural Gum Rubber" },
      { label: "Branding", value: "Gold Foil Samba Lettering" }
    ],
    features: [
      "Soft leather lining for everyday comfort",
      "Serrated 3-Stripes in Forest Green",
      "Lightweight synthetic leather tongue"
    ],
    colorways: [
      {
        name: "Cloud White & Collegiate Green",
        code: "white-green",
        hex: "#F8FAFC",
        accentHex: "#15803D",
        soleHex: "#B45309",
        image: "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?auto=format&fit=crop&w=1200&q=80",
        gallery: ["https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?auto=format&fit=crop&w=1200&q=80"]
      }
    ],
    sizes: [6, 7, 8, 9, 10, 11],
    sizesInStock: [7, 8, 9, 10],
    reviews: [
      {
        author: "Sneha V.",
        verified: true,
        rating: 5,
        date: "2 weeks ago",
        title: "Perfection with wide-leg pants",
        comment: "Bought from Culture Kicks Vadodara. The green stripes are so clean in person."
      }
    ]
  },
  {
    id: "ck-new-balance-9060",
    name: "New Balance 9060 'Rain Cloud'",
    slug: "new-balance-9060-rain-cloud",
    tagline: "Y2K Futuristic Chunky Silhouette • Sea Salt & Castlerock",
    category: "Heritage & Streetwear",
    price: 16999,
    originalPrice: 18999,
    isHero: false,
    isNew: true,
    isBestSeller: true,
    rating: 4.9,
    reviewCount: 64,
    description: "Reinterprets familiar elements from the classic 99X models with a warped, futurist Y2K aesthetic. Sculpted dual-density midsole with ABZORB and SBS cushioning.",
    story: "One of the most requested chunky silhouettes at our Aries Prime store.",
    specs: [
      { label: "Cushioning", value: "ABZORB and SBS Midsole Tech" },
      { label: "Upper", value: "Mesh Base with Pigskin Suede Overlays" },
      { label: "Heel Device", value: "Translucent CR Heel Clip" }
    ],
    features: [
      "Diamond outsole pattern inspired by classic 860 design",
      "Tongue logo inspired by original 991 lace jewel",
      "All-day pillow comfort for high-step counts"
    ],
    colorways: [
      {
        name: "Rain Cloud & Castlerock",
        code: "rain-cloud",
        hex: "#94A3B8",
        accentHex: "#475569",
        soleHex: "#CBD5E1",
        image: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=1200&q=80",
        gallery: ["https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=1200&q=80"]
      }
    ],
    sizes: [7, 8, 9, 10, 11, 12],
    sizesInStock: [7, 8, 9, 10, 11],
    reviews: [
      {
        author: "Dev Patel (Vadodara)",
        verified: true,
        rating: 5,
        date: "3 days ago",
        title: "Best everyday shoe",
        comment: "The cushioning on the 9060 is unmatched. Thank you Culture Kicks for keeping these in stock."
      }
    ]
  },
  {
    id: "ck-yeezy-boost-350-onyx",
    name: "Yeezy Boost 350 V2 'Onyx'",
    slug: "yeezy-boost-350-v2-onyx",
    tagline: "Primeknit Upper with Full-Length Boost™ • Triple Onyx Black",
    category: "Hype & Grails",
    price: 24999,
    originalPrice: 27999,
    isHero: false,
    isNew: false,
    isBestSeller: true,
    rating: 4.9,
    reviewCount: 92,
    description: "Monochromatic stealth design with re-engineered Primeknit upper, post-dyed monofilament side stripe woven in, and encapsulated Boost™ sole.",
    story: "Deadstock pair authenticated and boxed at Culture Kicks Vadodara.",
    specs: [
      { label: "Cushioning", value: "Full-Length Encapsulated Boost™" },
      { label: "Upper", value: "Engineered Primeknit" },
      { label: "Pull Tab", value: "Woven Rear Heel Pull Tab" }
    ],
    features: [
      "Sock-like slip-on fit with dynamic rope laces",
      "Semi-translucent ribbed TPU midsole cage",
      "Maximum breathability for warm Indian climates"
    ],
    colorways: [
      {
        name: "Triple Onyx Black",
        code: "onyx",
        hex: "#18181B",
        accentHex: "#27272A",
        soleHex: "#09090B",
        image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1200&q=80",
        gallery: ["https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1200&q=80"]
      }
    ],
    sizes: [7, 8, 9, 10, 11],
    sizesInStock: [8, 9, 10],
    reviews: [
      {
        author: "Yash S.",
        verified: true,
        rating: 5,
        date: "1 week ago",
        title: "Classic Boost comfort",
        comment: "Can't beat 350 comfort. Genuine pair verified by Culture Kicks staff."
      }
    ]
  },
  {
    id: "ck-air-jordan-1-retro-high-chicago",
    name: "Air Jordan 1 Retro High OG 'Lost & Found'",
    slug: "air-jordan-1-high-lost-and-found",
    tagline: "The Vintage 1985 Classic • Varsity Red & Cracked Leather",
    category: "Air Jordans",
    price: 36999,
    originalPrice: 42999,
    isHero: false,
    isNew: true,
    isBestSeller: true,
    rating: 5.0,
    reviewCount: 47,
    description: "Honors the forgotten vintage store finds of the 1980s. Featuring cracked black collar leather, aged vintage sail midsole, and distressed vintage invoice receipt inside the box.",
    story: "Available at Culture Kicks Vadodara with original vintage newspaper wrapping and invoice receipt.",
    specs: [
      { label: "Edition", value: "Lost & Found Collector Box" },
      { label: "Inclusions", value: "Vintage 1985 Store Receipt & Sale Paper" },
      { label: "Laces", value: "Black & Cream Sail Laces" }
    ],
    features: [
      "Higher 1985 collar cut matching original release",
      "Cracked vintage finish on white leather side panels",
      "Varsity Red tumbled leather overlays"
    ],
    colorways: [
      {
        name: "Varsity Red, Black & Sail",
        code: "chicago",
        hex: "#DC2626",
        accentHex: "#111827",
        soleHex: "#FEF3C7",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80",
        gallery: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80"]
      }
    ],
    sizes: [8, 9, 10, 11],
    sizesInStock: [8, 9, 10],
    reviews: [
      {
        author: "Pratik M. (Baroda)",
        verified: true,
        rating: 5,
        date: "4 days ago",
        title: "Dream pair secured",
        comment: "Visited Culture Kicks at Vasna road and picked up these Grails. Best store in town without a doubt."
      }
    ]
  }
];

export const CATEGORIES = [
  "All",
  "Hype & Grails",
  "Air Jordans",
  "Running & Performance",
  "Nike Dunks",
  "Heritage & Streetwear"
];

export const ALL_SIZES = [6, 7, 8, 9, 10, 11, 12];
export const PRICE_RANGES = [
  { label: "All Prices", min: 0, max: 999999 },
  { label: "Under ₹15,000", min: 0, max: 15000 },
  { label: "₹15,000 – ₹30,000", min: 15000, max: 30000 },
  { label: "₹30,000 – ₹50,000", min: 30000, max: 50000 },
  { label: "Grails Above ₹50,000", min: 50000, max: 999999 }
];
