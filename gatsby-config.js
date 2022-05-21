module.exports = {
 pathPrefix: "/daniel_gatsby-portafolio_nuevo",
  siteMetadata: {
    siteUrl: "https://yourdomain.com",
    title: "Daniel Rangel ",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    `gatsby-transformer-sharp`,
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        /**
         * @property {boolean} [resetCSS=true]
         * if false, this plugin will not use `<CSSReset />
         */
        resetCSS: true,
        /**
         * @property {boolean} [isUsingColorMode=true]
         * if false, this plugin will not use <ColorModeProvider />
         */
        isUsingColorMode: true,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `works`,
        path: `${__dirname}/works`,
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `curriculum`,
        path: `${__dirname}/curriculum`,
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-mdx`
  ],
};
