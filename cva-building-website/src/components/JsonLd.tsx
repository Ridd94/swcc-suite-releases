import { site } from "@/lib/site";

/**
 * LocalBusiness structured data — helps Google understand who CVA are, where
 * they work and how to contact them (improves local search & rich results).
 */
export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: site.name,
    legalName: site.legalName,
    description: site.description,
    url: site.url,
    telephone: site.contact.phone,
    email: site.contact.email,
    image: `${site.url}/og.jpg`,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.contact.address.city,
      addressRegion: site.contact.address.region,
      postalCode: site.contact.address.postcode,
      addressCountry: "GB",
    },
    areaServed: site.serviceArea.map((name) => ({
      "@type": "Place",
      name,
    })),
    sameAs: [site.social.facebook].filter(Boolean),
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
