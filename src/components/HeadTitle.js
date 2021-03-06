import styled from 'styled-components'

const HeadTitle = styled.h1`
  color: #FFFFFF;
  font-size: 36px;
  line-height: ${36 / 30};
  font-weight: 300;
  margin-top: 0.5em;
  margin-bottom: 1em;

  /* Extra Small Devices, Phones */ 
  @media only screen and (max-width : 480px){
  	font-size: 1.5em;
  }
`
export default HeadTitle
