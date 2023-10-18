import React from 'react'
import {
  Container,
  Description,
  Label,
  PokemonSelectContainer,
  LabelSelect,
} from './style'
import SelectInput from '../../../selectInput/selectInput'

const RegisterTeam = () => {
  return (
    <Container>
      <Label>Cadastre seu time</Label>
      <Description>Atendemos até 06 pokémons por vez</Description>
      <PokemonSelectContainer>
        <LabelSelect>Pokémon 01</LabelSelect>
        <SelectInput />
      </PokemonSelectContainer>
    </Container>
  )
}

export default RegisterTeam
