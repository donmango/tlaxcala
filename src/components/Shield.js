import styled from 'styled-components'

const Shield = styled.div`
  width: 84px;
  height: 100px;
  background-repeat: no-repeat;
  margin: 1em auto 2em auto;
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.image});
`

export default Shield
