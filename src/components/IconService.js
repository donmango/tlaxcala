import styled from 'styled-components';

const IconService = styled.div`
  width: 100px;
  height: 100px;
  background-repeat: no-repeat;
  margin: 1em auto 2em auto;
  background-size: auto 100%;
  background-position: center;
  background-image: url(${props => props.image});
`

export default IconService
