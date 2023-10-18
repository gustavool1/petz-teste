import React from 'react'
import UserInfo from './components/userInfo/userInfo'
import { Container, Title } from './style'
import LocationInfo from './components/location/location'
import RegisterTeam from './components/registerTeam/registerTeam'
import ButtonSecondary from '../buttonSecondary/buttonPrimary'

const Form = () => {
  return (
    <Container>
      <Title>Preencha o formulário abaixo para agendar sua consulta</Title>
      <UserInfo />
      <LocationInfo />
      <RegisterTeam />
    </Container>
  )
}

export default Form
