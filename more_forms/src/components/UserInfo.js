import React, { useState } from 'react';
import Password from './Password';

const UserInfo = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [firstError, setFirstError] = useState("");
    const [lastError, setLastError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword};
        console.log("Welcome", {newUser})
        setHasBeenSubmitted(true);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };

    const firstValidations = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length < 1) {
            setFirstError("First Name is required");
        } else if(e.target.value.length < 2) {
            setFirstError("First Name must be two characters or longer");
        } else {
            setFirstError("");
        }
    }
    const lastValidations = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length < 1) {
            setLastError("Last Name is required");
        } else if(e.target.value.length < 2) {
            setLastError("Last Name must be two characters or longer");
        }else {
            setLastError("");
        }
    }
    const emailValidations = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 1) {
            setEmailError("Email is required");
        } else if(e.target.value.length < 2) {
            setEmailError("Email must be two characters or longer");
        }else {
            setEmailError("");
        }
    }
    const passwordValidations = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 1) {
            setPasswordError("Password is required");
        } else if(e.target.value.length < 8) {
            setPasswordError("Password must be eight characters or longer");
        }else {
            setPasswordError("");
        }
    }
    const confirmPasswordValidations = (e) => {
        setConfirmPassword(e.target.value);
        if (password !== e.target.value) {
            setConfirmPasswordError("Passwords must match");
        }else {
            setConfirmPasswordError("");
        }
    }


    return(
        <form onSubmit={ (e) => e.preventDefault() }>
            {
                hasBeenSubmitted ?
                <h2>Thank you for submitting your form!</h2> :
                <h2>Please submit your form</h2>
            }
            <div>
                <label>First Name: </label>
                <input type="text" onChange={ firstValidations } value={firstName}/>
                {
                    firstError ?
                    <p style={{color:"red"}}>{ firstError }</p> :
                    ""
                }
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" onChange={ lastValidations } value={lastName}/>
                {
                    lastError ?
                    <p style={{color:"red"}}>{ lastError }</p> :
                    ""
                }
            </div>
            <div>
                <label>Email: </label>
                <input type="text" onChange={ emailValidations } value={email}/>
                {
                    emailError ?
                    <p style={{color:"red"}}>{ emailError }</p> :
                    ""
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ passwordValidations } value={password}/>
                {
                    passwordError ?
                    <p style={{color:"red"}}>{ passwordError }</p> :
                    ""
                }
                {
                    confirmPasswordError ?
                    <p style={{color:"red"}}>{ confirmPasswordError }</p> :
                    ""
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ confirmPasswordValidations} value={confirmPassword}/>
            </div>
            <input type="submit" onClick={createUser} value="Create User"/>
            <div><label>First Name: {firstName}</label></div>
            <div><label>Last Name: {lastName}</label></div>
            <div><label>Email: {email}</label></div>
            <div><label>Password: <Password pw={password}/></label></div>
            <div><label>Confirm-Password: <Password pw={confirmPassword}/></label></div>
        </form>
    );
}

export default UserInfo;