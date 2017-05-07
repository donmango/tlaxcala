import React from 'react'
import Form from '../Form'
import 'whatwg-fetch'

//const endPoint = process.env.REACT_APP_BOT_ENDPOINT
//const destinataryID = process.env.REACT_APP_TG_USER
const url = `https://formspree.io/rommelmatteo01@gmail.com`

class FormHandler extends React.Component {

  state = {
    name: '',
    curp: '',
    phone: '',
    email: '',
    message: '',
    status: '',
    error: '',
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
    request.then( response => {
      this.setState({
        status: response.ok
      })
    })
    .then( result => {
      this.setState({
        name: '',
        curp: '',
        phone: '',
        email: '',
        message: ''
      })
    })
    .catch( err => {
      this.setState({
        error: 'Error al enviar el mail, intente nuevamente.'
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
        statusValue={this.state.status}
        errorValue={this.state.error}
        inputHandler={this.inputChangeHandler}
        onSubmit={this.submitHandler}
      />
    )
  }
}

export default FormHandler
