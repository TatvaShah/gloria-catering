import { business, emailAddress, highlights, instagramUrl } from "@/lib/content";
import { getSiteUrl } from "@/lib/site-url";

export function JsonLd() {
  const url = getSiteUrl();
  const data = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    name: business.name,
    description:
      "Event and corporate catering in Vaughan and Toronto. Finger foods, charcuterie boards and cups, fruit platters, and desserts. Orders by Instagram message and email.",
    url,
    image: [`${url}/brand/logo.jpg`, `${url}/media/hero.jpg`],
    email: emailAddress,
    servesCuisine: "Catering",
    areaServed: [
      { "@type": "City", name: "Vaughan", addressCountry: "CA" },
      { "@type": "City", name: "Toronto", addressCountry: "CA" },
      { "@type": "AdministrativeArea", name: "Greater Toronto Area" },
    ],
    hasMenu: highlights[0].href,
    sameAs: [instagramUrl],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
