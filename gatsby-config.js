/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `RadixRHF`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdowns",
        path: `${__dirname}/src/markdowns`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-highlight-code`,
          },
        ],
      },
    },
  ],
};
