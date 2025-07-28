import { NextResponse } from "next/server";

const SITE_URL = "https://www.atiqurx.com";

function generateSiteMap() {
  const staticRoutes = ["", "projects", "tech-stack", "about"];

  const urls = staticRoutes
    .map(
      (route) => `
  <url>
    <loc>${SITE_URL}/${route}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  `
    )
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  >
    ${urls}
  </urlset>`;
}

export async function GET() {
  const sitemap = generateSiteMap();

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
