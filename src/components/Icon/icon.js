import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faInstagramSquare,
  faGithubSquare,
  faLinkedinIn,
  faTwitterSquare
} from '@fortawesome/free-brands-svg-icons'

export const GitHubIcon = () => (
  <FontAwesomeIcon 
    icon={faGithubSquare}
    size='2x'
  />
)

export const InstagramIcon = () => (
  <FontAwesomeIcon 
    icon={faInstagramSquare}
    size='2x'
  />
)

export const LinkedInIcon = () => (
  <FontAwesomeIcon 
    icon={faLinkedinIn}
    size='2x'
  />
)

export const TwitterIcon = () => (
  <FontAwesomeIcon 
    icon={faTwitterSquare}
    size='2x'
  />
)
