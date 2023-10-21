import React from 'react'
import { render } from '@testing-library/react'
import Footer from '../../../components/footer/footer'

describe('Footer', () => {
  it('Renderiza o Footer com o texto correto', () => {
    const { queryByText } = render(<Footer />)
    const textElement = queryByText(/Todas as marcas e ilustrações utilizadas/)
    expect(textElement).toBeInTheDocument()
  })
})
