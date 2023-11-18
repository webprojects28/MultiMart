import React from 'react'
import './Nav.css';
import { Outlet, Link } from "react-router-dom";
import "./NewProductCard.css"

function NewProductCard({img1,img2,salepercent,brand,name,price,id}) {
  const discount = price- ((price*salepercent)/100);
  let x = Math.floor((Math.random() * 6) + 1);
  return (
    
    <div className="showcase">

        <div className="showcase-banner">

          <img  src={img1} alt={name} className="product-img default"/>
          <img src={img2} alt={name}  className="product-img hover"/>
          {x==1 && <p className="showcase-badge angle pink">new</p>}
          {x==2 && <p className="showcase-badge">{salepercent}%</p>}
          {x==3 && <p className="showcase-badge angle black">sale</p>}
          <div className="showcase-actions">

            <button className="btn-action">
              <ion-icon name="heart-outline"></ion-icon>
            </button>

            <button className="btn-action">
              <ion-icon name="eye-outline"></ion-icon>
            </button>

            <button className="btn-action">
              <ion-icon name="repeat-outline"></ion-icon>
            </button>

            <button className="btn-action">
              <ion-icon name="bag-add-outline"></ion-icon>
            </button>

          </div>

        </div>

        <div className="showcase-content">

        <Link to={`/product/${brand}/${id}`} className="showcase-category">{brand}</Link>

         <Link to={`/product/${brand}/${id}`}>
            <h3 className="showcase-title">{name}</h3>
          </Link>

          <div className="showcase-rating">
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star-outline"></ion-icon>
            <ion-icon name="star-outline"></ion-icon>
          </div>

          <div className="price-box">
            <p className="price">₹{discount}</p>
            <del>₹{price}.00</del>
          </div>

        </div>

      </div>
  )
}

export default NewProductCard