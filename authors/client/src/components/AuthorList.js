import React from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const AuthorList = (props) => {
    const { removeFromDom } = props;
    
    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/author/' + authorId)
            .then(res => {
                removeFromDom(authorId)
            })
            .catch(err => console.error(err));
    }
    
    return (
        <div>
            <table>
                <tr>
                    <th>Author</th>
                    <th>Actions Available</th>
                </tr>
                {props.author.map((author, index) => {
                    return <tr>
                        <td><p key={index}>{author.name}</p></td>
                        <td>
                            <button><Link to={`/edit/${author._id}`}>Edit</Link></button>
                            <button onClick={(e)=>{deleteAuthor(author._id)}}>Delete</button>
                        </td>
                    </tr>
                })}
            </table>
        </div>
    )
}
export default AuthorList