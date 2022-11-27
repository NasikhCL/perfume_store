import React, { useEffect, useState } from "react";
import { collection, getDocs, setDoc, doc } from "firebase/firestore"; 
import { db } from "../config/firebaseConfig";
// import {firebase}
import { auth } from '../config/firebaseConfig'
// import {firebase}

import './css/products.css'

export default function Products(){
    const [isLoading , setIsLoading] = useState(true)
    const[products, setProducts] = useState([])
    const [currentUser, setCurrentUser] = useState({})
    
    async function getProducts(){
        const querySnapshot = await getDocs(collection(db, "products"));
        querySnapshot.forEach((doc) => {
            console.log(doc.data())
            // console.log(doc._document.data.value.mapValue.fields)
            const newProduct = doc.data();
            setProducts(prevProducts=> [...prevProducts, newProduct])
            setIsLoading(false);
        // console.log(`${doc} => ${doc.data()}`);
        });
    }
    useEffect(()=>{
            getProducts();

      
    },[])
    console.log(products)
    const addToCart = async(pname)=>{

        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
            console.log(doc.data())
            let data= doc.data()
            if(data.id === auth.currentUser.uid){
            setCurrentUser({...data})
            }
        });
    console.log( currentUser)
    console.log(pname)
    const usser = doc(db, 'user', currentUser.id);
        setDoc(usser.cart, { 
            item: pname,
            qty: 1
         });
            // const currentUser = trail.find(user =>( user.id === auth.currentUser.uid ) &&   console.log(currentUser));
            // console.log(currentUser)
            // console.log(doc._document.data.value.mapValue.fields)
            // const users = doc.data();
            // console(prevProducts=> [...prevProducts, newProduct])
            // setIsLoading(false);
        // console.log(doc.data);
       

    }
    // let items = products.map((product,index) =>{
    //     return(
    //         <div className="product-card" key={index}>
    //             <img className="product-image" src={product.image} />
    //             <h2>{product.pname}</h2>
    //             <h2>&#8377;	 {product.price}</h2>
    //         </div>
    //     )
    // })
    return(
        <div className="products-container">
            {isLoading ? <h3>products loading...</h3> : ( 
                    products.map((product,index) =>{
                        return(
                            <div className="product-card" key={index}>
                                <img className="product-image" src={product.image} />
                                <h2>{product.pname}</h2>
                                <h2>&#8377;	 {product.price}</h2>
                                <button onClick={()=> addToCart(product.pname)}>Add</button>
                            </div>
                        )
                    }) 
            )
            }
        </div>
    )
} 