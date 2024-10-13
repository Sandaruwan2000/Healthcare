import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    empname:{
        type:String,
        required:true,
    },
    phone_number:{
        type:String,
        required:true,
        unique:true,
    },
    username:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    avatar:{
        type: String,
        default:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    },

    role: {
        type: String,
        enum: ['doctor', 'staff'],
        required: true,
    }
    
},{ timestamps:true });

const User = mongoose.model('User',userSchema);

export default User;