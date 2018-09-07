import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Contact from './Contact';
import Home from './Home';
import Projects from './Projects';
import HomeImage from './HomeImage';
import HomePitch from './HomePitch';
import ContactDetails from './ContactDetails';
import Email from './Email';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Router>
          <div>
            <nav>
              <Link to="/">Home</Link>{' '}
              <Link to="/projects">Projects</Link>{' '}
              <Link to="/contactme">Contact Me</Link>{' '}
            </nav>
            <Route exact path="/" component={Home} />
            <Route exact path="/" component={HomeImage} />
            <Route exact path="/" component={HomePitch} />
            <Route exact path="/" component={ContactDetails} />
            <Route path="/projects" component={Projects} />
            <Route path="/contactme" component={
              () => (<Contact name="Billy Hinman" />)
            } />
            <Route path="/email" component={Email} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
