import styled from 'styled-components'

const FtImage = styled.div`
  display: inline-block;
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  margin: 1em 0 1em 2em;
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.image});
  vertical-align: top;
`

export default FtImage
