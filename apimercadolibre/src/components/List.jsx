import { useState } from "react";
import { getProductsByName } from "../services/ProductService";
import { Button, TextField } from "@mui/material";
import Product from "./Product";
import List from '@mui/material/List';
import {ListGroup} from 'react-bootstrap';

const ProductList = () => {
    const [data, setData] = useState([]);
    const [product, setProduct] = useState('');

    const handleOnChange = (e) => setProduct(e.target.value);
    const handleClick = (e) => getProductsByName(product).then((product) => setData(product.data.results));

    return (
        <div>
            <TextField onChange={handleOnChange} />
            <Button onClick={handleClick} >Search</Button>
            <ListGroup>
                <ListGroup.Item>
                    {data.map((item) => (
                    <Product key={item.id} product={item} />
                ))}
                </ListGroup.Item>
                
            </ListGroup>
        </div>
    );
}

export default ProductList;

/*
sx={{ width: '100%', maxWidth: 360 }}

<Grid container spacing={2}>
                {data.map((item) => (
                    <Product key={item.id} product={item} />
                ))}
            </Grid>
*/