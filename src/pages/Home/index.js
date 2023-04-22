import React, { useEffect } from 'react'
import { Container, MovieList } from './styles';

const Home = () => {

  const [movies, setMovies] = React.useState('')

  useEffect(() => {
    
  },[])

  return (
    <Container>
      <h1>Hello word!</h1>
      <MovieList>
        {movies.map((movie) => {
          return (
            <li key={movie.id}> 
              <a href="https://www.google.com">
                <img src={movie.img_url} alt={movie.title} title={movie.title}/>
              </a>
              <span>{movie.title}</span>
          </li>
          )
        })}
      </MovieList>
    </Container>
  )
}

export default Home;
