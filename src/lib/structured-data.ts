import { siteConfig as defaultConfig } from "@/config/site";
import type { SiteConfig } from "@/types";

export function generateLocalBusinessJsonLd(config?: SiteConfig) {
  const c = config || defaultConfig;
  return {
    "@context": "https://schema.org",
    "@type": c.structured.type,
    name: c.name,
    description: c.description,
    url: c.url,
    image: `${c.url}${c.ogImage}`,
    telephone: c.location.phone,
    email: c.location.email,
    priceRange: c.structured.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: c.location.address,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: c.structured.geo.lat,
      longitude: c.structured.geo.lng,
    },
    sameAs: c.socials.map((s) => s.url),
  };
}
