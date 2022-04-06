import React, { Component } from "react";
import pokemons from "./data";
import Pokemon from "./Pokemon";

class Pokedex extends Component {
  render() {
    return (
      pokemons.map((pokemon) => {
        return <section key={pokemon.id} className="pokemon-data">
          <Pokemon pokemons={pokemon}/>
        </section>
      })
    )
  }
}

export default Pokedex;