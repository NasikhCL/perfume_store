import React,{useState} from "react";
import { Link } from "react-router-dom";
import './css/login.css'

export default function LogIn(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div className="form-container">
            <form className="login">
            
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
                <button type="submit">LogIn</button>
            </form>
            <p>Dont Have an Account?
                <span><Link to="">signUp</Link></span>
            </p>
      </div>
    );
}