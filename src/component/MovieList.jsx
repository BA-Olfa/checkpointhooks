import React from 'react'
import MovieCard from './MovieCard'
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';

const MovieList = ({ movies }) => {
  return (
    <Row xs={1} md={4} className="g-4">
    {movies.map((movie)=>(
        <MovieCard key={movie.id} {...movie}></MovieCard>
    ))}
    
   </Row>
  )
}

export default MovieList