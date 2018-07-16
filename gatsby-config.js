module.exports = {
  siteMetadata: {
    title: '北京青色麦田科技有限公司',
    // title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
  ],
  // pathPrefix: `/cnsmartshow.com`,
}
