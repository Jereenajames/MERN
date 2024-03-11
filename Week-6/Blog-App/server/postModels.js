import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    author :{

    },
    title:{
        type :"String",
        required : true,
        trim : true,
        minLength : [5]
    },
    image{
        type:String,
        

    }
})