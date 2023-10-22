import Image from 'next/image'
import styled from 'styled-components'

interface ButtonContainerProps {
  iconIsVisible: boolean
  label: string
  fontSize: number
  fontWeight: number
  hasIcon: boolean
  isLoading: boolean
}
export const ButtonContainer = styled.button<ButtonContainerProps>`
  border-radius: 30px;
  padding: 15px;
  background-color: var(--color-primary);
  text-decoration: none;
  outline: none;
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: url('/images/white-pokeball.svg');
    width: '37px';
    height: '34px';
    display: ${(props) => (props.hasIcon ? 'block' : 'none')};
    margin-right: ${(props) =>
      props.hasIcon && props.iconIsVisible ? '10px' : '0px'};

    @media (max-width: 768px) {
      margin-right: 0px;
    }
  }

  &::after {
    content: ${(props) => `${props.label}`};
    font-size: ${(props) => `${props.fontSize}px`};
    font-weight: ${(props) => `${props.fontWeight}`};
    color: white;
    display: ${(props) =>
      !props.hasIcon ? 'inline' : props.iconIsVisible ? 'inline' : 'none'};
    transition: 2s;

    @media (max-width: 768px) {
      display: ${(props) => (props.hasIcon ? 'none' : 'inline')};
    }
  }
`
