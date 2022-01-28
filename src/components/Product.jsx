import React, { useState } from "react";
import { styled } from "@mui/material/styles";
//import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Product({
  product: { id, title, price, available_quantity, thumbnail },
}) {
  const [expanded, setExpanded] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Card border="dark" style={{ width: '18rem' }}>
        <Card.Header>
          <Card.Title>{title}</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">Precio {price}</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">Disponibles {available_quantity}</Card.Subtitle>
          <Card.Text>Disponibles {available_quantity}</Card.Text>
          <Card.Img src={thumbnail}/>
          <Card.Link href="/productDetail/{id}">Mas detalles</Card.Link>
        </Card.Body>
      </Card>
    </>
  );
}

/**
 <Card sx={{ maxWidth: 345 }}>
      <Link to={`/productDetail/${id}`}>
      <CardHeader
        action={
          <Typography
            sx={{ marginTop: "1rem" }}
            variant="h5"
            color="text.secondary"
          >
            ${price}
          </Typography>
        }
        title={title}
        subheader={available_quantity}
      />
      </Link>
      <CardMedia component="img" height="194" image={thumbnail} alt="img" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {id}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{"test"}</Typography>
        </CardContent>
      </Collapse>
    </Card>
 */