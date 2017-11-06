import React, { Component } from 'react';

export default class CharacterCard extends Component {

  state = {
    charactersMovies: []
  }

  componentWillMount = () => {
    for(const el of this.props.character.films) {
      fetch(el)
      .then(res => res.json())
      .then(json => {
        this.setState({charactersMovies: [...this.state.charactersMovies, json.title]})
      })
    }
  }

  renderCharactersMovies = () => {
    return this.state.charactersMovies.map(movie => <li>{movie}</li>)
  }

  render() {
    return (
      <div key={this.props.character.id}>
      <h3>{this.props.character.name}</h3>
      <p>Age: {this.props.character.age}</p>
      <p>Gender: {this.props.character.gender}</p>
      <p>Eye/Hair Color: {this.props.character.eye_color}/{this.props.character.hair_color}</p>
      <h4>Movies</h4>
      <ul>
        {this.renderCharactersMovies()}
      </ul>
      </div>
    )
  }

}
