import React from "react";
import { NavLink,  Route, Routes } from "react-router-dom";
import SignUp from "../components/SignUp";
import LogIn from "../components/LogIn";

import './css/signup-login.css'

export default function SignUpLogIn(){
    return(
        <div className="signup-login">
            <div className="reg">
               <NavLink to='signup'>{ ({isActive}) => <div className={isActive ? 'current ' : 'signup'}><h3>Sign In</h3></div>}</NavLink>
                <NavLink to='login'>{ ({isActive}) => <div className={isActive ? 'current ' : 'login'}><h3>Log In</h3></div>}</NavLink>
            </div>
            <Routes>
                <Route exact path="/signup" element={<SignUp />} />
                <Route exact path="/login" element={<LogIn />} />
            </Routes>
            
        </div>
    )
}  