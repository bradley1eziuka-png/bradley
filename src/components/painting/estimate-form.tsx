import { useState, type FormEvent } from "react";
import { CheckCircle2, Info, Phone } from "lucide-react";

import { FORM_ACTION_URL, FORM_IS_DEMO, FORM_SUBJECT, submitEstimate } from "@/lib/form-submit";
import { siteConfig } from "@/config";
import { BUSINESS_PHONE, BUSINESS_PHONE_TEL } from "@/lib/site-config";
import { SERVICE_LIST } from "@/lib/services-data";
import { ctaButton } from "./buttons";

const SERVICE_OPTIONS = [...SERVICE_LIST.map((s) => s.title), "Other Project"];

type Values = {
  name: string;
  phone: string;
  cityZip: string;
  email: string;
  service: string;
  details: string;
};

const EMPTY: Values = { name: "", phone: "", cityZip: "", email: "", service: "", details: "" };

// Premium white estimate form card. Used in the hero on the homepage.
// Delivery is handled by src/lib/form-submit.ts (Formspree, GHL webhook, or
// demo). The success state only appears after the provider confirms receipt.
export function EstimateFormCard({ id, className }: { id?: string; className?: string }) {
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "demo" | "error">(
    "idle",
  );

  function update<K extends keyof Values>(key: K, value: string) {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validate() {
    const next: Partial<Record<keyof Values, string>> = {};
    if (values.name.trim().length < 2) next.name = "Please enter your first name.";
    if (values.phone.replace(/\D/g, "").length < 7)
      next.phone = "Please enter a valid phone number.";
    if (values.cityZip.trim().length < 2) next.cityZip = "Please enter your city or ZIP.";
    if (values.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
      next.email = "Please enter a valid email address.";
    if (!values.service) next.service = "Please select a service.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    const result = await submitEstimate(new FormData(e.currentTarget as HTMLFormElement));
    if (result.status === "success") {
      setStatus("success");
      setValues(EMPTY);
    } else if (result.status === "demo") {
      setStatus("demo");
    } else {
      setStatus("error");
    }
  }

  const fieldBase =
    "h-11 w-full rounded-lg border bg-white px-4 text-base text-foreground transition-colors placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent/35";
  const fieldOk = "border-border focus:border-accent";
  const fieldErr = "border-destructive focus:border-destructive";

  return (
    <div
      id={id}
      className={
        "rounded-3xl border border-border bg-white p-5 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.5)] sm:p-6" +
        (className ? ` ${className}` : "")
      }
    >
      <div className="mb-4">
        <span className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-accent-deep">
          Free Estimate
        </span>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-primary">
          Get An Estimate
        </h2>
        <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">
          Tell us a little about your painting project and take the first step toward a fresh new
          look.
        </p>
      </div>

      {status === "demo" ? (
        <div
          role="status"
          className="flex flex-col items-center rounded-2xl border border-border bg-secondary/50 px-6 py-10 text-center"
        >
          <span className="flex size-16 items-center justify-center rounded-full bg-accent-soft text-accent-deep">
            <Info className="size-8" />
          </span>
          <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-primary">
            Demo Mode — Not Sent
          </h3>
          <p className="mt-3 max-w-sm text-[0.95rem] leading-relaxed text-muted-foreground">
            This preview form isn't connected to an inbox yet, so your request was not delivered.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-6 text-sm font-semibold text-accent-deep hover:underline"
          >
            Back to the form
          </button>
        </div>
      ) : status === "success" ? (
        <div className="flex flex-col items-center rounded-2xl border border-border bg-secondary/50 px-6 py-10 text-center">
          <span className="flex size-16 items-center justify-center rounded-full bg-accent-soft text-accent-deep">
            <CheckCircle2 className="size-8" />
          </span>
          <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-primary">
            Thanks — we got your request.
          </h3>
          <p className="mt-3 max-w-sm text-[0.95rem] leading-relaxed text-muted-foreground">
            We'll reach out within 1 business day.
          </p>
          <p className="mt-6 text-sm text-muted-foreground">
            Need to reach us sooner?{" "}
            <a href={BUSINESS_PHONE_TEL} className="font-semibold text-primary hover:text-accent">
              Call {BUSINESS_PHONE}
            </a>
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-6 text-sm font-semibold text-accent-deep hover:underline"
          >
            Submit another request
          </button>
        </div>
      ) : (
        <form
          action={FORM_ACTION_URL || undefined}
          method="POST"
          onSubmit={onSubmit}
          noValidate
          className="relative space-y-3"
        >
          <input type="hidden" name="_subject" value={FORM_SUBJECT} />
          {/* Honeypot: hidden from people, tempting to bots. */}
          <input
            type="text"
            name="_gotcha"
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
          />
          <div>
            <label htmlFor="est-name" className="mb-1.5 block text-sm font-semibold text-primary">
              First Name <span className="text-accent-deep">*</span>
            </label>
            <input
              id="est-name"
              name="first_name"
              type="text"
              required
              autoComplete="given-name"
              value={values.name}
              onChange={(e) => update("name", e.target.value)}
              placeholder="Your first name"
              className={`${fieldBase} ${errors.name ? fieldErr : fieldOk}`}
              aria-invalid={!!errors.name}
            />
            {errors.name && (
              <p className="mt-1.5 text-xs font-medium text-destructive">{errors.name}</p>
            )}
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label
                htmlFor="est-phone"
                className="mb-1.5 block text-sm font-semibold text-primary"
              >
                Phone Number <span className="text-accent-deep">*</span>
              </label>
              <input
                id="est-phone"
                name="phone"
                type="tel"
                required
                inputMode="tel"
                autoComplete="tel"
                value={values.phone}
                onChange={(e) => update("phone", e.target.value)}
                placeholder="(555) 555-5555"
                className={`${fieldBase} ${errors.phone ? fieldErr : fieldOk}`}
                aria-invalid={!!errors.phone}
              />
              {errors.phone && (
                <p className="mt-1.5 text-xs font-medium text-destructive">{errors.phone}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="est-cityzip"
                className="mb-1.5 block text-sm font-semibold text-primary"
              >
                City or ZIP <span className="text-accent-deep">*</span>
              </label>
              <input
                id="est-cityzip"
                name="city_zip"
                type="text"
                required
                autoComplete="postal-code"
                value={values.cityZip}
                onChange={(e) => update("cityZip", e.target.value)}
                placeholder="Kalamazoo or 49001"
                className={`${fieldBase} ${errors.cityZip ? fieldErr : fieldOk}`}
                aria-invalid={!!errors.cityZip}
              />
              {errors.cityZip && (
                <p className="mt-1.5 text-xs font-medium text-destructive">{errors.cityZip}</p>
              )}
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label
                htmlFor="est-email"
                className="mb-1.5 block text-sm font-semibold text-primary"
              >
                Email (optional)
              </label>
              <input
                id="est-email"
                name="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                value={values.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder="you@example.com"
                className={`${fieldBase} ${errors.email ? fieldErr : fieldOk}`}
                aria-invalid={!!errors.email}
              />
              {errors.email && (
                <p className="mt-1.5 text-xs font-medium text-destructive">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="est-service"
                className="mb-1.5 block text-sm font-semibold text-primary"
              >
                Service Needed <span className="text-accent-deep">*</span>
              </label>
              <select
                id="est-service"
                name="project_type"
                required
                value={values.service}
                onChange={(e) => update("service", e.target.value)}
                className={`${fieldBase} ${errors.service ? fieldErr : fieldOk} cursor-pointer`}
                aria-invalid={!!errors.service}
              >
                <option value="" disabled>
                  Select a service…
                </option>
                {SERVICE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              {errors.service && (
                <p className="mt-1.5 text-xs font-medium text-destructive">{errors.service}</p>
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor="est-details"
              className="mb-1.5 block text-sm font-semibold text-primary"
            >
              Message / Project Details
            </label>
            <textarea
              id="est-details"
              name="message"
              rows={3}
              value={values.details}
              onChange={(e) => update("details", e.target.value)}
              placeholder="Tell us about the space, what you'd like painted, and any timing you have in mind."
              className="w-full rounded-lg border bg-white px-4 py-3 text-base text-foreground transition-colors placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent/35 focus:border-accent border-border"
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className={ctaButton({ variant: "solid", size: "lg" }) + " w-full"}
          >
            {status === "submitting" ? "Sending..." : "Request My Estimate"}
          </button>

          {status === "error" && (
            <p className="text-center text-sm font-medium text-destructive">
              Something went wrong. Please call us or try again.{" "}
              <a href={BUSINESS_PHONE_TEL} className="underline">
                {BUSINESS_PHONE}
              </a>
            </p>
          )}

          <p className="flex items-center justify-center gap-1.5 text-center text-xs text-muted-foreground">
            <Phone className="size-3.5 text-accent" />
            Free • No obligation
          </p>
          {FORM_IS_DEMO && siteConfig.form.showDemoNotice && (
            <p className="text-center text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground/70">
              Demo mode — form not connected
            </p>
          )}
        </form>
      )}
    </div>
  );
}
