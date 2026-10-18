import { createFileRoute, notFound } from "@tanstack/react-router";

import { SiteLayout } from "@/components/painting/site-layout";
import { ServicePage } from "@/components/painting/service-page";
import { isServiceEnabled, SERVICES } from "@/lib/services-data";
import { servicePageHead } from "@/lib/seo";

const service = SERVICES.drywallFinishing;

export const Route = createFileRoute("/services/drywall-finishing")({
  // Services removed from site.config.json → services.enabled return a 404.
  beforeLoad: () => {
    if (!isServiceEnabled("drywallFinishing")) throw notFound();
  },
  head: () => servicePageHead(service),
  component: DrywallFinishingPage,
});

function DrywallFinishingPage() {
  return (
    <SiteLayout>
      <ServicePage service={service} />
    </SiteLayout>
  );
}
