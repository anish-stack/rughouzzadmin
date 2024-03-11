import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-hot-toast';
import Productcard from './ProductsCard';
const AllProducts = () => {
  const [product, setProduct] = useState()
  const handleFetch = async () => {

    try {
      const response = await axios.get(
        'https://motion-63l4.onrender.com/api/v1/all-product');


      // console.log(response.data.data);
      setProduct(response.data.data)
    } catch (error) {
      console.error('Error:', error);
    }
  };
  useEffect(() => {
    handleFetch()
  }, [])
  return (
    <Productcard Product={product} />
  )
}

export default AllProducts