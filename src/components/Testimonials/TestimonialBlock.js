import React from 'react'
import styled from 'styled-components'

import Avatar from './Avatar'

const TestimonialBlock = styled.article`
  display: inline-block;
  height: 260px;
  text-align: left;
  margin-right: 1.5em;
  width: 45%;
  vertical-align: top;

  .content{
    display: inline-block;
    width: calc(100% - 156px);
  }

  .content p{
    color: #304760;
    display: inline-block;
    line-height: 1em;
    margin: 0 0 2em 0;
    width: 100%;
    vertical-align: top;
  }

  /* Small Devices, Tablets */
  @media only screen and (max-width : 768px) {
    .content p{
      font-size: 0.85em;
    }
  }

  /* Extra Small Devices, Phones */ 
  @media only screen and (max-width : 480px){
    height: auto;
    margin: 0 0 2em 0;
    width: 95%;

    .content{
      width: calc(100% - 86px);
    }

    .content p{
      margin-bottom: 1em;
    }
  }
`

export default ({ ...props }) => (
  <TestimonialBlock>
    <Avatar image={props.avatar} />
    <div className='content'>
      <p>
        {props.text}
      </p>
      <p>
        {props.name}
      </p>
    </div>
  </TestimonialBlock>
)
