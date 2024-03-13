import express from 'express';
import { getAllUsers, getUserById,signup,signin,updateUserById,deleteUserById} from '../controllers/userController.js';
const  router = express.Router();

//getAllUser -http://localhost:5000/api/v1/users
router.get("/", getAllUsers);

//getUserById -http://localhost:5000/api/v1/users/65f020dac217825db081011a
router.get("/:id",getUserById);

//Signup - http://localhost:5000/api/v1/users/Signup
router.post("/signup", signup)

//Signin - http://localhost:5000/api/v1/users/signin
router.post("/signin", signin)

//Update - http://localhost:5000/api/v1/users/:id
router.put("/:id", updateUserById )

//Delete - http://localhost:5000/api/v1/users/:id
router.delete("/:id", deleteUserById )

export default router;