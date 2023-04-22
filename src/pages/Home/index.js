import React, { useEffect } from 'react'
import { Container, MovieList } from './styles';
import axios from 'axios';
import APIKey from '../../config/APIKey';
import { Link } from 'react-router-dom';

export const img_path = 'https://image.tmdb.org/t/p/w500'
export const routeApi = 'https://api.themoviedb.org/3/movie/'
const Home = () => {

  const [movies, setMovies] = React.useState([])

  useEffect(() => {
    axios.get(`${routeApi}popular?api_key=${APIKey}&language=pt-BR&page=1`)
    .then(response => {
      setMovies(response.data.results)
    }).catch(error => {
      console.log(error)
    })
  },[])

  return (
    <Container>
      <h1>Filmes</h1>
      <MovieList>
        {movies.map((movie) => {
          return (
            <li key={movie.id}> 
              <Link to={`/details/${movie.id}`}>
                <img src={`${img_path}${movie.poster_path}`} alt={movie.title} title={movie.title}/>
              </Link>
              <span>{movie.title}</span>
          </li>
          )
        })}
      </MovieList>
    </Container>
  )
}

export default Home;
