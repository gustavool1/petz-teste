import React, {
  InputHTMLAttributes,
  SelectHTMLAttributes,
  useState,
} from 'react'
import { ArrowContainer, SelectContainer, Option, SelectBox } from './style'
import Image from 'next/image'
import { Label } from '../input/style'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  placeholder?: string
}

const SelectInput = ({ label, placeholder, ...rest }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleIsOpen = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      {label && <Label>{label}</Label>}
      <SelectContainer>
        <SelectBox name="cars" id="cars" {...rest} onClick={toggleIsOpen}>
          <Option value="volvo">Volvo</Option>
          <Option value="saab">Saab</Option>
          <Option value="opel">Opel</Option>
          <Option value="audi">Audi</Option>
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
    </>
  )
}

export default SelectInput
