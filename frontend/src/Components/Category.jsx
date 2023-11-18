import React from 'react'
import img1 from "../images/icons/dress.svg"
import img2 from "../images/icons/coat.svg"
import img3 from "../images/icons/glasses.svg"
import img4 from "../images/icons/shorts.svg"
import img5 from "../images/icons/tee.svg"
import img6 from "../images/icons/jacket.svg"
import img7 from "../images/icons/watch.svg"
import img8 from "../images/icons/hat.svg"
import { Outlet, Link } from "react-router-dom";
import "./Nav.css"
function Category() {
  return (
   
    <div className="category">

      <div className="container">

        <div className="category-item-container has-scrollbar">
          <div className="category-item">

            <div className="category-img-box">
              <img src={img5} alt="t-shirts" width="30"/>
            </div>

            <div className="category-content-box">

              <div className="category-content-flex">
                <h3 className="category-item-title">Grocery</h3>

                <p className="category-item-amount">(35)</p>
              </div>

             <Link to={`/category/grocery`} className="category-btn">Show all</Link>

            </div>

          </div>
          
          <div className="category-item">

            <div className="category-img-box">
              <img src={img1} alt="dress & frock" width="30"/>
            </div>

            <div className="category-content-box">

              <div className="category-content-flex">
                <h3 className="category-item-title">Electronics</h3>

                <p className="category-item-amount">(53)</p>
              </div>

              <Link to={`/category/electronics`} className="category-btn">Show all</Link>

            </div>

          </div>

          <div className="category-item">

            <div className="category-img-box">
              <img src={img2} alt="winter wear" width="30"/>
            </div>

            <div className="category-content-box">

              <div className="category-content-flex">
                <h3 className="category-item-title">Jewelery</h3>

                <p className="category-item-amount">(58)</p>
              </div>

             <Link to={`/category/jewelery`} className="category-btn">Show all</Link>

            </div>

          </div>

          <div className="category-item">

            <div className="category-img-box">
              <img src={img3} alt="glasses & lens" width="30"/>
            </div>

            <div className="category-content-box">

              <div className="category-content-flex">
                <h3 className="category-item-title">Men's clothing</h3>

                <p className="category-item-amount">(68)</p>
              </div>

             <Link  to={`/category/men's clothing`} className="category-btn">Show all</Link>

            </div>

          </div>

          <div className="category-item">

            <div className="category-img-box">
              <img src={img4} alt="shorts & jeans" width="30"/>
            </div>

            <div className="category-content-box">

              <div className="category-content-flex">
                <h3 className="category-item-title">Women's clothing</h3>

                <p className="category-item-amount">(84)</p>
              </div>

             <Link to={`/category/women's clothing`} className="category-btn">Show all</Link>

            </div>

          </div>

          <div className="category-item">

            <div className="category-img-box">
              <img src={img5} alt="t-shirts" width="30"/>
            </div>

            <div className="category-content-box">

              <div className="category-content-flex">
                <h3 className="category-item-title">Beauty Products</h3>

                <p className="category-item-amount">(35)</p>
              </div>

             <Link to={`/category/beauty products`} className="category-btn">Show all</Link>

            </div>

          </div>

       

        </div>

      </div>

    </div>
  )
}

export default Category