import React from 'react'
import { useParams } from "react-router-dom"
import { useState ,useEffect } from 'react';
import axios from 'axios';
import Nav from './Nav';
import './Nav.css';
import "./Product.css"
import { grocery } from './grocery';
function NewProduct({setopenCart}) {
  const category = useParams().category;
  const id = useParams().id;
  console.log("category is :",category," and id is:",id);
  

  const baseURL=`https://fakestoreapi.com/products/category/${category}`
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const idToFilter = id; // Replace with the ID you want to filter by
 
  useEffect(() => {
    // Fetch data from the API using Axios in the useEffect hook
    axios.get(baseURL) // Replace with the API endpoint
      .then((response) => {
        if(category=='grocery')
        {
          setData(grocery.grocery);
        }
        else
        setData(response.data); // Store the fetched data in the state
        console.log(response.data,"  is the data from api")
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // The empty dependency array ensures the effect runs once after component mount



   
  useEffect(() => {
    // Filter the data based on the ID and update the filteredData state
    const filtered = data.filter(item => item.id == idToFilter);
    setFilteredData(filtered);         
    console.log(filtered," is the filtered data" , filteredData);     
  }, [data, idToFilter]);
  
  const addToCartHandler= async()=>
  {
      setopenCart(true);
     
      axios
      .post("http://localhost:8000/product", {
        "name":filteredData[0].title,
        "description":filteredData[0].description,
        "image":filteredData[0].image,
        "price":filteredData[0].price,
        "quantity":1,
      })
      .then(async (response) => {
        console.log(response.data.id,"heyyyyy ");
        if(response.data.message=='already exists')
        {
          console.log("i am updating it ")
          await axios.patch(`http://localhost:8000/product/${response.data.id}`, {quantity: response.data.quantity+1});
        }
        else{
          console.log(response.data);
        }
      });

     
  }
  


  return (
    <div>
    <div className="product-detail-container">

        <div className="image-container">
          <img
            src={filteredData[0]?.image}
            className="product-detail-image"
          />
        </div>


      <div className="product-detail-desc">
        <h1>{filteredData[0]?.title}</h1>
        <div className="reviews">
      
        
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star-outline"></ion-icon>
            <ion-icon name="star-outline"></ion-icon>
          
          
        </div>
        <h4>Details:</h4>
        <p>{filteredData[0]?.description}</p>
        <p className="price">₹{filteredData[0]?.price}</p>
        
        <div className="buttons">
          <button
            type="button"
            className="add-to-cart"
            onClick={addToCartHandler}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>

    <div className="maylike-products-wrapper">
      <h2>You may also like</h2>
      <div className="marquee">
        <div className="maylike-products-container track">
          Recommended products
         {/* {products.map((item) => (
            <Product key={item._id} product={item} />
          ))} */}
        </div>
      </div>
    </div>
  </div>

)
}

export default NewProduct;