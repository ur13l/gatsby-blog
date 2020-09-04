/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
const slash = require(`slash`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allWpPost {
        edges {
          node {
            id
            slug
            title
            content
          }
        }
      }
    }
  `)

  const template = path.resolve(`./src/templates/post.js`)
  const {data: { allWpPost: {edges: posts}}} = result

  posts.forEach(({ node: post }) => {
    createPage({
      path: `/${post.slug}`,
      component: slash(template),
      context: {
        id: post.id,
      },
    })
  })
}


