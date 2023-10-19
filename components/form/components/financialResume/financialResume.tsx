import React from 'react'
import {
  ButtonConclusion,
  Container,
  Hr,
  ItemDescription,
  PricesContainer,
  SmallNote,
  TotalValueLabel,
} from './style'
import { ButtonPrimary } from '../../../components'

const FinancialResume = () => {
  return (
    <Container>
      <Hr />
      <PricesContainer>
        <ItemDescription>Número de pokémons a serem atendidos:</ItemDescription>
        <ItemDescription>01</ItemDescription>
      </PricesContainer>
      <PricesContainer>
        <ItemDescription>Atendimento unitário por pokémon: </ItemDescription>
        <ItemDescription>R$ 70,00</ItemDescription>
      </PricesContainer>
      <PricesContainer>
        <ItemDescription>Subtotal:</ItemDescription>
        <ItemDescription>R$ 70,00</ItemDescription>
      </PricesContainer>
      <PricesContainer>
        <ItemDescription>Taxa geracional*: </ItemDescription>
        <ItemDescription>R$ 2,10</ItemDescription>
      </PricesContainer>
      <SmallNote>
        *adicionamos uma taxa de 3%, multiplicado pelo número da geração mais
        alta do time, com limite de até 30%
      </SmallNote>
      <PricesContainer>
        <TotalValueLabel>Valor Total: R$ 72,10</TotalValueLabel>
        <ButtonPrimary type="submit">
          <ButtonConclusion>Agendar Consulta</ButtonConclusion>
        </ButtonPrimary>
      </PricesContainer>
    </Container>
  )
}

export default FinancialResume
