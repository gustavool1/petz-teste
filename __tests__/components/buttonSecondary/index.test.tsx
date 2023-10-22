import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import ButtonSecondary, {
  ButtonType,
} from '../../../components/buttonSecondary/buttonSecondary'
import '@testing-library/jest-dom'

describe('ButtonSecondary Component', () => {
  it('Renderiza um botão default com um texto', () => {
    const { getByText, container } = render(
      <ButtonSecondary buttonType={ButtonType.default}>
        Click me
      </ButtonSecondary>
    )

    const button = getByText('Click me')
    expect(button).toBeInTheDocument()
  })

  it('Renderiza um botão danger com um icone', () => {
    const { getByText, container } = render(
      <ButtonSecondary buttonType={ButtonType.danger} hasIcon={true}>
        Delete
      </ButtonSecondary>
    )

    const button = getByText('Delete')

    expect(button).toBeInTheDocument()
  })

  it('Chama a função quando o botão é clicado', () => {
    const onClickMock = jest.fn()
    const { getByText } = render(
      <ButtonSecondary buttonType={ButtonType.default} onClick={onClickMock}>
        Click me
      </ButtonSecondary>
    )

    const button = getByText('Click me')
    fireEvent.click(button)

    expect(onClickMock).toHaveBeenCalledTimes(1)
  })

  it('is disabled when the "disabled" prop is true', () => {
    const { getByText } = render(
      <ButtonSecondary buttonType={ButtonType.default} disabled={true}>
        Disabled Button
      </ButtonSecondary>
    )

    const button = getByText('Disabled Button')
    expect(button).toBeDisabled()
  })
})
