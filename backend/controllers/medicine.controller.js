import Medicine from "../models/medicine.model.js";

export const createMedicine = async (req , res , next) => {
   
    try {
    const newMedicine = await Medicine.create(req.body);
 
     return res.status(201).json(newMedicine)
 
    }catch(error){
     next(error);
    }
 
 };

 export const getAllMedicine = async (req , res , next) => {
    try{
 
       const medicine = await Medicine.find();
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