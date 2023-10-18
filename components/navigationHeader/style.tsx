import styled from 'styled-components'

export const Container = styled.div`
  background-color: var(--color-primary);
  height: 187px;
  display: flex;
  flex-direction: column;
`

export const RoutesContainer = styled.div`
  margin: 20px 80px 15px 80px;
  display: flex;

  @media (max-width: 768px) {
    margin: 20px 15px;
  }
`
export const PageRoute = styled.h3`
  font-size: 12px;
  font-weight: 700;
  color: white;
`
export const Arrow = styled.span`
  font-size: 12px;
  font-weight: 700;
  color: white;
  margin: 0px 5px;
`

export const Title = styled.h1`
  font-size: 33px;
  font-weight: 700;
  color: white;
  margin: 0 80px;

  @media (max-width: 768px) {
    margin: 5px 14px;
  }
`
export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: white;
  margin: 15px 80px;

  @media (max-width: 768px) {
    margin: 20px 15px;
  }
`
