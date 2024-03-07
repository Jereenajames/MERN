import React from 'react'
import { Link } from 'react-router-dom'


const Product = (props : any) => {
  return (
    <>
        <h4> {props.product.title}  </h4>
        <img src={props.product.image} width='300px' />
        <div><Link to={'/product/' + props.product.id} > Show More </Link> </div>
        <hr/>
    </>
  )
}

export default Product