import React from 'react'
import {
  Container,
  SurnameContainer,
  UserInfoContainer,
  NameContainer,
} from './style'
import { Input } from '../../../components'
import { useSchedule } from '../../../../hooks/schedule'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'
interface UserInfoProps {
  register: UseFormRegister<any>
  errors: FieldErrors
}

const UserInfo = ({ register, errors }: UserInfoProps) => {
  return (
    <Container>
      <UserInfoContainer>
        <NameContainer>
          <Input
            label="Nome"
            placeholder="Digite seu nome"
            {...register('name')}
            error={errors.name?.message as string}
          />
        </NameContainer>
        <SurnameContainer>
          <Input
            label="Sobrenome"
            placeholder="Digite seu sobrenome"
            error={errors.surname?.message as string}
            {...register('surname')}
          />
        </SurnameContainer>
      </UserInfoContainer>
    </Container>
  )
}

export default UserInfo
