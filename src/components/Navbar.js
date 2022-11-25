import React, { Fragment } from "react";
import './css/navbar.css'
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
// import Cart from "./Cart";
export default function Navbar(){

    const isLoggedIn = useSelector((state)=> state.isUserLoggedIn.isUserLogin)
    console.log(isLoggedIn)
   
 
    return(
        <div className="navbar">
            <nav>
                <img className="logo-img" src="https://digipplus.com/static/homepage/imgs/digipplus-logo-70x70.38a25d5cef0d.png" alt="logo"/>
                <h2 className="app-title">Perfume Store</h2>
                <ul>
                    <NavLink to="/">{({ isActive }) => <li className={ isActive ? 'select' : 'not-select' }>HOME</li>}</NavLink>  
                    <NavLink to="/cart">{({ isActive }) => <li className={ isActive ? 'select' : 'not-select' }>Cart</li>}</NavLink> 
                {
                    isLoggedIn ? 
                    <Fragment>
                        <NavLink to="/products"> {({ isActive }) => <li className={ isActive ? 'select' : 'not-select' }>LogOut</li>}</NavLink>
                    </Fragment> :
                    <NavLink to="/signup-login/signup">{({ isActive }) => <li className={ isActive ? 'select' : 'not-select' }>SignUp/LogIn</li>}</NavLink>
                  
                }
                </ul>
                <img className="user-profile" src="https://images.pexels.com/photos/14391922/pexels-photo-14391922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="user-profile"/>
            </nav>
        </div>
    )
}


// className={({ isActive }) => isActive ? activeClassName : undefined } >