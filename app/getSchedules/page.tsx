'use client'

import React, { useEffect } from 'react'
import { NavBar, NavigationHeader } from '../../components/components'
import ScheduleCard from '../../components/scheduleCard/scheduleCard'
import { Schedule, getSchedules } from '../../helpers/scheduling'
import { useSchedule } from '../../hooks/schedule'
import { Container } from '../style'
import { CardsContainer } from './style'

const GetSchedules = () => {
  const { schedules, setSchedules } = useSchedule()

  useEffect(() => {
    const schedules = getSchedules()
    setSchedules(schedules)
  }, [])

  return (
    <Container>
      <NavBar />
      <NavigationHeader />
      <CardsContainer>
        {schedules &&
          schedules.map((schedule: Schedule, index) => (
            <ScheduleCard key={index} schedule={schedule} />
          ))}
      </CardsContainer>
    </Container>
  )
}

export default GetSchedules
