import React from 'react'
import './Nav.css';
import { Outlet, Link } from "react-router-dom";

import { useState ,useEffect } from 'react';
import axios from 'axios';

function DealOfTheDay() {

  const [prod,setprod] =useState();

  const baseURL=`https://fakestoreapi.com/products/category/jewelery?limit=3`

  useEffect(() => {
    axios.get(baseURL).then((response) => {
       setprod(response.data);
       console.log(response.data)
   });
  }, []);


  return (
    <div className="product-featured">

    <h2 className="title">Deal of the day</h2>

    <div className="showcase-wrapper has-scrollbar">

      <div className="showcase-container">
      {prod && <Link to={`/category/jewelery/${prod[2].id}`} >
        <div className="showcase">
          
          <div className="showcase-banner">
            {prod?<img src={prod[2]?.image} alt="shampoo, conditioner & facewash packs" className="showcase-img"/>:''}
          </div>

          <div className="showcase-content">
            
            <div className="showcase-rating">
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star-outline"></ion-icon>
              <ion-icon name="star-outline"></ion-icon>
            </div>

           <Link to="/">
              <h3 className="showcase-title">{prod[2]?.title}</h3>
            </Link>

            <p className="showcase-desc">
               {prod[2]?.description}
            </p>

            <div className="price-box">
              <p className="price">₹{prod[2]?.price}</p>

              <del>₹{prod[2]?.price}</del>
            </div>

            <button className="add-cart-btn">add to cart</button>

            <div className="showcase-status">
              <div className="wrapper">
                <p>
                  already sold: <b>20</b>
                </p>

                <p>
                  available: <b>40</b>
                </p>
              </div>

              <div className="showcase-status-bar"></div>
            </div>

            <div className="countdown-box">

              <p className="countdown-desc">
                Hurry Up! Offer ends in:
              </p>

              <div className="countdown">

                <div className="countdown-content">

                  <p className="display-number">360</p>

                  <p className="display-text">Days</p>

                </div>

                <div className="countdown-content">
                  <p className="display-number">24</p>
                  <p className="display-text">Hours</p>
                </div>

                <div className="countdown-content">
                  <p className="display-number">59</p>
                  <p className="display-text">Min</p>
                </div>

                <div className="countdown-content">
                  <p className="display-number">00</p>
                  <p className="display-text">Sec</p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </Link>}
      </div>

      <div className="showcase-container">
      {prod && <Link to={`/category/jewelery/${prod[1].id}`} >
      <div className="showcase">
          
          <div className="showcase-banner">
            {prod?<img src={prod[1]?.image} alt="shampoo, conditioner & facewash packs" className="showcase-img"/>:''}
          </div>

          <div className="showcase-content">
            
            <div className="showcase-rating">
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star-outline"></ion-icon>
              <ion-icon name="star-outline"></ion-icon>
            </div>

           <Link to="/">
              <h3 className="showcase-title">{prod[1]?.title}</h3>
            </Link>

            <p className="showcase-desc">
               {prod[2]?.description}
            </p>

            <div className="price-box">
              <p className="price">₹{prod[1]?.price}</p>

              <del>₹{prod[1]?.price}</del>
            </div>

            <button className="add-cart-btn">add to cart</button>

            <div className="showcase-status">
              <div className="wrapper">
                <p>
                  already sold: <b>20</b>
                </p>

                <p>
                  available: <b>40</b>
                </p>
              </div>

              <div className="showcase-status-bar"></div>
            </div>

            <div className="countdown-box">

              <p className="countdown-desc">
                Hurry Up! Offer ends in:
              </p>

              <div className="countdown">

                <div className="countdown-content">

                  <p className="display-number">360</p>

                  <p className="display-text">Days</p>

                </div>

                <div className="countdown-content">
                  <p className="display-number">24</p>
                  <p className="display-text">Hours</p>
                </div>

                <div className="countdown-content">
                  <p className="display-number">59</p>
                  <p className="display-text">Min</p>
                </div>

                <div className="countdown-content">
                  <p className="display-number">00</p>
                  <p className="display-text">Sec</p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </Link>}
      </div>

    </div>

  </div>
  )
}

export default DealOfTheDay