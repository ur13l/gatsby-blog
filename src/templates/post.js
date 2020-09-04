import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const PostPage = ({ data }) => {
  const { post } = data

  return (
    <Layout>
      <SEO title={post.title}/>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }}/>

    </Layout>
  )
}

export const query = graphql`
    query ($id: String!) {
        post: wpPost(id: {eq: $id}) {
            id
            title
            slug
            content
        }
    }
`

export default PostPage
