import React from 'react'
import "./Nav.css"
import banner from "../images/banner-3.jpg";

import { Outlet, Link } from "react-router-dom";
function Banner() {
  return (
  <div className="banner">

   <div className="container">

   <div className="slider-container has-scrollbar">

   <div className="slider-item">

<img src="https://images.pexels.com/photos/5579177/pexels-photo-5579177.jpeg" alt="modern sunglasses" className="banner-img"/>

<div className="banner-content">

  <p id="titlebanner1" className="banner-subtitle">Fresh from Farm</p>

  <h2 id="banner" className="banner-title">Fresh Grocery</h2>

  <p id="titlebanner2" className="banner-text">
    Starting at ₹ <b>15</b>.00
  </p>

  <Link to="/category/grocery" className="banner-btn">Shop now</Link>

</div>

</div>

   <div className="slider-item">

      <img src={banner} alt="new fashion summer sale" className="banner-img"/>

      <div className="banner-content">

        <p className="banner-subtitle">Sale Offer</p>

        <h2 className="banner-title">New fashion summer sale</h2>

        <p className="banner-text">
          Starting at ₹ <b>29</b>.99
        </p>

        <Link to="/category/women's clothing" className="banner-btn">Shop now</Link>

       </div>

     </div>

    <div className="slider-item">

      <img src="https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="women's latest fashion sale" className="banner-img"/>

      <div className="banner-content">

        <p id="titlebanner1" className="banner-subtitle">Trending item</p>

        <h2  id="titlebanner1"className="banner-title">Latest fashion sale</h2>

        <p  id="titlebanner3" className="banner-text">
          Starting at ₹ <b>20</b>.00
        </p>

        <Link to="/category/men's clothing"  className="banner-btn">Shop now</Link>

      </div>

    </div>

   

    


  
   </div>

  </div>

</div>
  )
}

export default Banner