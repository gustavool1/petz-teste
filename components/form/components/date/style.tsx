import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  margin-top: 20px;
`
export const Dates = styled.div`
  display: flex;
  margin-top: 15px;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`
export const DayContainer = styled.div`
  width: 100%;
  margin-right: 70px;
`

export const TimeContainer = styled.div`
  width: 100%;
`
