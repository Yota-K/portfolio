// This sample config can be found at our opensource repository located at:
// https://github.com/delasign/gatsbyjs-typescript-starter
import { GatsbyNode } from 'gatsby';
import path from 'path';

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '~': path.resolve(__dirname, 'src'),
      },
    },
  });
};
