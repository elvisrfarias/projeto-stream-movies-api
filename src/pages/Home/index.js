import React from 'react'
import { Container, MovieList } from './styles';

const Home = () => {
  const movies = [
    {
      id: 1,
      title: 'Spider Man',
      img_url: 'https://img.elo7.com.br/product/zoom/2677953/big-poster-filme-homem-aranha-3-2007-lo02-tamanho-90x60-cm-homem-aranha.jpg'
    },
    {
      id: 2,
      title: 'Spider Man',
      img_url: 'https://img.elo7.com.br/product/zoom/2677953/big-poster-filme-homem-aranha-3-2007-lo02-tamanho-90x60-cm-homem-aranha.jpg'
    },
    {
      id: 3,
      title: 'Spider Man',
      img_url: 'https://img.elo7.com.br/product/zoom/2677953/big-poster-filme-homem-aranha-3-2007-lo02-tamanho-90x60-cm-homem-aranha.jpg'
    },
  ]
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
