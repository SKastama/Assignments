import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
    
const Detail = (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, []);
    
    return (
        <div>
            <h3>Title: {product.title}</h3>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <br/>
            <p><Link to="/">Home</Link></p>
        </div>
    )
}
    
export default Detail;