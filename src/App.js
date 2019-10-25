import React, { Component } from 'react';
import './App.css';
import Contacts from './components/Contacts';
import FetchUser from './components/FetchUser';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {contacts: []};
  }
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then((data) => this.setState({contacts: data}))
      .catch(console.log())
  }
  render() {
    return (
      <FetchUser />
    );
  }
  
}

export default App;
