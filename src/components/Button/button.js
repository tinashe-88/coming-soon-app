import React from "react"

import {
  ButtonStyles
} from './button.styles'
import "../../styles/button.css"

const Button = ({ children }) => (
  <ButtonStyles>
    {children}
  </ButtonStyles>
)

export default Button
