import React from 'react'
import './Nav.css';
import { Link } from "react-router-dom";
import "./Sidebar.css"
import { useState ,useEffect } from 'react';
import axios from 'axios';

function Sidebar() {
  const [prod,setprod] =useState();
  const baseURL=`https://fakestoreapi.com/products/category/women's clothing`

  useEffect(() => {
    axios.get(baseURL).then((response) => {
       setprod(response.data);
       console.log(response.data)
   });
 }, [baseURL]);

  return (
    <div className="sidebar  has-scrollbar" data-mobile-menu>

    <div className="product-showcase">

      <h3 className="showcase-heading">best sellers</h3>

      <div className="showcase-wrapper">

        <div className="showcase-container ">

          {
             prod?
             prod.map(item => (
              
               <Link to={`/category/women's clothing/${item.id}`} className="marginbottomsidebar" key={item.id}>
                
                      <div className="showcase">

                     <Link to={`/category/women's clothing/${item.id}`} className="showcase-img-box">
                        <img src={item.image} alt="baby fabric shoes" width="60" height="60"
                          className="showcase-img"/>
                      </Link>

                      <div className="showcase-content">

                      <Link to="/">
                          <h4 className="showcase-title">{item.title}</h4>
                        </Link>

                        <div className="showcase-rating">
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                        </div>

                        <div className="price-box">
                          <del>₹{item.price}</del>
                          <p className="price">₹{item.price}</p>
                        </div>

                      </div>

                   </div>
               </Link>
             ))
                 
             :<h1>...Loading</h1>
          }
        


        </div>

      </div>

    </div>

  </div>
  )
}

export default Sidebar