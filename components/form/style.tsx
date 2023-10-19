import styled from 'styled-components'

export const Container = styled.div`
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 652px;
  margin: 0 auto;
`

export const FormSchedule = styled.form`
  flex-direction: column;
  padding-left: 45px;

  @media (max-width: 768px) {
    padding: 0 5%;
  }
`
export const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin-top: 30px;
  @media (max-width: 768px) {
    text-align: center;
  }
`

export const AddPokemon = styled.h2`
  font-size: 12px;
  font-weight: 600;
  color: #1d1d1d;
`
