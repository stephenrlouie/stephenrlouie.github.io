module.exports = {
  siteMetadata: {
    title: `Steve Louie Personal Site`,
    author: `Steve Louie`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typography`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/md`,
        name: 'pages',
      },
    },
    `gatsby-transformer-remark`
  ],
  pathPrefix: `/site`
}
