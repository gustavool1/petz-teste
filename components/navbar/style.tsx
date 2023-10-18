import styled from 'styled-components'

export const Container = styled.div`
  height: 104px;
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  overflow: hidden;
`
export const CentralPokemonContainer = styled.div`
  width: 50%;
  margin-left: 3%;

  @media (max-width: 768px) {
    margin-left: 2%;
  }
`
export const ButtonTextPokemonCenter = styled.h2`
  font-size: 20;
  font-weight: 600;
  color: white;
`

export const ButtonTextSchedule = styled.h2`
  font-size: 14px;
  font-weight: 700;
  color: white;
`

export const InfoContainer = styled.div`
  width: 50%;
  display: flex;
  margin-right: 3%;
  display: flex;
  justify-content: end;
  align-items: center;

  @media (max-width: 768px) {
    margin-right: 2%;
  }
`
export const WhoWeAre = styled.button`
  font-size: 14px;
  font-weight: 400;
  color: black;
  margin-right: 30px;
  padding: 20px;
  cursor: pointer;
  border: none;
  background-color: transparent;
`
