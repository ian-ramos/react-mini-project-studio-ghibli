import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Home from './Home'
import MovieContainer from './Movies/MovieContainer'
import CharacterContainer from './Characters/CharacterContainer'
import LocationContainer from './Locations/LocationContainer'
import SpecieContainer from './Species/SpecieContainer'

const NavBar = () => {
  const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}
  return (
    <div>
      <NavLink to="/" style={link} component={Home} >Home</NavLink>
      <NavLink to="/movies" style={link} component={MovieContainer} >Movies</NavLink>
      <NavLink to="/characters" style={link} component={CharacterContainer} >Characters</NavLink>
      <NavLink to="/locations" style={link} component={LocationContainer} >Locations</NavLink>
      <NavLink to="/species" style={link} component={SpecieContainer} >Species</NavLink>
    </div>
  )
}

export default NavBar
