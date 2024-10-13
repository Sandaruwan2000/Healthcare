import Diagnosis from "../models/diagnosis.model.js";

export const createDiagnosis = async (req , res , next) => {
   
    try {
    const newDiagnosis = await Diagnosis.create(req.body);
 
     return res.status(201).json(newDiagnosis)
 
    }catch(error){
     next(error);
    }
 
 };


 export const getAllDiagnosis = async (req , res , next) => {
    try{
 
       const diagnosis = await Diagnosis.find();
       res.status(200).json(diagnosis);
 
 
    }catch (error){
       next(error);
    }
 };


 export const oneDiagnosis = async (req , res , next) => {

    try{
 
       const id = req.params.id;
       const userExist = await Diagnosis.findById(id);
 
       res.status(200).json(userExist);
 
    }catch(error){
       next(error);
    }
 
 
 };


 export const updateDiagnosis = async(req , res , next) => {

    try{
 
       const id = req.params.id ;
 
       
  
       const updateDiagnosis = await Diagnosis.findByIdAndUpdate(id, req.body, {new:true});
       res.status(200).json(updateDiagnosis);
 
 
    }catch( error){
       next(error);
    }
 };


 export const deleteDiagnosis = async(req , res ,next) => {

    try{
 
       const id = req.params.id ;
 
       
  
       await Diagnosis.findByIdAndDelete(id);
       res.status(200).json('Diagnosis has been deleted');
 
 
    }catch( error){
       next(error);
    }
 };