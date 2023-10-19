import Image from 'next/image'
import styled from 'styled-components'

export const ButtonContainer = styled.button`
  border-radius: 30px;
  padding: 15px;
  background-color: white;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
`

export const ChildrenContainer = styled.span``
export const ImageContainer = styled.div`
  margin-left: '10px';

  @media (max-width: 768px) {
    margin-left: 0px;
  }
`
