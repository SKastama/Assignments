import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link, useHistory } from "react-router-dom";
import AuthorForm from '../components/AuthorForm';

const UpdateAuthor = (props) => {
    const [author, setAuthor] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]); 
    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        axios.get('http://localhost:8000/api/author/' + id)
            .then(res => {
                setAuthor(res.data);
                setLoaded(true);
            })
            .catch((err) => console.log(err));
    }, [id]);

    const updateAuthor = (editAuthor) => {
        axios.put('http://localhost:8000/api/author/' + id, editAuthor)
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
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            {loaded && (<AuthorForm onSubmitProp={updateAuthor} initialName={author.name}/>)}
        </div>
    )
}

export default UpdateAuthor;