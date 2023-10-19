import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'

export const useSchedule = () => {
  const [pokemonTeam, setPokemonTeam] = useState(1)

  const addPokemonToTheTeam = () => setPokemonTeam(pokemonTeam + 1)
  const scheme = yup.object().shape({
    name: yup.string().required('* Nome obrigatório'),
    surname: yup.string().required('* Sobrenome obrigatório'),
    region: yup.string().required('* Região obrigatória'),
    city: yup.string().required('* Cidade obrigatória'),
    time: yup.string().required('* Horário obrigatório'),
    date: yup.string().required('* Data obrigatória'),
    pokemons: yup
      .array()
      .of(
        yup.string().required('* Cada item da lista de Pokémons é obrigatório')
      )
      .min(1, '* Pelo menos um Pokémon é obrigatório'),
  })

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(scheme),
  })

  const onSubmit = (data: any) => {
    console.log('Data', data)
  }

  return {
    handleSubmit,
    register,
    onSubmit,
    errors,
    pokemonTeam,
    addPokemonToTheTeam,
  }
}
