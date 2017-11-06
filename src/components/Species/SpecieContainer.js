import React, { Component } from 'react';
import SpecieCard from './SpecieCard'
// import { species } from '../../services/species'

export default class SpecieContainer extends Component {

  state={
    species: [],
    query: ''
  }

  componentWillMount = () => {
    this.getSpecies()
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({query: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.searchSpecies()
  }

  //if search is blank, it'll render all species again
  searchSpecies = () => {
    if (this.state.query === '') {
      this.getSpecies()
      this.setState({query: ''})
      } else {
      this.setState({
        species: this.state.species.filter(specie => specie.name.toLowerCase().match(this.state.query.toLowerCase())),
        query: ''
      })
    }
  }

  getSpecies = () => {
    fetch('https://ghibliapi.herokuapp.com/species')
      .then(res => res.json())
      .then(json => {
        this.setState({species: json})
      })
    }

  renderSpecies = () => {
    return this.state.species.map(specie => <SpecieCard specie={specie} />)
  }

  render() {
    return (
      <div style={{"margin-top": "20px"}}>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.query} onChange={this.handleChange} placeholder="Search for Species" />
          <input type="submit" value="Search" />
        </form>
        {this.renderSpecies()}
      </div>
    )
  }
}
