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
import { WORK_IMAGES, type WorkImage } from "./work-media";

export type ServiceStep = { number: string; title: string; description: string };
export type ServiceBenefit = { title: string; description: string };
export type ServiceFaq = { q: string; a: string };
export type GalleryItem = { src: string; alt: string; label: string };
export type ServiceDetail = { title: string; description: string };
export type RelatedService = { key: ServiceKey; text: string };

// Gallery entry from a real owner-supplied photo (4:3 crop where available).
const real = (img: WorkImage): GalleryItem => ({
  src: img.card ?? img.src,
  alt: img.alt,
  label: img.label,
});

export interface ServiceConfig {
  slug: string;
  path: string;
  title: string;
  eyebrow: string;
  shortDescription: string;
  // Used for the page <meta description>; falls back to shortDescription.
  metaDescription?: string;
  // <title> for the page (falls back to "<title> in <city> | <business>").
  seoTitle?: string;
  // H1 text; defaults to `title`.
  headline?: string;
  // "What's included" cards and contextual links to related services.
  details: { title: string; description: string; items: ServiceDetail[] };
  related: RelatedService[];
  explanation: { title: string; body: string };
  benefits: ServiceBenefit[];
  process: ServiceStep[];
  gallery: GalleryItem[];
  faqs: ServiceFaq[];
  heroImage: string;
  heroAlt: string;
  // Gallery heading text and the small caption under it. Empty note = no caption
  // (used when every gallery image is a real project photo).
  galleryDescription?: string;
  galleryNote?: string;
}

const BASE_SERVICES = {
  interior: {
    slug: "interior-painting",
    path: "/services/interior-painting",
    title: "Interior Painting",
    eyebrow: "Interior Painting Services",
    shortDescription:
      "Refresh your living spaces with beautiful color, smooth finishes, and thoughtful attention to the details that matter.",
    metaDescription:
      "Interior house painting in Kalamazoo, MI: walls, ceilings, trim, and doors. Fully insured, with free estimates and free one-year touch-ups.",
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
    process: [
      {
        number: "01",
        title: "Tell Us About Your Rooms",
        description:
          "Share which rooms, ceilings, or trim you'd like painted and the look you have in mind.",
      },
      {
        number: "02",
        title: "Review the Details",
        description:
          "We'll talk through preparation, colors, and timing, and give you a free estimate.",
      },
      {
        number: "03",
        title: "Paint with Care",
        description:
          "Surfaces are prepared and painted with attention to clean lines. Ask us about our free one-year touch-ups.",
      },
    ],
    gallery: [
      real(WORK_IMAGES.doorTrim),
      real(WORK_IMAGES.platformTrim),
      real(WORK_IMAGES.hallwayCeiling),
      real(WORK_IMAGES.brightRoomCeiling),
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
      {
        q: "Can you patch damaged walls before painting?",
        a: "Yes. Drywall patching and finishing are services we offer, so repairs and painting can be handled together as one project.",
      },
      {
        q: "Do you offer free estimates for interior painting?",
        a: "Yes. Request a free estimate with the form on this page or call (269) 547-3775.",
      },
    ],
    seoTitle: "Interior Painting in Kalamazoo, MI | Bradley Interior Painting",
    headline: "Interior Painting in Kalamazoo, MI",
    details: {
      title: "What Interior Painting Includes",
      description: "From a single bedroom to several rooms, here is what the work covers.",
      items: [
        {
          title: "Walls & Ceilings",
          description:
            "Fresh, even coverage on walls and ceilings, in one room or throughout your home.",
        },
        {
          title: "Trim & Doors",
          description:
            "Careful brushwork on baseboards, door frames, and doors for crisp lines where surfaces meet.",
        },
        {
          title: "Preparation",
          description:
            "Surfaces are prepared before paint goes on, with drop cloths and masking to protect floors and furniture.",
        },
        {
          title: "Repairs Before Paint",
          description:
            "Minor wall damage can be patched and finished first, so the wall is smooth and ready for color.",
        },
      ],
    },
    related: [
      { key: "drywallPatching", text: "Wall damage before painting? See our drywall patching." },
      { key: "drywallFinishing", text: "Need a smooth surface first? See our drywall finishing." },
    ],
    galleryDescription:
      "A look at interior painting by our crew: ceilings, trim, and carefully prepared rooms.",
    galleryNote: "",
    heroImage: WORK_IMAGES.brightRoomCeiling.card ?? WORK_IMAGES.brightRoomCeiling.src,
    heroAlt: WORK_IMAGES.brightRoomCeiling.alt,
  },

  exterior: {
    slug: "exterior-painting",
    path: "/services/exterior-painting",
    title: "Exterior Painting",
    eyebrow: "Exterior Painting Services",
    shortDescription:
      "Give your property a fresh look with exterior painting designed to enhance curb appeal and protect its appearance.",
    metaDescription:
      "Exterior house painting in Kalamazoo, MI: siding, trim, and surface preparation to refresh curb appeal. Fully insured, with free estimates.",
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
    process: [
      {
        number: "01",
        title: "Tell Us About Your Home",
        description:
          "Share what you'd like painted, such as siding, trim, or a porch, and the look you want.",
      },
      {
        number: "02",
        title: "Review the Surfaces",
        description:
          "We'll look at the condition of the surfaces and talk through preparation, timing, and a free estimate.",
      },
      {
        number: "03",
        title: "Prepare and Paint",
        description:
          "Surfaces are prepared, then painted for a clean, even finish. Ask us about our free one-year touch-ups.",
      },
    ],
    gallery: [
      real(WORK_IMAGES.porchCeiling),
      real(WORK_IMAGES.windowLadder),
      real(WORK_IMAGES.stuccoPrep),
      real(WORK_IMAGES.blueHouse),
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
      {
        q: "Do you paint houses in Kalamazoo?",
        a: "Yes. We're based in Kalamazoo, Michigan, and exterior house painting is one of our core services.",
      },
      {
        q: "Do you offer free estimates for exterior painting?",
        a: "Yes. Request a free estimate with the form on this page or call (269) 547-3775.",
      },
    ],
    seoTitle: "Exterior Painting in Kalamazoo, MI | Bradley Interior Painting",
    headline: "Exterior Painting in Kalamazoo, MI",
    details: {
      title: "What Exterior Painting Includes",
      description: "Siding, trim, and the preparation that helps a finish hold up.",
      items: [
        {
          title: "Siding & Trim",
          description:
            "Painting for house siding, window and door trim, and porch areas, from first coat to finished edges.",
        },
        {
          title: "Cleaning, Patching & Priming",
          description:
            "Cleaning, patching, and priming help the new paint adhere and look its best.",
        },
        {
          title: "Curb Appeal",
          description: "A fresh, even color refreshes how your home looks from the street.",
        },
        {
          title: "Michigan Weather",
          description:
            "Freeze-thaw winters and humid summers are hard on exterior paint, which is why preparation and timing matter. We'll talk through timing with you at your estimate.",
        },
      ],
    },
    related: [{ key: "interior", text: "Refreshing the inside too? See our interior painting." }],
    galleryDescription:
      "A look at exterior painting by our crew: siding, porches, window trim, and surface preparation.",
    galleryNote: "",
    heroImage: WORK_IMAGES.blueHouse.card ?? WORK_IMAGES.blueHouse.src,
    heroAlt: WORK_IMAGES.blueHouse.alt,
  },

  drywallHanging: {
    slug: "drywall-hanging",
    path: "/services/drywall-hanging",
    title: "Drywall Hanging",
    eyebrow: "Drywall Hanging Services",
    shortDescription:
      "Drywall installation for residential interior projects, giving your walls and ceilings a solid, smooth starting point.",
    metaDescription:
      "Drywall installation in Kalamazoo, MI for residential interior projects: wall and ceiling panels, new rooms, and replacement sections. Free estimates.",
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
    process: [
      {
        number: "01",
        title: "Tell Us About Your Project",
        description:
          "Share the room or area, whether it's new walls, an addition, or a replacement section.",
      },
      {
        number: "02",
        title: "Review the Space",
        description: "We'll talk through the scope and timing and give you a free estimate.",
      },
      {
        number: "03",
        title: "Hang and Prepare",
        description:
          "Drywall is installed and left ready for finishing. We can handle finishing and painting too.",
      },
    ],
    gallery: [
      {
        src: IMAGES.galleryLivingRoom,
        alt: "Illustrative image of a finished living room with smooth interior walls",
        label: "Smooth Walls",
      },
      real(WORK_IMAGES.hangingPanels),
      real(WORK_IMAGES.hangingWall),
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
      {
        q: "What happens after the drywall is hung?",
        a: "Seams and fasteners are finished before painting. We offer drywall finishing and interior painting, so the same company can carry the project through.",
      },
      {
        q: "Do you offer free estimates for drywall work?",
        a: "Yes. Request a free estimate with the form on this page or call (269) 547-3775.",
      },
    ],
    seoTitle: "Drywall Hanging in Kalamazoo, MI | Bradley Interior Painting",
    headline: "Drywall Hanging in Kalamazoo, MI",
    details: {
      title: "What Drywall Hanging Includes",
      description: "Installation for the walls and ceilings of residential interior projects.",
      items: [
        {
          title: "Wall & Ceiling Panels",
          description: "Drywall panels measured, cut, and fastened to walls and ceilings.",
        },
        {
          title: "Room Projects",
          description: "New spaces, additions, and replacement sections in your home.",
        },
        {
          title: "Ready for Finishing",
          description:
            "Panels go up flat and tight so taping, finishing, and painting can follow smoothly.",
        },
        {
          title: "One Team",
          description:
            "Hanging, finishing, and painting are all services we offer, so your project stays coordinated.",
        },
      ],
    },
    related: [
      {
        key: "drywallFinishing",
        text: "After hanging comes finishing. See our drywall finishing.",
      },
      { key: "interior", text: "Ready for color? See our interior painting." },
    ],
    galleryDescription:
      "Illustrative examples of the smooth, even finishes that careful drywall work and painting can leave behind.",
    galleryNote: "Illustrative stock imagery, not Bradley Interior Painting projects",
    heroImage: WORK_IMAGES.hangingWall.src,
    heroAlt: WORK_IMAGES.hangingWall.alt,
  },

  drywallPatching: {
    slug: "drywall-patching",
    path: "/services/drywall-patching",
    title: "Drywall Patching",
    eyebrow: "Drywall Patching Services",
    shortDescription:
      "Repairs for holes, cracks, and damaged drywall, so your walls and ceilings look smooth and whole again.",
    metaDescription:
      "Drywall repair in Kalamazoo, MI: patching holes, cracks, and damaged drywall so walls are smooth and paint-ready. Fully insured, with free estimates.",
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
    process: [
      {
        number: "01",
        title: "Tell Us About the Damage",
        description: "Describe the holes, cracks, or damaged areas, and where they are.",
      },
      {
        number: "02",
        title: "Review the Repair",
        description: "We'll talk through what the repair involves and give you a free estimate.",
      },
      {
        number: "03",
        title: "Repair and Finish",
        description:
          "The area is patched and smoothed so it's ready for paint. We can paint it too.",
      },
    ],
    gallery: [
      {
        src: IMAGES.galleryLivingRoom,
        alt: "Illustrative image of a living room with smooth, even interior walls",
        label: "Smooth Walls",
      },
      real(WORK_IMAGES.crackedCeiling),
      real(WORK_IMAGES.patchingHand),
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
      {
        q: "Can you repair cracks as well as holes?",
        a: "Yes. We repair holes, cracks, and damaged drywall. If you're not sure what you're looking at, describe it in the estimate form or give us a call.",
      },
      {
        q: "Do you offer free estimates for drywall repair?",
        a: "Yes. Request a free estimate with the form on this page or call (269) 547-3775.",
      },
    ],
    seoTitle: "Drywall Patching in Kalamazoo, MI | Bradley Interior Painting",
    headline: "Drywall Patching and Repair in Kalamazoo, MI",
    details: {
      title: "What Drywall Patching Covers",
      description: "Common repairs that make a room look worn, and what we do about them.",
      items: [
        {
          title: "Holes",
          description: "Repairs for holes from doorknobs, hardware, and everyday wear.",
        },
        {
          title: "Cracks",
          description: "Repairs for cracks along seams and in walls and ceilings.",
        },
        {
          title: "Damaged Drywall",
          description:
            "Repairs for damaged areas, including damage from leaks or earlier projects.",
        },
        {
          title: "Paint-Ready Surfaces",
          description: "Repairs are finished smooth so they blend in once painted.",
        },
      ],
    },
    related: [
      { key: "drywallFinishing", text: "Want a seamless surface? See our drywall finishing." },
      { key: "interior", text: "Repairs done? See our interior painting." },
    ],
    galleryDescription:
      "Examples of the smooth, even finishes that careful drywall repair and painting can leave behind.",
    galleryNote:
      "Illustrative stock imagery, except the cracked-ceiling photo supplied by Bradley Interior Painting",
    heroImage: WORK_IMAGES.patchingHand.src,
    heroAlt: WORK_IMAGES.patchingHand.alt,
  },

  drywallFinishing: {
    slug: "drywall-finishing",
    path: "/services/drywall-finishing",
    title: "Drywall Finishing",
    eyebrow: "Drywall Finishing Services",
    shortDescription:
      "Prepare drywall surfaces for a smooth, paint-ready finish that sets up the final coat of color.",
    metaDescription:
      "Drywall finishing in Kalamazoo, MI: taping, joint compound, and sanding for smooth, paint-ready walls. Fully insured, with free estimates.",
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
    process: [
      {
        number: "01",
        title: "Tell Us About Your Project",
        description:
          "Share the room or rooms and where the project stands, from newly hung drywall to repaired walls.",
      },
      {
        number: "02",
        title: "Review the Surfaces",
        description: "We'll talk through what finishing is needed and give you a free estimate.",
      },
      {
        number: "03",
        title: "Finish and Prepare",
        description:
          "Seams are finished and smoothed so the walls are ready for paint. We can paint them too.",
      },
    ],
    gallery: [
      {
        src: IMAGES.galleryLivingRoom,
        alt: "Illustrative image of a living room with smooth, finished walls",
        label: "Smooth Finish",
      },
      real(WORK_IMAGES.finishingRoom),
      real(WORK_IMAGES.finishingDetail),
      {
        src: IMAGES.trust,
        alt: "Illustrative image of a painter carefully finishing a surface by hand",
        label: "Careful Work",
      },
    ],
    faqs: [
      {
        q: "What does drywall finishing include?",
        a: "Finishing prepares drywall for paint by taping seams, applying joint compound, and sanding the surface smooth. We'll talk through what your project needs at your free estimate.",
      },
      {
        q: "Can you paint after finishing the drywall?",
        a: "Yes. Interior painting is one of our core services, so the same company can take your project from finishing through the final coat.",
      },
      {
        q: "Do you offer free estimates for drywall finishing?",
        a: "Yes. Request a free estimate with the form on this page or call (269) 547-3775.",
      },
    ],
    seoTitle: "Drywall Finishing in Kalamazoo, MI | Bradley Interior Painting",
    headline: "Drywall Finishing in Kalamazoo, MI",
    details: {
      title: "What Drywall Finishing Involves",
      description: "The steps between hung drywall and a wall that is ready for paint.",
      items: [
        {
          title: "Taping & Joint Compound",
          description: "Seams and fasteners are covered with tape and joint compound.",
        },
        {
          title: "Sanding & Smoothing",
          description: "The surface is sanded and smoothed so it looks flat and even.",
        },
        {
          title: "Paint-Ready Surfaces",
          description: "A finished surface is ready for primer and paint.",
        },
        {
          title: "From Hanging to Painting",
          description:
            "Hanging, finishing, and painting are all services we offer, so one team can carry the project through.",
        },
      ],
    },
    related: [
      { key: "drywallHanging", text: "Starting with bare walls? See our drywall hanging." },
      { key: "interior", text: "Ready for color? See our interior painting." },
    ],
    galleryDescription:
      "Illustrative examples of the smooth, even finishes that careful drywall work and painting can leave behind.",
    galleryNote: "Illustrative stock imagery, not Bradley Interior Painting projects",
    heroImage: WORK_IMAGES.finishingDetail.src,
    heroAlt: WORK_IMAGES.finishingDetail.alt,
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
