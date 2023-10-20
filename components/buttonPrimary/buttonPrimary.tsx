'use client'

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

const ButtonPrimary = ({ children, hasIcon, ...rest }: ButtonProps) => {
  const [textVisible, setTextVisible] = useState(false)

  useEffect(() => {
    if (!hasIcon) {
      setTextVisible(true)
      return
    }
    const timer = setTimeout(() => {
      setTextVisible(true)
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <ButtonContainer {...rest}>
      {hasIcon && (
        <ImageContainer textVisible={textVisible}>
          <Image
            alt="Background Image"
            src="/images/white-pokeball.svg"
            width={0}
            height={0}
            sizes="20vw"
            style={{
              width: '37px',
              height: '34px',
            }}
          />
        </ImageContainer>
      )}
      {textVisible && (
        <ChildrenContainer shouldShow={!hasIcon}>{children}</ChildrenContainer>
      )}
    </ButtonContainer>
  )
}

export default ButtonPrimary
