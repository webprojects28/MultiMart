import React from "react";
import "./Cart.css";
import "./Nav.css"
import { useEffect,useState } from "react";
import axios from "axios"
import { Outlet, Link } from "react-router-dom";
const Cart = ({openCart,setprodlen,setopenCart}) => {
  const [products,setProducts]=useState([])
  
  useEffect(() => {
        axios.get("http://localhost:8000/product").then((response) => {
          setProducts(response.data);
          console.log(response.data , "i am in the cart")
      });
      setprodlen(products.length)
     
  }, [products,openCart]);


  const deletehandler=(item)=>{
      axios.delete(`http://localhost:8000/product/${item._id}`)
      .then((response) => {
         // Store the fetched data in the state
        console.log(response.data,"  we are deleting it ")
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
      let filteredArray = products.filter(a => a._id !== item._id);
      setProducts(filteredArray);
   
  }

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };
  const resethandler=()=>{
    axios.delete(`http://localhost:8000/product/`)
    setProducts([])
  }
  const plusHandler=(id,quantity)=>{
    axios.patch(`http://localhost:8000/product/${id}`, {quantity: quantity+1});
  }
  const minusHandler=(id,quantity)=>{
    if(quantity>1)
    {
      axios.patch(`http://localhost:8000/product/${id}`, {quantity: quantity-1});
    }
   
  }

  const handlePayment = async () => {
    setopenCart(false);
  };
  return (
    <div className="cart">

      <h1 className="titleStyle">Products in your cart</h1>

      <div className="itemList">

      {products?.map((item) => (
        <div className="item" key={item._id}>
          <img className="itemimg" src={item.image} alt="" /> 
          <div className="details">
            <h1 className="detailsh1 titleStyle">{item.name}</h1>
            <p className="itemp">{item.description?.substring(0, 30)+" ....."}</p>
            <div className="quantity">
              <button className="plus buttonQuantity" onClick={()=>plusHandler(item._id,item.quantity)}> <span>+</span></button>
              <button className="minus buttonQuantity" onClick={()=>minusHandler(item._id,item.quantity)}> <span>-</span> </button>
            </div>
            <div className="itemprice">
              {item.quantity} x ${item.price}
            </div>
          </div>

          <ion-icon name="trash-outline" color="danger"
            className="itemdelete"
            onClick={() =>deletehandler(item)}
          />
        </div>
      ))}

      </div>
   
      <div className="total">
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      <Link to="/checkout">

      <button className="buttonStyle" onClick={handlePayment}>PROCEED TO CHECKOUT</button>
      </Link>
      <span className="reset" onClick={resethandler}>
        Reset Cart
      </span>
    </div>
  );
};

export default Cart;