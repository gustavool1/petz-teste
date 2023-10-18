import Link from 'next/link'

import {
  Container,
  ButtonTextPokemonCenter,
  CentralPokemonContainer,
  ButtonTextSchedule,
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
        <ButtonPrimary hasIcon onClick={() => {}}>
          <ButtonTextPokemonCenter>Centro Pokémon</ButtonTextPokemonCenter>
        </ButtonPrimary>
      </CentralPokemonContainer>
      <InfoContainer>
        <WhoWeAre onClick={() => router.push('/about')}>Quem Somos</WhoWeAre>
        <ButtonPrimary>
          <ButtonTextSchedule onClick={() => router.push('/schedule')}>
            Agendar Consulta
          </ButtonTextSchedule>
        </ButtonPrimary>
      </InfoContainer>
    </Container>
  )
}

export default NavBar
