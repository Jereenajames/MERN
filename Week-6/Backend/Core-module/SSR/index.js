const http = require("http")

const app = http.createServer((req,res) =>{
    if(req.url === "/"){
        res.write("<h1> Welcome to SSR</h1>");
        res.end()
    }else{
        res.write("<h1>something went rong </h1>"
        <a href = "/" > Back to home page</a>
        )}
})
app.listen(5000, () =>{
    console.log("Server is runing in : http://localhost:5000");
})