import React , {useContext}from 'react'
import { CartState, Holder } from '../../App'
import Products from '../Products'


export const Context = () => {

    
   let value = CartState()?.state;
    console.log(value,"State in Context")
    return (
    // <button onClick={()=> {setdata(!data)}}> {data ? "True" : "False"} </button>
    <>
        <Products/>
    </>
  )
}
