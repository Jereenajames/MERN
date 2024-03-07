import products from "../data";

const Products = () =>{
    return(
        <>
        <h2>Products</h2>
        {/* <h3>{JSON.stringify(products[0])}</h3> */}
        {products.map((products) =>{
            return(
                <h2>{Product.title}</h2>
                <h2>{Product.price}</h2>        
            )
        }
         )}
        </>
    );
}
export default Products