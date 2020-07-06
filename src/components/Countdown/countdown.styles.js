import styled from 'styled-components'

export const CardContainer = styled.div`
  padding: 0.2rem;
`

export const CountdownContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 500px){
    flex-direction: column;
  }
`

const TimerContainer = styled.div`
  text-align: center;
`

export const DaysContainer = styled(TimerContainer)`

`

export const HoursContainer = styled(TimerContainer)`

`

export const MinutesContainer = styled(TimerContainer)`

`

export const SecondsContainer = styled(TimerContainer)`

`

export const SeperatorContainer = styled.span`
  border-left: 2px solid #000;
  height: 80px;
  
  @media screen and (max-width: 500px){
    border-left: none;
    height: 20px;
  }
`

export const NumberContainer = styled.p`
  font-size: 35pt;
  font-weight: 600;

  @media screen and (max-width: 500px){
    font-size: 25pt;
  }
`

export const TextContainer = styled.p`
  font-size: 20pt;

  @media screen and (max-width: 500px){
    font-size: 15pt;
  }
`