 import express from 'express';
import { signOut, signin, signup } from '../controllers/auth.controller.js';
import { validateLogin } from '../middleware/validateLogin.js';


 const router = express.Router();

 router.post("/signup",signup) ;
//  router.post("/signin",validateLogin,signin);
 router.post("/signin",signin);
 router.get('/signout',signOut);



 export default router;