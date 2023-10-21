import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Modal, { ModalType } from '../../../components/modal/modal'

describe('Modal', () => {
  it('Renderiza um modal de erro corretamente', () => {
    render(<Modal type={ModalType.error} setIsShowingModal={() => {}} />)

    const errorModalHeader = screen.getByText(
      'Houve um problema no agendamento'
    )
    const errorModalMessage = document.querySelector('.error-modal-message')

    expect(errorModalHeader).toBeInTheDocument()
    expect(errorModalMessage).toHaveTextContent('Ocoreu um erro')

    const button = screen.getByText('Fazer Novo Agendamento')
    expect(button).toBeInTheDocument()
  })

  it('Renderiza um modal de sucesso corretamente', () => {
    render(
      <Modal
        type={ModalType.success}
        day="Monday"
        time="10:00 AM"
        pokemonQuantity="2"
        setIsShowingModal={() => {}}
      />
    )

    const successMessage = document.querySelector('.success-modal-message')
    const successModalHeader = screen.getByText('Consulta Agendada')

    expect(successModalHeader).toBeInTheDocument()

    expect(successMessage).toHaveTextContent(
      'para dia Monday, às 10:00 AM, para 2 pokémons foi realizado com sucesso!'
    )

    const button = screen.getByText('Fazer Novo Agendamento')
    expect(button).toBeInTheDocument()
  })
})
