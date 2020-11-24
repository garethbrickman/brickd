import React from "react"
import { graphql } from 'gatsby';

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from 'gatsby-image';

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About" />
    <p>I’m Brick, a full stack software developer and founder of <a href="https://hinative.com/en-US/questions/4746009#answer-12677944"
    target="_blank" rel="noopener noreferrer">Suave Na Nave LLC</a>.</p>
    <p>My two prime motivators are deep desires to learn and rapidly figure unfamiliar tech out and to be practically and meaningfully helpful.</p>
    <p>In my tech experience doing web deployments and backend ops work I have found I most enjoyed playing the tech detective. I love sleuthing out complex problems on-the-fly; from obscure compiler error messages to reconciling tech stack integration quirks to pinpointing that fat finger human error within the codebase.</p>
    <p><a href="https://www.holbertonschool.com"
    target="_blank" rel="noopener noreferrer">Holberton School’s</a> expansive full stack curriculum exposed us to multiple tech stacks where learning fast and pinpointing issues are key skills to have. </p>
    <br/>
    <hr/>
    <p>The construction of this site would not have been possible without troubleshooting from:</p>
    <p><a href="https://jenniferwadella.com/blog/all-the-dumb-mistakes-i-made-building-my-first-gatsby-site"
    target="_blank" rel="noopener noreferrer">Jennifer Wadella</a></p>
    <p><a href="https://chenhuijing.com/blog/flexbox-and-absolute-positioning/#%F0%9F%91%9F"
    target="_blank" rel="noopener noreferrer">Chen Hui Jing</a></p>
    <p><a href="https://github.com/gaearon/overreacted.io"
    target="_blank" rel="noopener noreferrer">Dan Abramov</a></p>
        <p><a href="https://medium.com/@kyle.robert.gill/ridiculously-easy-image-optimization-with-gatsby-js-59d48e15db6e"
    target="_blank" rel="noopener noreferrer">Kyle Gill</a></p>
    <p><a href="https://www.orangejellyfish.com/blog/a-comprehensive-guide-to-images-in-gatsby/"
    target="_blank" rel="noopener noreferrer">James Allardice</a></p>
    <p>And most of all</p>
    <p><a href="https://dennytek.com/"
    target="_blank" rel="noopener noreferrer">Denny Tek</a></p>
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