import './App.css';

import React, { useState } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Components/Home"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Product from './Components/Product';
import Checkout from './Components/Checkout';
import Nav from './Components/Nav';
import CategoryPage from './Components/CategoryPage';
import NewProduct from './Components/NewProduct';
function App() {
  const [openCart,setopenCart] =useState(false);
  const [refreshPage,setRefreshPage]=useState(0);

  return (
  
    <BrowserRouter>
    <Nav setopenCart={setopenCart} openCart={openCart} setRefreshPage={setRefreshPage} refreshPage={refreshPage} />
         
       <Routes>
                 <Route  path='/' element={< Home />}></Route>  
                 <Route  path='/about' element={< About />}></Route>  
                 <Route  path='/contact' element={< Contact />}></Route>  
                 <Route  path='/product/:brand/:id' element={< Product setopenCart={setopenCart} />}></Route> 
                 <Route  path='/checkout' element={<Checkout/>}></Route>   
                 <Route  path='/category/:category' element={<CategoryPage refreshPage={refreshPage} />}></Route> 
                 <Route  path="/category/:category/:id" element={<NewProduct setopenCart={setopenCart}  />}> </Route>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
