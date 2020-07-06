import React, { useState, useRef, useEffect } from "react"

import {
  CardContainer,
  CountdownContainer,
  DaysContainer,
  HoursContainer,
  MinutesContainer,
  SecondsContainer,
  SeperatorContainer,
  TextContainer,
  NumberContainer
} from './countdown.styles'

const Countdown = () => {
  const [day, setDay] = useState(0)
  const [hour, setHours] = useState(0)
  const [minute, setMinutes] = useState(0)
  const [second, setSeconds] = useState(0)

  let interval = useRef()

  const startTimer = () => {
    const countdownDate = new Date('August 01 2020 00:00:00').getTime()

    interval = setInterval(() => {
      const todaysDate = new Date().getTime()
      const countdownTiming = countdownDate - todaysDate

      const days = Math.floor(countdownTiming / (1000 * 60 * 60 * 24))
      const hours = Math.floor((countdownTiming % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
      const minutes = Math.floor((countdownTiming % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((countdownTiming % (1000 * 60)) / 1000)

      if(countdownTiming < 0){
        clearInterval(interval.current)
      } else {
        setDay(days)
        setHours(hours)
        setMinutes(minutes)
        setSeconds(seconds)
      }

    }, 1000)
  }

  useEffect(() => {
    startTimer()

    return () => {
      clearInterval(interval.current)
    }
  })

  return (
    <CardContainer>
      <CountdownContainer>
        <DaysContainer>
          <NumberContainer>{("0" + day).slice(-2)}</NumberContainer>
          <TextContainer>Days</TextContainer>
        </DaysContainer>
        <SeperatorContainer/>
        <HoursContainer>
          <NumberContainer>{("0" + hour).slice(-2)}</NumberContainer>
          <TextContainer>Hours</TextContainer>
        </HoursContainer>
        <SeperatorContainer/>
        <MinutesContainer>
          <NumberContainer>{("0" + minute).slice(-2)}</NumberContainer>
          <TextContainer>Minutes</TextContainer>
        </MinutesContainer>
        <SeperatorContainer/>
        <SecondsContainer>
          <NumberContainer>{("0" + second).slice(-2)}</NumberContainer>
          <TextContainer>Seconds</TextContainer>
        </SecondsContainer>
      </CountdownContainer>
    </CardContainer>
  )
}

export default Countdown