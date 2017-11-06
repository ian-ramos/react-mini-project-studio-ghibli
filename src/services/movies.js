const movies = () => {
  fetch('https://ghibliapi.herokuapp.com/films')
    .then(res => res.json())
}

export default movies
