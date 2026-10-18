import { createFileRoute, notFound } from "@tanstack/react-router";

import { SiteLayout } from "@/components/painting/site-layout";
import { ServicePage } from "@/components/painting/service-page";
import { isServiceEnabled, SERVICES } from "@/lib/services-data";
import { servicePageHead } from "@/lib/seo";

const service = SERVICES.drywallHanging;

export const Route = createFileRoute("/services/drywall-hanging")({
  // Services removed from site.config.json → services.enabled return a 404.
  beforeLoad: () => {
    if (!isServiceEnabled("drywallHanging")) throw notFound();
  },
  head: () => servicePageHead(service),
  component: DrywallHangingPage,
});

function DrywallHangingPage() {
  return (
    <SiteLayout>
      <ServicePage service={service} />
    </SiteLayout>
  );
}
