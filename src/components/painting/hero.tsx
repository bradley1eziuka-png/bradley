import { ArrowRight, Phone } from "lucide-react";

import { BUSINESS_PHONE, BUSINESS_PHONE_TEL, COPY } from "@/lib/site-config";
import { IMAGES } from "@/lib/site-images";
import { ctaButton } from "./buttons";
import { EstimateFormCard } from "./estimate-form";

// Two-column hero: business name + tagline + description + CTAs on the left,
// premium estimate form card on the right. Stacks vertically on mobile in
// the order: headline/description → CTAs → form.
export function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-[92vh] items-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={IMAGES.hero}
          alt="A professional painter carefully rolling a fresh coat of paint across a bright living room wall"
          width={1376}
          height={768}
          decoding="async"
          className="h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-linear-to-b from-primary/82 via-primary/68 to-primary/52" />
        <div className="absolute inset-0 bg-linear-to-r from-primary/82 via-primary/48 to-primary/22" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 py-28 sm:py-32 lg:py-36">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          {/* Left column ~55% */}
          <div className="max-w-xl">
            <h1 className="font-display text-balance text-5xl font-extrabold leading-[1.05] tracking-tight text-white [word-break:break-word] sm:text-6xl lg:text-[4.5rem]">
              <span className="mb-6 flex w-fit items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase leading-normal tracking-[0.18em] text-white backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {COPY.hero.eyebrow}
              </span>
              {COPY.hero.headline}
            </h1>

            <p className="mt-4 font-display text-xl font-medium tracking-tight text-accent sm:text-2xl">
              {COPY.hero.tagline}
            </p>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/85 sm:text-xl">
              {COPY.hero.subheadline}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="#services" className={ctaButton({ variant: "accent", size: "lg" })}>
                Explore Our Services
                <ArrowRight className="size-4" />
              </a>
              <a
                href={BUSINESS_PHONE_TEL}
                className={ctaButton({ variant: "outlineLight", size: "lg" })}
              >
                <Phone className="size-4" />
                Call Now
              </a>
            </div>

            <p className="mt-7 flex items-center gap-2.5 text-sm font-medium text-white/70">
              <Phone className="size-4 text-accent" />
              <span>Or call us at</span>
              <a
                href={BUSINESS_PHONE_TEL}
                className="font-semibold text-white underline-offset-4 transition-colors hover:text-accent hover:underline"
              >
                {BUSINESS_PHONE}
              </a>
            </p>
          </div>

          {/* Right column ~40% — premium estimate form card */}
          <div className="lg:pl-4">
            <EstimateFormCard id="estimate" />
          </div>
        </div>
      </div>
    </section>
  );
}
