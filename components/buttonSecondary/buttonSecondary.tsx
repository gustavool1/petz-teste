import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import { ButtonContainer } from './style'
import Image from 'next/image'

export enum ButtonType {
  default,
  danger,
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  hasIcon?: boolean
  buttonType: ButtonType
}

const ButtonSecondary = ({
  children,
  buttonType,
  hasIcon,
  ...rest
}: ButtonProps) => {
  return (
    <ButtonContainer isDefault={buttonType == ButtonType.default} {...rest}>
      {children}
    </ButtonContainer>
  )
}

export default ButtonSecondary
