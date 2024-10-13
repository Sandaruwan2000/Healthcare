import React, { useEffect, useState } from 'react';
import Admindashboard from '../components/Admindashboard';
import axios from 'axios';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Button } from 'flowbite-react';
import m9 from '../Image/m9.jpg';

const styles = {
    backgroundImage: `url(${m9})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100vh', // Ensuring full height
};

export default function Allergy() {

    const [formData, setFormData] = useState([]);
    const [query, setQuery] = useState('');
    const [isFormVisible, setIsFormVisible] = useState(false); // State for form visibility
    const [newMedicine, setNewMedicine] = useState({
        patientID: '',
        foodallergies: '',
        drugallergies: '',
        latexallergies: '',
        insectallergies: '',
        petallergies: '',
        petallergies: '',
        other: '',

    });


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('/backend/allergy/getAllAllergy');
                setFormData(res.data);
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchData();
    }, []);


    const deleteAllergy = async (id) => {
        try {
            await fetch(`/backend/allergy/deleteAllergy/${id}`, {
                method: 'DELETE',
            });
            setFormData(formData.filter((allergy) => allergy._id !== id));
            alert('Successfully Deleted');
        } catch (error) {
            console.log(error.message);
        }
    };


    const handleSearch = (e) => {
        const getSearch = e.target.value;

        if (getSearch.length > 0) {
            const searchdata = formData.filter((item) => item.patientID.toLowerCase().includes(getSearch));
            setFormData(searchdata);
        } else {
            setFormData(filterData);
        }

        setQuery(getSearch);
    };

  return (
    <div className='flex' style={styles}>
    <div style={{ width: '250px', height: '100vh', background: 'black', padding: '0px' }}>
        <Admindashboard />
    </div>
    <div className='w-3/4 p-10 bg-white bg-opacity-80 rounded-lg shadow-lg'>
        <h1 className='text-4xl text-center font-bold mb-6 text-blue-600'>Allergy List</h1>
        <div className="flex justify-between items-center mb-5">
            <input
                type='text'
                placeholder='Filter...'
                className="border-2 border-gray-300 rounded-lg px-4 py-2 w-64 text-gray-800"
                value={query}
                onChange={(e) =>  handleSearch(e)}
            />
        </div>
        <table className='w-full text-center rounded-lg shadow-lg bg-white'>
            <thead>
                <tr className='bg-blue-600 text-white'>
                    <th className='px-6 py-3'>PatientID</th>
                    <th className='px-6 py-3'>Food Allergies</th>
                    <th className='px-6 py-3'>Drug Allergies</th>
                    <th className='px-6 py-3'>Latex Allergies</th>
                    <th className='px-6 py-3'>Insect Allergies</th>
                    <th className='px-6 py-3'>Pet Allergies</th>
                    <th className='px-6 py-3'>Other</th>
                    <th className='px-6 py-3'>Edit</th>
                    <th className='px-6 py-3'>Delete</th>
                </tr>
            </thead>
            <tbody>
                {formData.map((allergy) => (
                    <tr key={allergy._id} className='bg-gray-100 hover:bg-gray-200 text-gray-800'>
                        <td className='border px-4 py-2'>{allergy.patientID}</td>
                        <td className='border px-4 py-2'>{allergy.foodallergies}</td>
                        <td className='border px-4 py-2'>{allergy.drugallergies}</td>
                        <td className='border px-4 py-2'>{allergy.latexallergies}</td>
                        <td className='border px-4 py-2'>{allergy.insectallergies}</td>
                        <td className='border px-4 py-2'>{allergy.petallergies}</td>
                        <td className='border px-4 py-2'>{allergy.other}</td>
                        <td className='border px-4 py-2'>
                            <Link to={`/allergy/editallergy/${allergy._id}`}>
                                <FaEdit className='text-blue-500 hover:text-blue-700 cursor-pointer' />
                            </Link>
                        </td>
                        <td className='border px-4 py-2'>
                            <button onClick={() => deleteAllergy(allergy._id)}>
                                <FaTrash className='text-red-500 hover:text-red-700 cursor-pointer' />
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        <div className="flex justify-center mt-9">
            <Link to="/addallergy">
            <Button className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white py-2 px-6 rounded-xl text-lg text-center">
                + Another Allergy
            </Button>
        </Link>
            
        </div>
    </div>
</div>
  )
}
