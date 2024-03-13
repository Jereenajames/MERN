import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    author : {
        type:mongoose.Schema.ObjectId,
        ref:"User"

    },
    tittle: {
        type: String,
        require :true,
        trim : true,
        minLength : [5,"Tittle must be atleast 5 character"]
    },
    description : {
        type: String,
        require :true,
        trim : true,
        minLength : [5,"Description must be atleast 5 character"]
    },
    image : {
        type : String,
        require :true,

    },
    tags : {
        type :[String],
        require :true,
    }
},{
    timestamps:true,
    require :true,
})

const Post = mongoose.model("Post",postSchema)
export default Post;