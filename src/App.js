import React from "react"
import Header from "./components/Header/header"
import Home from "./pages/Home/home"
import Footer from "./components/Footer/Footer"

import { Routes , Route} from "react-router-dom"
import SingleProduct from "./pages/Product/singleProduct"
import Products from "./pages/Products/allProducts"
import CategoryProducts from "./pages/Category"
import Cart from "./pages/Cart/Cart"

export default function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/products/:id' element={<SingleProduct/>}/> 
        <Route path='/products' element={<Products/>}/> 
        <Route path='/categories/:name' element={<CategoryProducts/>}/> 
        <Route path='*' element={<div>404</div>}/>
        <Route path='/cart' element={<Cart/>}/>  
        
      </Routes>
  

      <Footer/>
      
    </>
  )
}
