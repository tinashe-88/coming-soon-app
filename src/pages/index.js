import React from "react"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero/hero"
import SocialIcons from "../components/SocialIcons/social-icon";

const IndexPage = () => (
  <Layout>
    <SEO />
    <Hero />
    <SocialIcons/>
  </Layout>
)

export default IndexPage
