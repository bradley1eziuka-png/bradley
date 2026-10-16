import { Paintbrush } from "lucide-react";

import { cn } from "@/lib/utils";
import { BUSINESS_NAME, LOGO } from "@/lib/site-config";

// Business logo. The client logo has dark lettering, so it always sits on a
// white rounded plate to stay readable on the dark hero and footer. Size it
// with `className` (height utilities apply to the image; width follows the
// logo's own proportions). With no logo set in site.config.json →
// branding.logo, the generic paintbrush mark is shown.
export function Logo({ className, src }: { className?: string; src?: string }) {
  const logoSrc = src || LOGO.src;
  if (logoSrc) {
    return (
      <span className="inline-flex shrink-0 items-center rounded-xl bg-white px-2.5 py-1 shadow-sm ring-1 ring-black/5">
        <img
          src={logoSrc}
          alt={LOGO.alt || `${BUSINESS_NAME} logo`}
          className={cn("h-12 w-auto object-contain sm:h-14", className)}
        />
      </span>
    );
  }
  return (
    <span
      className={cn(
        "flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent text-primary shadow-sm",
        className,
      )}
    >
      <Paintbrush className="size-5" />
    </span>
  );
}
