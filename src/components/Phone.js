import React from 'react'
import styled from 'styled-components'

const Phone = styled.div`
    display: inline-block;

    img, p{
        display: inline-block;
        vertical-align: middle;
    }

    img{
        margin-right: 1em;
    }

    a{
        color: #FFFFFF;
    }

    a:hover,a:focus{
      color: #EAEAEA;
    }
`

export default ({ ...props }) => (
  <Phone>
    <img src={props.image} />
    <p>
      <a href='tel:045-246-220-9429'>045-246-220-9429</a>
    </p>
  </Phone>
)
