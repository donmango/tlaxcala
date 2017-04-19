import React from 'react'
import styled from 'styled-components'

import Avatar from './Avatar'

const TestimonialBlock = styled.article`
  display: inline-block;
  height: 260px;
  text-align: left;
  margin-right: 1.5em;
  width: 420px;
  vertical-align: top;

  .content{
    display: inline-block;
    width: 260px;
  }

  .content p{
    color: #304760;
    display: inline-block;
    line-height: 1em;
    margin: 0 0 2em 0;
    width: 260px;
    vertical-align: top;
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
