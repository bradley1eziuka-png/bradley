// ───────────────────────────────────────────────────────────────────────────
// Real project photos and videos supplied by Bradley Interior Painting.
// Files live in /public/images/work and /public/videos. To swap or add media,
// drop the optimized file in those folders and edit the entries below.
//
// Each photo has a natural-ratio version (`src`, used in the home gallery) and,
// where it makes sense, a 4:3 crop (`card`, used on service pages and cards).
// Alt text only describes what is visibly in the photo.
// ───────────────────────────────────────────────────────────────────────────

const IMG = "/images/work";

export type WorkImage = {
  src: string;
  card?: string;
  width: number;
  height: number;
  alt: string;
  label: string;
};

export const WORK_IMAGES = {
  blueHouse: {
    src: `${IMG}/exterior-blue-house-painter-ladder.webp`,
    card: `${IMG}/exterior-blue-house-painter-ladder-4x3.webp`,
    width: 599,
    height: 799,
    alt: "A painter on a ladder painting the blue exterior siding and trim of a two-story house",
    label: "Exterior Painting",
  },
  brightRoomCeiling: {
    src: `${IMG}/interior-ceiling-roller-bright-room.webp`,
    card: `${IMG}/interior-ceiling-roller-bright-room-4x3.webp`,
    width: 800,
    height: 1067,
    alt: "A painter rolling paint onto a ceiling in a bright room with drop cloths on the furniture",
    label: "Interior Painting",
  },
  tealHouse: {
    src: `${IMG}/exterior-teal-house-prep-and-finish.webp`,
    width: 799,
    height: 799,
    alt: "Four photos of a house exterior, shown with patched and primed siding and again painted teal",
    label: "Exterior Prep & Finish",
  },
  platformTrim: {
    src: `${IMG}/interior-painter-platform-ladder-trim.webp`,
    card: `${IMG}/interior-painter-platform-ladder-trim-4x3.webp`,
    width: 800,
    height: 1067,
    alt: "A painter on a platform ladder painting the ceiling edge and trim in a primed room",
    label: "Ceiling & Trim",
  },
  porchCeiling: {
    src: `${IMG}/exterior-porch-ceiling-trim-painting.webp`,
    card: `${IMG}/exterior-porch-ceiling-trim-painting-4x3.webp`,
    width: 800,
    height: 1067,
    alt: "A painter working on the ceiling and trim of a taped and masked front porch",
    label: "Porch Painting",
  },
  doorTrim: {
    src: `${IMG}/interior-door-trim-brushwork.webp`,
    card: `${IMG}/interior-door-trim-brushwork-4x3.webp`,
    width: 599,
    height: 799,
    alt: "A painter brushing paint onto a door frame inside a home",
    label: "Trim Brushwork",
  },
  windowLadder: {
    src: `${IMG}/exterior-ladder-window-painting.webp`,
    card: `${IMG}/exterior-ladder-window-painting-4x3.webp`,
    width: 599,
    height: 799,
    alt: "A painter on a ladder working on a window frame on a house with gray siding",
    label: "Window Trim",
  },
  stuccoPrep: {
    src: `${IMG}/exterior-stucco-surface-prep.webp`,
    card: `${IMG}/exterior-stucco-surface-prep-4x3.webp`,
    width: 599,
    height: 799,
    alt: "A painter on a ladder working on an exterior wall with patched and primed areas",
    label: "Surface Prep",
  },
  hallwayCeiling: {
    src: `${IMG}/interior-hallway-ceiling-roller.webp`,
    card: `${IMG}/interior-hallway-ceiling-roller-4x3.webp`,
    width: 1200,
    height: 900,
    alt: "A painter rolling the ceiling of a bright hallway with white walls",
    label: "Ceilings",
  },
  crackedCeiling: {
    src: `${IMG}/drywall-cracked-ceiling-surface.webp`,
    card: `${IMG}/drywall-cracked-ceiling-surface-4x3.webp`,
    width: 1200,
    height: 900,
    alt: "A textured ceiling and wall corner with visible cracks",
    label: "Cracked Surface",
  },
  hangingWall: {
    src: `${IMG}/drywall-hanging-window-wall-4x3.webp`,
    width: 1200,
    height: 900,
    alt: "An interior room with drywall sheets fastened to the walls around a window",
    label: "Drywall Installation",
  },
  hangingPanels: {
    src: `${IMG}/drywall-hanging-panels-stacked-4x3.webp`,
    width: 1050,
    height: 787,
    alt: "Sheets of drywall stacked against an installed drywall wall",
    label: "Drywall Sheets",
  },
  finishingRoom: {
    src: `${IMG}/drywall-finishing-taped-room-4x3.webp`,
    width: 960,
    height: 720,
    alt: "A room with drywall seams taped and covered in joint compound, with a doorway to another room",
    label: "Taped & Finished Seams",
  },
  finishingDetail: {
    src: `${IMG}/drywall-finishing-doorway-detail-4x3.webp`,
    width: 640,
    height: 480,
    alt: "Close view of finished drywall seams around a doorway, ready for primer and paint",
    label: "Paint-Ready Surface",
  },
  patchingHand: {
    src: `${IMG}/drywall-patching-mesh-patch-4x3.webp`,
    width: 889,
    height: 667,
    alt: "A hand using a putty knife to apply joint compound over a mesh patch in a wall",
    label: "Patching a Hole",
  },
} satisfies Record<string, WorkImage>;

export type WorkVideo = {
  src: string;
  poster: string;
  width: number;
  height: number;
  title: string;
};

const VID = "/videos";

export const WORK_VIDEOS: WorkVideo[] = [
  {
    src: `${VID}/exterior-black-modern-home-walkaround.mp4`,
    poster: `${VID}/exterior-black-modern-home-walkaround-poster.webp`,
    width: 180,
    height: 320,
    title: "Walkaround video of a home with dark painted exterior siding",
  },
  {
    src: `${VID}/exterior-pink-siding-home-walkaround.mp4`,
    poster: `${VID}/exterior-pink-siding-home-walkaround-poster.webp`,
    width: 180,
    height: 180,
    title: "Walkaround video of a home with freshly painted pink siding and white trim",
  },
];

// Customer video testimonials (converted from the owner-supplied screen
// recordings; original audio preserved). Labels are neutral on purpose: no
// names, quotes, or ratings are published until the customers approve them.
export type TestimonialVideo = {
  src: string;
  poster: string;
  width: number;
  height: number;
  label: string;
};

const TESTIMONIALS = "/videos/testimonials";

export const TESTIMONIAL_VIDEOS: TestimonialVideo[] = [
  { n: 1, width: 960, height: 880 },
  { n: 2, width: 640, height: 960 },
  { n: 3, width: 808, height: 1280 },
  { n: 4, width: 752, height: 960 },
].map(({ n, width, height }) => ({
  src: `${TESTIMONIALS}/customer-testimonial-${n}.mp4`,
  poster: `${TESTIMONIALS}/customer-testimonial-${n}-poster.webp`,
  width,
  height,
  label: `Customer Testimonial ${n}`,
}));
