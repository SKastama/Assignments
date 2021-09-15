import React, { useState } from "react";
import { Link } from "react-router-dom";

const AuthorForm = (props) => {
    const { initialName, onSubmitProp } = props;
    const [name, setName] = useState(initialName);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({name:name});
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <label>Name</label>
                <input type="text" name="name" value={name} onChange={(e) => {setName(e.target.value)}}/>
                <input type="submit"/>
                <button><Link to="/">Cancel</Link></button>
            </form>
        </div>
    )

}


export default AuthorForm;