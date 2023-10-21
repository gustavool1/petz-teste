import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import SelectInput from '../../../components/selectInput/selectInput'

test('Renderiza o componente SelectInput corretamente', () => {
  const options = ['Opção 1', 'Opção 2', 'Opção 3']
  const { container } = render(
    <SelectInput label="Escolha uma opção" options={options} />
  )

  const selectElement = container.querySelector('select')
  const labelElement = screen.getByText('Escolha uma opção')

  expect(selectElement).toBeInTheDocument()
  expect(labelElement).toBeInTheDocument()

  options.forEach((option) => {
    const optionElement = screen.getByText(option)
    expect(optionElement).toBeInTheDocument()
  })
})

test('Seleciona uma opção no componente SelectInput', () => {
  const options = ['Opção 1', 'Opção 2', 'Opção 3']
  const { container } = render(
    <SelectInput label="Escolha uma opção" options={options} />
  )

  const selectElement = container.querySelector('select')
  if (selectElement != null) {
    fireEvent.change(selectElement!, { target: { value: 'opção 2' } })
    expect(selectElement!.value).toBe('opção 2')
  } else {
    fail('selectElement not found')
  }
})

test('Exibe um erro no componente SelectInput', () => {
  const options = ['Opção 1', 'Opção 2', 'Opção 3']
  const { container } = render(
    <SelectInput
      label="Escolha uma opção"
      options={options}
      error="Erro personalizado"
    />
  )

  const errorLabelElement = screen.getByText('Erro personalizado')

  expect(errorLabelElement).toBeInTheDocument()
})
