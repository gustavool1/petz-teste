import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`
export const UserInfoContainer = styled.div`
  display: flex;
  margin-top: 15px;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`
export const NameContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  @media screen and (min-width: 768px) {
    margin-right: 75px;
  }
`

export const SurnameContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`
