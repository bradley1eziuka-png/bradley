// ───────────────────────────────────────────────────────────────────────────
// Estimate form delivery. Provider is chosen in site.config.json → form.
//
//   formspree    POST to https://formspree.io/f/<formspreeId>
//   ghl-webhook  POST JSON to a GoHighLevel workflow "Inbound Webhook" URL
//   demo         not connected — NEVER reports success
//
// Every form on the site submits through submitEstimate() below (one shared
// code path). It sends the form's own FormData, so the field `name` attributes in
// the markup are exactly what arrives in the Formspree inbox.
//
// Success is returned only when the receiving service answers 2xx. Network
// failures, CORS blocks, and non-2xx answers all return { status: "error" }.
// No secrets live here: a Formspree ID and a GHL inbound-webhook URL are
// public form endpoints by design (private API keys must never go in this file).
// ───────────────────────────────────────────────────────────────────────────
import { siteConfig } from "@/config";
import { BUSINESS_NAME } from "./site-config";

export type SubmitResult =
  { status: "success" } | { status: "demo" } | { status: "error"; message: string };

const { provider, formspreeId, webhookUrl } = siteConfig.form;

function providerConfigured() {
  if (provider === "formspree") return /^[A-Za-z0-9_-]+$/.test(formspreeId);
  if (provider === "ghl-webhook") return /^https:\/\//i.test(webhookUrl);
  return false;
}

export const FORM_IS_LIVE = providerConfigured();
export const FORM_IS_DEMO = !FORM_IS_LIVE;

// Plain-HTML fallback target for <form action>, used only if JavaScript is off.
export const FORM_ACTION_URL =
  provider === "formspree" && FORM_IS_LIVE ? `https://formspree.io/f/${formspreeId}` : "";

// Shown in the Formspree email subject line.
export const FORM_SUBJECT = `New estimate request: Bradley's Interior Painting website`;

const GENERIC_ERROR = "We couldn't send your request.";

export async function submitEstimate(data: FormData): Promise<SubmitResult> {
  if (data.get("_gotcha")) return { status: "error", message: GENERIC_ERROR }; // bot filled the hidden field
  if (FORM_IS_DEMO) return { status: "demo" };

  try {
    let res: Response;
    if (provider === "formspree") {
      res = await fetch(FORM_ACTION_URL, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
    } else {
      res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: data.get("first_name"),
          phone: data.get("phone"),
          city_zip: data.get("city_zip"),
          email: data.get("email"),
          service_needed: data.get("project_type"),
          message: data.get("message"),
          source: "website-estimate-form",
          business: BUSINESS_NAME,
          page: typeof window !== "undefined" ? window.location.href : "",
        }),
      });
    }
    if (res.ok) return { status: "success" };
    return { status: "error", message: GENERIC_ERROR };
  } catch {
    return { status: "error", message: GENERIC_ERROR };
  }
}
