import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Mi Blog"/>
    <h1>Blog de Uriel</h1>
    <p>Bienvenidos al blog de Uriel, aquí podrán aprender cosas sobre tecnología.</p>
    <ul>
      {
        data.allWpPost.edges.map((post, index) =>
          (
            <li key={index}>
              <Link to={post.node.slug}>
                {post.node.title}
              </Link>
            </li>
          )
        )
      }
    </ul>

  </Layout>
)

export const query = graphql`
    query {
        allWpPost {
            edges {
                node {
                    id
                    title
                    slug
                    content
                }
            }
        }
    }

`

export default IndexPage
