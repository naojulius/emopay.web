// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import { defineNuxtConfig } from "nuxt/config";
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  modules: ["@pinia/nuxt"],
  
  vite: {
    plugins: [tailwindcss()],
  },

  css: ["~/assets/app.css"],
  pinia: {
    storesDirs: ['./stores/**'],
  },
})