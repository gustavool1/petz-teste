import React from 'react'
import { Schedule } from '../../helpers/scheduling'
import { Container, Label } from './style'

const ScheduleCard = ({ schedule }: { schedule: Schedule }) => {
  return (
    <Container>
      <Label>Nome: {schedule.userFullName}</Label>
      <Label>Pokemons: {schedule.pokemonsNames.join(', ')}</Label>
      <Label>Preço: {schedule.value}</Label>
      <Label>
        Data do agendamento: {schedule.date} as {schedule.time}
      </Label>
    </Container>
  )
}

export default ScheduleCard
