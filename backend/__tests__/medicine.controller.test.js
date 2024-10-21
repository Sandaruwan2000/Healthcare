// __tests__/medicineController.test.js
import express from 'express'; // Import express for initializing the app
import request from 'supertest';
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import medicineRoutes from '../routes/medicine.route'; // Adjust the path as needed

const app = express();
app.use(express.json());
app.use('/backend/medicine', medicineRoutes); 

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
}, 10000);

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongoServer.stop();
});

afterEach(() => {
  jest.clearAllMocks(); 
});

describe('POST /backend/medicine/createMedicine', () => {
  it('create a new prescription successfully (positive case)', async () => {
    const response = await request(app)
      .post('/backend/medicine/createMedicine') 
      .send({
        patientId: '12345',
        medicinename: 'Paracetamol',
        dosage: '500mg',
        frequency: 'Twice a day',
        duration: '5 days',
        instruction: 'Take after meals'
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('_id');
    expect(response.body.patientId).toBe('12345');
    expect(response.body.medicinename).toBe('Paracetamol');
  });

  it('patientId is not found (nagative case)', async () => {
    const response = await request(app)
      .post('/backend/medicine/createMedicine')
      .send({
        medicinename: 'Paracetamol',
        dosage: '500mg',
        frequency: 'Twice a day',
        duration: '5 days',
        instruction: 'Take after meals'
      });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe('patientId is required');
  });

  it('medicinename is required (nagative case)', async () => {
    const response = await request(app)
      .post('/backend/medicine/createMedicine')
      .send({
        patientId: '12345',
        dosage: '500mg',
        frequency: 'Twice a day',
        duration: '5 days',
        instruction: 'Take after meals'
      });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe('medicinename is required');
  });

  it('dosage is required (nagative case)', async () => {
    const response = await request(app)
      .post('/backend/medicine/createMedicine')
      .send({
        patientId: '12345',
        medicinename: 'Paracetamol',
        frequency: 'Twice a day',
        duration: '5 days',
        instruction: 'Take after meals'
      });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe('dosage is required');
  });

  
});
