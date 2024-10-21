import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
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

    // Using useNavigate for programmatic navigation
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/backend/patient/createPatient', newPatient);
            // Optionally, you can log the response or process it further
            alert('Successfully Added');
            // Clear the form after submission
            setNewPatient({
                patientId: '',
                name: '',
                age: '',
                dateofBirth: '',
                bloodgroup: '',
                gender: '',
                contact: '',
                address: '',
            });
            // Navigate to the patient page after successful submission
            navigate('/patient');
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
                        {Object.entries(newPatient).map(([key, value]) => (
                            <div key={key} className="mb-4 flex justify-center">
                                <label className="block text-gray-700 w-40 capitalize">{key.replace(/([A-Z])/g, ' $1')}: </label>
                                <input
                                    type="text"
                                    name={key}
                                    className="border-2 border-gray-300 rounded-lg px-4 py-2 w-64"
                                    value={value}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        ))}
                        <div className="flex justify-between">
                            <button type="submit" className="bg-blue-500 text-white py-2 px-6 rounded-lg">
                                Submit
                            </button>
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
