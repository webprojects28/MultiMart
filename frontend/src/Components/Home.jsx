import React from 'react'
import Banner from "./Banner"
import Category from './Category';
import ProductContainer from './ProductContainer';
import Footer from "./Footer"

function Home() {

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