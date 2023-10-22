import React from 'react'
import { Container, Message, ModalTitle, Overlay, SubLink } from './style'
import Image from 'next/image'
import { ButtonPrimary } from '../components'

export enum ModalType {
  success,
  error,
}

interface ModalProps {
  type: ModalType
  day?: string
  time?: string
  pokemonQuantity?: string
  setIsShowingModal: () => void
}

const Modal = ({
  type,
  day,
  time,
  pokemonQuantity,
  setIsShowingModal,
}: ModalProps) => {
  const handleButtonClicked = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    setIsShowingModal()
  }

  const isSuccessModal = type == ModalType.success
  return (
    <Overlay onClick={setIsShowingModal}>
      <Container onClick={(e) => e.stopPropagation()}>
        <ModalTitle>
          {isSuccessModal
            ? 'Consulta Agendada'
            : 'Houve um problema no agendamento'}
        </ModalTitle>
        <Image
          alt="Success Schedule"
          src={
            isSuccessModal
              ? '/images/success-schedule.svg'
              : '/images/failed-schedule.svg'
          }
          width={42}
          height={42}
          style={{ marginTop: 20 }}
        />
        {isSuccessModal ? (
          <Message className="success-modal-message">
            Seu agendamento para dia {day ?? ''}, às {time ?? ''}, para{' '}
            {pokemonQuantity} pokémons foi realizado com sucesso!{' '}
            <SubLink href="/getSchedules">Conferir Agendamentos</SubLink>
          </Message>
        ) : (
          <Message className="error-modal-message">Ocoreu um erro</Message>
        )}

        <ButtonPrimary
          onClick={handleButtonClicked}
          label="Fazer Novo Agendamento"
          fontSize={14}
          fontWeight={700}
        ></ButtonPrimary>
      </Container>
    </Overlay>
  )
}

export default Modal
