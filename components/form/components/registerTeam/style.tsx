import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 40px;
  padding-left: 45px;

  @media screen and (max-width: 768px) {
    padding-left: 0px;
  }
`

export const Label = styled.p`
  font-size: 12px;
  font-weight: 700;
`

export const LabelSelect = styled.p`
  font-size: 12px;
  font-weight: 700;
  margin-right: 20px;
`
export const Description = styled.p`
  font-size: 12px;
  font-weight: 500;
  margin-top: 7px;
  color: #747474;
`
export const PokemonSelectContainer = styled.div`
  display: flex;
  align-items: center;
`
