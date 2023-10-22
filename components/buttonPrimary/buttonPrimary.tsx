'use client'

import React, {
  useState,
  useEffect,
  ButtonHTMLAttributes,
  ReactNode,
} from 'react'
import { ButtonContainer } from './style'
import Image from 'next/image'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  hasIcon?: boolean
  label: string
  fontSize: number
  fontWeight: number
}

const ButtonPrimary = ({
  children,
  hasIcon,
  label,
  fontSize,
  fontWeight,
  ...rest
}: ButtonProps) => {
  const [iconIsVisible, setIconIsVisible] = useState(true)
  const [isLoading, setisLoading] = useState(true)

  useEffect(() => {
    if (!hasIcon) {
      setIconIsVisible(true)
      return
    }
    const timer = setTimeout(() => {
      setIconIsVisible(false)
      setisLoading(false)
    }, 3000)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <ButtonContainer
      iconIsVisible={iconIsVisible}
      isLoading={isLoading}
      label={`'${label}'`}
      fontSize={fontSize}
      fontWeight={fontWeight}
      hasIcon={hasIcon ?? false}
      onMouseEnter={
        isLoading ? () => {} : () => setIconIsVisible(!iconIsVisible)
      }
      onMouseOut={isLoading ? () => {} : () => setIconIsVisible(!iconIsVisible)}
      {...rest}
    ></ButtonContainer>
  )
}

export default ButtonPrimary
