import mongoose from "mongoose"

const userSchema =  new mongoose.Schema({
    username :{
        type : String ,
        require : true,
        trim: true,
        minLength :[5, "User name must be in 5 characters"]
    },
    email : {
        type :String,
        require : true,
        trim :true, 
        unique : true,
    },
    password :{
        type :String,
        require : true,
    },
    confirmPassword:{
        type :String,
        require : true,
    },
},
{
    timestamps : true,
}
);

const User = mongoose.model("User", userSchema)
export default User;