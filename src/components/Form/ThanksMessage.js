import styled from 'styled-components'

const Label = styled.h3`
  color: #FFFFFF;
  font-size: 2em;
  line-height: 2em;
  margin: 5em auto;
  ${props => props.display ? 'display: block;' : 'display: none;'}
`
export default Label
