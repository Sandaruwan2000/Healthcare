import mongoose from 'mongoose';

const medicineSchema = new mongoose.Schema({
   
    patientId:{
        type:String,
        required:true,
    },
    medicinename:{
        type:String,
        required:true,
    },
      dosage:{
        type:String,
        required:true,
       

    },
    frequency:{
        type:String,
        required:true,
      
    },
    duration:{
        type:String,
        required:true,
        
    },
  
    instruction:{
        type:String,
       required:true,

    },
    

    
},{ timestamps:true });

const Medicine = mongoose.model('Medicine',medicineSchema);

export default Medicine;