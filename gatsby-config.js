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
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "markdowns",
    //     path: `${__dirname}/src/markdowns`,
    //   },
    //   __key: "markdowns",
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `assets`,
    //     path: `${__dirname}/src/assets`,
    //   },
    //   __key: "assets",
    // },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
