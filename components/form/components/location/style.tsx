import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  padding-left: 45px;

  @media screen and (max-width: 768px) {
    padding-left: 0px;
    justify-content: center;
  }
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
  margin-right: 25px;
`

export const CityContainer = styled.div`
  width: 100%;
`
