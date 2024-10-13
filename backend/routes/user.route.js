  import express from 'express';
import { deleteCustomer, deleteUser, test, updateCustomer, updateUser } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';


  const router = express.Router();

  router.get('/test',test); 
  router.post('/update/:id',verifyToken,updateCustomer); 
  router.delete('/delete/:id',verifyToken,deleteCustomer); 
  router.post('/updatestaff/:id',verifyToken,updateUser); 
  router.delete('/deletestaff/:id',verifyToken,deleteUser); 



    export default router;
