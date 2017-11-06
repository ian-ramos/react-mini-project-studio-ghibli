import React, { Component } from 'react';

const MovieCard = (props) => {

  return (
    <div key={props.movie.id}>
      <h3>{props.movie.title}</h3>
      <p>{props.movie.description}</p>
      <p>Release Date: {props.movie.release_date}</p>
      <p>Rotten Tomatoes Rating: {props.movie.rt_score}</p>
    </div>
  )
}

export default MovieCard
