import React from 'react'
import { Products } from '../Products'
import ProductCard from '../components/ProductCard'

const Home = () => {
  return (
    <div>
    <h1 className='text-3xl my-5'>List Products</h1>
    <div className='grid lg:grid-cols-4  md:grid-cols-3  sm:grid-cols-2 gap-5'>
         {Products.map((Products,key)=>
        <ProductCard key ={key} data={Products}/>
      )}
    </div>
    </div>
  )
}

export default Home