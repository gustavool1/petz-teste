import React, { useState } from 'react'
import UserInfo from './components/userInfo/userInfo'
import { Container, FormSchedule, Title } from './style'
import LocationInfo from './components/location/location'
import RegisterTeam from './components/registerTeam/registerTeam'
import ButtonSecondary from '../buttonSecondary/buttonSecondary'
import Date from './components/date/date'
import FinancialResume from './components/financialResume/financialResume'
import { useSchedule } from '../../hooks/schedule'
import { Modal } from '../components'
import { ModalType } from '../modal/modal'

export interface ModalInfos {
  isShowing: boolean
  type: ModalType
  pokemonQuantity?: string
  day?: string
  time?: string
}

const Form = () => {
  const [modalInfos, setModalInfos] = useState<ModalInfos>({
    isShowing: false,
    type: ModalType.success,
  })
  const {
    handleSubmit,
    onSubmit,
    register,
    errors,
    pokemonTeam,
    setPokemonTeam,
  } = useSchedule()

  return (
    <Container>
      <Title>Preencha o formulário abaixo para agendar sua consulta</Title>
      <FormSchedule onSubmit={handleSubmit(onSubmit(setModalInfos))}>
        <UserInfo register={register} errors={errors} />
        <LocationInfo register={register} errors={errors} />
        <RegisterTeam
          teamQuantity={pokemonTeam}
          register={register}
          errors={errors}
          setPokemonTeam={setPokemonTeam}
        />

        <Date register={register} errors={errors} />
        <FinancialResume pokemonTeam={pokemonTeam} />
        {modalInfos.isShowing && (
          <Modal
            setIsShowingModal={() => {
              setModalInfos({ ...modalInfos, isShowing: false })
            }}
            type={modalInfos.type}
            day={modalInfos.day}
            pokemonQuantity={modalInfos.pokemonQuantity}
            time={modalInfos.time}
          />
        )}
      </FormSchedule>
    </Container>
  )
}

export default Form
