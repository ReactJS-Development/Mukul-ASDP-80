import React, { Component } from 'react';
import './App.css';
import Fetchdata from './Fetchdata';


class App extends Component {
  constructor (props) {
    super(props)
    this.state = {password: 123456};
  }
  render() {
    return (
      <div>
      <Fetchdata />
      </div>
    );
  }
}

export default App;
