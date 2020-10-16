import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const Error = () => {
  return (
    <Layout>
      <main className="error-page">
        <div className="error-container">
          <h1>Ops..nu hamnade du på fel ställe</h1>
          <Link to='/' className="btn">
            Hem
          </Link>
        </div>
      </main>
    </Layout>
  )
}

export default Error
