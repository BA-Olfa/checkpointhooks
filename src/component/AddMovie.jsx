import React,{ useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const AddMovie = ({ movies, setmovies }) => {
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
          note: Number(note),
        };
        setmovies([...movies, newMovie]);
        setTitre('');
        setDescription('');
        setPosterURL('');
        setNote(0);
      };
      const [file, setFile] = useState(null);
      const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
          setFile(selectedFile);
        }
      };
  return (
    <Form onSubmit={handleAddMovie}>
      <Form.Group className="mb-3">
        <Form.Label>Titre</Form.Label>
        <Form.Control type="text" placeholder="" value={titre} onChange={(e) => setTitre(e.target.value)} required={true}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} value={description} onChange={(e) => setDescription(e.target.value)} required={true}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Note</Form.Label>
        <Form.Select aria-label="Default select example" onChange={(e) => setNote(e.target.value)} required={true}>
        <option value={note}>Open this select menu</option>
        {tabNote.map((elemt,index)=>(
        <option key={index+1} value={elemt}>{elemt}</option>
        ))}
        
        </Form.Select>
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Upload un fichier</Form.Label>
          <Form.Control type="file" onChange={handleFileChange} />
        </Form.Group>
        {file && (
          <div className="mt-3">
            {file.type.startsWith("image/") && (
              <img
                src={URL.createObjectURL(file)}
                alt="Aperçu"
                className="img-thumbnail mt-2"
                style={{ maxWidth: "100%" }}
              />
            )}
          </div>
        )}
      <Button as="input" type="submit" value="Ajouter film" />
    </Form>
  )
}

export default AddMovie