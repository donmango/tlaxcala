import React, { Component } from 'react'

// Global CSS and Head Situation
import Helmet from 'react-helmet'
import './App.css'
import TlaxcalaShield from './tlaxcala-shield.png'
import DescImage from './desc-image.jpg'

import Css from './style'
import Container from './components/Container'
import Shield from './components/Shield'
import Header from './components/Header'
import HeadTitle from './components/HeadTitle'
import BtnService from './components/BtnService'
import WhoWeAre from './components/WhoWeAre'
import Description from './components/Description'
import FtImage from './components/FtImage'
import OurServices from './components/OurServices'
import Services from './components/Services'
import ContactForm from './components/ContactForm'
import Form from './components/Form'
import RealTestimonials from './components/RealTestimonials'
import Testimonials from './components/Testimonials/index'

class App extends Component {
  render () {
    return (
      <main>
        <Helmet style={[
            {type: 'text/css', cssText: Css}
        ]}
          titleTemplate={`%s | TRÁMITES Y SERVICIOS COORDINADOS DEL REGISTRO CIVIL DE TLAXCALA`}
        />
        <Header>
          <Container center>
            <Shield image={TlaxcalaShield} />
            <HeadTitle>
              TRÁMITES Y SERVICIOS COORDINADOS DEL REGISTRO CIVIL DE TLAXCALA
            </HeadTitle>
            <BtnService>
              VER SERVICIOS
            </BtnService>
          </Container>
        </Header>
        <WhoWeAre>
          <Container>
            <Description>
              Somos un corporativo, experto en la materia registral, nos encargamos de brindarle asesoría y si usted, por falta de tiempo o por la distancia lo requiere, lo representamos en todos y cada uno de sus trámites ante el Registro Civil en el Estado de Tlaxcala, con el mismo interés y como si usted estuviese presente en los diversos trámites como son:
            </Description>
            <FtImage image={DescImage} />
          </Container>
        </WhoWeAre>
        <OurServices>
          <Container>
            <Services />
          </Container>
        </OurServices>
        <ContactForm>
          <Container center>
            <Form />
          </Container>
        </ContactForm>
        <RealTestimonials>
          <Container center>
            <Testimonials />
          </Container>
        </RealTestimonials>
      </main>
    )
  }
}

export default App
