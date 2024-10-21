import Patient from "../models/patients.model.js";

// export const createPatient = async (req , res , next) => {
   
//     try {
//     const newPatient = await Patient.create(req.body);
 
//      return res.status(201).json(newPatient)
 
//     }catch(error){
//      next(error);
//     }
 
//  };


export const createPatient = async (req, res, next) => {
   try {
     // Check if patientId is missing
     if (!req.body.patientId) {
       return res.status(400).json({ message: "patientId is required" });
     }
 
     // Check if the patient already exists (based on patientId)
     const existingPatient = await Patient.findOne({ patientId: req.body.patientId });
     if (existingPatient) {
       return res.status(409).json({ message: "Patient already exists" });
     }
 
     // Create a new patient
     const newPatient = await Patient.create(req.body);
     return res.status(201).json(newPatient);
   } catch (error) {
     console.error("Error creating patient:", error); // Log the error for debugging
     return res.status(500).json({ message: "Internal Server Error" }); // Send a custom error message
   }
 };
 
 
 

 export const getAllPatient = async (req , res , next) => {
    try{
 
       const patient = await Patient.find();
       res.status(200).json(patient);
 
 
    }catch (error){
       next(error);
    }
 };

 export const onePatient = async (req , res , next) => {

   try{

      const id = req.params.id;
      const userExist = await Patient.findById(id);

      res.status(200).json(userExist);

   }catch(error){
      next(error);
   }


};


export const updatePatient = async(req , res , next) => {

   try{

      const id = req.params.id ;

      
 
      const updatePatient = await Patient.findByIdAndUpdate(id, req.body, {new:true});
      res.status(200).json(updatePatient);


   }catch( error){
      next(error);
   }
};



 export const deletePatient = async(req , res ,next) => {

   try{

      const id = req.params.id ;

      
 
       await Patient.findByIdAndDelete(id);
      res.status(200).json('Patient has been deleted');


   }catch( error){
      next(error);
   }
};
