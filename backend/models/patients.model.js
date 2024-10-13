import mongoose from 'mongoose';


const patientSchema = new mongoose.Schema({
    patientId:{
        type:String,
        required:true,
        unique:true,
    },
      name:{
        type:String,
        required:true,
       

    },
    age:{
        type:String,
        required:true,
      
    },
    dateofBirth:{
        type:String,
        required:true,
        
    },
  
    bloodgroup:{
        type:String,
       required:true,

    },

    gender:{
        type:String,
       required:true,

    },

    contact:{
        type:String,
       required:true,

    },
    
    address:{
        type:String,
       required:true,

    },

    
},{ timestamps:true });

const Patient = mongoose.model('Patient',patientSchema);

export default Patient;