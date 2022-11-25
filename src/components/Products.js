import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore"; 
import { db } from "../config/firebaseConfig";

import './css/products.css'

export default function Products(){
    const [isLoading , setIsLoading] = useState(true)
    const[products, setProducts] = useState([])
    
    useEffect(()=>{
        async function getProducts(){
            const querySnapshot = await getDocs(collection(db, "products"));
            querySnapshot.forEach((doc) => {
                console.log(doc._document.data.value.mapValue.fields)
                const newProduct = doc._document.data.value.mapValue.fields;
                setProducts(prevProducts=> [...prevProducts, newProduct])
                setIsLoading(false);
            // console.log(`${doc} => ${doc.data()}`);
            });
            // items = products.map((product,index) =>{
            //     return(
            //         <div key={index}>
            //             <h2>product.pname</h2>
            //         </div>
            //     )
            // })
            // console.log(items)
        }

   
            
        getProducts();
    },[])
    console.log(products)
    let items = products.map((product,index) =>{
        return(
            <div className="product-card" key={index}>
                <img className="product-image" src={product.image.stringValue} />
                <h2>{product.pname.stringValue}</h2>
                <h2>&#8377;	 {product.price.integerValue}</h2>
            </div>
        )
    })
    return(
        <div className="products-container">
            {isLoading ? <h3>products loading...</h3>: items }
        </div>
    )
} 