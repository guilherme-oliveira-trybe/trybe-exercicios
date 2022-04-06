import React, { Component } from "react";
import PropTypes from 'prop-types';
import Image from "./Image";

class Pokemon extends Component {
  render() {
    const name = this.props.pokemons.name;
    const type = this.props.pokemons.type;
    const averageWeightValue = this.props.pokemons.averageWeight.value;
    const averageWeightUnit = this.props.pokemons.averageWeight.measurementUnit;
    const img = this.props.pokemons.image;

    return (
      <><div>
        <p>{name}</p>
        <p>{type}</p>
        <p>Average weight: {averageWeightValue} {averageWeightUnit}</p>
      </div><Image source={img} alternativeText='Era pra ter um Pokemon' /></>
    )
  }
}

Pokemon.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  averageWeightValue: PropTypes.number,
  averageWeightUnit: PropTypes.string,
  img: PropTypes.string
}

export default Pokemon;