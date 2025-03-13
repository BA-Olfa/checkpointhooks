import './App.css';
import { useState } from "react";
import AddMovie from './component/AddMovie';
import Filtre from './component/Filtre';
import MovieList from './component/MovieList';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function App() {
  const [movies,setMovies] = useState([
    {
        id: 1,
        titre: "Wicked",
        description: "Adaptation musicale fantastique réalisée par Jon M. Chu, explorant l'histoire inédite des sorcières d'Oz. Le film a été acclamé par la critique et a remporté le prix du Meilleur Film décerné par le National Board of Review.",
        posterURL: "./film1.jpeg",
        note: "9/10"
    },
    {
        id: 2,
        titre: "Anora",
        description: "Réalisé par Sean Baker, ce film raconte la transformation magique d'une danseuse exotique de Brooklyn. Il a été salué pour sa narration captivante et sa profondeur émotionnelle",
        posterURL: "./film2.jpeg",
        note: "8/10"
    },
    {
        id: 3,
        titre: "A Real Pain",
        description: "Un film de Jesse Eisenberg qui explore les complexités des relations humaines avec une profondeur émotionnelle remarquable",
        posterURL: "./film3.jpeg",
        note: "8/10"
    },
    {
        id: 4,
        titre: "Dune : Deuxième Partie",
        description: "Suite épique de Denis Villeneuve, ce film poursuit l'adaptation du roman de science-fiction de Frank Herbert, offrant des visuels époustouflants et une narration immersive.",
        posterURL: "./film4.jpeg",
        note: "8/10"
    },
    {
        id: 5,
        titre: "A Complete Unknown",
        description: "Ce film met en lumière la vie complexe d'une icône musicale, avec une performance remarquable de Timothée Chalamet",
        posterURL: "./film5.jpeg",
        note: "7/10"
    },
    {
        id: 6,
        titre: "Babygirl",
        description: "Avec Nicole Kidman, ce film aborde les dynamiques complexes du pouvoir dans les relations, offrant une réflexion profonde sur les interactions humaines.",
        posterURL: "./film6.jpeg",
        note: "7/10"
    },
  ]);
  return (
    <Container fluid="md">
        <Row>
          <Filtre movies={movies} setmovies={setMovies}></Filtre>
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
