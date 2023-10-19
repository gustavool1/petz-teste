import React, { useEffect, useState } from 'react'
import {
  Container,
  Description,
  Label,
  PokemonSelectContainer,
  LabelSelect,
} from './style'
import SelectInput from '../../../selectInput/selectInput'
import { getPokemons } from '../../../../helpers/pokemons'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
interface RegisterTeamProps {
  teamQuantity: number
  register: UseFormRegister<any>
  errors: FieldErrors
}

const RegisterTeam = ({
  teamQuantity,
  register,
  errors,
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
            // error={errors.pokemons[i]?.message as unknown as string}
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
    </Container>
  )
}

export default RegisterTeam
