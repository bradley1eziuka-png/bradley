import { ArrowRight, Check, Phone } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { BUSINESS_PHONE, BUSINESS_PHONE_TEL } from "@/lib/site-config";
import { SERVICES, type ServiceConfig } from "@/lib/services-data";
import { SectionHeading } from "./section-heading";
import { ctaButton } from "./buttons";

// Generates a complete service page from a single ServiceConfig so all
// service pages share one cohesive layout, voice, and visual system.
export function ServicePage({ service }: { service: ServiceConfig }) {
  return (
    <>
      {/* ── Service hero ─────────────────────────────────────────────── */}
      <section id="top" className="relative isolate flex min-h-[68vh] items-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={service.heroImage}
            alt={service.heroAlt}
            className="h-full w-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-linear-to-b from-primary/88 via-primary/78 to-primary/68" />
          <div className="absolute inset-0 bg-linear-to-r from-primary/80 via-primary/50 to-primary/35" />
        </div>

        <div className="mx-auto w-full max-w-4xl px-6 py-32 text-center sm:py-36 lg:py-40">
          <p className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {service.eyebrow}
          </p>
          <h1 className="font-display text-balance text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {service.headline ?? service.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
            {service.shortDescription}
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="/#estimate" className={ctaButton({ variant: "accent", size: "lg" })}>
              Get an Estimate
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
          <p className="mt-7 flex items-center justify-center gap-2.5 text-sm font-medium text-white/70">
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
      </section>

      {/* ── Explanation ──────────────────────────────────────────────── */}
      <section className="section-pad bg-background">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading align="left" eyebrow="The Service" title={service.explanation.title} />
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {service.explanation.body}
            </p>
            <div className="mt-8">
              <a href="/#estimate" className={ctaButton({ variant: "solid", size: "md" })}>
                Get an Estimate
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
          {(() => {
            const feature = service.gallery[1] ?? service.gallery[0];
            return (
              <div className="overflow-hidden rounded-3xl border border-border shadow-[0_30px_60px_-30px_rgba(0,0,0,0.35)]">
                <img
                  src={feature!.src}
                  alt={feature!.alt}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            );
          })()}
        </div>
      </section>

      {/* ── What's included ──────────────────────────────────────────── */}
      <section className="section-pad bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="What's Included"
            title={service.details.title}
            description={service.details.description}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:gap-8">
            {service.details.items.map((item) => (
              <div
                key={item.title}
                className="flex gap-5 rounded-2xl border border-border bg-card p-7 shadow-[0_2px_20px_-14px_rgba(0,0,0,0.14)]"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary text-accent shadow-sm">
                  <Check className="size-5" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold tracking-tight text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[0.9rem] leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {service.related.length > 0 && (
            <ul className="mt-10 flex flex-col items-center gap-3 text-center text-[0.95rem] sm:gap-2">
              {service.related.map((rel) => (
                <li key={rel.key}>
                  <a
                    href={SERVICES[rel.key].path}
                    className="font-semibold text-accent-deep underline-offset-4 transition-colors hover:underline"
                  >
                    {rel.text}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* ── Benefits ─────────────────────────────────────────────────── */}
      <section className="section-pad bg-background">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Why It Matters"
            title={`The Benefits of ${service.title}`}
            description="Thoughtful preparation and careful finishing help create a result you can appreciate."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-3 lg:gap-8">
            {service.benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-[0_2px_20px_-14px_rgba(0,0,0,0.14)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_20px_45px_-22px_rgba(0,0,0,0.25)]"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-primary text-accent shadow-sm">
                  <Check className="size-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-primary">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-[0.9rem] leading-relaxed text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────────────── */}
      <section className="section-pad bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="How It Works"
            title="A Simple Path to a Fresh New Look"
            description="Three straightforward steps from first conversation to a beautifully painted space."
          />
          <div className="relative mt-16">
            <div
              className="absolute left-0 right-0 top-7 hidden h-px bg-border lg:block"
              aria-hidden
            />
            <div className="grid gap-10 sm:grid-cols-3 sm:gap-8">
              {service.process.map((step) => (
                <div
                  key={step.number}
                  className="relative flex flex-col items-center text-center sm:items-start sm:text-left"
                >
                  <span className="flex size-14 items-center justify-center rounded-full border-2 border-accent bg-background font-display text-xl font-semibold text-accent shadow-sm">
                    {step.number}
                  </span>
                  <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-primary">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-xs text-[0.95rem] leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Gallery ──────────────────────────────────────────────────── */}
      <section className="section-pad bg-background">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Our Work"
            title="See the Difference a Fresh Coat Can Make"
            description={
              service.galleryDescription ??
              "Illustrative examples of the colors, finishes, and transformations that make professional painting so impactful."
            }
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:gap-8">
            {service.gallery.map((item) => (
              <figure
                key={item.label}
                className="group relative overflow-hidden rounded-2xl border border-border shadow-[0_2px_20px_-14px_rgba(0,0,0,0.18)]"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-primary/70 via-primary/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center gap-2 p-5 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <span className="h-px w-6 bg-accent" />
                  <span className="text-sm font-semibold tracking-wide">{item.label}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          {service.galleryNote !== "" && (
            <p className="mt-10 text-center text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground/70">
              {service.galleryNote ?? "Illustrative examples of painting finishes"}
            </p>
          )}
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="section-pad bg-secondary/40">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeading
            eyebrow="Questions & Answers"
            title={`${service.title} FAQ`}
            description="Straightforward answers to help you feel ready to start your project."
          />
          <Accordion type="single" collapsible className="mt-12 space-y-4">
            {service.faqs.map((faq, i) => (
              <AccordionItem
                key={faq.q}
                value={`item-${i}`}
                className="rounded-xl border border-border bg-card px-6 shadow-[0_2px_16px_-12px_rgba(0,0,0,0.14)]"
              >
                <AccordionTrigger className="py-5 text-left font-display text-base font-semibold tracking-tight text-primary hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-[0.95rem] leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────── */}
      <section
        id="estimate-cta"
        className="relative isolate scroll-mt-24 overflow-hidden bg-primary"
      >
        <div className="absolute inset-0 -z-10">
          <img
            src={service.heroImage}
            alt=""
            aria-hidden
            loading="lazy"
            className="h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-linear-to-t from-primary via-primary/90 to-primary/75" />
        </div>
        <div className="mx-auto max-w-4xl px-6 py-20 text-center sm:py-24 lg:py-28">
          <h2 className="font-display text-balance text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ready to Give Your Space a Fresh New Look?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/75">
            Whether you're planning a small refresh or a larger transformation, the first step is a
            conversation.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="/#estimate" className={ctaButton({ variant: "accent", size: "lg" })}>
              Get a Free Estimate
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
          <p className="mt-8 text-sm font-medium text-white/60">
            Or call us directly at{" "}
            <a
              href={BUSINESS_PHONE_TEL}
              className="font-semibold text-white underline-offset-4 transition-colors hover:text-accent hover:underline"
            >
              {BUSINESS_PHONE}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
