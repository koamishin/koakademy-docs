// @ts-check

import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"
import react from "@astrojs/react"
import sitemap from "@astrojs/sitemap"

// ---------------------------------------------------------------------------
// Site URL — change this to your production domain!
// Used for canonical URLs, sitemap generation, and Open Graph tags.
// ---------------------------------------------------------------------------
const SITE = "https://koakademy.org"

// https://astro.build/config
export default defineConfig({
  site: SITE,
  trailingSlash: "never",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    react(),
    sitemap({
      // Exclude redirect targets that would create duplicate entries.
      filter: (page) => !page.includes("/_redirect"),
      lastmod: new Date(),
    }),
  ],
  redirects: {
    // Pre-IA-redesign documentation URLs (docs / api / dev separation).
    "/docs/api/api-overview": "/api/api-overview",
    "/docs/api/developer-api": "/api/authenticated-settings",
    "/docs/api/student-verification-api": "/api/student-verification",
    "/docs/development/laravel-herd": "/dev/laravel-herd",
    "/docs/development/laravel-sail": "/dev/laravel-sail",
    "/docs/development/laravel-valet": "/dev/laravel-valet",
    "/docs/development/enrollment-policy-extensions": "/dev/enrollment-policy-extensions",
    "/docs/start-here/development": "/dev/development-setup",
  },
})
