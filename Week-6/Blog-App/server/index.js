
import express from "express";
import userRoutes from "./routes/userRoutes.js"

const  app = express();
const PORT = 5000

app.use("/api/v1/users",userRoutes)

app.get("/",(req,res) =>{
    res.status(200).json({sucess :true, message : "Welcome"})
});

//Geting all the users http://localhost:5000/api/v1/users

app.get("/api/v1/users", getAllUsers);

//Geting all the users http://localhost:5000/api/v1/users/:id
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