import React from "react"
import PropTypes from "prop-types"

import {
  FooterContainer,
  ContentContainer,
  LeftContainer,
  RightContainer
} from './footer.styles'

const Footer = ({ siteTitle }) => (
  <FooterContainer>
    <ContentContainer>
      <LeftContainer>
        <span
          role="img"
          aria-label="smile-emoji"
          style={{fontSize:'30px'}}
        >
          😄
        </span>
      </LeftContainer>
      <RightContainer>
        © {new Date().getFullYear()}
        {` `}
        <a 
          href="https://tinashe88.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {siteTitle}
        </a>
      </RightContainer>
    </ContentContainer>
  </FooterContainer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
