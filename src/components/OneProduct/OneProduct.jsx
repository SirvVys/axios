import { useState, useEffect } from "react";
import axios from "axios";
import ard from "react-bootstrap/Card";
import './ProductList.css'

const OneProduct = () => {
    const [product, setProduct] = useState(null);

    useEffect(()=> {
        axios
        .get("https://dummyjson.com/products/1")
        .then((response) => setProduct(response.data); console.log(response.data)});
}, []);
if (!product) {
    return <p>loading....</p>;
}

return(
    <>
    <Card style={{ width: "18rem" }}>
        {/* <Card.img variant="top" src="holder.js/100px180" />*/}
        <Card.Body>
            <Card.Title><{product.Title}</Card.Title>
            <Card.Text>{pruduct.description}</Card.Text>
            <Card.Text>{product.price}</Card.Text>
            <card.text className={product.stock? 'text-success' : 'text-danger'}>Stock: {product.stock}</card.text>
            </Card.Body>
    </Card>
    </>
);

export default OneProduct;