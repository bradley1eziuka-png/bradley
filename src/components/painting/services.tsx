import { ArrowRight } from "lucide-react";

import { SERVICE_LIST } from "@/lib/services-data";
import { SectionHeading } from "./section-heading";

// Homepage services grid — every enabled service, each linking to its own
// dedicated service page via "Learn More".
const FEATURED = SERVICE_LIST;

export function Services() {
  return (
    <section id="services" className="section-pad scroll-mt-24 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="What We Do"
          title="Painting & Drywall Services in Kalamazoo"
          description="Interior and exterior painting, plus drywall hanging, patching, and finishing, all from one team."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {FEATURED.map((service) => (
            <article
              key={service.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[0_2px_20px_-12px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(0,0,0,0.3)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={service.heroImage}
                  alt={service.heroAlt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-display text-xl font-semibold tracking-tight text-primary">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-muted-foreground">
                  {service.shortDescription}
                </p>
                <a
                  href={service.path}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-deep transition-all hover:gap-2.5"
                >
                  Learn More
                  <ArrowRight className="size-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
