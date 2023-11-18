import React from 'react'
import { useState } from 'react';
import axios from "axios";
import Banner from "./Banner"
import Category from './Category';
import ProductContainer from './ProductContainer';
import Footer from "./Footer"
import Nav from './Nav';
function Home() {
    const [title,setTitle]=useState();
    const [description,setDescription]=useState();
    const handleSubmit=(e)=>
    {
      e.preventDefault();
      axios
      .post("http://localhost:8000/posts", 
      {
        "title":title,
        "description":description
      }
      )
      .then((response) => {
        console.log("response is: ",response)
      }); 
    }
  return (
    <div>
     
        <Banner/>
        <Category/>
        <ProductContainer/>
        <Footer/>
    </div>
  )
}

export default Home