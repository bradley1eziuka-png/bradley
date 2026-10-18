// SEO helpers: per-page head tags (title, description, canonical, Open Graph,
// Twitter) and LocalBusiness structured data, all driven by site.config.json.
import { DEFAULT_CONTENT } from "@/config/defaults";
import { siteConfig } from "@/config";
import { BUSINESS_NAME, BUSINESS_PHONE, COPY, LOCATION_LABEL, SITE_URL } from "./site-config";
import { IMAGES } from "./site-images";
import { SERVICE_LIST, type ServiceConfig } from "./services-data";
import { WORK_IMAGES } from "./work-media";

const { business, seo } = siteConfig;

function absolute(pathOrUrl: string) {
  if (!pathOrUrl) return "";
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  return SITE_URL ? `${SITE_URL}${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}` : pathOrUrl;
}

export const HOME_TITLE =
  seo.title ||
  `${BUSINESS_NAME} | Professional Painting Services${LOCATION_LABEL ? ` in ${LOCATION_LABEL}` : ""}`;
export const HOME_DESCRIPTION = seo.description || DEFAULT_CONTENT.seo.description;

export function pageHead({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}) {
  const ogImage = absolute(seo.ogImage || image || IMAGES.hero);
  const url = SITE_URL ? `${SITE_URL}${path === "/" ? "" : path}` : "";
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: ogImage },
      ...(seo.ogImage
        ? [
            { property: "og:image:width", content: "1200" },
            { property: "og:image:height", content: "630" },
          ]
        : []),
      {
        property: "og:image:alt",
        content: `${BUSINESS_NAME}${LOCATION_LABEL ? ` — painters in ${LOCATION_LABEL}` : ""}`,
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: BUSINESS_NAME },
      { property: "og:locale", content: seo.locale },
      ...(url ? [{ property: "og:url", content: url }] : []),
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImage },
      {
        name: "twitter:image:alt",
        content: `${BUSINESS_NAME}${LOCATION_LABEL ? ` — painters in ${LOCATION_LABEL}` : ""}`,
      },
    ],
    links: url ? [{ rel: "canonical", href: url }] : [],
  };
}

const jsonLdScript = (data: Record<string, unknown>) => ({
  type: "application/ld+json",
  children: JSON.stringify(data),
});

// Stable @id so service and page data can point at the business entity.
const BUSINESS_ID = `${SITE_URL}/#business`;

// schema.org HousePainter (a LocalBusiness subtype). Only fields the client
// actually provided are emitted — nothing is invented (no address, hours,
// ratings, or reviews).
export function localBusinessJsonLd() {
  const a = business.address;
  const hasAddress = Boolean(a.street || a.city || a.state || a.zip);
  const sameAs = Object.values(business.social).filter(Boolean);
  const phoneDigits = BUSINESS_PHONE.replace(/\D/g, "");
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "HousePainter",
    ...(SITE_URL && { "@id": BUSINESS_ID }),
    name: BUSINESS_NAME,
    ...(business.legalName && { legalName: business.legalName }),
    telephone:
      phoneDigits.length === 10
        ? `+1-${phoneDigits.slice(0, 3)}-${phoneDigits.slice(3, 6)}-${phoneDigits.slice(6)}`
        : BUSINESS_PHONE,
    description: HOME_DESCRIPTION,
    image: [WORK_IMAGES.blueHouse.src, WORK_IMAGES.brightRoomCeiling.src].map(absolute),
    ...(siteConfig.branding.logo.src && { logo: absolute(siteConfig.branding.logo.src) }),
    ...(SITE_URL && { url: SITE_URL }),
    ...(business.email && { email: business.email }),
    ...(hasAddress && {
      address: {
        "@type": "PostalAddress",
        ...(a.street && { streetAddress: a.street }),
        ...(a.city && { addressLocality: a.city }),
        ...(a.state && { addressRegion: a.state }),
        ...(a.zip && { postalCode: a.zip }),
        addressCountry: "US",
      },
    }),
    ...(business.serviceAreas.length > 0 && {
      areaServed: business.serviceAreas.map((name) => ({ "@type": "Place", name })),
    }),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Painting and drywall services",
      itemListElement: SERVICE_LIST.map((svc) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: svc.title,
          ...(SITE_URL && { url: absolute(svc.path) }),
        },
      })),
    },
    ...(sameAs.length > 0 && { sameAs }),
  };
  return JSON.stringify(data);
}

function faqJsonLd(faqs: readonly { q: string; a: string }[]) {
  return jsonLdScript({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  });
}

// Home page head: unique title/description plus FAQ markup that mirrors the
// visible FAQ section.
export function homePageHead() {
  const head = pageHead({ title: HOME_TITLE, description: HOME_DESCRIPTION, path: "/" });
  return { ...head, scripts: [faqJsonLd(COPY.faqs)] };
}

// Service page head: title/description/canonical, Service + BreadcrumbList +
// FAQPage structured data (all describing content visible on the page).
export function servicePageHead(service: ServiceConfig) {
  const head = pageHead({
    title:
      service.seoTitle ??
      `${service.title}${LOCATION_LABEL ? ` in ${LOCATION_LABEL}` : ""} | ${BUSINESS_NAME}`,
    description: service.metaDescription ?? service.shortDescription,
    path: service.path,
    image: service.heroImage,
  });
  const url = absolute(service.path);
  const area = business.serviceAreas.length > 0 ? business.serviceAreas : [LOCATION_LABEL];
  return {
    ...head,
    scripts: [
      jsonLdScript({
        "@context": "https://schema.org",
        "@type": "Service",
        name: service.title,
        serviceType: service.title,
        description: service.metaDescription ?? service.shortDescription,
        url,
        provider: SITE_URL
          ? { "@id": BUSINESS_ID }
          : { "@type": "HousePainter", name: BUSINESS_NAME },
        areaServed: area.filter(Boolean).map((name) => ({ "@type": "Place", name })),
      }),
      jsonLdScript({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: absolute("/") },
          { "@type": "ListItem", position: 2, name: service.title, item: url },
        ],
      }),
      faqJsonLd(service.faqs),
    ],
  };
}
