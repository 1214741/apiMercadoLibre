import {getProductByID, getProductDesc } from "../services/ProductService";
import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import { Grid, Paper } from "@mui/material";

const Detail = () => {
    let {id} = useParams()
    const [data, setData] = useState({});
    const [description, setDescription] = useState({});
    useEffect(() => {
      getProductByID(id).then((response)=>{
          console.log(response.data);
          setData(response.data)
      });
      getProductDesc(id).then((response)=>{
          setDescription(response.data)
      });
    }, []);
    
  return (
    <>
    <h1>Descripción del producto</h1>
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