import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import '../movies/styles.css'
import config from '../../config/config'

export default function ItemMovies() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch((config.mostPopularUrl + config.apiKey + config.lang + config.pages))
            .then(response => response.json())
            .then(data => setMovies(data.results))
            .catch(err => console.error(err))
    }, []) //array de dependências
    console.log(config.apiKey)

  return (
      <div className='listaFilmes'>
        {movies.map(movie => {
            return (
                <li className='itemFilmes' key={movie.id}>
                    <Link to={`/details/${movie.id}`}><img src={config.img_url_base + movie.poster_path}></img></Link>
                    <span className='tituloFilme'> {movie.title} </span>
                </li>
            )
        })}
      </div>
  )
}
