import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 40px;
`

export const Label = styled.p`
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 15px;
`

export const LabelSelect = styled.p`
  font-size: 12px;
  font-weight: 700;
  margin-right: 20px;
  display: block;
  white-space: nowrap;
`
export const Description = styled.p`
  font-size: 12px;
  font-weight: 500;
  margin-top: 7px;
  color: #747474;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
`
export const PokemonSelectContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;

  @media (max-width: 768px) {
    margin-right: 0px;
    align-items: start;

    flex-direction: column;
  }
`
export const AddPokemon = styled.h2`
  font-size: 12px;
  font-weight: 600;
  color: #1d1d1d;
`
export const RemovePokemon = styled.h2`
  font-size: 12px;
  font-weight: 600;
  color: white;
`
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`
export const AddButtonContainer = styled.div`
  margin-bottom: 5px;
`
export const RemoveButtonContainer = styled.div`
  margin-bottom: 5px;
`
