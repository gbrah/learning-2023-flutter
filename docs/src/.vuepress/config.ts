import { defaultTheme } from "@vuepress/theme-default";
import { searchPlugin } from "@vuepress/plugin-search";
import { nprogressPlugin } from "@vuepress/plugin-nprogress";
import { pwaPlugin } from "@vuepress/plugin-pwa";
import { seoPlugin } from "vuepress-plugin-seo2";
import { defineUserConfig } from "vuepress";

export default defineUserConfig({
  
  base: "/learning-2023-flutter/",
  port: 3000,

  head: [
    ["link", { rel: "icon", href: "/learning-2023-flutter/favicon.ico" }],
    [
      "link",
      { rel: "manifest", href: "/learning-2023-flutter/manifest.webmanifest" },
    ],
    ["meta", { name: "theme-color", content: "#027DFD" }],
  ],

  theme: defaultTheme({
        logo: 'logo_worldline.png',

        sidebar: [
          { text: 'Home', link: '/' },
          "/overview/",
          "/dart/",
          "/ui/",
          "/widget/",
          "/net/",
          "/nav/",
          "/db/",
          "/advanced/",
        ], 
  }),

  plugins: [
    seoPlugin({
      hostname: "https://worldline.github.io/gbrah/learning-2023-flutter",
    }),
  ],
});
