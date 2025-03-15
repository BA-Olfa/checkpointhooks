import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';


const Filtre = ({ movies, setmovies,originalMovies }) => {
  const tabNote=[0,1,2,3,4,5,6,7,8,9,10];
  const [titre, setTitre] = useState('');
  const [note, setNote] = useState('0');
  const handleFilter = () => {  
    const filtrerMovies = originalMovies.filter(
      (movie) =>  (titre ? movie.titre.includes(titre) : true) && (parseInt(note)>0 ? parseInt(movie.note) === parseInt(note): true)
    );
    setmovies(filtrerMovies);
  };
  const handleRest = () => {
    setmovies(originalMovies);
  };
  return (
    <>
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Titre</Form.Label>
        <Form.Control type="text" placeholder="Filter par titre" value={titre} onChange={(e) => setTitre(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Note</Form.Label>
        <Form.Select aria-label="Default select example" onChange={(e) => setNote(e.target.value)}>
        {tabNote.map((elemt,index)=>(
        <option key={index+1} value={elemt}>{elemt>0 ?elemt:'Tous'}</option>
        ))}
        
        </Form.Select>
      </Form.Group>
      <Row xs="auto">
        <Col xs={2}><Button variant="primary" onClick={handleFilter}>Filter</Button></Col>
        <Col xs={2}><Button variant="primary" onClick={handleRest}>Initialisation</Button></Col>
        <Col xs={2}></Col>
      </Row>
      
      
    </Form>
    </>
  )
}

export default Filtre