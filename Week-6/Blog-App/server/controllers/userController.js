import users from ".../data.js"

export const getAllUsers = async (req,res) =>{
    try{
        res.status(200).json({sucess : true , data : users});
        }
        catch(error){
            res.status(404).json({sucess:false, message : error});
        }
};

export const getUserById = anync(req,res) => {
    try{
        res.status(200).json({sucess : true, data})
    }

}