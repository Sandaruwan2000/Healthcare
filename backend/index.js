import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/user.route.js';

import authRoutes from './routes/auth.route.js';
import customerRoutes from './routes/customer.route.js';
import medicineRoutes from './routes/medicine.route.js';
import patientRoutes from './routes/patient.route.js';
import allergyRoutes from './routes/allergy.route.js';
import diagnosisRoutes from './routes/diagnosis.route.js';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
dotenv.config();


mongoose.connect(process.env.MONGO).then(() => {

    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log(err);
});

  

const app = express();

app.use(express.json());

app.use(cookieParser()) ;

app.listen(3000, () => {
    console.log('Server is runing on port 3000');
  }
  );

  app.use('/backend/user', userRoutes);
  app.use('/backend/auth', authRoutes);
  app.use('/backend/customer', customerRoutes);
  app.use('/backend/medicine', medicineRoutes);
  app.use('/backend/patient', patientRoutes);
  app.use('/backend/allergy', allergyRoutes);
  app.use('/backend/diagnosis', diagnosisRoutes);
  
  


  app.use( (err ,req,res ,next)=>{
    const statusCode = err.statusCode || 500 ;
    const message = err.message || 'Internal Server Error' ;
    return res.status(statusCode).json({
     success: false ,
     statusCode ,
     message,
    })
  }); 
   