import express from "express";
import { createMedicine, deleteMedicine, getAllMedicine, oneMedicine, updateMedicine } from "../controllers/medicine.controller.js";


const router = express.Router();


router.post('/createMedicine',createMedicine);
router.get('/getAllMedicine',getAllMedicine);
router.get('/oneMedicine/:id',oneMedicine);
router.put('/updateMedicine/:id',updateMedicine);
router.delete('/deleteMedicine/:id',deleteMedicine);

export default router;