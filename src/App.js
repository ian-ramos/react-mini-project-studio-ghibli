import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import Home from './components/Home'
import MovieContainer from './components/Movies/MovieContainer'
import CharacterContainer from './components/Characters/CharacterContainer'
import LocationContainer from './components/Locations/LocationContainer'
import SpecieContainer from './components/Species/SpecieContainer'


class App extends Component {
  render() {
    return (
      <div >
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/movies" component={MovieContainer} />
        <Route exact path="/characters" component={CharacterContainer} />
        <Route exact path="/locations" component={LocationContainer} />
        <Route exact path="/species" component={SpecieContainer} />
      </div>
    );
  }
}

export default App;
