import users from "../data.js";
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