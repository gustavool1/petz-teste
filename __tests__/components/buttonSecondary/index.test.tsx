import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import ButtonSecondary from '../../../components/buttonSecondary/buttonSecondary'

describe('ButtonSecondary', () => {
  it('Renderiza um botão com texto', () => {
    const { getByText } = render(<ButtonSecondary>Click Me</ButtonSecondary>)
    const button = getByText('Click Me')
    expect(button).toBeInTheDocument()
  })

  it('Renderiza um botão com texto e icone', () => {
    const { getByText, getByAltText } = render(
      <ButtonSecondary hasIcon>Click Me</ButtonSecondary>
    )
    const button = getByText('Click Me')
    const icon = getByAltText('Background Image')
    expect(button).toBeInTheDocument()
    expect(icon).toBeInTheDocument()
  })

  it('Verifica o onClick', () => {
    const onClick = jest.fn()
    const { getByText } = render(
      <ButtonSecondary onClick={onClick}>Click Me</ButtonSecondary>
    )
    const button = getByText('Click Me')
    fireEvent.click(button)
    expect(onClick).toHaveBeenCalled()
  })

  it('Desabilita o botão quando passado a prop disabled', () => {
    const { getByText } = render(
      <ButtonSecondary disabled>Click Me</ButtonSecondary>
    )
    const buttonSpan = getByText('Click Me')
    const button = buttonSpan.parentElement
    expect(button).toBeDisabled()
  })
})
