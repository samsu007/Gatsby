module.exports = {
  siteMetadata: {
    title: 'Startup.io',
    author: 'Samsudeen'
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    }
  ]
}