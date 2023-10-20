import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const Label = styled.p`
  font-size: 12px;
  font-weight: 700;
`

export const TextField = styled.input`
  width: 100%;
  border: 1px solid #d5d5d5;
  border-radius: 8px;
  margin: 8px 0;
  outline: none;
  padding: 14px 8px;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  font-weight: 300;

  :focus {
    border-color: red;
  }
  @media screen and (min-width: 768px) {
    max-width: 268px;
  }

  &::placeholder {
    font-family: 'Inter', sans-serif;
    color: #747474;
    font-size: 14px;
    font-weight: 500;
  }
`

export const ErrorLabel = styled.p`
  font-size: 12px;
  margin-bottom: 6px;
  color: red; /* Add red color for errors */
`
