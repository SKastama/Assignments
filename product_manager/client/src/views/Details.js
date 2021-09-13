import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams, useHistory } from "react-router-dom";
    
const Detail = (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    const history = useHistory();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
        .then(res => setProduct(res.data))
        .catch(err => console.error(err));
    }, []);
    
    const deleteProduct = (id) => {
        axios.delete('http://localhost:8000/api/product/' + id)
            .then(res => console.log(res))
            .catch(err => console.error(err));
        let path = ``; 
        history.push(path);
    }

    return (
        <div>
            <h3>Title: {product.title}</h3>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <br/>
            <p><Link to={`/${id}/edit`}>Edit Product</Link></p>
            <button onClick={(e)=>{deleteProduct(product._id)}}>Delete</button>
            <p><Link to="/">Home</Link></p>
        </div>
    )
}
    
export default Detail;