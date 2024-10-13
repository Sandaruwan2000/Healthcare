import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Admindashboard from '../components/Admindashboard';
import m4 from '../Image/m4.jpg';

const styles = {
    backgroundImage: `url(${m4})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100vh',
};

export default function Addpatient() {
    const [formData, setFormData] = useState([]);
    const [newPatient, setNewPatient] = useState({
        patientId: '',
        name: '',
        age: '',
        dateofBirth: '',
        bloodgroup: '',
        gender: '',
        contact: '',
        address: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/backend/patient/createPatient', newPatient);
            setFormData([...formData, res.data]);
            alert('Successfully Added');
        } catch (error) {
            console.log(error.message);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewPatient({ ...newPatient, [name]: value });
    };


    

    return (
        <div className='flex' style={styles}>
            <div style={{ width: '250px', height: '100vh', background: 'black', padding: '0px' }}>
                <Admindashboard />
            </div>
            <div className='flex justify-center items-center w-full'>
                <div className='w-3/4 p-10 bg-white bg-opacity-80 rounded-lg shadow-lg max-h-[90vh] overflow-y-auto'>
                    <h1 className='text-4xl text-center font-bold mb-6 text-blue-600'>Add New Patient</h1>
                  
                    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
                        <div className="mb-4 flex justify-center">
                            <label className="block text-gray-700 w-40">Patient ID:</label>
                            <input
                                type="text"
                                name="patientId"
                                className="border-2 border-gray-300 rounded-lg px-4 py-2 w-64"
                                value={newPatient.patientId}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-4 flex justify-center">
                            <label className="block text-gray-700 w-40">Patient Name:</label>
                            <input
                                type="text"
                                name="name"
                                className="border-2 border-gray-300 rounded-lg px-4 py-2 w-64"
                                value={newPatient.name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-4 flex justify-center">
                            <label className="block text-gray-700 w-40">Age:</label>
                            <input
                                type="text"
                                name="age"
                                className="border-2 border-gray-300 rounded-lg px-4 py-2 w-64"
                                value={newPatient.age}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-4 flex justify-center">
                            <label className="block text-gray-700 w-40">Date of Birth:</label>
                            <input
                                type="text"
                                name="dateofBirth"
                                className="border-2 border-gray-300 rounded-lg px-4 py-2 w-64"
                                value={newPatient.dateofBirth}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-4 flex justify-center">
                            <label className="block text-gray-700 w-40">Blood Group:</label>
                            <input
                                type="text"
                                name="bloodgroup"
                                className="border-2 border-gray-300 rounded-lg px-4 py-2 w-64"
                                value={newPatient.bloodgroup}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-4 flex justify-center">
                            <label className="block text-gray-700 w-40">Gender:</label>
                            <input
                                type="text"
                                name="gender"
                                className="border-2 border-gray-300 rounded-lg px-4 py-2 w-64"
                                value={newPatient.gender}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-4 flex justify-center">
                            <label className="block text-gray-700 w-40">Contact:</label>
                            <input
                                type="text"
                                name="contact"
                                className="border-2 border-gray-300 rounded-lg px-4 py-2 w-64"
                                value={newPatient.contact}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-4 flex justify-center">
                            <label className="block text-gray-700 w-40">Address:</label>
                            <input
                                type="text"
                                name="address"
                                className="border-2 border-gray-300 rounded-lg px-4 py-2 w-64"
                                value={newPatient.address}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className="flex justify-between">
                            <Link to="/patient">
                            <button type="submit" className="bg-blue-500 text-white py-2 px-6 rounded-lg">
                                Submit
                            </button>
                            </Link>
                            <Link to="/">
                                <button type="button" className="bg-red-500 text-white py-2 px-6 rounded-lg">
                                    Close
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
