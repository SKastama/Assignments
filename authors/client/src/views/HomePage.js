import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import AuthorList from "../components/AuthorList";

const HomePage = () => {
    const [author, setAuthor] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/author')
            .then(res=>{
                setAuthor(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, []);

    const removeFromDom = authorId => {
        setAuthor(author.filter(author => author._id !== authorId));
    }

    return (
        <>
            <h1>Favorite Authors</h1>
            <p><Link to="/new">Add an Author</Link></p>
            <p>We have quotes by:</p>
            {loaded && <AuthorList author={author} removeFromDom={removeFromDom}/>}
        </>
    )
}
export default HomePage;
