import styled from 'styled-components'
import React from 'react'
import Label from './Label'

const black = 'rgba(74,74,74,0.94)'

const StyledTextArea = styled.textarea`
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
  resize: vertical;
  &:focus, &:active {
    border-color: #1e96c8;
    box-shadow: none;
  }
`

const TextArea = (props) => {
  let { label, name, placeholder, value, onChange } = props
  return (
    <div>
      <Label htmlFor={name}>
        { label }
      </Label>
      <Label htmlFor={name} />
      <StyledTextArea
        placeholder={placeholder}
        id={name}
        name={name}
        rows={6}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default TextArea
