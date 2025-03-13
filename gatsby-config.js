module.exports = {
  siteMetadata: {
    title: `Navspecialist Website`,
    description: `Navspecialist Website`,
    author: `@cbrostrom`,
  },
  plugins: [
    `@rhysforyou/gatsby-plugin-react-helmet-async`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `./src/data/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: [],
      },
    },
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyForNull: "da",
        langKeyDefault: "da",
        useLangKeyLayout: true,
        prefixDefault: false,
      },
    },
    {
      resolve: `gatsby-plugin-sass-resources`,
      options: {
        resources: [ "src/scss/base/variables.scss", "src/scss/base/mixins.scss" ],
      },
    },
    {
      resolve: `gatsby-plugin-compile-es6-packages`,
      options: {
        modules: [ `react-hook-inview`, `styled-components` ],
      },
    },
  ],
}
