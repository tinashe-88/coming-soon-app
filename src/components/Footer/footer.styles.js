import styled from 'styled-components'

export const FooterContainer = styled.footer`
  padding: 2rem;
  background-color: #eee;
`

export const ContentContainer = styled.div`
  display: grid;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: repeat(auto-fit, minmax(200px, 240px));
  padding: 1rem 2rem;
  font-size: .85rem;

  @media screen and (max-width: 500px){
    text-align: center;
    justify-content: center;
  }
`

export const LeftContainer = styled.div`
  color: #000;
  font-weight: 700;
`

export const RightContainer = styled.div`
  color: gray;
  text-align: right;

  @media screen and (max-width: 500px){
    text-align: center;
  }
`