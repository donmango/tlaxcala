import React, { Component } from 'react'

// Global CSS and Head Situation
import Helmet from 'react-helmet'
import TlaxcalaShield from './tlaxcala-shield.png'
import DescImage from './desc-image.jpg'
import MailIcon from './mail-icon.png'
import TlaxcalaMiniShield from './tlaxcala-shield-mini.png'
import PhoneIcon from './phone-icon.png'

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
import FormHandler from './components/Handlers/FormHandler'
import RealTestimonials from './components/RealTestimonials'
import Testimonials from './components/Testimonials/index'
import Footer from './components/Footer'
import Mail from './components/Mail'
import MiniShield from './components/MiniShield'
import Phone from './components/Phone'

class App extends Component {
  componentWillMount () {
    Css()
  }
  render () {
    return (
      <main>
        <Helmet title='TRÁMITES Y SERVICIOS COORDINADOS DEL REGISTRO CIVIL DE TLAXCALA' />
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
            <FormHandler />
          </Container>
        </ContactForm>
        <RealTestimonials>
          <Container center>
            <Testimonials />
          </Container>
        </RealTestimonials>
        <Footer>
          <Container center>
            <Phone image={PhoneIcon} stylednum='246 46 61544' number='2464661544' />
            <MiniShield image={TlaxcalaMiniShield} />
            <Phone image={PhoneIcon} stylednum='246 198 5171' number='2461985171' />
            <Mail image={MailIcon} />
            <p className='address'>Avenida Juarez #5, interior 1-A, Colonia Centro, Tlaxcala, Tlax.</p>
          </Container>
        </Footer>
      </main>
    )
  }
}

export default App
