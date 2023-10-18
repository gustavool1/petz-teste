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
`

export const ChildrenContainer = styled.span<{ shouldShow: boolean }>`
  @media (max-width: 768px) {
    display: ${(props) => (props.shouldShow ? 'inline' : 'none')};
  }
`
export const ImageContainer = styled.div<{ textVisible: boolean }>`
  margin-right: ${(props) => (props.textVisible ? '10px' : '0px')};

  @media (max-width: 768px) {
    margin-right: 0px;
  }
`
