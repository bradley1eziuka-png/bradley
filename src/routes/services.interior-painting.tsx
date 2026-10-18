import { createFileRoute, notFound } from "@tanstack/react-router";

import { SiteLayout } from "@/components/painting/site-layout";
import { ServicePage } from "@/components/painting/service-page";
import { isServiceEnabled, SERVICES } from "@/lib/services-data";
import { servicePageHead } from "@/lib/seo";

const service = SERVICES.interior;

export const Route = createFileRoute("/services/interior-painting")({
  // Services removed from site.config.json → services.enabled return a 404.
  beforeLoad: () => {
    if (!isServiceEnabled("interior")) throw notFound();
  },
  head: () => servicePageHead(service),
  component: InteriorPaintingPage,
});

function InteriorPaintingPage() {
  return (
    <SiteLayout>
      <ServicePage service={service} />
    </SiteLayout>
  );
}
