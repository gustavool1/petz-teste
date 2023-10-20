import React, {
  useState,
  useEffect,
  ButtonHTMLAttributes,
  ReactNode,
} from 'react'
import { ButtonContainer, ChildrenContainer, ImageContainer } from './style'
import Image from 'next/image'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  hasIcon?: boolean
}

const ButtonSecondary = ({ children, hasIcon, ...rest }: ButtonProps) => {
  return (
    <ButtonContainer {...rest}>
      <ChildrenContainer>{children}</ChildrenContainer>
      {hasIcon && (
        <ImageContainer>
          <Image
            alt="Background Image"
            src="/images/plus-icon.svg"
            width={11}
            height={19}
          />
        </ImageContainer>
      )}
    </ButtonContainer>
  )
}

export default ButtonSecondary
