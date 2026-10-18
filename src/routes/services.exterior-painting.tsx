import { createFileRoute, notFound } from "@tanstack/react-router";

import { SiteLayout } from "@/components/painting/site-layout";
import { ServicePage } from "@/components/painting/service-page";
import { isServiceEnabled, SERVICES } from "@/lib/services-data";
import { servicePageHead } from "@/lib/seo";

const service = SERVICES.exterior;

export const Route = createFileRoute("/services/exterior-painting")({
  // Services removed from site.config.json → services.enabled return a 404.
  beforeLoad: () => {
    if (!isServiceEnabled("exterior")) throw notFound();
  },
  head: () => servicePageHead(service),
  component: ExteriorPaintingPage,
});

function ExteriorPaintingPage() {
  return (
    <SiteLayout>
      <ServicePage service={service} />
    </SiteLayout>
  );
}
