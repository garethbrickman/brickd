import React from "react"
// import { Link } from "gatsby"
import { graphql } from 'gatsby';

import Layout from "../components/layout"
import Img from 'gatsby-image';
import SEO from "../components/seo"
// import Button from '../components/button'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    {/* <h1>Hi people</h1>
    <Button buttonText="Click me" /> */}
    {/* <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p> */}
    {/* <p><Link to="/projects">Check out my projects page</Link></p> */}
    <div class="gar-img" style={{  maxWidth: `400px`, marginBottom: `1.45rem` }}>
    <Img fluid={data.file.childImageSharp.fluid} alt="brick" title="brick" />
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    file(relativePath: { eq: "gar2.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxHeight: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`