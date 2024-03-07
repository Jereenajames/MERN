import React , {useState,useReducer,useContext,createContext, useEffect}from 'react'
import cartReducer from "../reducer/cartReducer"



const [prouducts, setProuducts] = useState([])
useEffect(() => {
  fetch('http://fakestoreapi.com/products')
  .then((response) => response.json())
  .then((data) => setProuducts(data))
  .catch((error) =>{ return(error)})
}, [])

const CartContextState = createContext();
const CartContext = (children : any) => {
    const CartContextState =  createContext("");
    const [cart,dispatchCart] = useReducer(cartReducer, {
            cart : [],
            prouducts : prouducts
    })
  return (
   <CartContextState.Provider value={{cart, dispatchCart}}>
    {children}
   </CartContextState.Provider>
  )
}

export default CartContext

export const CartState = () => {
    return useContext(CartContextState)
}