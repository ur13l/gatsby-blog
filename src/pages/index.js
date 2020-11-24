import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PostItem } from "../components/post-item"

const IndexPage = ({ data: {allWpPost: {edges : posts}} }) => (
  <Layout>
    <SEO title="Mi Blog"/>
    <h1>Blog de Uriel</h1>
    <p>Bienvenidos a mi blog personal, aquí podrán aprender cosas sobre tecnología y desarrollo.</p>
    <ul>
      {
        posts.map((post, index) =>
          (
            <PostItem
              key={index}
              image={post.node.featuredImage.node.localFile.childImageSharp.fluid}
              link={post.node.slug}
              title={post.node.title}
            />
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
                    featuredImage {
                        node {
                            localFile {
                                childImageSharp {
                                    fluid {
                                        ...GatsbyImageSharpFluid_tracedSVG
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

`

export default IndexPage
