import { siteConfig } from "@/config/site";

export function generateLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": siteConfig.structured.type,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    telephone: siteConfig.location.phone,
    email: siteConfig.location.email,
    priceRange: siteConfig.structured.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.location.address,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.structured.geo.lat,
      longitude: siteConfig.structured.geo.lng,
    },
    sameAs: siteConfig.socials.map((s) => s.url),
  };
}
