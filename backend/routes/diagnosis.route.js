import express from "express";
import { createDiagnosis, deleteDiagnosis, getAllDiagnosis, oneDiagnosis, updateDiagnosis } from "../controllers/diagnosis.controller.js";



const router = express.Router();

router.post('/createDiagnosis',createDiagnosis);
router.get('/getAllDiagnosis',getAllDiagnosis);
router.get('/oneDiagnosis/:id',oneDiagnosis);
router.put('/updateDiagnosis/:id',updateDiagnosis);
router.delete('/deleteDiagnosis/:id',deleteDiagnosis);



export default router;