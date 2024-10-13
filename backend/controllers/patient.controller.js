import Patient from "../models/patients.model.js";

export const createPatient = async (req , res , next) => {
   
    try {
    const newPatient = await Patient.create(req.body);
 
     return res.status(201).json(newPatient)
 
    }catch(error){
     next(error);
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
