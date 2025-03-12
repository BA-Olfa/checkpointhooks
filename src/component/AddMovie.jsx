import React from 'react'
import Form from 'react-bootstrap/Form';

const AddMovie = () => {
    const tabNote=[1,2,3,4,5,6,7,8,9,10];
    const [titre, setTitre] = useState('');
    const [description, setDescription] = useState('');
    const [posterURL, setPosterURL] = useState('');
    const [note, setNote] = useState('');

    const handleAddMovie = () => {
        const newMovie = {
          titre,
          description,
          posterURL,
          note: Number(rating),
        };
        
        setTitre('');
        setDescription('');
        setPosterURL('');
        setNote(0);
      };
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Titre</Form.Label>
        <Form.Control type="text" placeholder="" value={titre} onChange={(e) => setTitre(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} value={description} onChange={(e) => setDescription(e.target.value)}/>
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
      <Button variant="primary" onClick={handleAddMovie}>Ajouter film</Button>
    </Form>
  )
}

export default AddMovie