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

interface FinancialResumeProps {
  pokemonTeam: number
}

const FinancialResume = ({ pokemonTeam }: FinancialResumeProps) => {
  const tax = 2.1
  return (
    <Container>
      <Hr />
      <PricesContainer>
        <ItemDescription>Número de pokémons a serem atendidos:</ItemDescription>
        <ItemDescription>0{pokemonTeam}</ItemDescription>
      </PricesContainer>
      <PricesContainer>
        <ItemDescription>Atendimento unitário por pokémon: </ItemDescription>
        <ItemDescription>R$ {(pokemonTeam * 70).toFixed(2)}</ItemDescription>
      </PricesContainer>
      <PricesContainer>
        <ItemDescription>Subtotal:</ItemDescription>
        <ItemDescription>R$ {(pokemonTeam * 70).toFixed(2)}</ItemDescription>
      </PricesContainer>
      <PricesContainer>
        <ItemDescription>Taxa geracional*: </ItemDescription>
        <ItemDescription>R$ {tax.toFixed(2)}</ItemDescription>
      </PricesContainer>
      <SmallNote>
        *adicionamos uma taxa de 3%, multiplicado pelo número da geração mais
        alta do time, com limite de até 30%
      </SmallNote>
      <PricesContainer>
        <TotalValueLabel>
          Valor Total: R$ {(pokemonTeam * 70 + tax).toFixed(2)}
        </TotalValueLabel>
        <ButtonPrimary type="submit">
          <ButtonConclusion>Agendar Consulta</ButtonConclusion>
        </ButtonPrimary>
      </PricesContainer>
    </Container>
  )
}

export default FinancialResume
