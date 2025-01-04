export default defineNuxtConfig({
  app: {
    head: {
      title: "Port Folio",
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap",
        },
      ],
    },
  },
  css: ["@/src/assets/scss/main.scss"],
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "vuetify-nuxt-module",
    "@nuxtjs/google-fonts",
  ],
});
