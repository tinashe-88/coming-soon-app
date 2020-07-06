import React from "react"
import { StaticQuery, graphql } from 'gatsby'

import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon
} from "../Icon/icon"

import {
  SocialIconsWrapper,
  IconWrapper,
  GithubContainer,
  InstagramContainer,
  LinkedinContainer,
  TwitterContainer
} from './social-icon.styles'

const SocialIcons = () => {
  return (
    <StaticQuery
      query={graphql`
        query SocialIconsQuery {
          site {
            siteMetadata {
              social {
                github
                instagram
                linkedIn
                twitter
              }
            }
          }
        }
      `}
      render={data => {
        const social = data.site.siteMetadata.social
        
        return (
          <SocialIconsWrapper>
            <IconWrapper>
              <GithubContainer
                href={`https://github.com/${social.github}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon/>
              </GithubContainer>
            </IconWrapper>
            <IconWrapper>
              <InstagramContainer 
                href={`https://www.instagram.com/${social.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </InstagramContainer>
            </IconWrapper>
            <IconWrapper>
              <LinkedinContainer 
                href={`https://www.linkedin.com/in/${social.linkedIn}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
              </LinkedinContainer>
            </IconWrapper>
            <IconWrapper>
              <TwitterContainer 
                href={`https://www.twitter.com/${social.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon />
              </TwitterContainer>
            </IconWrapper>
          </SocialIconsWrapper>
        )
      }}
    />
  )
}

export default SocialIcons