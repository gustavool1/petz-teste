import React, { InputHTMLAttributes, forwardRef } from 'react'
import { Container, ErrorLabel, Label, TextField } from './style'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  placeholder?: string
  margin?: string
  error?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, placeholder, error, margin, ...rest }, ref) => {
    return (
      <Container style={{ margin: margin }}>
        <Label>{label}</Label>
        <TextField {...rest} placeholder={placeholder} ref={ref} />
        {error && <ErrorLabel>{error}</ErrorLabel>}
      </Container>
    )
  }
)

export default Input
