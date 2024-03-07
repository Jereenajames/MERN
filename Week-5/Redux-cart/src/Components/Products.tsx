import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { initProducts } from "../Features/cartSlice";

export const Products = () => {

  const dispatch = useDispatch()
    const  {Products} = useSelector((state:any) =>state.cart)
    useEffect(() => {
      // fetch("https://fakestoreapi.com/products")
      // .then(res => res.json())
      // .then((data) => console.log(data));

      axios.get("https://fakestoreapi.com/products")
      .then((res) =>    
      dispatch(initProducts(res?.data)));
      
    },[])
  return <div>Products </div>
  };
