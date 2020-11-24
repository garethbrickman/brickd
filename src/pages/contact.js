import React from "react"
import { SiGithub, SiLinkedin, SiTwitter, SiMailDotRu } from 'react-icons/si';

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = ({ data }) => (
  <Layout>
    <SEO title="Resume" />
    <h1><a href="https://github.com/garethbrickman/" target="_blank" rel="noopener noreferrer"><SiGithub /></a></h1>
    <h1><a href="https://www.linkedin.com/in/br1ck/" target="_blank" rel="noopener noreferrer"><SiLinkedin /></a></h1>
    <h1><a href="https://twitter.com/GarethBrickman" target="_blank" rel="noopener noreferrer"><SiTwitter /></a></h1>
    <h1><a href="mailto:gbrickman@pm.me"><SiMailDotRu /></a></h1>

  </Layout>
)

export default ContactPage;