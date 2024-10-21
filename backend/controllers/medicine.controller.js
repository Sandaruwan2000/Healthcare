import Medicine from "../models/medicine.model.js";
import Patient from "../models/patients.model.js";

// export const createMedicine = async (req , res , next) => {
   
//     try {

//       if (!req.body.patientId) {
//          return res.status(400).json({ message: "patientId is required" });
//        }

//     const newMedicine = await Medicine.create(req.body);
 
//      return res.status(201).json(newMedicine)
 
//     }catch(error){
//      next(error);
//     }
 
//  };

export const createMedicine = async (req, res, next) => {
   try {
     
     const { patientId, medicinename, dosage, frequency, duration, instruction } = req.body;
 
     if (!patientId) {
       return res.status(400).json({ message: "patientId is required" });
     }
     if (!medicinename) {
       return res.status(400).json({ message: "medicinename is required" });
     }
     if (!dosage) {
       return res.status(400).json({ message: "dosage is required" });
     }
     if (!frequency) {
       return res.status(400).json({ message: "frequency is required" });
     }
     if (!duration) {
       return res.status(400).json({ message: "duration is required" });
     }
     if (!instruction) {
       return res.status(400).json({ message: "instruction is required" });
     }
 
     const newMedicine = await Medicine.create(req.body);
     return res.status(201).json(newMedicine);
   } catch (error) {
     next(error); 
   }
 };
 

 export const getAllMedicine = async (req , res , next) => {
    try{
      
      const patientId = req.params.patientId;
      const medicine = await Medicine.find({patientId});

         if(!medicine){
            return res.status(404).json("Pation not found!");
         }
         res.status(200).json(medicine);
 
 
    }catch (error){
       next(error);
    }
 };

 export const oneMedicine = async (req , res , next) => {

    try{
 
       const id = req.params.id;
       const userExist = await Medicine.findById(id);
 
       res.status(200).json(userExist);
 
    }catch(error){
       next(error);
    }
 
 
 };


 export const updateMedicine = async(req , res , next) => {

    try{
 
       const id = req.params.id ;
 
       
  
       const updateMedicine = await Medicine.findByIdAndUpdate(id, req.body, {new:true});
       res.status(200).json(updateMedicine);
 
 
    }catch( error){
       next(error);
    }
 };

 export const deleteMedicine = async(req , res ,next) => {

    try{
 
       const id = req.params.id ;
 
       
  
        await Medicine.findByIdAndDelete(id);
       res.status(200).json('Medicine has been deleted');
 
 
    }catch( error){
       next(error);
    }
 };