import React from 'react'
import './Nav.css';
import { Outlet, Link } from "react-router-dom";



import Sidebar from './Sidebar';
import NewArrival from './NewArrival';
import Trending from './Trending';
import TopRated from './TopRated';
import DealOfTheDay from './DealOfTheDay';
import NewProducts from './NewProducts';
function ProductContainer() {
  return (
    <div>

<div className="product-container">

<div className="container">
 
<Sidebar/>


  <div className="product-box">

   

    <div className="product-minimal">

     <NewArrival/>

      <Trending/>

      <TopRated/>

    </div>

    <DealOfTheDay/>



    <NewProducts/>

  </div>

</div>

</div>
    </div>
  )
}

export default ProductContainer