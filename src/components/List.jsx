import { useState } from "react";
import { getProductsByName } from "../services/ProductService";
import Product from "./Product";
import {ListGroup, Button} from 'react-bootstrap';

const ProductList = () => {
    const [data, setData] = useState([]);
    const [product, setProduct] = useState('');

    const handleOnChange = (e) => setProduct(e.target.value);
    const handleClick = (e) => getProductsByName(product).then((product) => setData(product.data.results));

    return (
        <div>
            <input type="text" onChange={handleOnChange} value={product}/>
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