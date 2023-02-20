/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

import type { GatsbyConfig } from "gatsby";
const config: GatsbyConfig = {
  siteMetadata: {
    title: `Portfolio`,
    description: `LingZhi Jin is a software engineer who specializes in building (and ocassionally designing) websites`,
    siteUrl: `https://google.com`,
    image: './og.png',
    twitterUsername: '@zinlingzhi'
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      }
    }
  ]
}

export default config

