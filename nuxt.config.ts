import { defineNuxtConfig } from "nuxt/config";

declare module "@nuxt/schema" {
  interface NuxtConfig {
    i18n?: {
      locales: object[];
      lazy: boolean;
      langDir: string;
      defaultLocale: string;
    };
  }
}

export default defineNuxtConfig({
  modules: [
    "@nuxtjs/i18n",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/content",
    "@nuxt/fonts",
  ],
  compatibilityDate: "2025-01-08",
  devtools: { enabled: true },
  css: ["~/assets/base.css"],
  app: {
    head: {
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
      title: "ezTxmMC Portfolio",
    },
  },
  fonts: {
    defaults: {
      weights: [400, 600],
      styles: ["normal"],
    },
  },
  i18n: {
    locales: [
      { code: "en", iso: "en-US", file: "en.json" },
      { code: "de", iso: "de-DE", file: "de.json" },
    ],
    lazy: true,
    langDir: "locales",
    defaultLocale: "en",
  },
});
