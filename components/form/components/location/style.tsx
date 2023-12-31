import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
`
export const Location = styled.div`
  display: flex;
  margin-top: 15px;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`
export const RegionContainer = styled.div`
  width: 100%;
  margin-right: 70px;
`

export const CityContainer = styled.div`
  width: 100%;
`
