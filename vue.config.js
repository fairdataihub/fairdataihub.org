// vue.config.js

module.exports = {
  pluginOptions: {
    sitemap: {
      urls: [
        {
          loc: "https://fairdataihub.org/",
          priority: 0.8,
          changefreq: "weekly",
        },
        {
          loc: "https://fairdataihub.org/home",
          priority: 0.8,
          changefreq: "weekly",
        },
        {
          loc: "https://fairdataihub.org/team",
          priority: 0.8,
          changefreq: "monthly",
        },
        {
          loc: "https://fairdataihub.org/contactus",
          priority: 0.8,
          changefreq: "monthly",
        },
        {
          loc: "https://fairdataihub.org/sodaforsparc",
          priority: 0.8,
          changefreq: "monthly",
        },
        {
          loc: "https://fairdataihub.org/sodaforsparc/docs",
          priority: 0.8,
          changefreq: "monthly",
        },
        {
          loc: "https://fairdataihub.org/knowmore",
          priority: 0.8,
          changefreq: "monthly",
        },
        {
          loc: "https://fairdataihub.org/sparclink",
          priority: 0.8,
          changefreq: "monthly",
        },
        {
          loc: "https://fairdataihub.org/aqua",
          priority: 0.8,
          changefreq: "monthly",
        },
      ],
    },
  },
};
