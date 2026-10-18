import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { BadgeCheck, ClipboardCheck, Heart, ShieldCheck } from "lucide-react";

import { cn } from "@/lib/utils";
import { SectionHeading } from "./section-heading";

const REASONS = [
  {
    icon: Heart,
    title: "Family-Oriented Service",
    description:
      "A customer-focused approach built on professionalism and care, from the first call to the final coat.",
  },
  {
    icon: ShieldCheck,
    title: "Fully Insured",
    description: "Peace of mind when you hire a painting contractor for your home.",
  },
  {
    icon: ClipboardCheck,
    title: "Free Estimates",
    description:
      "Talk through your project with us and get an estimate before you commit to anything.",
  },
  {
    icon: BadgeCheck,
    title: "Free One-Year Touch-Ups",
    description:
      "We offer free touch-ups for one year. Ask us about the details when you request your estimate.",
  },
];

const CARD_CLASS =
  "group flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-[0_2px_20px_-14px_rgba(0,0,0,0.14)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_20px_45px_-22px_rgba(0,0,0,0.25)]";

function ReasonCard({
  reason,
  asHeading = true,
}: {
  reason: (typeof REASONS)[number];
  asHeading?: boolean;
}) {
  const Icon = reason.icon;
  const Title = asHeading ? "h3" : "p";
  return (
    <div className={CARD_CLASS}>
      <span className="flex size-12 items-center justify-center rounded-xl bg-primary text-accent shadow-sm transition-colors group-hover:bg-accent group-hover:text-primary">
        <Icon className="size-6" />
      </span>
      <Title className="mt-5 font-display text-lg font-semibold tracking-tight text-primary">
        {reason.title}
      </Title>
      <p className="mt-3 text-[0.9rem] leading-relaxed text-muted-foreground">
        {reason.description}
      </p>
    </div>
  );
}

const AUTOPLAY_MS = 2500;

// Mobile only (below the `sm` breakpoint): the cards rotate automatically
// every 2.5s. Autoplay pauses while the visitor is touching/dragging, and is
// skipped entirely for visitors who prefer reduced motion (they can still swipe).
function MobileCarousel() {
  const [viewportRef, api] = useEmblaCarousel({ loop: true, align: "start" });
  const [selected, setSelected] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelected(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  useEffect(() => {
    if (!api || paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => api.scrollNext(), AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [api, paused]);

  const resume = useCallback(() => setPaused(false), []);

  return (
    <div className="mt-14 sm:hidden">
      <div
        className="-mx-2 overflow-hidden px-2 py-2"
        ref={viewportRef}
        onPointerDown={() => setPaused(true)}
        onPointerUp={resume}
        onPointerCancel={resume}
      >
        <div className="flex">
          {REASONS.map((reason) => (
            <div key={reason.title} className="min-w-0 flex-[0_0_100%] px-1">
              <ReasonCard reason={reason} asHeading={false} />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5 flex justify-center gap-2" role="tablist" aria-label="Choose a reason">
        {REASONS.map((reason, i) => (
          <button
            key={reason.title}
            type="button"
            role="tab"
            aria-selected={i === selected}
            aria-label={reason.title}
            onClick={() => api?.scrollTo(i)}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              i === selected ? "w-6 bg-accent" : "w-2 bg-primary/20",
            )}
          />
        ))}
      </div>
    </div>
  );
}

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="section-pad scroll-mt-24 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Painting Is About More Than Just Color"
          description="It's about the people you hire, the care they take, and the confidence you feel along the way."
        />

        <MobileCarousel />

        <div className="mt-14 hidden gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {REASONS.map((reason) => (
            <ReasonCard key={reason.title} reason={reason} />
          ))}
        </div>
      </div>
    </section>
  );
}
