import React from "react"
import { graphql } from 'gatsby';

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from 'gatsby-image';

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About" />
    <p>I’m Brick, a computer figure outerer and founder of <em>Suave Na Nave LLC</em>. That's a Brazilian Portuguese saying that means "supercool", which I aspire to always be.</p>
    <p>I’ve been tinkering with computers since Netscape, 56k modems and IRC were bleeding edge.</p>
    <p>I have now taken my decades of tinkering pro and graduated from an intensive 18-month higher education program that trained me in software engineering and full stack web development.</p>
    <p>I believe software development is a craft to be honed and requires mastering arts and sciences alike. My two prime motivators are deep desires to learn and rapidly figure new and old tech out and to be practically and meaningfully helpful with these skills.</p>
    <p>My software tech experience:</p>
    <ul>
    <li><b>Frontend:</b> HTML, CSS, Javascript (ES6 and a little Typescript), ReactJS, GatsbyJS, Sass, Bootstrap, TailwindCSS.</li>
    <p></p>
    <li><b>Backend:</b> C (comp sci fundamentals, data structures & algorithms), RestAPIs (Python with Flask and Javascript with ExpressJS), Databases (MySQL predominantly, a little Redis, a little GraphQL and a little MongoDB for NoSQL).</li>
    <p></p>
    <li><b>Sysadmin:</b> Git (all our projects were built, uploaded and reviewed on Github), Unix shell scripts (Bash, zsh), remote server management (Ubuntu Server/Debian, a little bit of Docker), VM management (VirtualBox, vagrant), in-house web server management (Nginx and Apache), cloud services and deployments (AWS S3, AWS Amplify, a little AWS EC2, Digital Ocean droplets). I have also done a little DNS configuration with Google Domains and AWS Route 53.</li>
    <p></p>
    <li><b>Other Skills:</b> Project-based problem solving, whiteboarding ideas and solutions, collaboration and teamwork with multiple onsite projects in pairs and larger teams, remote collaboration with asynchronous communication, project management using Kanban boards and Agile-ish methodology, public speaking and presentations.</li>
    </ul>
    <br/>
    <hr/>
    <p>The construction of this site would not have been possible without troubleshooting the public work of:</p>
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