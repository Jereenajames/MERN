import users from "../data.js";
import bcrypt from "bcrypt"
import User from "../models/userModel.js";

export const getAllUsers = async (req,res) =>{
    try{
        res.status(200).json({sucess : true , data : users});
        }
        catch(error){
            res.status(404).json({sucess:false, message : error});
        }
};

export const getUserById = async (req,res) => {
    try {
        const{ id } = req.params;
        const findUser = users.find((user) => user.id === +id)
        if(!findUser)
        return res.status(404).json({sucess : false,message:`No user with this id :${id}` })
        res.status(200).json({sucess:true,data :findUser})
    } catch (error) {
        res.status(400).json({sucess :false, message : error})
    }
}

export const signup = async (req,res) => {
    try {
        console.log(req.body);
        const {username,email,password,confrimPassword} = req.body;
        const encryptPassword = await bcrypt.hash(password,12)
        // console.log(encryptPassword);
        const signupObj ={
            username : username,
            email:email,
            password:password,
            confrimPassword:confrimPassword
        }
        const user =  await User.create(signupObj);
        res.status(201).json({sucess :true, data:user})
    } catch (error) {
        res.status(400).json({sucess :false, message : error})
    }
}

// export const signin = async (req,res) => {
//     try {
//         const {email,password} = req.body;
//         const findUser=await UserActivation.findOne({email:email})

//         console.log(findUser);
//         if(!findUser) return res.status(404).json({sucess:false,message:`No user with this email :${email}` })
//         const comparePassword = await bycrypt.compare(password,findUser.password);
//         console.log(comparePassword);
//         if()

//     } catch (error) {
//         res.status(400).json({sucess :false, message : error})
//     }
// }