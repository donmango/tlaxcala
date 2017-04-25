import React from 'react'
import styled from 'styled-components'

import FormTitle from './FormTitle'
import FormContext from './FormContext'
import FormContainer from './FormContainer'
import FormSection from './FormSection'
import Input from './Input'
import TextArea from './TextArea'
import SubmitBtn from './SubmitBtn'
import ThanksMessage from './ThanksMessage'
import CheckFormMessage from './CheckFormMessage'
import ErrorMessage from './ErrorMessage'

const FormInit = styled.div`
`

const Form = props => {
  let {
    nameValue,
    curpValue,
    phoneValue,
    emailValue,
    messageValue,
    statusValue,
    errorValue,
    inputHandler,
    onSubmit,
  } = props
  return (
  <FormInit name="#contact-form" id="#contact-form">
    <ThanksMessage display={statusValue}>
      Gracias por usar nuestro servicio
    </ThanksMessage>
    <FormTitle display={statusValue}>
      Contáctenos
    </FormTitle>
    <FormContext display={statusValue}>
      Cuéntenos su problema y nosotros nos preocuparemos por resolverlo! Deje sus datos  y uno de nuestros asesores de manera inmediata, se pondrá en contacto con usted.
    </FormContext>
    <ErrorMessage>
      {errorValue}
    </ErrorMessage>
    <CheckFormMessage display={statusValue}>
      Por favor llena todos los campos correctamente
    </CheckFormMessage>
    <FormContainer action="#contact-form" onSubmit={onSubmit} display={statusValue}>
       <FormSection half>
          <Input
          	label='Nombre y Apellidos'
            name='name'
            type='text'
            placeholder=''
            value={nameValue}
            onChange={inputHandler}
          />
       </FormSection>
       <FormSection half>
          <Input
          	label='CURP (Se encuentra en su credencial para votar)'
            name='curp'
            type='text'
            placeholder=''
            value={curpValue}
            onChange={inputHandler}
          />
       </FormSection>
       <FormSection half>
          <Input
          	label='Teléfono con clave LADA'
            name='phone'
            type='number'
            placeholder=''
            value={phoneValue}
            onChange={inputHandler}
          />
       </FormSection>
       <FormSection half>
          <Input
          	label='E-mail'
            name='email'
            type='email'
            placeholder=''
            value={emailValue}
            onChange={inputHandler}
          />
       </FormSection>
       <FormSection>
        <TextArea
          label='Comentarios'
          name='message'
          placeholder=''
          value={messageValue}
          onChange={inputHandler}
        />
       </FormSection>
       <SubmitBtn>
         ENVIAR
       </SubmitBtn>
    </FormContainer>
  </FormInit>
  )
}

export default Form
