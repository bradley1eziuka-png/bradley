import { createFileRoute, notFound } from "@tanstack/react-router";

import { SiteLayout } from "@/components/painting/site-layout";
import { ServicePage } from "@/components/painting/service-page";
import { isServiceEnabled, SERVICES } from "@/lib/services-data";
import { BUSINESS_NAME, LOCATION_LABEL } from "@/lib/site-config";
import { pageHead } from "@/lib/seo";

const service = SERVICES.drywallFinishing;

export const Route = createFileRoute("/services/drywall-finishing")({
  // Services removed from site.config.json → services.enabled return a 404.
  beforeLoad: () => {
    if (!isServiceEnabled("drywallFinishing")) throw notFound();
  },
  head: () =>
    pageHead({
      title: `${service.title}${LOCATION_LABEL ? ` in ${LOCATION_LABEL}` : ""} | ${BUSINESS_NAME}`,
      description: service.metaDescription ?? service.shortDescription,
      path: service.path,
      image: service.heroImage,
    }),
  component: DrywallFinishingPage,
});

function DrywallFinishingPage() {
  return (
    <SiteLayout>
      <ServicePage service={service} />
    </SiteLayout>
  );
}
