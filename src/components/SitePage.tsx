import { useEffect } from "react";
import { App } from "@/App";
import { resolve } from "@/site-routes";
import { headData } from "@/head";
import { initTenda } from "@/lib/tenda";

export function SitePage({ url }: { url: string }) {
  useEffect(() => {
    document.documentElement.classList.add("js");
    document.documentElement.lang = resolve(url).locale;
    const id = requestAnimationFrame(() => initTenda());
    return () => cancelAnimationFrame(id);
  }, [url]);
  return <App url={url} />;
}

export function siteHead(url: string) {
  const h = headData(resolve(url));
  const meta = [
    { title: h.title },
    { name: "description", content: h.description },
    { property: "og:title", content: h.title },
    { property: "og:description", content: h.description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ];
  if (h.noindex) meta.push({ name: "robots", content: "noindex" });
  return { meta };
}
