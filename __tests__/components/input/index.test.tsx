import React from 'react'
import { render, screen } from '@testing-library/react'
import Input from '../../../components/input/input'
import userEvent from '@testing-library/user-event'

describe('Input', () => {
  it('Renderiza o componente Input corretamente', () => {
    render(<Input label="Nome" placeholder="Insira seu nome" />)

    expect(screen.getByText('Nome')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Insira seu nome')).toBeInTheDocument()
  })

  it('Renderiza uma mensagem de erro corretamente', () => {
    render(<Input label="Email" error="Campo obrigatório" />)

    expect(screen.getByText('Campo obrigatório')).toBeInTheDocument()
  })

  it('Permite a digitação no input', async () => {
    render(<Input label="Senha" placeholder="Insira sua senha" />)

    const inputElement = screen.getByPlaceholderText('Insira sua senha')
    await userEvent.type(inputElement, 'minhasenha')

    expect(inputElement).toHaveValue('minhasenha')
  })
})
