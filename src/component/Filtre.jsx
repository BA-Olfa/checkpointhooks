import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Filtre = ({ movies, setmovies }) => {
  const tabNote=[1,2,3,4,5,6,7,8,9,10];
  const [titre, setTitle] = useState('');
  const [note, setNote] = useState(0);
  const handleFilter = () => {
    const filtrerMovies = movies.filter((movie) => {
      return (
        movie.titre.toLowerCase().includes(titre.toLowerCase()) &&
        (isNaN(note) || movie.note >= note)
      );
    });
    setmovies(filtrerMovies);
  };
  return (
    <>
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Titre</Form.Label>
        <Form.Control type="text" placeholder="Filter par titre" value={titre} onChange={(e) => setTitle(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Note</Form.Label>
        <Form.Select aria-label="Default select example" onChange={(e) => setNote(e.target.value)}>
        <option value={note}>Tous</option>
        {tabNote.map((elemt,index)=>(
        <option key={index+1} value={elemt}>{elemt}</option>
        ))}
        
        </Form.Select>
      </Form.Group>
      <Button variant="primary" onClick={handleFilter}>Filter</Button>
    </Form>
    </>
  )
}

export default Filtre