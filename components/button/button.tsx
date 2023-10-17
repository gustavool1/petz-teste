import React, { useState, useEffect, ButtonHTMLAttributes } from 'react'
import { ButtonContainer } from './style'
import Image from 'next/image'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: any
  hasIcon?: boolean
}

const Button = ({ children, hasIcon, ...rest }: ButtonProps) => {
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
    <ButtonContainer>
      {hasIcon && (
        <Image
          alt="Background Image"
          src="/images/white-pokeball.svg"
          width={0}
          height={0}
          sizes="20vw"
          style={{
            width: '37px',
            height: '34px',
            marginRight: textVisible ? '10px' : '0px',
          }}
        />
      )}
      {textVisible && <span>{children}</span>}
    </ButtonContainer>
  )
}

export default Button
