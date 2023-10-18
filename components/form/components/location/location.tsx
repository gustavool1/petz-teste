import React from 'react'
import { Container, RegionContainer, CityContainer, Location } from './style'
import { Input, SelectInput } from '../../../components'

const LocationInfo = () => {
  return (
    <Container>
      <Location>
        <RegionContainer>
          <SelectInput label="Região" />
        </RegionContainer>
        <CityContainer>
          <SelectInput label="Cidade" />
        </CityContainer>
      </Location>
    </Container>
  )
}

export default LocationInfo
