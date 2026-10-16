// ───────────────────────────────────────────────────────────────────────────
// Service content for Bradley Interior Painting.
//
// Every service page is generated from this single source of truth so all
// service pages share one cohesive voice, layout, and visual system. Copy is
// universal painting-industry language — no business-specific claims, no
// fabricated reviews, ratings, certifications, or service areas.
//
// To hide a service a contractor doesn't offer, remove its key from
// site.config.json → services.enabled. Its page then returns 404 and it
// disappears from the nav, footer, homepage, and form dropdown.
// ───────────────────────────────────────────────────────────────────────────

import { siteConfig, type ServiceKey } from "@/config";
import { IMAGES } from "./site-images";

export type ServiceStep = { number: string; title: string; description: string };
export type ServiceBenefit = { title: string; description: string };
export type ServiceFaq = { q: string; a: string };
export type GalleryItem = { src: string; alt: string; label: string };

export interface ServiceConfig {
  slug: string;
  path: string;
  title: string;
  eyebrow: string;
  shortDescription: string;
  // Used for the page <meta description>; falls back to shortDescription.
  metaDescription?: string;
  explanation: { title: string; body: string };
  benefits: ServiceBenefit[];
  process: ServiceStep[];
  gallery: GalleryItem[];
  faqs: ServiceFaq[];
  heroImage: string;
  heroAlt: string;
}

// The same simple, universal three-step path applies to every service.
const SHARED_PROCESS: ServiceStep[] = [
  {
    number: "01",
    title: "Tell Us About Your Project",
    description: "Share what you'd like to have painted and the result you have in mind.",
  },
  {
    number: "02",
    title: "Discuss the Details",
    description: "We'll review your space, timeline, and preferences, and answer your questions.",
  },
  {
    number: "03",
    title: "Bring It to Life",
    description:
      "With a clear plan in place, the work moves forward toward a refreshed, beautifully painted space.",
  },
];

const BASE_SERVICES = {
  interior: {
    slug: "interior-painting",
    path: "/services/interior-painting",
    title: "Interior Painting",
    eyebrow: "Interior Painting Services",
    shortDescription:
      "Refresh your living spaces with beautiful color, smooth finishes, and thoughtful attention to the details that matter.",
    metaDescription:
      "Residential interior painting in Kalamazoo, MI. Fully insured, family-oriented service with free estimates and free one-year touch-ups from Bradley Interior Painting.",
    explanation: {
      title: "A Fresh Finish for Every Room",
      body: "Interior painting is one of the simplest ways to refresh a room and change how a space feels. From walls and ceilings to doors and trim, a careful, well-prepared finish brings color, light, and a renewed sense of comfort to the spaces you use every day. Thoughtful preparation and clean, crisp lines help the result feel intentional and complete.",
    },
    benefits: [
      {
        title: "A Fresh, Updated Look",
        description:
          "Refresh your walls, ceilings, and trim with colors and finishes that complement your space.",
      },
      {
        title: "Attention to Detail",
        description:
          "Crisp lines and smooth, well-prepared finishes help the result feel intentional and complete.",
      },
      {
        title: "Minimal Disruption",
        description:
          "A tidy, respectful approach keeps your day-to-day routine moving while the work gets done.",
      },
    ],
    process: SHARED_PROCESS,
    gallery: [
      {
        src: IMAGES.galleryLivingRoom,
        alt: "An elegant living room with sophisticated painted walls in warm neutral tones",
        label: "Living Room",
      },
      {
        src: IMAGES.galleryKitchen,
        alt: "A modern kitchen with freshly painted walls in a bright, inviting space",
        label: "Kitchen",
      },
      {
        src: IMAGES.galleryBedroom,
        alt: "A serene bedroom with freshly painted soft neutral walls and layered textures",
        label: "Bedroom",
      },
      {
        src: IMAGES.galleryTrim,
        alt: "Detailed trim work showing crisp white baseboards and crown molding",
        label: "Trim & Detail",
      },
    ],
    faqs: [
      {
        q: "Do I need to move my furniture?",
        a: "Where possible, clearing the area helps the work move smoothly. We can discuss what's needed and handle the rest so you know what to expect.",
      },
      {
        q: "How long does an interior project take?",
        a: "Timelines depend on the size and scope of the project. We'll walk through expected timing with you before any work begins.",
      },
    ],
    heroImage: IMAGES.interior,
    heroAlt:
      "A bright, freshly painted living room with smooth, warm neutral walls and natural light",
  },

  exterior: {
    slug: "exterior-painting",
    path: "/services/exterior-painting",
    title: "Exterior Painting",
    eyebrow: "Exterior Painting Services",
    shortDescription:
      "Give your property a fresh look with exterior painting designed to enhance curb appeal and protect its appearance.",
    metaDescription:
      "Residential exterior painting in Kalamazoo, MI to improve curb appeal and protect exterior surfaces. Fully insured with free estimates from Bradley Interior Painting.",
    explanation: {
      title: "Curb Appeal That Lasts",
      body: "Exterior painting protects your property and gives it a fresh, well-cared-for appearance. Proper cleaning, preparation, and finishing help the new paint look its best and stand up better to sun, rain, and everyday wear. A clean, even finish across siding and trim brings out the character of your home and refreshes its look from the street.",
    },
    benefits: [
      {
        title: "Renewed Curb Appeal",
        description:
          "A fresh exterior color and clean finish give your property a welcoming, well-cared-for look.",
      },
      {
        title: "Surface Preparation",
        description: "Cleaning, patching, and priming help the new paint adhere and look its best.",
      },
      {
        title: "Protection from the Elements",
        description:
          "Quality exterior paint helps shield siding and trim from sun, moisture, and everyday wear.",
      },
    ],
    process: SHARED_PROCESS,
    gallery: [
      {
        src: IMAGES.galleryExterior,
        alt: "A craftsman style home with freshly painted exterior siding and crisp white trim",
        label: "Home Exterior",
      },
      {
        src: IMAGES.exterior,
        alt: "A charming residential home with a freshly painted exterior and clean trim lines",
        label: "Fresh Exterior",
      },
      {
        src: IMAGES.galleryTrim,
        alt: "Close-up of crisp exterior trim detailing around windows and doors",
        label: "Exterior Trim",
      },
      {
        src: IMAGES.trust,
        alt: "A professional painter carefully refinishing exterior trim by hand",
        label: "Careful Prep",
      },
    ],
    faqs: [
      {
        q: "When is the best time to paint an exterior?",
        a: "Weather and temperature matter for exterior finishes. We can review the best window of time for your project so the finish performs well.",
      },
      {
        q: "How should I prepare the outside before painting?",
        a: "We'll handle cleaning and preparation as part of the process. Just let us know about any specific concerns upfront so they can be addressed.",
      },
    ],
    heroImage: IMAGES.exterior,
    heroAlt:
      "A charming residential home with freshly painted exterior siding and crisp white trim",
  },

  drywallHanging: {
    slug: "drywall-hanging",
    path: "/services/drywall-hanging",
    title: "Drywall Hanging",
    eyebrow: "Drywall Hanging Services",
    shortDescription:
      "Drywall installation for residential interior projects, giving your walls and ceilings a solid, smooth starting point.",
    metaDescription:
      "Drywall hanging in Kalamazoo, MI for residential interior projects. Fully insured, family-oriented service with free estimates from Bradley Interior Painting.",
    explanation: {
      title: "A Solid Foundation for Every Wall",
      body: "Drywall hanging creates the walls and ceilings that every finished room is built on. Whether you're finishing a new space, adding a room, or replacing damaged sections, careful measuring, cutting, and fastening help the surface go up flat and square. Well-hung drywall also makes the taping, finishing, and painting steps that follow go more smoothly.",
    },
    benefits: [
      {
        title: "Residential Interior Projects",
        description:
          "Drywall installation for the walls and ceilings of your home, from a single room to a larger project.",
      },
      {
        title: "Clean, Careful Installation",
        description:
          "Careful measuring and fitting help the panels go up flat, tight, and ready for finishing.",
      },
      {
        title: "One Team, Start to Finish",
        description:
          "Hanging, finishing, and painting are all services we offer, so your project stays coordinated.",
      },
    ],
    process: SHARED_PROCESS,
    gallery: [
      {
        src: IMAGES.galleryLivingRoom,
        alt: "Illustrative image of a finished living room with smooth interior walls",
        label: "Smooth Walls",
      },
      {
        src: IMAGES.galleryBedroom,
        alt: "Illustrative image of a bedroom with clean, finished interior walls",
        label: "Finished Rooms",
      },
      {
        src: IMAGES.galleryTrim,
        alt: "Illustrative image of crisp trim and baseboards along finished walls",
        label: "Clean Lines",
      },
      {
        src: IMAGES.trust,
        alt: "Illustrative image of a painter carefully working by hand",
        label: "Careful Work",
      },
    ],
    faqs: [
      {
        q: "Do you hang drywall for new rooms and replacement sections?",
        a: "Drywall hanging is one of our services for residential interior projects. Tell us about your space and we'll talk through what the project involves.",
      },
      {
        q: "Can you also finish and paint the drywall?",
        a: "Yes. We offer drywall finishing and interior painting as well, so the whole project can be handled together.",
      },
    ],
    heroImage: IMAGES.galleryLivingRoom,
    heroAlt: "Illustrative image of a finished living room with smooth interior walls",
  },

  drywallPatching: {
    slug: "drywall-patching",
    path: "/services/drywall-patching",
    title: "Drywall Patching",
    eyebrow: "Drywall Patching Services",
    shortDescription:
      "Repairs for holes, cracks, and damaged drywall, so your walls and ceilings look smooth and whole again.",
    metaDescription:
      "Drywall repair in Kalamazoo, MI: patching holes, cracks, and damaged drywall. Fully insured with free estimates from Bradley Interior Painting.",
    explanation: {
      title: "Repairs That Disappear",
      body: "Holes from doorknobs, cracks along seams, and damage from leaks or past projects can make an otherwise nice room look worn. Drywall patching repairs the damaged area so the wall is solid and smooth again. When the repair is followed by finishing and paint, it blends into the surrounding surface.",
    },
    benefits: [
      {
        title: "Holes, Cracks, and Damage",
        description:
          "Repairs for the common drywall problems found in lived-in homes, large and small.",
      },
      {
        title: "A Smooth, Even Surface",
        description: "Careful repair work helps the patched area blend in with the wall around it.",
      },
      {
        title: "Ready for Paint",
        description:
          "Because we also finish and paint, repairs can move straight into a fresh coat of color.",
      },
    ],
    process: SHARED_PROCESS,
    gallery: [
      {
        src: IMAGES.galleryLivingRoom,
        alt: "Illustrative image of a living room with smooth, even interior walls",
        label: "Smooth Walls",
      },
      {
        src: IMAGES.galleryKitchen,
        alt: "Illustrative image of a bright room with clean, freshly painted walls",
        label: "Fresh Finish",
      },
      {
        src: IMAGES.galleryBedroom,
        alt: "Illustrative image of a bedroom with soft, evenly painted walls",
        label: "Even Surfaces",
      },
      {
        src: IMAGES.galleryTrim,
        alt: "Illustrative image of crisp trim meeting a clean wall",
        label: "Clean Details",
      },
    ],
    faqs: [
      {
        q: "What kinds of drywall damage can be patched?",
        a: "We repair holes, cracks, and damaged areas of drywall. If you're not sure whether something can be repaired, describe it in the estimate form or give us a call.",
      },
      {
        q: "Will the repair show after painting?",
        a: "Our goal is a repair that blends into the wall. Drywall patching, finishing, and painting all come from one team so the result looks consistent.",
      },
    ],
    heroImage: IMAGES.galleryBedroom,
    heroAlt: "Illustrative image of a bedroom with soft, evenly painted walls",
  },

  drywallFinishing: {
    slug: "drywall-finishing",
    path: "/services/drywall-finishing",
    title: "Drywall Finishing",
    eyebrow: "Drywall Finishing Services",
    shortDescription:
      "Prepare drywall surfaces for a smooth, paint-ready finish that sets up the final coat of color.",
    metaDescription:
      "Drywall finishing in Kalamazoo, MI: smooth, paint-ready surfaces for residential interiors. Fully insured with free estimates from Bradley Interior Painting.",
    explanation: {
      title: "The Smooth Finish Under the Paint",
      body: "A great paint job starts with a great surface. Drywall finishing covers seams and fasteners and smooths the surface so it's ready for primer and paint. Careful finishing is what keeps walls looking flat and even once the color goes on, and it makes the difference between a wall that looks good and one that looks right.",
    },
    benefits: [
      {
        title: "Smooth, Paint-Ready Surfaces",
        description: "Seams and fasteners are smoothed so walls are prepared for primer and paint.",
      },
      {
        title: "Attention to Detail",
        description:
          "Patient, careful finishing helps the final coat of paint look even and complete.",
      },
      {
        title: "Finishing and Painting Together",
        description:
          "Since we paint too, the same team can carry your project from bare drywall to finished color.",
      },
    ],
    process: SHARED_PROCESS,
    gallery: [
      {
        src: IMAGES.galleryLivingRoom,
        alt: "Illustrative image of a living room with smooth, finished walls",
        label: "Smooth Finish",
      },
      {
        src: IMAGES.galleryKitchen,
        alt: "Illustrative image of a bright kitchen with clean, painted walls",
        label: "Bright Spaces",
      },
      {
        src: IMAGES.galleryBedroom,
        alt: "Illustrative image of a bedroom with evenly finished walls",
        label: "Even Walls",
      },
      {
        src: IMAGES.trust,
        alt: "Illustrative image of a painter carefully finishing a surface by hand",
        label: "Careful Work",
      },
    ],
    faqs: [
      {
        q: "What does drywall finishing include?",
        a: "Finishing prepares drywall for paint by smoothing the surface. We're happy to talk through what your specific project needs when you request your free estimate.",
      },
      {
        q: "Can you paint after finishing the drywall?",
        a: "Yes. Interior painting is one of our core services, so the same company can take your project from finishing through the final coat.",
      },
    ],
    heroImage: IMAGES.galleryKitchen,
    heroAlt: "Illustrative image of a bright kitchen with clean, painted walls",
  },
} satisfies Record<string, ServiceConfig>;

// Apply per-client title/description overrides from site.config.json.
export const SERVICES = Object.fromEntries(
  Object.entries(BASE_SERVICES).map(([key, base]) => {
    const o = siteConfig.services.overrides[key as ServiceKey] ?? {};
    return [
      key,
      {
        ...base,
        ...(o.title ? { title: o.title } : {}),
        ...(o.shortDescription ? { shortDescription: o.shortDescription } : {}),
        ...(o.metaDescription ? { metaDescription: o.metaDescription } : {}),
      },
    ];
  }),
) as Record<ServiceKey, ServiceConfig>;

export function isServiceEnabled(key: ServiceKey) {
  return siteConfig.services.enabled.includes(key);
}

// Ordered list for the header dropdown, footer links, and the home services grid.
// Only services enabled in site.config.json appear.
export const SERVICE_LIST: ServiceConfig[] = siteConfig.services.enabled.map((k) => SERVICES[k]);
