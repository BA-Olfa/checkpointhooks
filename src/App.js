import './App.css';
import { useState } from "react";
import AddMovie from './component/AddMovie';
import Filtre from './component/Filtre';
import MovieList from './component/MovieList';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import originalMovies from './Movies'

function App() {
  const [movies,setMovies] = useState([...originalMovies]);
  return (
    <Container fluid="md">
        <Row>
          <Filtre movies={movies} setmovies={setMovies} originalMovies={originalMovies}></Filtre>
        </Row>
        <Row>
          <MovieList movies={movies}></MovieList>
        </Row>
        <Row>
          <AddMovie movies={movies} setmovies={setMovies}></AddMovie>
        </Row>
    </Container>
  );
}

export default App;
