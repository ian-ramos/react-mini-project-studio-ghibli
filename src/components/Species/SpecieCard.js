import React, { Component } from 'react';

export default class SpecieCard extends Component {

  state = {
    speciesCharacters: [],
    speciesMovies: []
  }

  componentWillMount = () => {
    for(const el of this.props.specie.films) {
      fetch(el)
      .then(res => res.json())
      .then(json => {this.setState({speciesMovies: [...this.state.speciesMovies, json.title]}) })
    }
    for(const el of this.props.specie.people) {
      fetch(el)
      .then(res => res.json())
      .then(json => {this.setState({speciesCharacters: [...this.state.speciesCharacters, json.name]}) })
    }
  }

  renderSpeciesMovies = () => {
    return this.state.speciesMovies.map(movie => <li>{movie}</li>)
  }

  renderSpeciesCharacters = () => {
    return this.state.speciesCharacters.map(character => <li>{character}</li>)
  }

  render() {
    return (
      <div key={this.props.specie.id}>
      <h3>{this.props.specie.name}</h3>
      <p>Classification: {this.props.specie.classification}</p>
      <h4>Movies</h4>
      <ul>
        {this.renderSpeciesMovies()}
      </ul>
      <h4>Characters</h4>
      <ul>
        {this.renderSpeciesCharacters()}
      </ul>
      </div>
    )
  }

}
