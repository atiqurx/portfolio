module.exports = {
    siteUrl: 'https://atiqurx.com', 
    generateRobotsTxt: true,           
    sitemapSize: 5000,                 
  additionalPaths: async (config) => [
    await config.transform(config, '/resume'),
    await config.transform(config, '/#projects'), 
  ],
  transform: async (config, path) => {
    // Custom rules for specific paths if needed
    if (path === '/resume') {
      return {
        loc: path, 
        changefreq: 'daily',
        priority: 0.5,
        lastmod: new Date().toISOString(),
      };
    } else if (path === '/#projects') {
      return {
        loc: path,
        changefreq: 'daily', 
        priority: 0.6,
        lastmod: new Date().toISOString(),
      };
    }
    return {
      loc: path,
      changefreq: 'daily',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};
