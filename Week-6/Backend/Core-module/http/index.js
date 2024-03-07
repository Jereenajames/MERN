const http = require("http");

console.log(http);

const app = http.createServer((req,res) => {
    if (req.url === "/"){
        //http://localhost:5000
        res.write("<h1>vWelcome to the HTTP Module</h1>")
        res.end();
    }
    else if (req.url === "/about"){
        //http://localhost:5000/about
        res.write("<h1>This is About Page</h1>");
        res.end();
    }
    else{
        
    }

// switch(req,res){
//     case 1:
//         console.log("<h1>vWelcome to the HTTP Module</h1>");
//         break;
//     case 2:
// }

}); 

app.listen(5000, () => {
    console.log("server is runnong in http://localhost:5000");
});

