import React from 'react'
import styled from 'styled-components'

const Mail = styled.div`
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
  <Mail>
    <img src={props.image} alt="Mail" />
    <p>
      <a href='mailto:tramitlax@hotmail.com'>tramitlax@hotmail.com</a>
    </p>
  </Mail>
)
