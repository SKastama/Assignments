import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link, useHistory } from "react-router-dom";

const UpdateAuthor = (props) => {
    const [author, setAuthor] = useState([]);
    const [errors, setErrors] = useState([]); 
    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        axios.get('http://localhost:8000/api/author/' + id)
            .then(res => {
                setAuthor(res.data);
            })
            .catch((err) => console.log(err));
    }, [id]);

    const handleOnChange = (e) => {
        const keyBeingUpdated = e.target.name;
        const newValue = e.target.value;
        setAuthor({ ...author, [keyBeingUpdated]: newValue });
    };

    const updateAuthor = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/author/' + author._id, author)
            .then(res => {
                console.log(res.data);
                let path = ``; 
                history.push(path);
            })
            .catch(err => {
                const errorResponse = err.response.data.errors; 
                const errorArr = []; 
                for (const key of Object.keys(errorResponse)) { 
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }
    

    return (
        <div>
            <h1>Favorite Authors</h1>
            <p><Link to="/">Home</Link></p>
            <p>Edit this Author:</p>
            <form onSubmit={updateAuthor}>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                <label>Name</label>
                <input type="text" name="name" value={author.name} onChange={handleOnChange}/>
                <input type="submit"/>
                <button><Link to="/">Cancel</Link></button>
            </form>
        </div>
    )
}

export default UpdateAuthor;