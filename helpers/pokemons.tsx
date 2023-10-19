import { apiPokemon } from './apis'
import { capitalize } from './capitalize'
interface PokemonResponse {
  name: string
  url: string
}
export const getPokemons = (): Promise<string[]> => {
  return apiPokemon
    .get('/pokemon/?limit=50')
    .then((response) =>
      response.data.results.map(
        (pokemon: PokemonResponse) =>
          pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
      )
    )
}

export const getCities = (): Promise<string[]> => {
  return apiPokemon.get('/location').then((response) =>
    response.data.results.map((city: PokemonResponse) => {
      const nameArray = city.name.split('-')
      return capitalize(nameArray[0]) + ' ' + capitalize(nameArray[1])
    })
  )
}

export const getRegions = (): Promise<string[]> => {
  return apiPokemon.get('/region').then((response) =>
    response.data.results.map((region: PokemonResponse) => {
      return capitalize(region.name)
    })
  )
}
