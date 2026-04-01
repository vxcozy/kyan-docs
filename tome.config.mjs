import kyanTheme from "./kyan-theme-plugin.mjs";

export default {
  name: "Kyan",
  logo: "./logo.png",
  favicon: "./logo.png",
  baseUrl: "https://kyan.tome.center",

  theme: {
    preset: "cipher",
    fonts: {
      heading: "Geist",
      body: "Geist",
      code: "Geist Mono",
    },
  },

  search: {
    provider: "local",
  },

  navigation: [
    {
      group: "Getting Started",
      pages: [
        "index",
        "tutorials/getting-started",
      ],
    },
    {
      group: "Tutorials",
      pages: [
        "tutorials/index",
        "tutorials/first-options-trade",
        "tutorials/first-perps-trade",
        "tutorials/combo-trade",
      ],
    },
    {
      group: "How-to Guides",
      pages: [
        "guides/index",
        "guides/portfolio-margin",
        "guides/combo-strategies",
        "guides/managing-positions",
        "guides/fees-and-funding",
      ],
    },
    {
      group: "Reference",
      pages: [
        "reference/index",
        "reference/api-overview",
        "reference/rest-api",
        "reference/websocket-api",
        "reference/order-types",
        "reference/error-codes",
      ],
    },
    {
      group: "Concepts",
      pages: [
        "concepts/index",
        "concepts/options-basics",
        "concepts/perpetuals",
        "concepts/portfolio-margin",
        "concepts/combo-orders",
        "concepts/settlement",
      ],
    },
  ],

  social: {
    twitter: "https://x.com/kyanexchange",
    discord: "https://discord.gg/kyan",
    github: "https://github.com/kyanexchange",
  },

  editLink: {
    repo: "kyanexchange/docs",
    branch: "main",
  },

  tomePlugins: [kyanTheme],
};
