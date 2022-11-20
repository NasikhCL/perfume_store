import React from "react";
import { Link,  Route, Routes } from "react-router-dom";
import SignUp from "../components/SignUp";
import LogIn from "../components/LogIn";

import './css/signup-login.css'

export default function SignUpLogIn(){
    return(
        <div className="signup-login">
            <div className="reg">
               <Link to='signup'><div className="signup"><h3>Sign Up</h3></div></Link>
                <Link to='login'><div className="login"><h3>Log In</h3></div></Link>
            </div>
            <Routes>
                <Route exact path="/signup" element={<SignUp />} />
                <Route exact path="/login" element={<LogIn />} />
            </Routes>
            
        </div>
    )
}