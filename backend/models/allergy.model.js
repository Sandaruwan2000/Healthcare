import mongoose from 'mongoose';

const allergySchema = new mongoose.Schema({
    patientID:{
        type:String,
        required:true,
        unique:true,
    },
      foodallergies:{
        type:String,
        required:true,
       

    },
    drugallergies:{
        type:String,
        required:true,
      
    },
    latexallergies:{
        type:String,
        required:true,
        
    },
  
    insectallergies:{
        type:String,
       required:true,

    },

    petallergies:{
        type:String,
       required:true,

    },
    other:{
        type:String, 
        required:false,
    }
    

    
},{ timestamps:true });

const Allergy = mongoose.model('Allergy',allergySchema);

export default Allergy;