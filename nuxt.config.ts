// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/i18n", '@nuxtjs/tailwindcss', "@nuxt/image"],
  i18n: {
    vueI18n: './i18n.config.ts',
    locales: ['en', 'ja'],
    defaultLocale: 'en',
    strategy: 'prefix'
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  }
})