import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"
import SEO from "../components/SEO"

const ComponentName = ({ data }) => {
  const { content } = data.blog

  return (
    <Layout>
      <SEO title="blog" description="blog" />
      <section className="blog-template">
        <div className="section-center">
          <article className="blog-content">
            <ReactMarkdown source={content} />
          </article>
          <Link to="/blog" className="btn center-btn">Blog</Link>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      content
    }
  }
`

export default ComponentName
