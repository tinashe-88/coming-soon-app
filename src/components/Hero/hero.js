import React from "react"
import PropTypes from "prop-types"

import Countdown from "../Countdown/countdown"
import SiteLogo from "../site-logo"

import {
  HeaderContainer,
  CountdownContainer,
  ParagraphContainer,
  ImageContainer,
} from './hero.styles'


const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <ImageContainer />
    <SiteLogo/>
    <h1 style={{ textAlign: "center" }}>tinashe88.com</h1>
    <blockquote>
      <i>
        "It is not wise to judge others based on your own preconceptions and 
        by their appearances."
      </i>
    </blockquote>
    <ParagraphContainer>
      - Uchiha Itachi
    </ParagraphContainer>
    <CountdownContainer>
      <Countdown/>
    </CountdownContainer>
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
