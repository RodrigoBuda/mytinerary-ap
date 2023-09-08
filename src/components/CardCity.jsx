import { Link as Anchor } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardCity( {src, text, alt, id, small} ) {
  return (
    <div className="cards-cities">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={src} />
      <Card.Body className="d-flex flex-column justify-content-center align-items-center">
        <Card.Title className="text-center">✈️ {text}</Card.Title>

        <Anchor to = {'/city/'+id}> <Button to = {'/cities/'+id} className="button-cardCity" variant="primary">View More</Button></Anchor>
      </Card.Body>
    </Card>
    </div>
  )
}  

export default CardCity;
