import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import {
  LayoutContainer,
  MainContainer
} from './layout.styles'

import Footer from "../Footer/footer"
import "../../styles/default.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <LayoutContainer>
          <MainContainer>{children}</MainContainer>
        </LayoutContainer>
        <Footer siteTitle={data.site.siteMetadata.title} />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
