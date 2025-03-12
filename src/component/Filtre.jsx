import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';

const Filtre = () => {
  const tabNote=[1,2,3,4,5,6,7,8,9,10];
  const [title, setTitle] = useState('');
  const [note, setNote] = useState(0);
  const handleFilter = () => {
    
  };
  return (
    <>
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Titre</Form.Label>
        <Form.Control type="text" placeholder="Filter par titre" value={title} onChange={(e) => setTitle(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Note</Form.Label>
        <Form.Select aria-label="Default select example" onChange={(e) => setNote(e.target.value)}>
        <option value={note}>Open this select menu</option>
        {tabNote.map((elemt)=>(
        <option value="{elemt}">{elemt}</option>
        ))}
        
        </Form.Select>
      </Form.Group>
      <Button variant="primary" onClick={handleFilter}>Filter</Button>
    </Form>
    </>
  )
}

export default Filtre