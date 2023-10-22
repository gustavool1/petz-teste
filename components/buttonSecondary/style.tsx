import Image from 'next/image'
import styled from 'styled-components'

export const ButtonContainer = styled.button<{ isDefault: boolean }>`
  border-radius: 30px;
  padding: 15px;
  background-color: ${(props) => (props.isDefault ? 'white' : 'red')};
  text-decoration: none;
  outline: none;
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  &:disabled {
    background-color: #d7d9d8;
    cursor: not-allowed;
  }

  &::after {
    content: ${(props) => (props.isDefault ? "'+'" : "'-'")};
    margin-left: 5px;
    font-size: 16px;
    font-weight: 700;
    color: ${(props) => (props.isDefault ? 'black' : 'white')};
  }
`
