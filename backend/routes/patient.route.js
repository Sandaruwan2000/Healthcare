import express from "express";
import { createPatient, deletePatient, getAllPatient, onePatient, updatePatient } from "../controllers/patient.controller.js";


const router = express.Router();


router.post('/createPatient',createPatient);
router.get('/getAllPatient',getAllPatient);
router.get('/onePatient/:id',onePatient);
router.put('/updatePatient/:id',updatePatient);
router.delete('/deletePatient/:id',deletePatient);



export default router;