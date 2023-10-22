import React, { useEffect, useState } from 'react'
import {
  Container,
  Description,
  Label,
  PokemonSelectContainer,
  LabelSelect,
  AddPokemon,
  ButtonsContainer,
  AddButtonContainer,
  RemoveButtonContainer,
  RemovePokemon,
} from './style'
import SelectInput from '../../../selectInput/selectInput'
import { getPokemons } from '../../../../helpers/pokemons'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import ButtonSecondary, {
  ButtonType,
} from '../../../buttonSecondary/buttonSecondary'
interface RegisterTeamProps {
  teamQuantity: number
  register: UseFormRegister<any>
  errors: FieldErrors
  setPokemonTeam: (n: number) => void
}

const RegisterTeam = ({
  teamQuantity,
  register,
  errors,
  setPokemonTeam,
}: RegisterTeamProps) => {
  const [pokemonsList, setPokemonsList] = useState<string[]>([])

  const setUpSelects = () => {
    const selects = []
    for (let i = 0; i < teamQuantity; i++) {
      selects.push(
        <PokemonSelectContainer key={i}>
          <LabelSelect>Pokémon {i + 1}</LabelSelect>
          <SelectInput
            options={pokemonsList}
            placeholder="Selecione seu pokémon"
            {...register(`pokemons[${i}]`)}
            id={`pokemon-register-${i + 1}`}
          />
        </PokemonSelectContainer>
      )
    }
    return selects
  }

  useEffect(() => {
    getPokemons().then((pokemons) => setPokemonsList(pokemons))
  }, [])

  return (
    <Container>
      <Label>Cadastre seu time</Label>
      <Description>Atendemos até 06 pokémons por vez</Description>
      {setUpSelects()}
      <ButtonsContainer>
        <AddButtonContainer>
          <ButtonSecondary
            onClick={() => setPokemonTeam(teamQuantity + 1)}
            hasIcon
            type="button"
            disabled={!(teamQuantity <= 5)}
            buttonType={ButtonType.default}
          >
            <AddPokemon>Adicionar novo pokémon ao time...</AddPokemon>
          </ButtonSecondary>
        </AddButtonContainer>
        {teamQuantity > 1 && (
          <RemoveButtonContainer>
            <ButtonSecondary
              onClick={() => setPokemonTeam(teamQuantity - 1)}
              hasIcon
              type="button"
              disabled={!(teamQuantity <= 5)}
              buttonType={ButtonType.danger}
            >
              <RemovePokemon>Remover último pokemon do time...</RemovePokemon>
            </ButtonSecondary>
          </RemoveButtonContainer>
        )}
      </ButtonsContainer>
    </Container>
  )
}

export default RegisterTeam
