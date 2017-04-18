import React from 'react'
import styled from 'styled-components'

import ServiceTitle from './ServiceTitle'
import ServiceBlock from './ServiceBlock'

const Services = styled.div`

`

const services = [
  {
    icon: './images/sheet.png',
    text: 'Corrección y alta de CURP'
  },
  {
    icon: './images/mail.png',
    text: 'Expedición y/o envío a domicilio de Copias Certificadas de Actas'
  },
  {
    icon: './images/chat.png',
    text: 'Aclaraciones Administrativas'
  },
  {
    icon: './images/scales.png',
    text: 'Legalización de Firmas'
  },
  {
    icon: './images/signal.png',
    text: 'Divorcios Administrativos'
  },
  {
    icon: './images/comment.png',
    text: 'Anotaciones Marginales de sentencias y/o Aclaraciones Administrativas'
  },
  {
    icon: './images/book.png',
    text: 'Constancia de no registro'
  },
  {
    icon: './images/search.png',
    text: 'Búsqueda histórica'
  },
  {
    icon: './images/fly.png',
    text: 'Expedición de copia certificada de resolución de aclaración administrativa de años anteriores'
  }
]

export default ({ ...props }) => (
  <Services>
    <ServiceTitle>
      Nuestros Servicios
    </ServiceTitle>
    {services.map((service, i) => (
      <ServiceBlock key={i} {...service} />
    ))}
  </Services>
)
