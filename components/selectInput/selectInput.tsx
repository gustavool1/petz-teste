import React, { SelectHTMLAttributes, useState, forwardRef, Ref } from 'react'
import {
  ArrowContainer,
  SelectContainer,
  Option,
  SelectBox,
  ErrorLabel,
} from './style'
import Image from 'next/image'
import { Label } from '../input/style'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  placeholder?: string
  options: string[]
  error?: string
}

const SelectInput = forwardRef(
  (props: SelectProps, ref: Ref<HTMLSelectElement>) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleIsOpen = () => {
      setIsOpen(!isOpen)
    }

    return (
      <>
        {props.label && <Label>{props.label}</Label>}
        <SelectContainer>
          <SelectBox {...props} onClick={toggleIsOpen} ref={ref}>
            {props.placeholder && (
              <Option disabled selected value="">
                {props.placeholder}
              </Option>
            )}
            {props.options &&
              props.options.map((option: string, index: number) => (
                <Option key={index} value={option.toLowerCase()}>
                  {option}
                </Option>
              ))}
          </SelectBox>
          <ArrowContainer isOpen={isOpen}>
            <Image
              src="/images/arrow-up.svg"
              alt="Your SVG"
              width={21}
              height={39}
            />
          </ArrowContainer>
        </SelectContainer>
        {props.error && <ErrorLabel>{props.error}</ErrorLabel>}{' '}
      </>
    )
  }
)

export default SelectInput

// The rest of your styled components...
