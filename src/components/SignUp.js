import React,{useState} from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../config/firebaseConfig';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { useNavigate } from "react-router-dom";
import './css/signup.css'


export default function SignUp(){
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()
        createUserWithEmailAndPassword(auth, emailId, password)
        .then(async (userCredential) =>  {
                // console.log('signup sucess:'+ email + " " + password)
                // Signed in 
                const user = userCredential.user;

                console.log('userCreated Sucess')
                try {
                    const docRef = await addDoc(collection(db, "users"), {
                      fname: firstName,
                      lname: lastName,
                      email: emailId,
                      cart: [],
                      mobile: phone

                     
                    });
                    console.log("Document written with ID: ", docRef.id);

                    navigate('/signup-login/login')

                  } catch (e) {
                    console.error("Error adding document: ", e);
                  }
               
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error('userCreated failed')
                // ..
            });
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
                value={emailId}
                onChange={e => setEmailId(e.target.value)}
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
                <input
                value={phone}
                onChange={e => setPhone(e.target.value)}
                placeholder="phone number"
                type="tele"
                name="phone"
                required
                />
                <button type="submit">SignUp</button>
            </form>
            <p>Already Have an Account?
                <span><Link to="/signup-login/login">LogIn</Link></span>
            </p>
      </div>
    );
}