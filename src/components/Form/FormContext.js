import styled from 'styled-components'

const FormContext = styled.p`
  color: #FFFFFF;
  font-size: 1em;
  line-height: 1.5em;
  margin-bottom: 2em;
  text-align: center;
  ${props => props.display ? 'display: none;' : ''}
`
export default FormContext
