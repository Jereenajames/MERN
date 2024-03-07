
import express from express;
import 
const  app = exprss ();
const PORT = 5000


app.get("/",(req,res) =>{
    res.status(200).json({sucess :true, message : "Welcome"})
});
app.get("/api/v1/users")