import React, { Component } from 'react';
import CharacterCard from './CharacterCard'
// import { characters } from '../../services/characters'

export default class CharacterContainer extends Component {

  state={
    characters: [],
    query: ''
  }

  componentWillMount = () => {
    this.getCharacters()
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({query: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.searchCharacters()
  }

  //if search is blank, it'll render all characters again
  searchCharacters = () => {
    if (this.state.query === '') {
      this.getCharacters()
      this.setState({query: ''})
      } else {
      this.setState({
        characters: this.state.characters.filter(character => character.name.toLowerCase().match(this.state.query.toLowerCase())),
        query: ''
      })
    }
  }

  getCharacters = () => {
    fetch('https://ghibliapi.herokuapp.com/people')
      .then(res => res.json())
      .then(json => {
        this.setState({characters: json})
      })
    }

  renderCharacters = () => {
    return this.state.characters.map(character => <CharacterCard character={character} />)
  }

  render() {
    return (
      <div style={{"margin-top": "20px"}}>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.query} onChange={this.handleChange} placeholder="Search for Character" />
          <input type="submit" value="Search" />
        </form>
        {this.renderCharacters()}
      </div>
    )
  }
}
