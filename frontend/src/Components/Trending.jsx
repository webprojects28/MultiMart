import React from 'react'
import './Nav.css';
import { Outlet, Link } from "react-router-dom";

import { useState ,useEffect } from 'react';
import axios from 'axios';

function Trending() {

  const [prod,setprod] =useState();
  const baseURL=`https://fakestoreapi.com/products/category/men's clothing`

  useEffect(() => {
    axios.get(baseURL).then((response) => {
       setprod(response.data);
       console.log(response.data)
   });
 }, []);

  return (
    <div className="product-showcase">

        <h2 className="title">Trending</h2>

        <div className="showcase-wrapper has-scrollbar">

          <div className="showcase-container">

          {
             prod?
             prod.map((item,index) => (
              index<3?
               <Link to={`/category/men's clothing/${item.id}`} className="marginbottomsidebar" key={item.id}>
                
                      <div className="showcase">

             <Link to={`/category/men's clothing/${item.id}`} className="showcase-img-box">
                <img src={item.image} alt="relaxed short full sleeve t-shirt" width="70" className="showcase-img"/>
              </Link>

              <div className="showcase-content">

               <Link to={`/category/men's clothing/${item.id}`}>
                  <h4 className="showcase-title">{item.title}</h4>
                </Link>

               <Link to={`/category/men's clothing/${item.id}`} className="showcase-category">Men's clothing</Link>

                <div className="price-box">
                  <p className="price">₹{item.price}</p>
                  <del>₹{item.price}</del>
                </div>

              </div>

            </div>
               </Link>:''
             ))
                 
             :<h1>...Loading</h1>
          }
        
          </div>
          <div className="showcase-container">

          {
             prod?
             prod.map((item,index) => (
                index>=3?
               <Link to={`/category/men's clothing/${item.id}`} className="marginbottomsidebar" key={item.id}>
                
                      <div className="showcase">

             <Link to={`/category/men's clothing/${item.id}`} className="showcase-img-box">
                <img src={item.image} alt="relaxed short full sleeve t-shirt" width="70" className="showcase-img"/>
              </Link>

              <div className="showcase-content">

               <Link to={`/category/men's clothing/${item.id}`}>
                  <h4 className="showcase-title">{item.title}</h4>
                </Link>

               <Link to={`/category/men's clothing/${item.id}`} className="showcase-category">men's clothing</Link>

                <div className="price-box">
                  <p className="price">₹{item.price}</p>
                  <del>₹{item.price}</del>
                </div>

              </div>

            </div>
               </Link> :''
             ))
                 
             :<h1>...Loading</h1>
          }
        
          </div>

        </div>

      </div>
  )
}

export default Trending

