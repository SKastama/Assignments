import React, { useState } from 'react'
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import AuthorForm from '../components/AuthorForm';

const NewAuthor = () => {
    const [author, setAuthor] = useState([]);
    const [errors, setErrors] = useState([]); 
    const history = useHistory();
    
    const createAuthor = (newAuthor) => {
        axios.post("http://localhost:8000/api/author", newAuthor)
            .then(res => {
                setAuthor([...author, res.data]);
                let path= ``;
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
            <p>Add a new author:</p>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <AuthorForm onSubmitProp={createAuthor} initialName=""/>
        </div>
    )
}
export default NewAuthor;
