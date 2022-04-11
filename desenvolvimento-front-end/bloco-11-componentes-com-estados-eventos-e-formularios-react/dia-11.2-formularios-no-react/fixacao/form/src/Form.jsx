import React, { Component } from "react";
import Checkbox from "./Checkbox";
import TextArea from "./TextArea";

class Form extends Component {

  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      textarea: '',
      select: '',
      text: '',
      email: '',
      checkbox: 'false',
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  }


  render() {
    return (
      <div>
        <h1>Exercicios de Fixação</h1>
        <form>

          <select
            name="select"
            value={this.state.select}
            onChange={this.handleChange}
          >
            <option value="Pizza">Pizza</option>
            <option value="Lasanha">Lasanha</option>
            <option value="Batata">Batata</option>
          </select>

          <fieldset>
            <legend>Dados Pessoais</legend>
            <input
              type="text"
              name="text"
              value={this.state.text}
              onChange={this.handleChange}
            />

            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </fieldset>

          <TextArea 
          value={this.state.textarea} 
          onChange={this.handleChange} 
          error={this.errorState}
          />

          <Checkbox 
          value={this.state.checkbox} 
          onChange={this.handleChange}
          />

          <input
            type="file"
            name=""
          />

        </form>
      </div>
    )
  }
}

export default Form;