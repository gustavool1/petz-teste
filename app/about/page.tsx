'use client'
import React from 'react'
import {
  Container,
  MessageContainer,
  PokemonCenterHeader,
  PokemonMessage,
} from './style'
import { NavigationHeader, NavBar, Footer } from '../../components/components'
import {
  bestForYourPokemon,
  healPokemon,
  highTech,
  tradition,
} from '../../helpers/loremIpsum'

const AboutPage = () => {
  return (
    <Container>
      <NavBar />
      <NavigationHeader />
      <MessageContainer>
        <PokemonCenterHeader>O Centro Pokémon</PokemonCenterHeader>
        <PokemonMessage>
          O Centro Pokémon Como funciona a cura de um pokémon?
        </PokemonMessage>
        <PokemonMessage>{healPokemon}</PokemonMessage>
        <PokemonMessage>Uma tradição de mais de 20 anos</PokemonMessage>
        <PokemonMessage>{tradition}</PokemonMessage>
        <PokemonMessage>O melhor para seu pokémon</PokemonMessage>
        <PokemonMessage>{bestForYourPokemon}</PokemonMessage>
        <PokemonMessage>Alta Tecnologia</PokemonMessage>
        <PokemonMessage>{highTech}</PokemonMessage>
      </MessageContainer>
      <Footer />
    </Container>
  )
}

export default AboutPage
