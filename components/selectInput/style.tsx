import styled from 'styled-components'

export const SelectContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;

  margin: 8px 0;
  width: 100%;
`

export const SelectBox = styled.select`
  display: flex;
  justify-content: center;
  position: relative;
  appearance: none;
  width: 100%;
  border: 1px solid #d5d5d5;
  border-radius: 8px;
  outline: none;
  padding: 14px 8px;
  box-sizing: border-box;

  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
  background-color: white;
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  color: #747474;

  &:placeholder {
    font-family: 'Inter', sans-serif;
    color: #747474;
    font-size: 30px;
    font-weight: 500;
  }
`
export const Option = styled.option`
  border-radius: 50px;
  width: 100%;
  color: #747474;
`

export const ArrowContainer = styled.div<{ isOpen: boolean }>`
  position: absolute;
  right: 13px;
  bottom: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.5s;

  transform: ${(props) => (props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
`
const Label = styled.p`
  font-size: 12px;
  font-weight: 700;
`
