import { defineNuxtConfig } from "nuxt/config";

declare module "@nuxt/schema" {
  interface NuxtConfig {
    i18n?: {
      locales: object[];
      langDir: string;
      defaultLocale: string;
    };
  }
}

export default defineNuxtConfig({
  compatibilityDate: "2025-01-08",
  devtools: { enabled: true },
  css: ["~/assets/base.css"],
  app: {
    head: {
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
      title: "ezTxmMC Portfolio",
    },
  },
  modules: ["@nuxtjs/i18n"],
  i18n: {
    locales: [
      { code: "en", iso: "en-US", file: "en.json" },
      { code: "de", iso: "de-DE", file: "de.json" },
    ],
    langDir: "./locales",
    defaultLocale: "en",
  },
});
