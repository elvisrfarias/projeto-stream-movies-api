import React, { useEffect, useState } from 'react'
import { Container, MovieList } from './styles';
import { img_path, routeApi } from '../Home';
import { Link, useParams } from 'react-router-dom'
import APIKey from '../../config/APIKey';
import axios from 'axios';

const Details = () => {

  const {id} = useParams()
  const [movie, setMovie] = useState({});

  useEffect(() => {
    axios.get(`${routeApi}${id}?api_key=${APIKey}&language=pt-BR&page=1`)
    .then((response) => {
      // Desestruturando o response.data
      const {title, poster_path, overview, release_date} = response.data

      // Pegando apenas as informações necessárias
      const movies = {
        id,
        title,
        sinopse: overview,
        imagem: `${img_path}${poster_path}`,
        releaseDate: release_date
      }
      setMovie(movies)

    }).catch(error => {
      console.log(error)
    })
  },[id])

  return (
    <Container>
      <div className='movie'>
        <img src={movie.imagem} alt={movie.title}/>
        <div className='details'>
          <h1>{movie.title}</h1>
          <p className='sinopse'>
            <span>Sinopse:</span> {movie.sinopse}
          </p>
          <p className='release-date'> Data de lançamento: {movie.releaseDate}</p>
          <Link to='/'>
          <button>Voltar</button>
          </Link>
        </div>
      </div>
    </Container>
  )
}

export default Details
