import React, { Fragment, useEffect, useState } from "react";
import './css/navbar.css'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Cart from "./Cart";
export default function Navbar(){

    const isLoggedIn = useSelector((state)=> state.isUserLoggedIn.isUserLogin)
    console.log(isLoggedIn)
    useEffect(()=>{
        setCurrentPage('home')
    },[isLoggedIn])
   const [currentPage, setCurrentPage] = useState('home')
    function isActice(Cpage){
        setCurrentPage(Cpage)
    }
 
    return(
        <div className="navbar">
            <nav>
                <img className="logo-img" src="https://digipplus.com/static/homepage/imgs/digipplus-logo-70x70.38a25d5cef0d.png" alt="logo"/>
                <h2 className="app-title">Perfume Store</h2>
                <ul>
                    <Link to="/"><li className={(currentPage === 'home') ? 'select': ''} onClick={()=>isActice('home')}>HOME</li></Link>  
                {
                    isLoggedIn ? 
                    <>
                        <Link to="/"><li className={(currentPage === 'cart') ? 'select': ''} onClick={()=>isActice('cart')}><Cart /></li></Link> 
                        <li className={(currentPage === 'logout') ? 'select': ''} onClick={()=>isActice('logout')} >LogOut</li> 
                    </> :
                    <Link to="/signup-login"><li className={(currentPage === 'signup') ? 'select': ''} onClick={()=>isActice('signup')}>SignUp/LogIn</li></Link>
                  
                }
                </ul>
                <img className="user-profile" src="https://images.pexels.com/photos/14391922/pexels-photo-14391922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="user-profile"/>
            </nav>
        </div>
    )
}