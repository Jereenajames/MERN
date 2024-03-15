import jwt from ""
import bcrypt from "bcrypt"
import User from "../models/userModel.js";

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({ sucess: true, data: users });
    }
    catch (error) {
        res.status(404).json({ sucess: false, message: error });
    }
};

export const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        // const findUser = users.find((user) => user.id === +id)
        const findUser = await User.findById(id)
        if (!findUser)
            return res.status(404).json({ sucess: false, message: `No user with this id :${id}` })
        res.status(200).json({ sucess: true, data: findUser })
    } catch (error) {
        res.status(400).json({ sucess: false, message: error })
    }
}

export const signup = async (req, res) => {
    try {
        console.log(req.body);
        const { username, email, password, confrimPassword } = req.body;
        const encryptPassword = await bcrypt.hash(password, 12)
        // console.log(encryptPassword);
        const signupObj = {
            username: username,
            email: email,
            password: password,
            confrimPassword: confrimPassword
        }
        const user = await User.create(signupObj);
        res.status(201).json({ sucess: true, data: user ,message:"User Created sucessfully "})
    } catch (error) {
        res.status(400).json({ sucess: false, message: error })
    }
}

export const signin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const findUser = await User.findOne({ email: email })
        console.log(findUser);
        if (!findUser)
            return res.status(404).json({ sucess: false, message: `No user with this email :${email}` })
        const comparePassword = bcrypt.compare(password, findUser.password)
        if (!comparePassword)
           return res.status(400).json({ sucess: false, message: "Invalid Credential" })
        res.status(200).json({ sucess: true, message: "Logged in Sucessfully" })

    } catch (error) {
        res.status(400).json({ sucess: false, message: error })
    }
}

export const updateUserById = async (req, res) => {
    try {
        const {id} = req.params;
        const encryptPassword = await bcrypt.hash(req.body.password, 12)
        const updatedUser = await User.findByIdAndUpdate(id, {
            ...req.body,
            password: encryptPassword, confirmPassword: encryptPassword
        }, { new: true })
        res.status(200).json({ sucess: true, data: updatedUser })
    } catch (error) {
        res.status(400).json({ sucess: false, message: error })
    }
}

export const deleteUserById =async(req,res) =>{
  try {
    const {id} = req.params;
            const result = await User.findByIdAndDelete(id)
            if(!result)
            return res.status(404).json({sucess:false,message:`No user with this id :${id}` })        
             res.status(200).json({ sucess: true, message:"User deleted sucessfully" })
  } catch (error) {
    res.status(400).json({ sucess: false, message: error })
  }
}