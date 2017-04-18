import styled from 'styled-components'

const BtnService = styled.a`
  background-color: #EF4437;
  border-radius: 50px;
  font-size: 18px;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  max-width: 235px;
  margin-bottom: 1.5em;
  border: 0;
  box-shadow: 0 3px 0 0 #9E160C;
  padding: 10px 50px;
  text-align: center;
  font-family: inherit;
  margin-top: 10px;
  transition: box-shadow .2s;
  &:hover, &:focus {
    box-shadow: 0 3px 0 0 #EF4437;
  }
  &:active {
    box-shadow: 0 3px 0 0 #EF4437;
  }
`

export default BtnService
