'use client'
import React from 'react'
import { CenteredText, Container, ImageContainer, Title } from './style'
import Image from 'next/image'
import { NavBar, Footer, NavigationHeader } from '../../components/components'

export default function HomePage() {
  return (
    <Container>
      <NavBar />
      <ImageContainer>
        <Image
          alt="Background Image"
          src="/images/pokemon-hero.jpg"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: '100%' }}
        />
        <CenteredText>
          <Title>
            Cuidamos bem do seu pokémon, para ele cuidar bem de você
          </Title>
        </CenteredText>
      </ImageContainer>
      <Footer />
    </Container>
  )
}
