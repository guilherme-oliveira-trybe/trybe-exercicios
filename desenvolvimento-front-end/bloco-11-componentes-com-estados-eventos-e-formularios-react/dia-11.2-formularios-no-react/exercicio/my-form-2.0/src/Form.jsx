import React, { Component } from "react";
import PersonalForm from "./PersonalForm";

class Form extends Component {
  constructor() {
    super()

    this.state = {
      name: '',
      email:'',
      cpf: '',
      address: '',
      city: '',
      states: '',
      addresType:''
    }
  }

  handleChange = ({ target }) => {
    let { name, value } = target;
    
    if (name === 'name') value = value.toUpperCase();
    if (name === 'address') value = this.validateAddress(value)

    this.setState({
      [name]: value,
    })
  }

  validateAddress = (address) => address.replace(/[^\w\s]/gi, '')
  
  onBlurHandler = ({ target }) => {
    let { name, value } = target;

    if (name === 'city') value = value.match(/^\d/) ? '' : value;

    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <form>
        <PersonalForm 
        value={this.state} 
        handleChange={this.handleChange}
        onBlurHandler={this.onBlurHandler}
        />
      </form>
    )
  }
}

export default Form;