import React from 'react'
import AuthorForm from '../components/AuthorForm';
import { Link } from "react-router-dom";

const NewAuthor = () => {
    return (
        <div>
            <h1>Favorite Authors</h1>
            <p><Link to="/">Home</Link></p>
            <p>Add a new author:</p>
            <AuthorForm/>
        </div>
    )
}
export default NewAuthor;
