import React, { InputHTMLAttributes, forwardRef } from 'react'
import { Container, Label, TextField } from './style'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  placeholder?: string
  margin?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, placeholder, margin, ...rest }, ref) => {
    return (
      <Container style={{ margin: margin }}>
        <Label>{label}</Label>
        <TextField {...rest} placeholder={placeholder} ref={ref} />
      </Container>
    )
  }
)

export default Input
