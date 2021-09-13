import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link, useHistory } from "react-router-dom";
    
const Update = (props) => {
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const history = useHistory();
    
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
            .then(res => console.log(res))
            .catch(err => console.error(err));
        let path = `${id}`; 
        history.push(path);
    }
    
    return (
        <form onSubmit={updateProduct}>
            <h1>Update Product:</h1>
            <div>
                <label>Title</label>
                <input type="text" name="title" value={title} onChange={(e) => { setTitle(e.target.value) }} />
            </div>
            <div>
                <label>Price</label>
                <input type="number" name="price" value={price} onChange={(e) => { setPrice(e.target.value) }} />
            </div>
            <p>
                <label>Description</label>
                <input type="text" name="description" value={description} onChange={(e) => { setDescription(e.target.value) }} />
            </p>
            <input type="submit" />
            <p><Link to="/">Home</Link></p>
        </form>
    )
}

export default Update;