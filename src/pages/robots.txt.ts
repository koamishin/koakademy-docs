import type { APIRoute } from "astro"

export const prerender = true

export const GET: APIRoute = ({ site }) => {
  const siteUrl = site ?? new URL("https://koakademy.koamishin.com/")
  const base = siteUrl.href.endsWith("/") ? siteUrl.href : `${siteUrl.href}/`

  return new Response(
    [
      `User-agent: *`,
      `Allow: /`,
      ``,
      `Sitemap: ${new URL("sitemap-index.xml", base)}`,
      ``,
    ].join("\n"),
    { headers: { "Content-Type": "text/plain; charset=utf-8" } }
  )
}
