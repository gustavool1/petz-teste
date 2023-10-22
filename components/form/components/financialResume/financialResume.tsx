import React from 'react'
import {
  Container,
  Hr,
  ItemDescription,
  PricesContainer,
  SmallNote,
  TotalValueLabel,
} from './style'
import { ButtonPrimary } from '../../../components'
import { useSchedule } from '../../../../hooks/schedule'

interface FinancialResumeProps {
  pokemonTeam: number
}

const FinancialResume = ({ pokemonTeam }: FinancialResumeProps) => {
  const { tax, toMoney } = useSchedule()

  return (
    <Container>
      <Hr />
      <PricesContainer>
        <ItemDescription>Número de pokémons a serem atendidos:</ItemDescription>
        <ItemDescription>0{pokemonTeam}</ItemDescription>
      </PricesContainer>
      <PricesContainer>
        <ItemDescription>Atendimento unitário por pokémon: </ItemDescription>
        <ItemDescription>{toMoney(pokemonTeam * 70)}</ItemDescription>
      </PricesContainer>
      <PricesContainer>
        <ItemDescription>Subtotal:</ItemDescription>
        <ItemDescription>{toMoney(pokemonTeam * 70)}</ItemDescription>
      </PricesContainer>
      <PricesContainer>
        <ItemDescription>Taxa geracional*: </ItemDescription>
        <ItemDescription>{toMoney(tax)}</ItemDescription>
      </PricesContainer>
      <SmallNote>
        *adicionamos uma taxa de 3%, multiplicado pelo número da geração mais
        alta do time, com limite de até 30%
      </SmallNote>
      <PricesContainer>
        <TotalValueLabel>
          Valor Total: {toMoney(pokemonTeam * 70 + tax)}
        </TotalValueLabel>
        <ButtonPrimary
          label="Concluir Agendamento"
          className="submit-button"
          type="submit"
          fontSize={14}
          fontWeight={700}
        ></ButtonPrimary>
      </PricesContainer>
    </Container>
  )
}

export default FinancialResume
