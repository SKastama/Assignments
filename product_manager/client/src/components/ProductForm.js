import React, {useState} from "react";
import axios from "axios";

const ProductForm = (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/product", {
            title,
            price,
            description
        })
            .then(res => console.log("Response: ", res))
            .catch(err => console.log("Error: ", err))
        setTitle("");
        setPrice("");
        setDescription("");
    }

    return(
        <form onSubmit={onSubmitHandler}>
            <div>
                <label>Title</label>
                <input type = "text" onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div>
                <label>Price</label>
                <input type = "number" onChange={(e) => setPrice(e.target.value)}/>
            </div>
            <div>
                <label>Description</label>
                <input type = "text" onChange={(e) => setDescription(e.target.value)}/>
            </div>
            <input type="submit"/>
        </form>
    )
}

export default ProductForm;