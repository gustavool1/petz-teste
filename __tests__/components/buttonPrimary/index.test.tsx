import React from 'react'
import { render, fireEvent, act } from '@testing-library/react'
import ButtonPrimary from '../../../components/buttonPrimary/buttonPrimary'
import '@testing-library/jest-dom'

beforeAll(() => {
  jest.useFakeTimers()
})

afterAll(() => {
  jest.useRealTimers()
})

describe('ButtonPrimary', () => {
  it('Renderiza com o texto e sem o icone', () => {
    const { getByText } = render(<ButtonPrimary>Click Me</ButtonPrimary>)
    const button = getByText('Click Me')
    expect(button).toBeInTheDocument()
  })
  it('Renderiza com um icone', () => {
    const { getByAltText } = render(
      <ButtonPrimary hasIcon>Label</ButtonPrimary>
    )
    const icon = getByAltText('White pokeball')
    expect(icon).toBeInTheDocument()
  })
  it('Mostra o texto depois do delay quando hasIcon é verdadeiro', () => {
    const { getByText } = render(
      <ButtonPrimary hasIcon>Click Me</ButtonPrimary>
    )

    act(() => {
      jest.advanceTimersByTime(3001)
    })

    const button = getByText('Click Me')
    expect(button).toBeInTheDocument()
  })

  it('Chama uma função quando for clicado', () => {
    const handleClick = jest.fn()
    const { getByText } = render(
      <ButtonPrimary onClick={handleClick}>Click Me</ButtonPrimary>
    )

    const button = getByText('Click Me')
    fireEvent.click(button)

    expect(handleClick).toHaveBeenCalled()
  })
})
