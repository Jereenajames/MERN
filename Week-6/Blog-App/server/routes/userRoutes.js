import express from 'express';
import { getAllUsers, getUserById,signup } from '../controllers/userController.js';
const  router = express.Router();

//getAllUser
router.get("/", getAllUsers);

//getUserById
router.get("/:id",getUserById);

//Signup - http://localhost:5000/api/v1/users/Signup
router.post("/signup", signup)

//Signin - http://localhost:5000/api/v1/users/signin
// router.post("/signin", signin)


export default router;