import styled from "styled-components"

export const SocialIconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 40px;
`

export const IconWrapper = styled.div`
  padding: 10px;
`

const LinkContainer = styled.a`
  opacity: 1;
  transition: opacity .25s ease-in-out;
  &:hover {
    opacity: .5;
  }
`

export const GithubContainer = styled(LinkContainer)`
  color: var(--githubButton);
`

export const InstagramContainer = styled(LinkContainer)`
  color: var(--instagramButton);
`

export const LinkedinContainer = styled(LinkContainer)`
  color: var(--linkedinButton);
`

export const TwitterContainer = styled(LinkContainer)`
  color: var(--twitterButton);
`