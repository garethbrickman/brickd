import React from "react"
import { SiGithub, SiLinkedin, SiTwitter, SiMailDotRu } from 'react-icons/si';

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = ({ data }) => (
  <Layout>
    <SEO title="Contact" />
    <h1><a href="https://github.com/garethbrickman/" target="_blank" rel="noopener noreferrer"><SiGithub aria-label="Github link"/></a></h1>
    <h1><a href="https://www.linkedin.com/in/br1ck/" target="_blank" rel="noopener noreferrer"><SiLinkedin aria-label="LinkedIn link"/></a></h1>
    <h1><a href="https://twitter.com/GarethBrickman" target="_blank" rel="noopener noreferrer"><SiTwitter aria-label="Twitter link"/></a></h1>
    {/* <h1><a href="mailto:gbrickman@pm.me"><SiMailDotRu aria-label="Email address"/></a></h1> */}

  </Layout>
)

export default ContactPage;