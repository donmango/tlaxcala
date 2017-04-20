import styled from 'styled-components'

const Description = styled.p`
  color: #FFFFFF;
  display: inline-block;
  font-size: 1em;
  line-height: 1.2em;
  font-weight: 300;
  margin: 1em 2em 0 0;
  width: calc(100% - 390px);

  /* Extra Small Devices, Phones */ 
  @media only screen and (max-width : 480px){
    display: block;
    margin-bottom: 1em;
    text-align: center;
    width: 100%;
  }
`
export default Description
