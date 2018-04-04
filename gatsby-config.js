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
        background_color: "#404040",
        theme_color: "#404040",
        display: "fullscreen",
        icons: [
          {
            src: `/favicons/android-chrome-640x640.png`,
            sizes: `640x640`,
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


