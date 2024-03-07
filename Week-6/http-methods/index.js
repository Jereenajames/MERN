import  {express}  from "express";

const app = express();
app.use(express.js)

app.get("/",(req, res) =>{
    res.status(200).json(success : true, message : "User found " )
    try{
        const{id} = req.params;
        const findUser = users.find((user) => user.id === + id );
        if(!findUser)
        return res.status(404).json({success : false , message : `No user with the id  : ${id}`});
        res.status(200).json({success: true, message:"User found "})
    }
    catch{

    }
})
