import styled from 'styled-components'

const IconService = styled.div`
  width: 100px;
  height: 100px;
  background-repeat: no-repeat;
  margin: 1em auto 2em auto;
  background-size: auto 100%;
  background-position: center;
  background-image: url(${props => props.image});

  /* Extra Small Devices, Phones */ 
  @media only screen and (max-width : 480px){
    display: inline-block;
    height: 70px;
    margin: 0 2em 0 0;
    vertical-align: middle;
    width: 70px;
  }
`

export default IconService
