import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "IDRead Workforce",
    short_name: "IDREAD Workforce",
    description:
      "IDRead Workforce is a workforce management system that uses AI to automate the process of verifying the identity of employees.",
    start_url: "/",
    display_override: ["browser", "minimal-ui", "fullscreen"],
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
