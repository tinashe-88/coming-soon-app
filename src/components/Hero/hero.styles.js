import styled from 'styled-components'

import headerImage from "../../images/header.png"

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 1rem;
`

export const CountdownContainer = styled.div`
  margin-top: 60px;
  width: 90%;
  position: relative;
  border: 2px solid rgba(0,0,0,0.35);
  padding: 2rem 1rem;

  @media screen and (max-width: 800px){
    padding: 2rem;
    margin: 0;
  }

  @media screen and (max-width: 500px){
    padding: 20px;
    margin-top: 20px;
  }
`

export const ParagraphContainer = styled.p`
  text-align: center; 
  max-width: 440;
  @media screen and (max-width: 500px){
    margin: 0;
  }
`

export const ImageContainer = styled.div`
  background-image: url(${headerImage});
  position: absolute;
  top: 0;
  z-index: -5;
  height: 101vh;
  width: 100vw;
  opacity: 0.5;

  @media screen and (max-width: 500px){
    height: 900px;
  }
`
