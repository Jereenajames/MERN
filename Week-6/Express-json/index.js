import express  from "express";
import products from "./data.js"


const app = express();

app.use(express.static("./client"));

// midleware => function => req,res, next()
//req <=> middlleware <=> res

const auth = (req,res,next) =>{
 const {username} = req.query;
 if(username!== jerry ){
    res.status(404).json({success: false, message :"Unauthorised "})
 }else{
    next();
 }
   }

//    app.use(auth);


app.get("/", (req, res) => {
    res.status(200).json({success : true, message :" This is json file"})
})

app.get("/api/v1/product",auth,(req,res) => {
    res.status(200).json({success : true, data : products})
})

//http://localhost:5000/api/v1/api/products/query?search=mens

app.get("/api/v1/api/products/query",(req,res) =>{
   const {search, limit} = req.query;
   const filteredProducts = products.filter((product) => 
   product.title.toLowerCase().startsWith(search));


if(filteredProducts.length >= 1) {
    let limitedProducts = filteredProducts.slice(0,limit )
res.status(200).json({success : true, data : limitedProducts});
}
else{
    res.status(200).json({success : true, data : filteredProducts});
}
})




app.listen(5000, () =>{
    console.log("server runing in:  http://localhost:5000");
})