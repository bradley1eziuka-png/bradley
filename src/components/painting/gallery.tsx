import { IMAGES } from "@/lib/site-images";
import { SectionHeading } from "./section-heading";

const GALLERY = [
  {
    src: IMAGES.galleryLivingRoom,
    alt: "An elegant living room with sophisticated painted walls in warm greige tones",
    label: "Living Room",
  },
  {
    src: IMAGES.galleryExterior,
    alt: "A craftsman style home with freshly painted exterior siding and crisp white trim",
    label: "Exterior",
  },
  {
    src: IMAGES.galleryKitchen,
    alt: "A modern kitchen with freshly painted walls in a bright, inviting space",
    label: "Modern Kitchen",
  },
  {
    src: IMAGES.galleryTrim,
    alt: "Detailed trim work close-up showing crisp white baseboards and crown molding",
    label: "Trim & Detail",
  },
  {
    src: IMAGES.galleryBedroom,
    alt: "A serene bedroom with freshly painted soft neutral walls and layered textures",
    label: "Bedroom",
  },
];

export function Gallery() {
  return (
    <section id="our-work" className="section-pad scroll-mt-24 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Gallery"
          title="See the Difference a Fresh Coat Can Make"
          description="A look at the colors and finishes that make professional painting so impactful. Photos of our own projects are coming soon."
        />

        <div className="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
          {GALLERY.map((item) => (
            <figure
              key={item.label}
              className="group relative break-inside-avoid overflow-hidden rounded-2xl border border-border shadow-[0_2px_20px_-14px_rgba(0,0,0,0.18)]"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-primary/80 via-primary/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center gap-2 p-5 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                <span className="h-px w-6 bg-accent" />
                <span className="text-sm font-semibold tracking-wide">{item.label}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-10 text-center text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground/70">
          Illustrative stock imagery — not Bradley Interior Painting projects
        </p>
      </div>
    </section>
  );
}
