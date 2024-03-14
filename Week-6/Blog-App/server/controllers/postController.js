import Post from "../models/postModel.js";


export const createPost = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await Post.create({ author: id, ...req.body });
        res.status(202).json({ sucess: true, data: post })
    } catch (error) {
        res.status(404).json({ sucess: false, message: error })
    }
}

export const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate("author");
        res.status(200).json({ sucess: true, data: posts })
    } catch (error) {
        res.status(404).json({ sucess: false, message: error })
    }
}

export const getPostById = async (req, res) => {
    try {
        const {id} = req.params;
        const post = await Post.findById(id);
    if(!post) 
    return res.status(404).json({sucess:false, message: `No post with the id : ${id}` });
    res.status(200).json({sucess : true, data : post})
    } catch (error) {
        res.status(404).json({ sucess: false, message: error })
    }
}

export const updatePostById = async (req, res) => {
    try {
        const { id } = req.params;
        const {tittle,description,image,tags} = req.body
        const updatedPost = await Post.findByIdAndUpdate(id, 
            { $set: { tittle: tittle, description: description, 
                image: image, tags: tags }, },
            {new:true});
            res.status(200).json({ sucess: true, message: "Post Updated successfully", data : updatedPost })

         } catch (error) {
        res.status(404).json({ sucess: false, message: error })
    }
}

export const deletePostById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Post.findByIdAndDelete(id);
    if(!result) 
    return res.status(404).json({sucess:false, message: `No post with the id : ${id}` });
    res.status(200).json({sucess : true, message : "Post Deleted Sucessfully "})
    } catch (error) {
        res.status(404).json({ sucess: false, message: error })

    } 
}