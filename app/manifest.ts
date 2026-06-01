import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Murilo Alves Portfolio",
    short_name: "Murilo Alves",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#252525",
    theme_color: "#101010",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
