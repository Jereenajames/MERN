import products from "../data"
import { Product } from "./Product"

const Products = () => {

 
  return (
    <div>
      <h2>Product Details </h2>
      {products.map((ele) => {
        return(
          <>
              <Product key={ele.id} value={ele}/>
          </>
          
        )
      })}
    </div>
  )
}

export default Products