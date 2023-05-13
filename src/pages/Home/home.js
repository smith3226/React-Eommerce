import React, { useState } from "react";
import Hero from "../../components/Hero";
import Products from "../../components/Products/product";
import Stats from "../../components/StatCard/stats";
// import AllProducts from "../Products/allProducts";

import { useEffect } from "react";
import Categories from "../../components/Categories";

const Home = () => {

  const [products,setProducts] = useState([])
  //calling the api here
   useEffect(() => {
    const fetchProducts = async()=>{
    const response = await fetch('https://fakestoreapi.com/products?limit=12')
    const data = await response.json()
    setProducts(data)
    }
    fetchProducts()
   }, []);
  return (
    <>
      <Hero />
      <Categories/>
      <div className="flex flex-col text-center w-full mt-20">
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
          PRODUCTS
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          MOST POPULAR PRODUCTS
        </h1>
      </div>

      {
        products.length > 0 ?
        <Products products={products}/>
        :
        <div>Loading...</div>
      }



      <Stats />
    </>
  );
};

export default Home;
