import React from 'react'
import styled from 'styled-components'

import IconService from './IconService'

const ServiceBlock = styled.div`
  display: inline-block;
  height: 260px;
  text-align: center;
  width: 300px;
  vertical-align: top;

  p{
    color: #304760;
    line-height: 1em;
  }

  /* Small Devices, Tablets */
  @media only screen and (max-width : 768px) {
    height: 260px;
    width: 240px;
  }

  /* Extra Small Devices, Phones */ 
  @media only screen and (max-width : 480px){
    height: auto;
    margin-bottom: 2em;
    padding: 0 1em;
    width: 100%;

    p{
      display: inline-block;
      text-align: left;
      vertical-align: middle;
      width: calc(100% - 132px);
    }
  }
`

export default ({ ...props }) => (
  <ServiceBlock>
    <IconService image={props.icon} />
    <p>
      {props.text}
    </p>
  </ServiceBlock>
)
