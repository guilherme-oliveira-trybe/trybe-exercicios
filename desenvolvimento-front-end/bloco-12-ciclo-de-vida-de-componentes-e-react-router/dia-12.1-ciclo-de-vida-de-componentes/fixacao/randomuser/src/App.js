import './App.css';
import React, { Component } from 'react';
import PersonCard from './PersonCard';


class App extends Component {
  constructor() {
    super()

    this.state = {
      dataObj: [],
      loading: true,
    }
  }

  requestFetch = async () => {
    const url = 'https://api.randomuser.me/'
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      dataObj: data.results,
      loading: false,
    })
  }

  componentDidMount() {
    this.requestFetch()
  }

  shouldComponentUpdate(_nextProps, nextState) {
    // console.log(nextState);
    const AGE = 50;
    if (nextState.dataObj[0].dob.age > AGE) {
      return false;
    }
    return true;
  }

  getUserElements = (user) => {
    return {
      name: `${user.name.first} ${user.name.last}`,
      email: user.email,
      age: user.dob.age,
      image: user.picture.thumbnail,
    };
  }

  render() {
    const { dataObj, loading } = this.state;
    console.log(dataObj);
    const loadingElement = <span>Loading...</span>
    return (
      <div>
        {dataObj.map((currentPerson, index) => (
          <PersonCard key={ index } person={ this.getUserElements(currentPerson) } />))}
        { loading && loadingElement}  
      </div>

    )
  }
}

export default App;
