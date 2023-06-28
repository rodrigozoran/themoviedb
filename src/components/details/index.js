import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import config from '../../config/config'

import '../details/styles.css'

export default function DetailsPage() {

  const {id} = useParams();

  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetch((config.get_details_movies + id + "?api_key=" + config.apiKey + config.lang + config.pages))
    .then(response => response.json())
    .then(data => {

      const { title, poster_path, release_date, overview, tagline } = data;

      const movie = {
        id,
        title: title,
        sinopse: overview,
        imagem_filme: config.img_url_base+poster_path,
        releaseDate: release_date,
        tagline: tagline
      }
      setMovie(movie)
      console.log(data)
    })
    .catch(err => console.error(err))
  }, [id])

  return (
    <div className='container-details'>
      <div className='movie-details'>
        <img src={movie.imagem_filme} alt={movie.sinopse}></img>
        <div className='detailsMovie1'>
          <h1>{movie.title}</h1>
          <p>{movie.tagline}</p>
          <span className='sinopse'>Sinopse: {movie.sinopse}</span>
          <span className='lancamento'>Lançamento: {movie.releaseDate}</span>
          <Link to="/"><button>Voltar</button></Link>
        </div>
      </div>
    </div>
  )
}
