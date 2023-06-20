import React from 'react'
import ItemMovies from './itemMovies';


import '../movies/styles.css'

import { Container } from 'react-bootstrap';

export default function MovieList() {
  return (

    <Container>
        <h1 className='titulosSecao'>Populares</h1>
        <ul>
          <ItemMovies />
        </ul>
    </Container>
  )
}
