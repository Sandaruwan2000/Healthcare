import express from "express";
import { createAllergy, deleteAllergy, getAllAllergy, oneAllergy, updateAllergy } from "../controllers/allergy.controller.js";


const router = express.Router();

router.post('/createAllergy',createAllergy);
router.get('/getAllAllergy',getAllAllergy);
router.get('/oneAllergy/:id',oneAllergy);
router.put('/updateAllergy/:id',updateAllergy);
router.delete('/deleteAllergy/:id',deleteAllergy);






export default router;