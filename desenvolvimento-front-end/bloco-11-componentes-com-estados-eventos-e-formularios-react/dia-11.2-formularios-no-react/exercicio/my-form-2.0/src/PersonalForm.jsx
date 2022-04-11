import React, { Component } from "react";

class PersonalForm extends Component {
  render(){

    const { value, handleChange, onBlurHandler } = this.props

    const states = ['Minas Gerais', 'Rio de Janeiro', 'São Paulo', 'Bahia', 'Pernambuco']

    return (
      <fieldset>
        <legend>Dados Pessoais</legend>
        <div>
          Nome:
          <input type="text" 
          name="name" 
          maxLength='40'
          onChange={handleChange}
          value={value.name}
          required 
          />
        </div>
        <div>
          Email:
          <input 
          type="email" 
          name="email"
          maxLength='50'
          value={value.email}
          onChange={handleChange}
          required
          />
        </div>
        <div>
          CPF:
          <input 
          type="text" 
          name="cpf"
          maxLength='11'
          value={value.cpf}
          onChange={handleChange}
          required
          />
        </div>
        <div>
          Endereço:
          <input 
          type="text" 
          name="address" 
          maxLength='200'
          value={value.address}
          onChange={handleChange}
          required 
          />
        </div>
        <div>
          Cidade:
          <input 
          type="text" 
          name="city" 
          maxLength='28'
          value={value.city}
          onBlur={onBlurHandler}
          onChange={handleChange}
          required 
          />
        </div>
        <div>
          Estado:
          <select 
          name="states"
          value={value.states}
          onChange={handleChange}
          required>
            {states.map((state, index) => {
              return <option key={index}>
                {state}
              </option>
            })}
          </select>
        </div>
        <div>
          Moradia:
          <label htmlFor="house">
          <input 
          type="radio" 
          name="addressType"
          id="house" 
          value={value.addressType}
          onChange={handleChange}
          />
          Casa
          </label>
          <label htmlFor="apart">
          <input 
          type="radio" 
          name="addressType"
          id="apart" 
          value={value.addressType}
          onChange={handleChange}
          />
          Apartamento
          </label>
        </div>
      </fieldset>
    )
  }
}

export default PersonalForm;