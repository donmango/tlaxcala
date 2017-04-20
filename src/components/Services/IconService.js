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
    margin: 0 2em 0 0;
    vertical-align: middle;
  }
`

export default IconService
