import Allergy from "../models/allergy.model.js";


export const createAllergy = async (req , res , next) => {
   
    try {
    const newAllergy = await Allergy.create(req.body);
 
     return res.status(201).json(newAllergy)
 
    }catch(error){
     next(error);
    }
 
 };


 export const getAllAllergy = async (req , res , next) => {
    try{
 
       const allergy = await Allergy.find();
       res.status(200).json(allergy);
 
 
    }catch (error){
       next(error);
    }
 };


 export const oneAllergy = async (req , res , next) => {

    try{
 
       const id = req.params.id;
       const userExist = await Allergy.findById(id);
 
       res.status(200).json(userExist);
 
    }catch(error){
       next(error);
    }
 
 
 };


 export const updateAllergy = async(req , res , next) => {

    try{
 
       const id = req.params.id ;
 
       
  
       const updateAllergy = await Allergy.findByIdAndUpdate(id, req.body, {new:true});
       res.status(200).json(updateAllergy);
 
 
    }catch( error){
       next(error);
    }
 };


 export const deleteAllergy = async(req , res ,next) => {

    try{
 
       const id = req.params.id ;
 
       
  
        await Allergy.findByIdAndDelete(id);
       res.status(200).json('Allergy has been deleted');
 
 
    }catch( error){
       next(error);
    }
 };
