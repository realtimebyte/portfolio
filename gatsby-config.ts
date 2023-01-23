import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Portfolio`,
    description: `LingZhi Jin is a software engineer who specializes in building (and ocassionally designing) websites`,
    siteUrl: `https://www.yourdomain.tld`,
    image: './og.png',
    twitterUsername: '@zinlingzhi'
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [],
}

export default config
