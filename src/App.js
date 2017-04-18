import React, { Component } from 'react';

// Global CSS and Head Situation
import Helmet from 'react-helmet';
import './App.css';
import TlaxcalaShield from './tlaxcala-shield.png';

import Css from './style';
import Container from './components/Container';
import Shield from './components/Shield';
import Header from './components/Header';
import HeadTitle from './components/HeadTitle';
import BtnService from './components/BtnService';

const services = [
  {
    icon: 'sheet.jpg',
    text: 'Corrección y alta de CURP'
  },
  {
    icon: 'mail.jpg',
    text: 'Expedición y/o envío a domicilio de Copias Certificadas de Actas'
  },
  {
    icon: 'chat.jpg',
    text: 'Aclaraciones Administrativas'
  },
  {
    icon: 'scales.jpg',
    text: 'Legalización de Firmas'
  },
  {
    icon: 'sign.jpg',
    text: 'Divorcios Administrativos'
  },
  {
    icon: 'comment.jpg',
    text: 'Anotaciones Marginales de sentencias y/o Aclaraciones Administrativas'
  },
  {
    icon: 'book.jpg',
    text: 'Constancia de no registro'
  },
  {
    icon: 'search.jpg',
    text: 'Búsqueda histórica'
  },
  {
    icon: 'fly.jpg',
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
            <FtIamge image={DescImage} />
          </Container>
        </WhoWeAre>
      </main>
    );
  }
}

export default App;
