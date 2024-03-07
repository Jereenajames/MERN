import React, { useState } from 'react'


export const Product = (props : any) => {
  // console.log(props.value,"props.value")
  const [Show, setShow] = useState(false)
  return (
    <>
        <img src={props.value.image} width={'300px'}/>
        <h3> {props.value.title} </h3>
        <button  onClick={() => setShow(!Show)} > Show More</button>
        {Show ? 
        <>
          <p> Price : {props.value.price}</p>
          <p> Rating : {props.value.rating.rate} ({props.value.rating.count})</p>
          <p> category : {props.value.category}</p>
          <p> Description : {props.value.description}</p>
        </>
        : "" }

        
        

        <hr/>
    </>
  )
}
