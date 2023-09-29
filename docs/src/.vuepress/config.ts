import { defaultTheme } from "@vuepress/theme-default";
import { searchPlugin } from "@vuepress/plugin-search";
import { nprogressPlugin } from "@vuepress/plugin-nprogress";
import { pwaPlugin } from "@vuepress/plugin-pwa";
import { seoPlugin } from "vuepress-plugin-seo2";
import { defineUserConfig } from "vuepress";

export default defineUserConfig({
  
  base: "/learning-flutter/",
  port: 3000,

  head: [
    ["link", { rel: "icon", href: "/learning-flutter/favicon.ico" }],
    [
      "link",
      { rel: "manifest", href: "/learning-flutter/manifest.webmanifest" },
    ],
    ["meta", { name: "theme-color", content: "#027DFD" }],
  ],

  theme: defaultTheme({
        logo: 'logo_worldline.png',

        sidebar: [
          { text: 'Home', link: '/' },
          "/overview/",
        ], 
  }),

  plugins: [
    seoPlugin({
      hostname: "https://worldline.github.io/gbrah/learning-flutter",
    }),
  ],
});
