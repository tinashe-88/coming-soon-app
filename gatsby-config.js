  module.exports = {
  siteMetadata: {
    title: `tinashe88.com`,
    description: `A countdown landing page`,
    author: `@tinashe_88`,
    siteUrl: `https://tinashe88.com`,
    social: {
      github: `tinashe-88`,
      instagram: `tinashe88`,
      linkedIn: `tinashe-chiweshe-3112768b`,
      twitter: `@tinashe_88`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: false
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
}
