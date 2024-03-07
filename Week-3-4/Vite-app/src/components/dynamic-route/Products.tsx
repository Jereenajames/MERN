import React from 'react'
import products from '../../data'
import Product from './Product'

const Products = (props : any) => {
  return (
    <>
        {products.map((ele) => { return( <Product product={ele} key={ele.id}/>)})}
    </>
  )
}

export default Products