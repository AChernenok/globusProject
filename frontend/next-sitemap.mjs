// next-sitemap.mjs

const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_BASE_URL;
const siteUrl = process.env.NEXT_PUBLIC_URL;

export default {
    siteUrl,
    generateRobotsTxt: true,
    changefreq: 'daily',
    priority: 0.7,
    sitemapSize: 7000,
    outDir: './public',
  
    async additionalPaths(config) {
      const paths = [];
  
      const query = `
        query Robot {
            robot {
                service_categories {
                slug
                updatedAt
                }
                pages {
                id
                body
                }
            }
        }
      `;
  
      const res = await fetch(`${strapiUrl}/graphql`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
      });
  
      const json = await res.json();
      const categories = json.data.robot.service_categories;
  
      categories.forEach((category) => {
        paths.push({
          loc: `/uslugi/${category.slug}`,
          lastmod: category.updatedAt,
          changefreq: 'daily',
          priority: 0.7,
        });
      });
  
      return paths;
    },
  };
