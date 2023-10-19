import React, { useState } from 'react'
import UserInfo from './components/userInfo/userInfo'
import { AddPokemon, Container, FormSchedule, Title } from './style'
import LocationInfo from './components/location/location'
import RegisterTeam from './components/registerTeam/registerTeam'
import ButtonSecondary from '../buttonSecondary/buttonSecondary'
import Date from './components/date/date'
import FinancialResume from './components/financialResume/financialResume'
import { useSchedule } from '../../hooks/schedule'

const Form = () => {
  const [pokemonTeam, setPokemonTeam] = useState(1)
  const { handleSubmit, onSubmit, register, errors } = useSchedule()
  return (
    <Container>
      <Title>Preencha o formulário abaixo para agendar sua consulta</Title>
      <FormSchedule onSubmit={handleSubmit(onSubmit)}>
        <UserInfo register={register} errors={errors} />
        <LocationInfo register={register} errors={errors} />
        <RegisterTeam
          teamQuantity={pokemonTeam}
          register={register}
          errors={errors}
        />
        <ButtonSecondary
          onClick={() => setPokemonTeam(pokemonTeam + 1)}
          hasIcon
        >
          <AddPokemon>Adicionar novo pokémon ao time...</AddPokemon>
        </ButtonSecondary>
        <Date register={register} errors={errors} />
        <FinancialResume />
      </FormSchedule>
    </Container>
  )
}

export default Form
