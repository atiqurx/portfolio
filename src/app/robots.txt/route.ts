export function GET() {
  const body = `
  User-agent: *
  Allow: /
  Sitemap: https://atiqurx.com/sitemap.xml
    `.trim();

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
