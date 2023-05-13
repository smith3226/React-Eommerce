import React, { useState , useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Product from '../../components/Products/product'

const CategoryProducts = () => {
    const {name} = useParams()

    const[products,setProducts] = useState([])

    useEffect(() => {
        const fetchCategories = async () => {
          const response = await fetch(
            `https://fakestoreapi.com/products/category/${name}`
          );
    
          const data = await response.json();
          setProducts(data);
        };
        fetchCategories();
      }, []);

      if (products.length === 0) return <div>Loading...</div>

  return (
      <Product products={products}/>

  )
}

export default CategoryProducts
