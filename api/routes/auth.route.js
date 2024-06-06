import express from "express" // import express 
import { login, logout, register } from "../controllers/auth.controller.js";

const router = express.Router(); //call express router 

router.post("/register", register) // using the router, create a register request 
router.post("/login",login) // using the router, create a login request 
router.post("/logout",logout) // using the router, create a login request 

export default router; //export express router 