import Link from 'next/link'
import Button from '../button/button'
import {
  Container,
  ButtonTextPokemonCenter,
  CentralPokemonContainer,
  ButtonTextSchedule,
  InfoContainer,
  WhoWeAre,
} from './style'

import { useRouter } from 'next/navigation'

const NavBar = () => {
  const router = useRouter()

  return (
    <Container>
      <CentralPokemonContainer>
        <Button hasIcon onClick={() => {}}>
          <ButtonTextPokemonCenter>Centro Pokémon</ButtonTextPokemonCenter>
        </Button>
      </CentralPokemonContainer>
      <InfoContainer>
        <WhoWeAre onClick={() => router.push('/about')}>Quem Somos</WhoWeAre>
        <Button>
          <ButtonTextSchedule onClick={() => router.push('/schedule')}>
            Agendar Consulta
          </ButtonTextSchedule>
        </Button>
      </InfoContainer>
    </Container>
  )
}

export default NavBar
