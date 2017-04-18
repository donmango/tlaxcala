import React, { Component } from 'react';

// Global CSS and Head Situation
import Helmet from 'react-helmet';
import './App.css';
import TlaxcalaShield from './tlaxcala-shield.png';
import DescImage from './desc-image.jpg';

import Css from './style';
import Container from './components/Container';
import Shield from './components/Shield';
import Header from './components/Header';
import HeadTitle from './components/HeadTitle';
import BtnService from './components/BtnService';
import WhoWeAre from './components/WhoWeAre';
import Description from './components/Description';
import FtImage from './components/FtImage';
import OurServices from './components/OurServices';
import ServiceBlock from './components/ServiceBlock';

const services = [
  {
    icon: '/images/sheet.png',
    text: 'Corrección y alta de CURP'
  },
  {
    icon: '/images/mail.png',
    text: 'Expedición y/o envío a domicilio de Copias Certificadas de Actas'
  },
  {
    icon: '/images/chat.png',
    text: 'Aclaraciones Administrativas'
  },
  {
    icon: '/images/scales.png',
    text: 'Legalización de Firmas'
  },
  {
    icon: '/images/signal.png',
    text: 'Divorcios Administrativos'
  },
  {
    icon: '/images/comment.png',
    text: 'Anotaciones Marginales de sentencias y/o Aclaraciones Administrativas'
  },
  {
    icon: '/images/book.png',
    text: 'Constancia de no registro'
  },
  {
    icon: '/images/search.png',
    text: 'Búsqueda histórica'
  },
  {
    icon: '/images/fly.png',
    text: 'Expedición de copia certificada de resolución de aclaración administrativa de años anteriores'
  },
];

class App extends Component {
  render() {
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
            {services.map((service, i) => (
              <ServiceBlock key={i} {...service} />
            ))}
          </Container>
        </OurServices>
      </main>
    );
  }
}

export default App;
