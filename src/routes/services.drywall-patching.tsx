import { createFileRoute, notFound } from "@tanstack/react-router";

import { SiteLayout } from "@/components/painting/site-layout";
import { ServicePage } from "@/components/painting/service-page";
import { isServiceEnabled, SERVICES } from "@/lib/services-data";
import { servicePageHead } from "@/lib/seo";

const service = SERVICES.drywallPatching;

export const Route = createFileRoute("/services/drywall-patching")({
  // Services removed from site.config.json → services.enabled return a 404.
  beforeLoad: () => {
    if (!isServiceEnabled("drywallPatching")) throw notFound();
  },
  head: () => servicePageHead(service),
  component: DrywallPatchingPage,
});

function DrywallPatchingPage() {
  return (
    <SiteLayout>
      <ServicePage service={service} />
    </SiteLayout>
  );
}
