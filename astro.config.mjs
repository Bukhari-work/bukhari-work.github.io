import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import AutoImport from "astro-auto-import";
import { defineConfig } from "astro/config";
import remarkCollapse from "remark-collapse";
import remarkToc from "remark-toc";
import config from "./src/config/config.json";
import sharp from "sharp";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: config.site.base_url
    ? config.site.base_url
    : "http://bukhari-work.github.io",
  base: config.site.base_path ? config.site.base_path : "/",
  trailingSlash: "never",
  image: {
    service: sharp(),
  },
  integrations: [
    react(),
    sitemap(),
    tailwind({
      applyBaseStyles: false,
    }),
    AutoImport({
      imports: [
        "@/shortcodes/Button",
        "@/shortcodes/DownloadButton",
        "@/shortcodes/Accordion",
        "@/shortcodes/Notice",
        "@/shortcodes/Video",
        "@/shortcodes/Youtube",
        "@/shortcodes/Tabs",
        "@/shortcodes/Tab",
      ],
    }),
    mdx(),
  ],
  markdown: {
    remarkPlugins: [
      remarkToc,
      [
        remarkCollapse,
        {
          test: "Table of contents",
        },
      ],
    ],
    shikiConfig: {
      themes: {
        light: "snazzy-light",
        dark: "everforest-dark",
      },
      wrap: true,
      langs: [],
    },
    extendDefaultPlugins: true,
  },
});
