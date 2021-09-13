import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

const ProductList = (props) => {
    return(
        <BrowserRouter>
            <div>
                {props.product.map((product, index) => 
                    <p><Link to={`/${product._id}`} key={index}>{product.title}</Link></p>
                )}
            </div>
        </BrowserRouter>
    )
}

export default ProductList;