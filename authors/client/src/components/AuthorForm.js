import React, { useState } from "react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";

const AuthorForm = (props) => {
    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]); 
    const history = useHistory();

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/author", {name})
            .then(res => {
                console.log("Response: ", res);
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
            <form onSubmit={onSubmitHandler}>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                <label>Name</label>
                <input type="text" name="name" value={name} onChange={(e) => {setName(e.target.value)}}/>
                <input type="submit"/>
                <button><Link to="/">Cancel</Link></button>
            </form>
        </div>
    )

}


export default AuthorForm;