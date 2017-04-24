import React from 'react'
import Form from '../Form'
import 'whatwg-fetch'

//const endPoint = process.env.REACT_APP_BOT_ENDPOINT
//const destinataryID = process.env.REACT_APP_TG_USER
const url = `https://formspree.io/hola@wavecode.la`

class FormHandler extends React.Component {

  state = {
    name: '',
    curp: '',
    phone: '',
    email: '',
    message: '',
  }

  submitHandler = event => {
    event.preventDefault()
    let request = fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        name: this.state.name,
        curp: this.state.curp,
        phone: this.state.phone,
        email: this.state.email,
        message: this.state.message,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    request.then( response => response.json() )
    .then( result => {
      this.setState({
        name: '',
        curp: '',
        phone: '',
        email: '',
        message: ''
      })
    })
  }

  // https://facebook.github.io/react/docs/forms.html
  inputChangeHandler = event => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  render () {
    return (
      <Form
        nameValue={this.state.name}
        curpValue={this.state.curp}
        phoneValue={this.state.phone}
        emailValue={this.state.email}
        messageValue={this.state.message}
        inputHandler={this.inputChangeHandler}
        onSubmit={this.submitHandler}
      />
    )
  }
}

export default FormHandler
