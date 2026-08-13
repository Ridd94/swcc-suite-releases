/**
 * CENTRAL SITE CONTENT
 * ====================
 * Everything editable about the site lives here so non-developers can update
 * copy, contact details, services, projects and reviews in ONE place.
 *
 * Details below were taken from CVA's Facebook page & signage. Anything still
 * marked TODO needs confirming with the CVA team.
 */

export const site = {
  name: "CVA Building and Electrical",
  legalName: "CVA Building & Electrics Ltd",
  shortName: "CVA",
  tagline: "Building & electrical experts across South Wales",
  description:
    "CVA Building and Electrical are NAPIT-approved builders and electricians based in Aberdare, South Wales. Printed concrete driveways, spray rendering, extensions, rewires, fuse-board upgrades, CCTV and more — quality workmanship you can rely on.",
  // From the van signage: www.cvabuildings.co.uk
  url: "https://www.cvabuildings.co.uk",

  // ── Contact details (from Facebook / van signage) ────────────────────────
  contact: {
    phone: "01685 877233",
    phoneHref: "tel:+441685877233",
    // NOTE: some Facebook posts list an alternate office line: 01685 816366.
    // TODO: confirm with CVA which office number should be the main one.
    phoneAlt: "01685 816366",
    mobile: "07789 547690",
    mobileHref: "tel:+447789547690",
    email: "info@cvabuilding.co.uk", // TODO: confirm real email (not shown on Facebook)
    address: {
      line1: "Aberdare", // TODO: full street address
      city: "Aberdare",
      region: "Rhondda Cynon Taf",
      postcode: "CF44", // TODO: full postcode
      country: "United Kingdom",
    },
    hours: [
      { day: "Monday – Friday", time: "8:00am – 6:00pm" },
      { day: "Saturday", time: "8:00am – 1:00pm" },
      { day: "Sunday", time: "Closed / Emergencies only" },
    ],
  },

  // ── Social ───────────────────────────────────────────────────────────────
  social: {
    facebook: "https://www.facebook.com/CVABuilding/",
    instagram: "",
  },

  // ── Service area ─────────────────────────────────────────────────────────
  serviceArea: [
    "Aberdare",
    "Mountain Ash",
    "Merthyr Tydfil",
    "Pontypridd",
    "Rhondda",
    "Cynon Valley",
    "Cardiff",
    "The wider South Wales valleys",
  ],

  // ── Trust signals ────────────────────────────────────────────────────────
  accreditations: [
    "NAPIT Approved Contractor",
    "Part P Compliant Electrical Work",
    "Fully Qualified Electricians",
    "Fully Insured",
  ],
} as const;

export type NavItem = { label: string; href: string };

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Reviews", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

export type Service = {
  slug: string;
  title: string;
  short: string;
  icon: string; // emoji used as a lightweight, dependency-free icon
  summary: string;
  points: string[];
  intro: string;
};

export const services: Service[] = [
  {
    slug: "printed-concrete-driveways",
    title: "Printed Concrete Driveways",
    short: "Driveways, paths & patios that last",
    icon: "🧱",
    summary:
      "Pattern-imprinted concrete driveways, paths and patios in a huge range of colours and finishes — hard-wearing, low-maintenance and built to impress.",
    intro:
      "Printed (pattern-imprinted) concrete is one of our specialities. It gives you the look of block paving, brick or natural stone in a single, seamless, weed-free surface that's tough enough to last for years. We handle the full job — groundworks, edgings, laying, imprinting and sealing — and can transform the whole frontage with matching paths, patios, walls, fencing and artificial grass.",
    points: [
      "Pattern-imprinted concrete driveways",
      "Paths, patios and pathways",
      "Wide choice of colours and patterns",
      "Weed-free, low-maintenance finish",
      "Matching walls, fencing & artificial grass",
      "Free, no-obligation quotes",
    ],
  },
  {
    slug: "spray-render",
    title: "Spray Render & Wall Coatings",
    short: "Choose your colour, never paint again",
    icon: "🎨",
    summary:
      "Coloured spray render and external wall coatings that refresh tired or damp walls — pick your colour once and enjoy a zero-maintenance finish for years.",
    intro:
      "Damp, tired or crumbling external walls? Our spray render system gives your property a fresh, modern, weatherproof finish in the colour of your choice — so you never have to paint again. It's low-maintenance, hard-wearing and a fantastic way to protect and transform the look of your home.",
    points: [
      "Coloured spray render systems",
      "External wall coatings",
      "Great for damp or tired walls",
      "Choose from a range of colours",
      "Zero-maintenance, never paint again",
      "Weatherproof and long-lasting",
    ],
  },
  {
    slug: "extensions-renovations",
    title: "Extensions & Renovations",
    short: "Extend, remodel and add value",
    icon: "🏠",
    summary:
      "Extensions, renovations and building maintenance — adding space, comfort and value to homes and businesses across the valleys.",
    intro:
      "From single-storey extensions to full renovations and general building maintenance, CVA handles the whole build under one roof. Because we cover building and electrical work together, your project runs more smoothly — one coordinated team, one point of contact, from first idea to final finish.",
    points: [
      "Single & double-storey extensions",
      "Full property renovations",
      "Structural alterations & building work",
      "General building maintenance",
      "Coordinated building + electrical trades",
      "Building control liaison",
    ],
  },
  {
    slug: "electrical",
    title: "Electrical Services",
    short: "NAPIT-approved, fully certified",
    icon: "⚡",
    summary:
      "NAPIT-approved electricians for rewires, fuse-board upgrades, smoke alarms, fault finding and installations — safe, certified and compliant.",
    intro:
      "As a NAPIT-approved contractor, our fully qualified electricians carry out everything from a single socket to a full rewire. All work is certified and compliant with Part P and current UK wiring regulations. From upgrading an old fuse box to fitting smoke alarms and testing, we keep your home or business safe and up to standard.",
    points: [
      "Fuse box / consumer unit upgrades",
      "Full and partial rewires",
      "Smoke detector checks & servicing",
      "Fault finding and repairs",
      "Electrical installations, sockets & lighting",
      "Domestic & commercial work",
    ],
  },
  {
    slug: "kitchens-bathrooms",
    title: "Kitchens & Bathrooms",
    short: "Full supply & fit, start to finish",
    icon: "🛁",
    summary:
      "Complete kitchen and bathroom installations for homes and businesses — plumbing, electrics, tiling and finishing by one trusted team.",
    intro:
      "A new kitchen or bathroom touches every trade — building, plumbing, electrics, tiling and decorating. Because CVA covers all of it in-house, your project runs smoothly from start to finish. We work on domestic and commercial projects alike, including full bathroom and washroom refurbishments for local businesses.",
    points: [
      "Full kitchen & bathroom installations",
      "Domestic & commercial refurbishments",
      "Plumbing and electrical work included",
      "Wall and floor tiling",
      "Plastering and decorating",
      "Quality fixtures and fittings",
    ],
  },
  {
    slug: "security-alarms",
    title: "Security, CCTV & Alarms",
    short: "Protect what matters most",
    icon: "📹",
    summary:
      "CCTV, security lighting, intruder alarms and smoke detectors installed and tested to keep your home, family and business protected.",
    intro:
      "Keep your property safe with professionally installed security systems. We fit and test CCTV cameras, security floodlighting, intruder alarms and smoke detectors — giving you peace of mind whether it's your home, tenants or business premises you're protecting.",
    points: [
      "CCTV camera installation",
      "Security & floodlighting",
      "Intruder alarm systems",
      "Smoke detector fitting & testing",
      "Domestic & commercial systems",
      "Safety you can trust",
    ],
  },
];

export type Project = {
  title: string;
  category: string;
  location: string;
  blurb: string;
  swatch: string;
};

// Real projects from CVA's Facebook page. TODO: add clean project photos.
export const projects: Project[] = [
  {
    title: "Printed Concrete Driveway & Wall",
    category: "Driveways",
    location: "Aberdare",
    blurb:
      "A full printed concrete drive with a matching wall around the property. As the customer said: “We kept each other informed at all times and the work was completed to a high standard.”",
    swatch: "from-brand-700 to-brand-900",
  },
  {
    title: "Rear Extension with Bi-Fold Doors",
    category: "Extensions",
    location: "South Wales valleys",
    blurb:
      "A single-storey rear extension with large bi-fold doors, brick detailing and rendered finish — adding bright, modern living space to a family home.",
    swatch: "from-accent-600 to-accent-800",
  },
  {
    title: "Coloured Spray Render Transformation",
    category: "Rendering",
    location: "South Wales valleys",
    blurb:
      "Tired external walls given a fresh, weatherproof coloured spray render finish — a low-maintenance makeover that means the owners never have to paint again.",
    swatch: "from-brand-600 to-brand-800",
  },
  {
    title: "Commercial Washroom Refurbishment",
    category: "Bathrooms",
    location: "Amore Restaurant, Aberdare",
    blurb:
      "A full washroom revamp for a local restaurant — new cubicles, vanity units, flooring and finishing completed to a high commercial standard.",
    swatch: "from-ink-700 to-ink-900",
  },
  {
    title: "Fuse Board Upgrade",
    category: "Electrical",
    location: "Aberdare",
    blurb:
      "An outdated fuse box replaced with a modern consumer unit — bringing the property up to current UK safety standards. Fully certified NAPIT-approved work.",
    swatch: "from-brand-800 to-ink-950",
  },
  {
    title: "Garden Driveway & Artificial Grass",
    category: "Landscaping",
    location: "South Wales valleys",
    blurb:
      "A complete garden transformation combining printed concrete, fencing and artificial grass to create a smart, low-maintenance outdoor space.",
    swatch: "from-accent-500 to-accent-700",
  },
];

export type Testimonial = {
  quote: string;
  author: string;
  location: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    // Real review from CVA's Facebook page
    quote:
      "Would like to thank CVA Building and Electrical for my printed concrete drive and wall around my property. We kept each other informed at all times throughout this process, and the work was completed to a high standard.",
    author: "Verified customer",
    location: "Aberdare",
    rating: 5,
  },
  {
    quote:
      "Had our old fuse box upgraded and couldn't fault the service — fully qualified, tidy and everything left safe and certified. Would happily recommend.",
    author: "Placeholder — David M.",
    location: "Mountain Ash",
    rating: 5,
  },
  {
    quote:
      "The spray render has completely transformed the front of the house and it looks brand new. Great team, great finish and no more painting!",
    author: "Placeholder — Rhian & Tom",
    location: "Merthyr Tydfil",
    rating: 5,
  },
  {
    quote:
      "Reliable, honest and fairly priced — exactly what you want. From the extension to the electrics it was all handled by one team. Delighted.",
    author: "Placeholder — Gareth W.",
    location: "Pontypridd",
    rating: 5,
  },
];

export type Stat = { value: string; label: string };

// TODO: Confirm real figures with CVA.
export const stats: Stat[] = [
  { value: "15+", label: "Years' experience" },
  { value: "500+", label: "Projects completed" },
  { value: "NAPIT", label: "Approved contractor" },
  { value: "100%", label: "Certified & insured work" },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "What areas do you cover?",
    a: "We're based in Aberdare and work throughout the South Wales valleys, including Mountain Ash, Merthyr Tydfil, Pontypridd, the Rhondda and out towards Cardiff. If you're nearby, just ask.",
  },
  {
    q: "Are you qualified and insured?",
    a: "Yes. We're a NAPIT-approved contractor with fully qualified electricians, and all electrical work is certified and Part P compliant. We're fully insured for your complete peace of mind.",
  },
  {
    q: "Do you provide free quotes?",
    a: "Absolutely — all our quotes are free and no-obligation. We'll visit, talk through what you're looking for and give you a clear, honest price before any work begins.",
  },
  {
    q: "Can you handle both the building and the electrical work?",
    a: "That's exactly what sets us apart. Because we cover building and electrical work in-house, your project runs more smoothly with a single trusted team and one point of contact.",
  },
];
