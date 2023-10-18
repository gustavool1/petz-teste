import React from 'react'
import {
  Container,
  SurnameContainer,
  UserInfoContainer,
  NameContainer,
} from './style'
import { Input } from '../../../components'

const UserInfo = () => {
  return (
    <Container>
      <UserInfoContainer>
        <NameContainer>
          <Input label="Nome" placeholder="Digite seu nome" />
        </NameContainer>
        <SurnameContainer>
          <Input label="Sobrenome" placeholder="Digite seu sobrenome" />
        </SurnameContainer>
      </UserInfoContainer>
    </Container>
  )
}

export default UserInfo
