export interface NavLink {
  label: string;
  href: string;
}

export interface PortfolioItem {
  src: string;
  alt: string;
  category: string;
  title: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  rating: number;
}

export interface PhilosophyValue {
  icon: string;
  title: string;
  description: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface Social {
  platform: string;
  url: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  ogImage: string;

  hero: {
    type: "image" | "video";
    imageSrc: string;
    videoSrc?: string;
    heading: string;
    headingColors?: string[];
    subheading: string;
    ctaText: string;
    ctaHref: string;
    secondaryCtaText?: string;
    secondaryCtaHref?: string;
  };

  nav: {
    logo: string;
    logoSrc?: string;
    links: NavLink[];
    ctaText: string;
    ctaHref: string;
  };

  portfolio: {
    heading: string;
    subheading: string;
    categories: string[];
    items: PortfolioItem[];
  };

  testimonials: {
    heading: string;
    items: Testimonial[];
  };

  about: {
    heading?: string;
    subheading?: string;
    artistName: string;
    portraitSrc: string;
    bio: string[];
    philosophy: {
      quote: string;
      values: PhilosophyValue[];
    };
    studioPhotos: string[];
  };

  contact: {
    heading: string;
    subheading: string;
    styles: string[];
    formAction: string;
  };

  location: {
    address: string;
    phone: string;
    email: string;
    hours: string;
    mapEmbedUrl?: string;
  };

  socials: Social[];

  footer: {
    copyright: string;
  };

  stats: StatItem[];

  ctaBanner: {
    heading: string;
    subheading: string;
    ctaText: string;
    ctaHref: string;
  };

  colors?: {
    accent?: string;
    accentHover?: string;
    heading?: string;
    border?: string;
    btnPrimary?: string;
    btnSecondary?: string;
    rimPrimary?: string;
    rimPrimaryAlt?: string;
    rimSecondary?: string;
    rimSecondaryAlt?: string;
    glowDark?: string;
    glowMid?: string;
    glowLight?: string;
    glowBright?: string;
    spotlight?: string;
  };

  structured: {
    type: string;
    priceRange: string;
    geo: { lat: number; lng: number };
  };
}
