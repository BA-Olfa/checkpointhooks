import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const MovieCard = ({titre,description,note,posterURL,id}) => {
  return (
    <Col key={id}>
    <Card className="CardMovie">
      <Card.Img variant="top" src={posterURL} className="imageMovie"/>
      <Card.Body>
       
        <Card.Title>
          <span style={{color: "#0070df"}}>Titre :</span><span>{titre}</span>
        </Card.Title>
        <Card.Title>
        <span style={{color: "#0070df"}}>Description :</span>
        <span>{description}</span> 
        </Card.Title>
        <Card.Title>
        <span style={{color: "#0070df"}}>Note :</span> 
        <span>{note}</span>
        </Card.Title>
      </Card.Body>
    </Card>
  </Col>
  )
}

export default MovieCard