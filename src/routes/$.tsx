import { createFileRoute } from "@tanstack/react-router";
import { SitePage, siteHead } from "@/components/SitePage";

export const Route = createFileRoute("/$")({
  head: ({ params }) => siteHead(`/${params._splat ?? ""}`),
  component: SplatPage,
});

function SplatPage() {
  const { _splat } = Route.useParams();
  return <SitePage url={`/${_splat ?? ""}`} />;
}
