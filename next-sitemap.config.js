/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://prowhitecode.com",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: "daily",
  priority: 0.7,
  trailingSlash: true,
  exclude: ["/404", "/500"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: ["/404", "/500"],
      },
    ],
  },
  additionalPaths: async (config) => [
    {
      loc: "/",
      changefreq: "daily",
      priority: 1.0,
    },
    {
      loc: "/about",
      changefreq: "daily",
      priority: 0.9,
    },
    {
      loc: "/services",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      loc: "/work",
      changefreq: "daily",
      priority: 0.8,
    },
  ],
};
