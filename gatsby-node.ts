import { Actions } from 'gatsby';
import { Configuration as WebpackConfig } from 'webpack';
const path = require('path');
const _ = require('lodash');

interface NodeAPI {
  actions: Actions;
}

interface OnCreateWebpackConfig extends NodeAPI {
  stage: 'develop' | 'develop-html' | 'build-html' | 'build-javascript';
  rules: {
    [name: string]: Function
  };
  loaders: {
    [name: string]: Function
  };
  plugins: {
    [name: string]: Function
  };
  getConfig(): WebpackConfig;
}

type onCreateWebpackConfigType = (
  parameters: OnCreateWebpackConfig
) => Promise<void>;

export const onCreateWebpackConfig: onCreateWebpackConfigType = async ({ stage, loaders, actions, }): Promise<void> => {
  if(stage === 'build-html' || stage === 'develop-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: '/scrollreveal/',
            use: loaders.null()
          },
          {
            test: '/animejs/',
            use: loaders.null(),
          },
          {
            test: '/miniraf/',
            use: loaders.null()
          }
        ]
      }
    });
  }

  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@styles': path.resolve(__dirname, 'src/styles'),
        '@fonts': path.resolve(__dirname, 'src/fonts'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
      }
    }
  })
}
