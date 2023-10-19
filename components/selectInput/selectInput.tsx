import React, { SelectHTMLAttributes, useState, forwardRef, Ref } from 'react' // Import forwardRef and Ref
import { ArrowContainer, SelectContainer, Option, SelectBox } from './style'
import Image from 'next/image'
import { Label } from '../input/style'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  placeholder?: string
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
          <SelectBox
            name="cars"
            id="cars"
            {...props}
            onClick={toggleIsOpen}
            ref={ref}
          >
            {props.placeholder && (
              <Option disabled selected value="">
                {props.placeholder}
              </Option>
            )}
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
)

export default SelectInput
