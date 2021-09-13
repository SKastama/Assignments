import React from "react";
import { Link } from "react-router-dom";

const ProductList = (props) => {
    return(
        <div>
            <h2>All Products:</h2>
            {props.product.map((product, index) => 
                <p><Link to={`/${product._id}`} key={index}>{product.title}</Link></p>
            )}
        </div>
    )
}

export default ProductList;