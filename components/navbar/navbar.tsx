import Link from 'next/link'

import {
  Container,
  CentralPokemonContainer,
  InfoContainer,
  WhoWeAre,
} from './style'

import { useRouter } from 'next/navigation'
import { ButtonPrimary } from '../components'

const NavBar = () => {
  const router = useRouter()

  return (
    <Container>
      <CentralPokemonContainer>
        <ButtonPrimary
          hasIcon
          onClick={() => router.push('/')}
          label="Centro Pokémon"
          fontSize={20}
          fontWeight={600}
        ></ButtonPrimary>
      </CentralPokemonContainer>
      <InfoContainer>
        <WhoWeAre onClick={() => router.push('/about')}>Quem Somos</WhoWeAre>
        <ButtonPrimary
          onClick={() => router.push('/schedule')}
          label="Agendar Consulta"
          fontSize={14}
          fontWeight={700}
        ></ButtonPrimary>
      </InfoContainer>
    </Container>
  )
}

export default NavBar
