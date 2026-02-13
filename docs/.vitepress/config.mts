import { defineConfig } from "vitepress";
import {
  groupIconMdPlugin,
  groupIconVitePlugin,
} from "vitepress-plugin-group-icons";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NEKOSBEST DOCS",
  description: "nekos.best's official documentation.",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: { provider: "local" },

    nav: [
      { text: "Home", link: "/" },
      { text: "Status Page", link: "https://status.nekos.best" },
    ],

    sidebar: [
      {
        text: "Getting Started",
        items: [
          { text: "Introduction", link: "/api/introduction" },
          { text: "API Endpoints", link: "/api/api-endpoints" },
        ],
      },
      {
        text: "Code Examples",
        items: [
          { text: "BDFD", link: "/examples/bdfd" },
          { text: "JavaScript", link: "/examples/javascript" },
          { text: "Python", link: "/examples/python" },
        ],
      },
      {
        text: "Official Libraries",
        items: [
          {
            text: "JavaScript",
            link: "https://github.com/nekos-best/nekos-best.js",
          },
          {
            text: "Python",
            link: "https://github.com/nekos-best/nekos-best.py",
          },
          { text: "Rust", link: "https://github.com/nekos-best/nekos-best.rs" },
        ],
      },
      {
        text: "Unofficial Libraries",
        items: [
          {
            text: "About Unofficial Libraries",
            link: "/unofficial/unofficial",
            items: [
              {
                text: "C#",
                link: "https://github.com/Sylveon76/Nekos.Best-API",
              },
              {
                text: "Dart",
                link: "https://github.com/Yakiyo/nekos_best_dart",
              },
              { text: "Go", link: "https://github.com/Yakiyo/nekos_best.go" },
              {
                text: "Haskell",
                link: "https://github.com/xquantxz/nekos-best.hs",
              },
            ],
          },
        ],
      },
      {
        text: "Legal",
        items: [
          { text: "Terms and Conditions", link: "/legal/tos" },
          { text: "Privacy Policy", link: "/legal/privacy" },
          { text: "DMCA Takedown", link: "/legal/dmca" },
        ],
      },
      { text: "FAQ", link: "/uncategorized/faq" },
      { text: "Contribute", link: "/uncategorized/contribute" },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/nekos-best/docs" },
      { icon: "discord", link: "https://nekos.best/discord?ref=docs" },
    ],
  },

  head: [
    [
      "script",
      {
        async: "",
        defer: "",
        "data-website-id": "3e079cfa-6704-4cea-bf37-8c092faf18d3",
        src: "https://alycs.nekos.best/script.js",
      },
    ],
  ],

  sitemap: {
    hostname: "https://docs.nekos.best",
  },

  lastUpdated: true,

  markdown: {
    config(md) {
      md.use(groupIconMdPlugin);
    },
  },

  vite: {
    plugins: [groupIconVitePlugin()],
    server: {
      allowedHosts: ["newport-kentucky-reproduce-draw.trycloudflare.com"],
    },
  },
});
