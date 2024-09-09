export async function GET(request: Request) {
    const baseUrl = 'https://atiqurx.com'; 
  
    const urls = [
      `${baseUrl}/`,             // Home
      `${baseUrl}/about`,        // About page
    ];
  
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls.map(url => `
        <url>
          <loc>${url}</loc>
          <priority>1.0</priority>
        </url>`).join('')}
    </urlset>`;
  
    return new Response(sitemap, {
      headers: {
        'Content-Type': 'application/xml'
      }
    });
  }
  