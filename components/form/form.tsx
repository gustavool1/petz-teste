import React from 'react'
import UserInfo from './components/userInfo/userInfo'
import { Container, Title } from './style'
import RegionInfo from './components/location/location'
import RegisterTeam from './components/registerTeam/registerTeam'

const Form = () => {
  return (
    <Container>
      <Title>Preencha o formulário abaixo para agendar sua consulta</Title>
      <UserInfo />
      <RegionInfo />
      <RegisterTeam />
    </Container>
  )
}

export default Form
