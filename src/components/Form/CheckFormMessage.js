import styled from 'styled-components'

const Label = styled.p`
  color: #E36049;
  font-size: 1em;
  line-height: 1.5em;
  margin-bottom: 2em;
  text-align: center;
  ${props => props.display || props.display === '' ? 'display:none;' : 'display:block;'}
`
export default Label
