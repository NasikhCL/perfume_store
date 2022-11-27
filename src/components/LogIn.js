import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import './css/login.css'
import { useDispatch } from "react-redux";
import { loginStatus } from "../redux/store/userLoginSlice";
import { auth } from "../config/firebaseConfig"; 
import { signInWithEmailAndPassword } from "firebase/auth";

export default function LogIn(){
    const dispatch = useDispatch(); 
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e)=> {
        e.preventDefault();
        // console.log('login sucess')
        dispatch(loginStatus())
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            // const user = userCredential.user;
            console.log('looginneddd')
            // ... 
            dispatch(loginStatus())
            navigate('/')
                // navigate('/')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log( 'error in login')
            });
    }


    return (
        <div className="form-container">
            <form className="login" onSubmit={handleSubmit}>
            
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
                <span><Link to="/signup-login/signup">signUp</Link></span>
            </p>
      </div>
    );
}