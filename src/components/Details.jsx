import { getProductByID, getProductDesc } from "../services/ProductService";
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { Button, Card } from 'react-bootstrap'

const Detail = () => {
  let { id } = useParams()
  const [data, setData] = useState({});
  const [description, setDescription] = useState({});
  useEffect(() => {
    getProductByID(id).then((response) => setData(response.data));
    getProductDesc(id).then((response) => setDescription(response.data));
  }, []);

  return (
    <>
      <Card border="dark" style={{ width: '30rem' }} className="m-auto">
        <Card.Header>
          <Card.Title>{data.title}</Card.Title>
          <Card.Subtitle>Id: {id}</Card.Subtitle>
          <Card.Subtitle>{data.price} COP</Card.Subtitle>
        </Card.Header>
        <Card.Body>
          <Card.Img src={data.thumbnail} />
          <Card.Text>{description.plain_text}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button href="/">Regresar</Button>
        </Card.Footer>
      </Card>
    </>
  );
};

export default Detail;

/**
 <Grid container sx={{p:10}} spacing={4} direction="row">
      
      <Paper elevation={3}>
        <img
          src={data.thumbnail}
          alt="img-icon"
        />
      </Paper>
      <Paper elevation={3} sx={{width:800}}>
        <h1>{data.title}</h1>
        <h3>{data.price} COP</h3>
        <p>{description.plain_text}</p>
      </Paper>
    </Grid>
 */