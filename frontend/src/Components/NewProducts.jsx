import React from 'react'
import './Nav.css';
import { Outlet, Link } from "react-router-dom";
import { useState ,useEffect } from 'react';
import axios from 'axios';

import NewProductCard from './NewProductCard';
function NewProducts() {


    const baseURL="http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
    const [prod,setprod] =useState();
    
    useEffect(() => {
         axios.get(baseURL).then((response) => {
            setprod(response.data);
            console.log(response.data)
        });
      }, []);


  return (
    <div className="product-main">

    <h2 className="title">New Products</h2>

    <div className="product-grid">


    {
            prod?
               
            prod.map(item => (
              <Link to={`/product/maybelline/${item.id}`} key={item.id}>
                    <NewProductCard 
                    img1={item.api_featured_image}
                    img2={item.api_featured_image}
                    salepercent={15} 
                    brand={item.brand}
                    name = {item.name}
                    price={Math.ceil(item.price)}
                    id={item.id}
                    key={item.id} />
              </Link>
            ))
                
            :<h1>...Loading</h1>
    }


    </div>

  </div>
  )
}

export default NewProducts