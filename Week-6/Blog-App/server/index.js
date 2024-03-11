
import express from "express";
import { getAllUsers,getUserById } from "./controllers/userController.js";

const  app = express();
const PORT = 5000


app.get("/",(req,res) =>{
    res.status(200).json({sucess :true, message : "Welcome"})
});

//Geting all the users

app.get("/api/v1/users", getAllUsers);
app.get("/api/v1/users/:id", getUserById)
// app.get("/api/v1/users", (req,res) =>{
//     try {
//         res.status(200).json({sucess :true, data:users})
    
//     } catch (error) {
//         res.status(400).json({sucess :false, message : error})
//     }

// })

// get user by id 

// app.get("/api/v1/users/:id",(req,res) =>{
//     try {
//         const{id} =req.params;
//         const findUser = users.find((user) => user.id === +id)
//         if(!findUser)
//         return res.status(404).json({sucess : false,message:`No user with this id :${id}` })
//         res.status(200).json({sucess:true,data :findUser})
//     } catch (error) {
//         res.status(400).json({sucess :false, message : error})
//     }
// })

app.listen(PORT, () => 
console.log(`Server is running in : http://localhost:${PORT}`));