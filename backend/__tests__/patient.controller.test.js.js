import express from 'express';
import request from 'supertest';
import patientRoutes from '../routes/patient.route.js'; 
import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import Patient from '../models/patients.model.js';

const app = express();
app.use(express.json());
app.use('/backend/patient', patientRoutes); 

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create(); 
  const uri = mongoServer.getUri(); 
  await mongoose.connect(uri); 
}, 10000);

afterAll(async () => {
  await mongoose.connection.dropDatabase(); 
  await mongoose.connection.close();
  await mongoServer.stop(); 
});

afterEach(() => {
  jest.restoreAllMocks(); 
});

describe('Patient Controller', () => {
  describe('POST /backend/patient/createPatient', () => {
    it('create a patient successfully (positive case)', async () => {
      const newPatient = {
        patientId: 'P12345',
        name: 'John Doe',
        age: '30',
        dateofBirth: '1994-10-10',
        bloodgroup: 'A+',
        gender: 'Male',
        contact: '1234567890',
        address: '123 Main St',
      };

      const response = await request(app)
        .post('/backend/patient/createPatient')
        .send(newPatient);

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('patientId', newPatient.patientId);
      expect(response.body).toHaveProperty('name', newPatient.name);
    });

    it('patientId is missing.it is required. (negative case)', async () => {
      const newPatient = {
        name: 'Jane Doe',
        age: '25',
        dateofBirth: '1999-05-05',
        bloodgroup: 'B+',
        gender: 'Female',
        contact: '0987654321',
        address: '456 Main St',
      };

      const response = await request(app)
        .post('/backend/patient/createPatient')
        .send(newPatient);

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('message');
    });

    it('patient already exists (negative case)', async () => {
      const newPatient = {
        patientId: 'P12345',
        name: 'John Doe',
        age: '30',
        dateofBirth: '1994-10-10',
        bloodgroup: 'A+',
        gender: 'Male',
        contact: '1234567890',
        address: '123 Main St',
      };

      await request(app)
        .post('/backend/patient/createPatient')
        .send(newPatient);

      const response = await request(app)
        .post('/backend/patient/createPatient')
        .send(newPatient);

      expect(response.status).toBe(409);
      expect(response.body).toHaveProperty('message');
    });

    
  });
});
