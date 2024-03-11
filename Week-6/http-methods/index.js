import  express from "express";
import users from "./data.js"
import {v4 as uuidv4} from 'uuid';
const app = express();
app.use(express.json())


//get All Users
app.get ("/",(req,res) =>{
    res.status(200).json({success : true, data :users});
})

//get user by id 
app.get ("/api/v1/users/:id",async(req,res) =>{
       try {
        const {id} = req.params;
        const findUser = users.find((user) => user.id === + id );
        
        if(!findUser)
         return res.status(404).json({success : false , message : `No user with the id  : ${id}`});
                 res.status(200).json({success: true, message:"User found "})
    } catch (error) {
        res.status(400).json({success: false, message:"User not found "})
    }
})

app.get("/",(req, res) =>{
//     res.status(200).json({success : true, message : "User found " })
//     try{
//         const{id} = req.params;
//         const findUser = users.find((user) => user.id === + id );
//         if(!findUser)
//         return res.status(404).json({success : false , message : `No user with the id  : ${id}`});
//         res.status(200).json({success: true, message:"User found "})
//     }
//     catch{
//         res.status(400).json({success: false, message:"User not found "})
//     }
// })





app.listen(5000,()=>{
    console.log("Server is runing in : http://localhost:5000");
})