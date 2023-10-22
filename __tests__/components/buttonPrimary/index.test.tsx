import React from 'react'
import { render, fireEvent, act } from '@testing-library/react'
import ButtonPrimary from '../../../components/buttonPrimary/buttonPrimary'

describe('ButtonPrimary Component', () => {
  it('Renderizar um botão', () => {
    render(
      <ButtonPrimary
        label="Test Button"
        hasIcon={true}
        fontSize={16}
        fontWeight={400}
      />
    )

    const button = document.querySelector(
      '.button-primary'
    ) as HTMLButtonElement

    expect(button).toBeInTheDocument()
  })

  it('Desabilita o botão de acordo com a prop', () => {
    render(
      <ButtonPrimary
        label="Button"
        hasIcon={true}
        fontSize={16}
        fontWeight={400}
        disabled={true}
      />
    )

    const button = document.querySelector(
      '.button-primary'
    ) as HTMLButtonElement

    expect(button).toBeDisabled()
  })

  it('Chama a função quando é clicado', () => {
    const onClickMock = jest.fn()
    render(
      <ButtonPrimary
        label="Click Me"
        hasIcon={false}
        fontSize={16}
        fontWeight={400}
        onClick={onClickMock}
      />
    )

    const button = document.querySelector(
      '.button-primary'
    ) as HTMLButtonElement

    expect(button).toBeInTheDocument()
    fireEvent.click(button)

    expect(onClickMock).toHaveBeenCalledTimes(1)
  })
})
