import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"

export default ({data}) => {
  const{
    allStrapiProjects:{nodes:projects},
    allStrapiBlogs:{nodes:blogs},
} = data

  return (
  <Layout>
    <SEO title="Hem" description="startsida"/>
    <Hero/>
    <Services />
    <Jobs />
    <Projects projects={projects} title="Utvalda projekt" showLink/>
    <Blogs blogs={blogs} title="Senaste bloginläggen" showLink />
  </Layout>
  )
}

//Get all data for projects and blogs which will be shown on index page, only featured projects will be shown and only last 3 blogs will be shown
export const query = graphql`
  {
    allStrapiProjects(filter: {featured: {eq: true}}) {
      nodes {
        github
        id
        description
        title
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
    allStrapiBlogs(sort: {fields: date, order: DESC}, limit: 3) {
      nodes {
        slug
        content
        desc
        date(formatString: "MMM Do, YYYY")
        id
        title
        category
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
  `
