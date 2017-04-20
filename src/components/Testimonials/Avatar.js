import styled from 'styled-components'

const Avatar = styled.div`
  display: inline-block;
  width: 140px;
  height: 140px;
  background-repeat: no-repeat;
  margin: 0 1em 0 auto;
  background-size: auto 100%;
  background-position: center;
  background-image: url(${props => props.image});
  vertical-align: top;

  /* Extra Small Devices, Phones */ 
  @media only screen and (max-width : 480px){
    width: 70px;
    height: 70px;
  }
`

export default Avatar
