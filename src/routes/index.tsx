import { createFileRoute } from "@tanstack/react-router";
import { SitePage, siteHead } from "@/components/SitePage";

export const Route = createFileRoute("/")({
  head: () => siteHead("/"),
  component: () => <SitePage url="/" />,
});
