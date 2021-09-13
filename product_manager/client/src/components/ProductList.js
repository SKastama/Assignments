import React from "react";

const ProductList = (props) => {
    return(
        <div>
            {props.product.map((product, index) => 
                <p key={index}>{product.title}, {product.price}, {product.description}</p>
            )}
        </div>
    )
}

export default ProductList;