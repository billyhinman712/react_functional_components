import React, { Component } from 'react';
import HomeContent from './HomeContent';

class Home extends Component {
  componentDidMount(){
    document.title = 'Home';
  }
  render(){
    return (<HomeContent name="Billy" />);
  }
}

export default Home;
