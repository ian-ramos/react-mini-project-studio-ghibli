import React, { Component } from 'react';

export default class LocationCard extends Component {

  state = {
    locationsMovies: []
  }

  componentWillMount = () => {
    for(const el of this.props.location.films) {
      fetch(el)
      .then(res => res.json())
      .then(json => {
        this.setState({locationsMovies: [...this.state.locationsMovies, json.title]})
      })
    }
  }

  renderLocationsMovies = () => {
    return this.state.locationsMovies.map(movie => <li>{movie}</li>)
  }

  render() {
    return (
      <div key={this.props.location.id}>
      <h3>{this.props.location.name}</h3>
      <p>Climate: {this.props.location.climate}</p>
      <p>Terrain: {this.props.location.terrain}</p>
      <h4>Movies</h4>
      <ul>
        {this.renderLocationsMovies()}
      </ul>
      </div>
    )
  }

}
