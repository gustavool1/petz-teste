'use client'

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { CenteredText, Container, ImageContainer, Title } from './style'
import { Footer, NavBar } from '../components/components'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
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
    </>
  )
}
