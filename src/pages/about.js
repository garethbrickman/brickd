import React from "react"
import { graphql } from 'gatsby';

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from 'gatsby-image';

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About" />
    <p>I’m Brick, a computer figure outerer.</p>
    <br/>
    <p>The construction of this site would not have been possible without the public works of:</p>
    <p><a href="https://jenniferwadella.com/blog/all-the-dumb-mistakes-i-made-building-my-first-gatsby-site"
    target="_blank" rel="noopener noreferrer">Jennifer Wadella</a>, <a href="https://chenhuijing.com/blog/flexbox-and-absolute-positioning/#%F0%9F%91%9F"
    target="_blank" rel="noopener noreferrer">Chen Hui Jing</a>, <a href="https://github.com/gaearon/overreacted.io"
    target="_blank" rel="noopener noreferrer">Dan Abramov</a>, <a href="https://medium.com/@kyle.robert.gill/ridiculously-easy-image-optimization-with-gatsby-js-59d48e15db6e"
    target="_blank" rel="noopener noreferrer">Kyle Gill</a>, <a href="https://www.orangejellyfish.com/blog/a-comprehensive-guide-to-images-in-gatsby/"
    target="_blank" rel="noopener noreferrer">James Allardice</a>. And most of all: <a href="https://dennytek.com/" target="_blank" rel="noopener noreferrer">Denny Tek</a>.</p>
    <p>Thank you all.</p>
    <div class="about-img" style={{  maxWidth: `400px`, marginBottom: `1.45rem` }}>
    <Img fluid={data.file.childImageSharp.fluid} alt="brick again" title="brick again" />
    </div>
  </Layout>
)

export default AboutPage

export const query = graphql`
  query {
    file(relativePath: { eq: "gar.jpg" }) {
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