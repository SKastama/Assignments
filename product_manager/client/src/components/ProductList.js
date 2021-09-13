import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductList = (props) => {
    const { removeFromDom } = props;
    
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.error(err));
    }


    return(
        <div>
            <h2>All Products:</h2>
            {props.product.map((product, index) => {
                return <div>
                    <p key={index}><Link to={`/${product._id}`}>{product.title}</Link></p>
                    <button onClick={(e)=>{deleteProduct(product._id)}}>Delete</button>
                </div>
            })}
        </div>
    )
}

export default ProductList;