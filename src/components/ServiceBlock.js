import React from 'react'
import styled from 'styled-components'

import IconService from './IconService';

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
`

export default ({ ...props }) => (
  <ServiceBlock>
    <IconService image={props.icon } />
    <p>
      {props.text}
    </p>
  </ServiceBlock>
)
