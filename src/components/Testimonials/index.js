import React from 'react'
import styled from 'styled-components'

import TestimonialsTitle from './TestimonialsTitle'
import TestimonialBlock from './TestimonialBlock'

const Testimonials = styled.div`

`

const testimonialItems = [
  {
    avatar: './images/avatar1.jpg',
    text: '“Recomiendo ampliamente a Tramites y Servicios Coordinados del Registro Civil de Tlaxcala”,  sin su servicio, para los Tlaxcaltecas que radicamos fuera del Estado de Tlaxcala,  sería  imposible darle solución a nuestros problemas en nuestras actas…”.',
    name: 'Javier Martínez Pérez'
  },
  {
    avatar: './images/avatar1.jpg',
    text: '“Mis actas corregidas y a domicilio en el tiempo estipulado…  por    supuesto que los  recomiendo…”.',
    name: 'Jovita  Galindo Márquez'
  },
  {
    avatar: './images/avatar2.jpg',
    text: '“Toda la vida y mi acta de nacimiento con errores, y lamentablemente cuando la necesite me topé con la burocracia de un trámite, vueltas y vueltas a las oficinas en Tlaxcala, lo que se me dificulto aún más por mi edad,  trámites  y servicios  la corrigió,  representándome  como si yo estuviera en Tlaxcala…  este si es un servicio que cumple lo que ofrece…”.',
    name: 'Antonia Chávez Tetlalmatzi'
  },
  {
    avatar: './images/avatar1.jpg',
    text: '“Simplificaron mi trámite y me lo enviaron a mi domicilio en california, Estados Unidos…  ahorre mucho, tiempo, dinero y paciencia, ya no tuve que ir hasta Tlaxcala, cumplieron lo que ofrecieron en el tiempo  convenido”.',
    name: 'Jorge Antonio Temoltzi Cahuantzi'
  },
  {
    avatar: './images/avatar2.jpg',
    text: '“Sin tiempo para ir a Tlaxcala para corregir nuestra acta de matrimonio,  dude en contratar  sus servicios, con tanto charlatán que hay en la red, hoy los recomiendo ampliamente,  solucionaron mi problema  y recibí mis actas a las puertas de mi domicilio…”.',
    name: 'Familia Sánchez González'
  }
]

export default ({ ...props }) => (
  <Testimonials>
    <TestimonialsTitle>
      Testimonios Reales
    </TestimonialsTitle>
    {testimonialItems.map((testimonial, i) => (
      <TestimonialBlock key={i} {...testimonial} />
    ))}
  </Testimonials>
)
