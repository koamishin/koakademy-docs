// @ts-check

import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"
import react from "@astrojs/react"
import sitemap from "@astrojs/sitemap"

const site = process.env.PUBLIC_SITE_URL ?? "https://koakademy.koamishin.com/"

// https://astro.build/config
export default defineConfig({
  site,
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react(), sitemap()],
  redirects: {
    // Pre-IA-redesign documentation URLs (docs / api / dev separation).
    "/docs/api/api-overview": "/api/api-overview",
    "/docs/api/developer-api": "/api/authenticated-settings",
    "/docs/api/student-verification-api": "/api/student-verification",
    "/docs/development/laravel-herd": "/dev/laravel-herd",
    "/docs/development/laravel-sail": "/dev/laravel-sail",
    "/docs/development/laravel-valet": "/dev/laravel-valet",
    "/docs/development/enrollment-policy-extensions":
      "/dev/enrollment-policy-extensions",
    "/docs/start-here/development": "/dev/development-setup",
  },
})
