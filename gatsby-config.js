module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "RGR Gatsby v4",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
  ],
};
