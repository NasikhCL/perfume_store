import React,{useState} from "react";
import { collection, getDocs } from "firebase/firestore"; 
import { db } from "../config/firebaseConfig";

export default function Cart(){
    // const[cart, setCart] = useState([])
    return(
        <div>
            <div className="cart-add-remove-product"></div>
        </div>

    )
}