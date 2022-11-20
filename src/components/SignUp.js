import React,{useState} from "react";
import { Link } from "react-router-dom";
import {auth} from './'

import './css/signup.css'

export default function SignUp(){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault()

    }


    return (
        <div className="form-container">
            <form className="signup" onSubmit={handleSubmit}>
                <input
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                placeholder="First name"
                type="text"
                name="firstName"
                required
                />
                <input
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                placeholder="Last name"
                type="text"
                name="lastName"
                required
                />
                <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Email address"
                type="email"
                name="email"
                required
                />
                <input
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Password"
                type="password"
                name="password"
                required
                />
                <button type="submit">SignUp</button>
            </form>
            <p>Already Have an Account?
                <span><Link to="">LogIn</Link></span>
            </p>
      </div>
    );
}