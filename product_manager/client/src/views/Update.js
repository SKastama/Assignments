import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
    
const Update = (props) => {
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
    }, []);
    
    const updateProduct = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/product/' + id, {
            title,
            price,
            description
        })
            .then(res => console.log(res));
    }
    
    return (
        <form onSubmit={updateProduct}>
            <h1>Update Product:</h1>
            <div>
                <label>Title</label>
                <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} />
            </div>
            <div>
                <label>Price</label>
                <input type="number" value={price} onChange={(e) => { setPrice(e.target.value) }} />
            </div>
            <p>
                <label>Description</label>
                <input type="text" value={description} onChange={(e) => { setDescription(e.target.value) }} />
            </p>
            <input type="submit" />
        </form>
    )
}

export default Update;