module.exports = {
  siteMetadata: {
    title: 'TJN.io',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "TJN.io",
        short_name: "TJN.io",
        start_url: "/",
        background_color: "#eee",
        theme_color: "#404040",
        display: "standalone",
        icons: [
          {
            src: `favicon/android-chrome-540x540.png`,
            sizes: `540x540`,
            type: `image/png`,
          },
          {
            src: `favicon/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `favicon/android-chrome-144x144.png`,
            sizes: `144x144`,
            type: `image/png`,
          },
          {
            src: `favicon/android-chrome-96x96.png`,
            sizes: `96x96`,
            type: `image/png`,
          },
          {
            src: `favicon/android-chrome-72x72.png`,
            sizes: `72x72`,
            type: `image/png`,
          },
          {
            src: `favicon/android-chrome-48x48.png`,
            sizes: `48x48`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-transformer-remark`,
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content/`,
      },
    },
    'gatsby-plugin-offline',
  ],
};


