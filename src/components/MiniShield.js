import styled from 'styled-components'

const Avatar = styled.div`
  display: inline-block;
  width: 41px;
  height: 50px;
  background-repeat: no-repeat;
  margin: 0 12em;
  background-size: auto 100%;
  background-position: center;
  background-image: url(${props => props.image});
  vertical-align: top;
`

export default Avatar
