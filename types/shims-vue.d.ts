import { NuxtI18nInstance } from "@nuxtjs/i18n";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $i18n: NuxtI18nInstance;
  }
}
