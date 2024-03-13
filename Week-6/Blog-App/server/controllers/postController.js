import Post from "../models/postModel.js";


export const createPost = async(req,res) =>{
    try {
        const {id} = req.params;
        const post = await Post.create({author:id, ...req.body});
                res.status(202).json({sucess:true, data:post})        
    } catch (error) {
        res.status(404).json({sucess : false, message : error})
    }
}

export const getAllPosts = async(req,res) =>{
    try {
        const posts = await Post.find().populate("author");
        res.status(400).json({ sucess:true, data: posts})
    } catch (error) {
        res.status(404).json({sucess : false, message : error})
    }
}

export const getPostById = async(req,res) =>{
    try {
        
    } catch (error) {
        res.status(404).json({sucess : false, message : error})
    }
}

export const updatePostById = async(req,res) =>{
    try {
        
    } catch (error) {
        res.status(404).json({sucess : false, message : error})
    }
}

export const deletePostById = async(req,res) =>{
    try {
        
    } catch (error) {
        res.status(404).json({sucess : false, message : error})
    }
}