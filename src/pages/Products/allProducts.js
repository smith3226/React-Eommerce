import React from "react";
import { useState, useEffect } from "react";
import Product from "../../components/Products/product";

import Categories from "../../components/Categories";

const Products = () => {

  const [products,setProducts] = useState([])
  //calling the api here
   useEffect(() => {
    const fetchProducts = async()=>{
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    setProducts(data)
    }
    fetchProducts()
   }, []);

  return (
    <div>
      <Categories/>

      <div className="flex flex-col text-center w-full mt-20">
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
          PRODUCTS
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          All PRODUCTS
        </h1>
      </div>

      {
        products.length > 0 ?
        <Product products={products} />
        : <div>Loading...</div>
      }
     
    </div>
  );
};

export default Products;
