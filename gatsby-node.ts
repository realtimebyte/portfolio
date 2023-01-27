import { Actions, GatsbyNode, Reporter } from 'gatsby';
import { node } from 'prop-types';
import { Configuration as WebpackConfig } from 'webpack';
const path = require('path');
const _ = require('lodash');


export const createPages: GatsbyNode['createPages'] = async ({
  actions,
  graphql,
  reporter
}) => {
  const { createPage } = actions;
  const postTemplate = path.resolve(`src/templates/posts.js`);
  const tagTemplate = path.resolve(`src/templates/tag.js`);

  const result = await graphql(`
    {
      postsRemark: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/posts/"}}
        sort: { order: DESC, fields: [frontendmatter___date]}
        limit: 1000
      ) {
        edges {
          node {
            frontmatter{
              slug
            }
          }
        }
      }

      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags){
          fieldValue
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
  }

  const posts = result.data?.postsRemark.edges;

  posts.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: postTemplate,
      context: {},
    });
  });

  // Extract tag data from query
  const tags = result.data?.tagsGroup.group;
  // Make tag pages
  tags.forEach(tag => {
    createPage({
      path: `/pensieve/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    });
  });

  // if(result.errors) {
  //   reporter.panicOnBuild(`Error while running GraphQL Query`);
  //   return;
  // }

  // const posts = result.data.postsMark.edges;

  // posts.forEach(({data}) => {
  //   createPage({
  //     path: node.frontmatter.slug,
  //   });
  // })
}


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
        '@utils': path.resolve(__dirname, 'src/utils'),
        '@config': path.resolve(__dirname, 'src/config'),
      }
    }
  })
}
