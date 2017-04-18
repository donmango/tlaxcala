import React from 'react'
import styled from 'styled-components'

import FormTitle from './FormTitle'
import FormContext from './FormContext'
import FormContainer from './FormContainer'
import FormSection from './FormSection'
import Input from './Input'
import TextArea from './TextArea'
import SubmitBtn from './SubmitBtn'

const FormInit = styled.div`

`

const Form = props => {
  let {
    onSubmit,
    nameValue,
    messageValue,
    inputHandler
  } = props
  return (
  <FormInit>
    <FormTitle>
      Contáctenos
    </FormTitle>
    <FormContext>
      Cuéntenos su problema y nosotros nos preocuparemos por resolverlo! Deje sus datos  y uno de nuestros asesores de manera inmediata, se pondrá en contacto con usted.
    </FormContext>
    <FormContainer>
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
            value={nameValue}
            onChange={inputHandler}
          />
       </FormSection>
       <FormSection half>
          <Input
          	label='Teléfono con clave LADA'
            name='phone'
            type='number'
            placeholder=''
            value={nameValue}
            onChange={inputHandler}
          />
       </FormSection>
       <FormSection half>
          <Input
          	label='E-mail'
            name='email'
            type='email'
            placeholder=''
            value={nameValue}
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
