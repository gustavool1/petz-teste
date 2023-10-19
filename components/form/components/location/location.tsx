import React, { useEffect, useState } from 'react'
import { Container, RegionContainer, CityContainer, Location } from './style'
import { Input, SelectInput } from '../../../components'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { getCities, getRegions } from '../../../../helpers/pokemons'
interface LocationInfoProps {
  register: UseFormRegister<any>
  errors: FieldErrors
}

const LocationInfo = ({ register, errors }: LocationInfoProps) => {
  const [region, setRegion] = useState<string[]>([])
  const [cities, setCities] = useState<string[]>([])

  useEffect(() => {
    getRegions().then((response) => setRegion(response))
    getCities().then((response) => setCities(response))
  }, [])

  return (
    <Container>
      <Location>
        <RegionContainer>
          <SelectInput
            label="Região"
            placeholder="Selecione sua região"
            {...register('region')}
            options={region}
            error={errors.region?.message as string}
          />
        </RegionContainer>
        <CityContainer>
          <SelectInput
            label="Cidade"
            placeholder="Selecione sua cidade"
            {...register('city')}
            options={cities}
            error={errors.city?.message as string}
          />
        </CityContainer>
      </Location>
    </Container>
  )
}

export default LocationInfo
