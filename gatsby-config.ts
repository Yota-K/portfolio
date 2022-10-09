import type { GatsbyConfig } from 'gatsby';
import { title } from './src/config/app';

const config: GatsbyConfig = {
  siteMetadata: {
    title,
    siteUrl: `https://portfoliomain48342.gatsbyjs.io/`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        rejected: true, // 削除されたCSSの容量を表示
        printRejected: false, // 削除したCSSを最大100個まで一覧表示
        printAll: false, // 削除したCSSを全て一覧表示
        develop: false, // 開発環境でbuildした時もCSSを削除
        tailwind: true, // TailwindCSS使用時はTrue default: false
        whitelist: ['selector'], // 削除しないCSSを指定 default: []
        ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // 削除しないファイルを指定 default: []
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // 指定したファイルのCSSのみを削除 default: []
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: title,
        short_name: 'Portfolio',
        start_url: '/',
        background_color: '#6b37bf',
        theme_color: '#6b37bf',
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: 'standalone',
        icon: 'src/images/favicon.svg', // This path is relative to the root of the site.
      },
    },
  ],
};

export default config;
