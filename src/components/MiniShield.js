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

  @media only screen and (max-width : 768px){
    margin: 0 5em;
  }

  /* Extra Small Devices, Phones */ 
  @media only screen and (max-width : 480px){
    display: block;
    margin: 0 auto;
  }
`

export default Avatar
