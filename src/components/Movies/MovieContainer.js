import React, { Component } from 'react';
import MovieCard from './MovieCard'
// import { movies } from '../../services/movies'

export default class MovieContainer extends Component {

  state={
    movies: [],
    query: '',
    rating: '',
    releaseDate: 0
  }

  componentWillMount = () => {
    this.getMovies()
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({query: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.searchMovies()
  }

  handleRating = (e) => {
    const rating = e.target.value
    if (rating === 'All') {
      this.getMovies()
    } else if (rating === 'Greater than 95'){
      this.setState({movies: this.state.movies.filter(movie => movie.rt_score >= 95), rating: rating})
    } else if (rating === '90-95') {
      this.setState({movies: this.state.movies.filter(movie => (movie.rt_score < 95 && movie.rt_score >= 90) ), rating: rating})
    } else if (rating === '80-90') {
      this.setState({movies: this.state.movies.filter(movie => (movie.rt_score < 90 && movie.rt_score >= 80) ), rating: rating})
    } else if (rating === 'Less than 80') {
      this.setState({movies: this.state.movies.filter(movie => movie.rt_score < 80), rating: rating})
    }
  }

  handleReleaseDate = (e) => {
    const releaseDate = e.target.value
    if (releaseDate === 'All') {
      this.getMovies()
    } else if (releaseDate === 'After 2010'){
      this.setState({movies: this.state.movies.filter(movie => movie.release_date >= 2010), releaseDate: releaseDate})
    } else if (releaseDate === '2000 - 2010') {
      this.setState({movies: this.state.movies.filter(movie => (movie.release_date < 2010 && movie.release_date >= 2000) ), releaseDate: releaseDate})
    } else if (releaseDate === '1990 - 2000') {
      this.setState({movies: this.state.movies.filter(movie => (movie.release_date < 2000 && movie.release_date >= 1990) ), releaseDate: releaseDate})
    } else if (releaseDate === 'Before 1990') {
      this.setState({movies: this.state.movies.filter(movie => movie.release_date < 1990), releaseDate: releaseDate})
    }
  }

  //if search is blank, it'll render all movies again
  searchMovies = () => {
    if (this.state.query === '') {
      this.getMovies()
      this.setState({query: ''})
      } else {
      this.setState({
        movies: this.state.movies.filter(movie => movie.title.toLowerCase().match(this.state.query.toLowerCase())),
        query: ''
      })
    }
  }

  getMovies = () => {
    fetch('https://ghibliapi.herokuapp.com/films')
      .then(res => res.json())
      .then(json => {
        this.setState({movies: json})
      })
    }

  renderMovies = () => {
    return this.state.movies.map(movie => <MovieCard movie={movie} />)
  }

  render() {
    return (
      <div style={{"margin-top": "20px"}}>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.query} onChange={this.handleChange} placeholder="Search for Movie" />
          <input type="submit" value="Search" />
        </form>
        Filter Rating: <select onChange={this.handleRating}>
          <option>All</option>
          <option>Greater than 95</option>
          <option>90-95</option>
          <option>80-90</option>
          <option>Less than 80</option>
        </select><br />
        Filter Release Date: <select onChange={this.handleReleaseDate}>
          <option>All</option>
          <option>After 2010</option>
          <option>2000 - 2010</option>
          <option>1990 - 2000</option>
          <option>Before 1990</option>
        </select>
        {this.renderMovies()}
      </div>
    )
  }
}
