import { BadgeCheck, ClipboardCheck, Heart, ShieldCheck } from "lucide-react";

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

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="section-pad scroll-mt-24 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Painting Is About More Than Just Color"
          description="It's about the people you hire, the care they take, and the confidence you feel along the way."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {REASONS.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="group flex flex-col rounded-2xl border border-border bg-card p-7 shadow-[0_2px_20px_-14px_rgba(0,0,0,0.14)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_20px_45px_-22px_rgba(0,0,0,0.25)]"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-primary text-accent shadow-sm transition-colors group-hover:bg-accent group-hover:text-primary">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-primary">
                  {reason.title}
                </h3>
                <p className="mt-3 text-[0.9rem] leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
