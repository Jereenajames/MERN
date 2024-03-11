import express from 'express'
import { getAllUsers, getUserById } from '../controllers/userController';
const  router = express.Router();

//getAllUser
router.get("/api/v1/users",getAllUsers);
//getUserById
router.get("/api/v1/users/:id",getUserById);

//Signin - http://localhost:5000/api/v1/users/signin
router.get("/api/v1/users/:id",getUserById);
export default router;