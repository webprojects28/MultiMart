import React from 'react'
import './Nav.css';
import { Outlet, Link } from "react-router-dom";

import { useState ,useEffect } from 'react';
import axios from 'axios';
import img5 from "../images/products/clothes-1.jpg"
import img6 from "../images/products/clothes-2.jpg"
import img7 from "../images/products/clothes-3.jpg"
import img8 from "../images/products/shirt-1.jpg"
import img9 from "../images/products/jacket-5.jpg";
import img10 from "../images/products/jacket-1.jpg";
import img11 from "../images/products/jacket-3.jpg"
import img12 from "../images/products/shorts-1.jpg"


function TopRated() {

  const [prod,setprod] =useState();
  const baseURL=`https://fakestoreapi.com/products/category/jewelery`

  useEffect(() => {
    axios.get(baseURL).then((response) => {
       setprod(response.data);
       console.log(response.data)
   });
 }, []);

  return (
    <div className="product-showcase">

        <h2 className="title">Top Rated</h2>

        <div className="showcase-wrapper has-scrollbar">

          <div className="showcase-container">

          {
             prod?
             prod.map((item,index) => (
              index<3?
               <Link to={`/category/jewelery/${item.id}`} className="marginbottomsidebar" key={item.id}>
                
                      <div className="showcase">

             <Link to={`/category/jewelery/${item.id}`} className="showcase-img-box">
                <img src={item.image} alt="relaxed short full sleeve t-shirt" width="70" className="showcase-img"/>
              </Link>

              <div className="showcase-content">

               <Link to={`/category/jewelery/${item.id}`}>
                  <h4 className="showcase-title">{item.title}</h4>
                </Link>

               <Link to={`/category/jewelery/${item.id}`} className="showcase-category">Jewelery</Link>

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
               <Link to={`/category/jewelery/${item.id}`} className="marginbottomsidebar" key={item.id}>
                
                      <div className="showcase">

             <Link to={`/category/jewelery/${item.id}`} className="showcase-img-box">
                <img src={item.image} alt="relaxed short full sleeve t-shirt" width="70" className="showcase-img"/>
              </Link>

              <div className="showcase-content">

               <Link to={`/category/jewelery/${item.id}`}>
                  <h4 className="showcase-title">{item.title}</h4>
                </Link>

               <Link to={`/category/jewelery/${item.id}`} className="showcase-category">Jewelery</Link>

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

export default TopRated

