import React, { useState } from 'react';

const UserInfo = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword};
        console.log("Welcome", {newUser})
    };
    return(
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label>
                <input type="text" onChange={ (e) => {
                    setFirstName(e.target.value);
                    console.log(e);
                }}/>
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" onChange={ (e) => setLastName(e.target.value)}/>
            </div>
            <div>
                <label>Email: </label>
                <input type="text" onChange={ (e) => setEmail(e.target.value)}/>
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ (e) => setPassword(e.target.value)}/>
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={ (e) => setConfirmPassword(e.target.value)}/>
            </div>
            <input type="submit" value="Create User"/>
            <div><label>First Name: {firstName}</label></div>
            <div><label>Last Name: {lastName}</label></div>
            <div><label>Email: {email}</label></div>
            <div><label>Password: {password}</label></div>
            <div><label>Confirm-Password: {confirmPassword}</label></div>
        </form>
    );
}

export default UserInfo;