import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Admindashboard from '../components/Admindashboard';
import m8 from '../Image/m8.jpg';

const styles = {
    backgroundImage: `url(${m8})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100vh',
};

export default function Addallergy() {
    const [formData, setFormData] = useState([]);
    const [newAllergy, setNewAllergy] = useState({
        patientID: '',
        foodallergies: '',
        drugallergies: '',
        latexallergies: '',
        insectallergies: '',
        petallergies: '',
        other: '',
    });
    
    const navigate = useNavigate(); // Hook to navigate programmatically

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/backend/allergy/createAllergy', newAllergy);
            setFormData([...formData, res.data]);
            alert('Successfully Added');
            navigate('/allergy'); // Navigate to the allergy page after submission
        } catch (error) {
            console.log(error.message);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewAllergy({ ...newAllergy, [name]: value });
    };

    return (
        <div className='flex' style={styles}>
            <div style={{ width: '250px', height: '100vh', background: 'black', padding: '0px' }}>
                <Admindashboard />
            </div>
            <div className='flex justify-center items-center w-full'>
                <div className='w-3/4 p-10 bg-white bg-opacity-80 rounded-lg shadow-lg max-h-[90vh] overflow-y-auto'>
                    <h1 className='text-4xl text-center font-bold mb-6 text-blue-600'>Add New Allergy</h1>
                  
                    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
                        <div className="mb-4 flex justify-center">
                            <label className="block text-gray-700 w-40">Patient ID:</label>
                            <input
                                type="text"
                                name="patientID"
                                className="border-2 border-gray-300 rounded-lg px-4 py-2 w-64"
                                value={newAllergy.patientID}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-4 flex justify-center">
                            <label className="block text-gray-700 w-40">Food Allergies:</label>
                            <input
                                type="text"
                                name="foodallergies"
                                className="border-2 border-gray-300 rounded-lg px-4 py-2 w-64"
                                value={newAllergy.foodallergies}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-4 flex justify-center">
                            <label className="block text-gray-700 w-40">Drug Allergies:</label>
                            <input
                                type="text"
                                name="drugallergies"
                                className="border-2 border-gray-300 rounded-lg px-4 py-2 w-64"
                                value={newAllergy.drugallergies}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-4 flex justify-center">
                            <label className="block text-gray-700 w-40">Latex Allergies:</label>
                            <input
                                type="text"
                                name="latexallergies"
                                className="border-2 border-gray-300 rounded-lg px-4 py-2 w-64"
                                value={newAllergy.latexallergies}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-4 flex justify-center">
                            <label className="block text-gray-700 w-40">Insect Allergies:</label>
                            <input
                                type="text"
                                name="insectallergies"
                                className="border-2 border-gray-300 rounded-lg px-4 py-2 w-64"
                                value={newAllergy.insectallergies}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-4 flex justify-center">
                            <label className="block text-gray-700 w-40">Pet Allergies:</label>
                            <input
                                type="text"
                                name="petallergies"
                                className="border-2 border-gray-300 rounded-lg px-4 py-2 w-64"
                                value={newAllergy.petallergies}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-4 flex justify-center">
                            <label className="block text-gray-700 w-40">Other:</label>
                            <input
                                type="text"
                                name="other"
                                className="border-2 border-gray-300 rounded-lg px-4 py-2 w-64"
                                value={newAllergy.other}
                                onChange={handleInputChange}
                            />
                        </div>

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
