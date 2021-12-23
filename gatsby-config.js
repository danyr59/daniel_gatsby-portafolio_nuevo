module.exports = {
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
        name: `curriculum`,
        path: `${__dirname}/works`,
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-mdx`
  ],
};
