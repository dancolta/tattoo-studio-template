import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  // ── Meta ──────────────────────────────────────────
  name: "Ink & Iron Tattoo",
  tagline: "Where Art Meets Skin",
  description:
    "Premium custom tattoo studio in Portland, OR. Specializing in black & grey, fine line, and custom designs.",
  url: "https://inkandiron.com",
  ogImage: "/images/og-image.svg",

  // ── Hero ──────────────────────────────────────────
  hero: {
    type: "image",
    imageSrc: "/images/hero/tattoo-hero-wide.png",
    videoSrc: undefined,
    heading: "Ink & Iron",
    subheading: "Custom Tattoos, Crafted for Life",
    ctaText: "Book a Session",
    ctaHref: "/contact",
  },

  // ── Navigation ────────────────────────────────────
  nav: {
    logo: "Ink & Iron",
    links: [
      { label: "Home", href: "/" },
      { label: "Works", href: "/works" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    ctaText: "Book Now",
    ctaHref: "/contact",
  },

  // ── Portfolio ─────────────────────────────────────
  portfolio: {
    heading: "Selected Works",
    subheading: "A curated collection of recent pieces",
    categories: [
      "All",
      "Black & Grey",
      "Color",
      "Fine Line",
      "Traditional",
      "Custom",
    ],
    items: [
      {
        src: "https://images.unsplash.com/photo-1611489142329-5f62cfa43e6e?w=600&h=800&fit=crop&q=80",
        alt: "Black and grey sleeve tattoo",
        category: "Black & Grey",
        title: "Geometric Sleeve",
      },
      {
        src: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=600&h=800&fit=crop&q=80",
        alt: "Tattoo artist at work",
        category: "Custom",
        title: "Artist at Work",
      },
      {
        src: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=600&h=800&fit=crop&q=80",
        alt: "Detailed tattoo close-up",
        category: "Fine Line",
        title: "Botanical",
      },
      {
        src: "https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=600&h=800&fit=crop&q=80",
        alt: "Tattoo machine and ink",
        category: "Traditional",
        title: "The Tools",
      },
      {
        src: "https://images.unsplash.com/photo-1560707303-4e980ce876ad?w=600&h=800&fit=crop&q=80",
        alt: "Arm tattoo black and grey",
        category: "Black & Grey",
        title: "Forearm Piece",
      },
      {
        src: "https://images.unsplash.com/photo-1542556398-95fb5b9f9b48?w=600&h=800&fit=crop&q=80",
        alt: "Colorful tattoo art",
        category: "Color",
        title: "Koi Fish",
      },
      {
        src: "https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?w=600&h=800&fit=crop&q=80",
        alt: "Fine line tattoo on wrist",
        category: "Fine Line",
        title: "Minimalist Line",
      },
      {
        src: "https://images.unsplash.com/photo-1562962230-16e4623d36e6?w=600&h=800&fit=crop&q=80",
        alt: "Traditional style tattoo",
        category: "Traditional",
        title: "Old School Eagle",
      },
      {
        src: "https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?w=600&h=800&fit=crop&q=80",
        alt: "Back tattoo custom design",
        category: "Custom",
        title: "Full Back Piece",
      },
      {
        src: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=600&h=800&fit=crop&q=80",
        alt: "Rose tattoo black and grey",
        category: "Black & Grey",
        title: "Rose",
      },
      {
        src: "https://images.unsplash.com/photo-1550537687-c91072c4792d?w=600&h=800&fit=crop&q=80",
        alt: "Color watercolor tattoo",
        category: "Color",
        title: "Watercolor",
      },
      {
        src: "https://images.unsplash.com/photo-1571974599782-87624638275e?w=600&h=800&fit=crop&q=80",
        alt: "Mandala tattoo design",
        category: "Custom",
        title: "Mandala",
      },
    ],
  },

  // ── Testimonials ──────────────────────────────────
  testimonials: {
    heading: "What Clients Say",
    items: [
      {
        quote:
          "Absolutely incredible work. The attention to detail is unmatched. I've never felt more confident in a tattoo artist.",
        author: "Sarah M.",
        rating: 5,
      },
      {
        quote:
          "From consultation to the final piece, the experience was flawless. My sleeve turned out better than I imagined.",
        author: "James T.",
        rating: 5,
      },
      {
        quote:
          "Clean studio, professional atmosphere, and most importantly — stunning artistry. Already booking my next session.",
        author: "Maya R.",
        rating: 5,
      },
      {
        quote:
          "I was nervous about my first tattoo but the team made me feel completely at ease. The result speaks for itself.",
        author: "David K.",
        rating: 5,
      },
      {
        quote:
          "Best tattoo studio in Portland, hands down. The custom design process is worth every penny.",
        author: "Olivia C.",
        rating: 5,
      },
      {
        quote:
          "Three sessions in and every piece has exceeded my expectations. The precision on my geometric sleeve is insane.",
        author: "Marcus L.",
        rating: 5,
      },
      {
        quote:
          "Found them on Instagram and drove two hours for my appointment. Would do it again in a heartbeat. True masters of their craft.",
        author: "Emma W.",
        rating: 5,
      },
      {
        quote:
          "Got a cover-up that I thought was impossible. They turned my old mistake into a genuine work of art. Lifesaver.",
        author: "Ryan P.",
        rating: 5,
      },
      {
        quote:
          "The fine line work here is on another level. Delicate, precise, and healed beautifully. Everyone asks where I got it done.",
        author: "Sophia N.",
        rating: 5,
      },
      {
        quote:
          "My partner and I got matching pieces and the experience was perfect. Patient, creative, and genuinely talented.",
        author: "Alex & Jordan",
        rating: 5,
      },
    ],
  },

  // ── About ─────────────────────────────────────────
  about: {
    artistName: "Alex Rivera",
    portraitSrc: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=600&h=750&fit=crop&q=80",
    bio: [
      "With over 15 years of experience in the art of tattooing, I've dedicated my career to transforming personal stories into lasting works of art. My journey began in a small studio in Brooklyn, where I apprenticed under some of the most respected names in the industry.",
      "Today, Ink & Iron represents everything I believe about the craft — precision, artistry, and a deep respect for the trust my clients place in me. Every piece I create is a collaboration, a conversation between artist and canvas.",
      "I specialize in black & grey realism, fine line work, and custom designs that push the boundaries of what's possible on skin. Whether it's your first tattoo or your fiftieth, I approach every session with the same passion and dedication.",
      "My process always starts with a conversation. I want to understand the story behind every piece — what it means to you, where it fits in your life, and how it connects to who you are. From there, I sketch, refine, and iterate until the design feels like it was always meant to exist.",
      "Over the years, I've had the privilege of working with clients from all walks of life — musicians, athletes, first-timers, collectors. Each one teaches me something new about the art form. That's what keeps me inspired after all this time.",
    ],
    philosophy: {
      quote:
        "Every tattoo tells a story.\nMy job is to make sure it's told beautifully.",
      values: [
        {
          icon: "Paintbrush",
          title: "Custom Designs",
          description:
            "Every piece is one-of-a-kind, designed specifically for you and your vision.",
        },
        {
          icon: "ShieldCheck",
          title: "Sterile Environment",
          description:
            "Hospital-grade sterilization and single-use equipment for your safety.",
        },
        {
          icon: "Heart",
          title: "Lifetime Touch-ups",
          description:
            "We stand behind our work with complimentary touch-ups for life.",
        },
      ],
    },
    studioPhotos: [
      "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=600&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1611489142329-5f62cfa43e6e?w=600&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1560707303-4e980ce876ad?w=600&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1542556398-95fb5b9f9b48?w=600&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?w=600&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1562962230-16e4623d36e6?w=600&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?w=600&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=600&h=600&fit=crop&q=80",
    ],
  },

  // ── Contact ───────────────────────────────────────
  contact: {
    heading: "Get In Touch",
    subheading: "Ready to start your next piece? Drop us a line.",
    styles: [
      "Black & Grey",
      "Color",
      "Fine Line",
      "Traditional",
      "Realism",
      "Custom",
    ],
    formAction: "/api/contact",
  },

  // ── Location ──────────────────────────────────────
  location: {
    address: "123 Ink Street, Portland, OR 97201",
    phone: "(503) 555-0123",
    email: "hello@inkandiron.com",
    hours: "Tue – Sat: 11am – 8pm",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.4!2d-122.6789!3d45.5155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDMwJzU1LjgiTiAxMjLCsDQwJzQ0LjAiVw!5e0!3m2!1sen!2sus!4v1",
  },

  // ── Socials ───────────────────────────────────────
  socials: [
    { platform: "instagram", url: "https://instagram.com/inkandiron" },
    { platform: "tiktok", url: "https://tiktok.com/@inkandiron" },
    { platform: "facebook", url: "https://facebook.com/inkandiron" },
  ],

  // ── Stats ─────────────────────────────────────────
  stats: [
    { value: "15+", label: "Years Experience" },
    { value: "500+", label: "Happy Clients" },
    { value: "5K+", label: "Custom Designs" },
    { value: "5.0", label: "Google Rating" },
  ],

  // ── Footer ────────────────────────────────────────
  footer: {
    copyright: "Ink & Iron Tattoo",
  },

  // ── CTA Banner ────────────────────────────────────
  ctaBanner: {
    heading: "Ready to Get Inked?",
    subheading: "Book your free consultation today.",
    ctaText: "Book a Session",
    ctaHref: "/contact",
  },

  // ── Structured Data ───────────────────────────────
  structured: {
    type: "TattooParlor",
    priceRange: "$$",
    geo: { lat: 45.5155, lng: -122.6789 },
  },
};
