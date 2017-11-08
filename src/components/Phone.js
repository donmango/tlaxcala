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

export default ({number, stylednum, ...props }) => (
  <Phone>
    <img src={props.image} alt="Phone" />
    <p>
      <a href={`tel:${number}`}>{stylednum}</a>
    </p>
  </Phone>
)
