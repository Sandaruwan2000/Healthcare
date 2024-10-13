import mongoose from 'mongoose';


const diagnosisSchema = new mongoose.Schema({
    patientID:{
        type:String,
        required:true,
        unique:true,
    },
      diagnosis:{
        type:String,
        required:true,
       

    },
    level:{
        type:String,
       required:true,
       enum: ['level 1', 'level 2', 'level 3'],

    },
    diagnosedby:{
        type:String,
        required:true,
      
    },
    diagnoseddate:{
        type:String,
        required:true,
        
    },
  
    
},{ timestamps:true });

const Diagnosis = mongoose.model('Diagnosis',diagnosisSchema);

export default Diagnosis;