const fs = require("fs");
fs.readfile("./content.txt",{ending: "utf-8"},(err,data) =>{
console.log(data);
})

fs.writeFile(
    "./output/write-async.txt",
    "I am async file \n",
    {  flag :"a"}, (err,date)=>{
        if(err) return "something wen wrong";
        console.log("file written sucessfuly");

    }
    
    
);