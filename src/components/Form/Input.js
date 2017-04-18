import styled from 'styled-components'
import React from 'react'
import Label from './Label'

const black = 'rgba(74,74,74,0.94)'

const InputInit = styled.input`
  appearance: none;
  background: #FFFFFF;
  width: 100%;
  display: block;
  font-family: inherit;
  font-size: 1em;
  color: ${black};
  border: 2px solid transparent;
  padding: ${10 / 16}em;
  outline: none;
  margin-bottom: ${10 / 16}em;
  &:focus, &:active {
    border-color: #1e96c8;
    box-shadow: none;
  }
`

const Input = (props) => {
  let { label, name, type, placeholder, pattern, value, onChange } = props
  return (
    <div>
      <Label htmlFor={name}>
        { label }
      </Label>
      <InputInit
        type={type}
        placeholder={placeholder}
        id={name}
        pattern={pattern}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default Input
