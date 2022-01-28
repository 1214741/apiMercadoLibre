import { Card } from 'react-bootstrap'
import { useParams, Link } from 'react-router-dom'
import { useState } from 'react';

export default function Product({
  product: { id, title, price, available_quantity, thumbnail },
}) {
  const [url, ] = useState('/productDetail/'+id);

  return (
    <>
      <Card border="dark" style={{ width: '18rem' }}>
        <Card.Header>
          <Card.Title>{title}</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">Precio {price}</Card.Subtitle>
          <Card.Text>Disponibles {available_quantity}</Card.Text>
          <Card.Img src={thumbnail}/>
          <Card.Link href={url}>Mas detalles</Card.Link>
        </Card.Body>
      </Card>
    </>
  );
}

/*
/productDetail/{id}
 */