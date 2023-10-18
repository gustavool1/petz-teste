import React, { InputHTMLAttributes } from 'react'
import { Container, Label, TextField } from './style'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  placeholder?: string
  margin?: string
}

const Input = ({ label, placeholder, margin, ...rest }: InputProps) => {
  return (
    <Container style={{ margin: margin }}>
      <Label>{label}</Label>
      <TextField {...rest} placeholder={placeholder} />
    </Container>
  )
}

export default Input
