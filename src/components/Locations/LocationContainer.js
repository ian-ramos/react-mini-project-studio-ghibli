import React, { Component } from 'react';
import LocationCard from './LocationCard'
// import { locations } from '../../services/locations'

export default class LocationContainer extends Component {

  state={
    locations: [],
    query: ''
  }

  componentWillMount = () => {
    this.getLocations()
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({query: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.searchLocations()
  }

  //if search is blank, it'll render all locations again
  searchLocations = () => {
    if (this.state.query === '') {
      this.getLocations()
      this.setState({query: ''})
      } else {
      this.setState({
        locations: this.state.locations.filter(location => location.name.toLowerCase().match(this.state.query.toLowerCase())),
        query: ''
      })
    }
  }

  getLocations = () => {
    fetch('https://ghibliapi.herokuapp.com/locations')
      .then(res => res.json())
      .then(json => {
        this.setState({locations: json})
      })
    }

  renderLocations = () => {
    return this.state.locations.map(location => <LocationCard location={location} />)
  }

  render() {
    return (
      <div style={{"margin-top": "20px"}}>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.query} onChange={this.handleChange} placeholder="Search for Location" />
          <input type="submit" value="Search" />
        </form>
        {this.renderLocations()}
      </div>
    )
  }
}
