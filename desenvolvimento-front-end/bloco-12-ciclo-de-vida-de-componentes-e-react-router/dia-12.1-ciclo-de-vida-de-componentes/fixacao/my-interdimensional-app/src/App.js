import React, { Component } from 'react';
import Characters from './Characters';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
    };
  }

  async fetchCharacters() {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();

    this.setState({
      characters: data.results
    })
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  render() {
    const { characters } = this.state;
    return (
      <Characters characters={ characters }/>
    );
  }
}


export default App;