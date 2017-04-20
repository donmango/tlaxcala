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

  /* Extra Small Devices, Phones */ 
  @media only screen and (max-width : 480px){
    display: block;
    margin: 0 auto;
  }
`

export default FtImage
