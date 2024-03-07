import React ,{useState}from 'react'
import { useParams } from 'react-router-dom'
import products from '../../data'


const Productshow = () => {
    const id = useParams().id
    
    let details = products.find((product) => product.id.toString() === id);
    
  return (
    <>
        <h2> Product Details </h2>
        <h3> {details?.title} </h3>
        <img src={details?.image} width='300px' />
        <p> Price : {details?.price}</p>
        <p> Rating : {details?.rating.rate} ({details?.rating.count})</p>
        <p> category : {details?.category}</p>
        <p> Description : {details?.description}</p>
    </>
  )
}

export default Productshow