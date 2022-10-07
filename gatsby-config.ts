import type { GatsbyConfig } from 'gatsby';
import { title } from './src/config/app';

const config: GatsbyConfig = {
  siteMetadata: {
    title,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ['gatsby-plugin-postcss', 'gatsby-plugin-image', 'gatsby-plugin-sharp', 'gatsby-transformer-sharp'],
};

export default config;
