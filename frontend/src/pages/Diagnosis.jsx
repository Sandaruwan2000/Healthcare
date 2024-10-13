import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Admindashboard from '../components/Admindashboard';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Button } from 'flowbite-react';
import m10 from '../Image/m10.jpg';

const styles = {
    backgroundImage: `url(${m10})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100vh', 
};

export default function Diagnosis() {
    const [formData, setFormData] = useState([]);
    const [query, setQuery] = useState('');
   
    const [newPatient, setNewPatient] = useState({
        patientID: '',
        diagnosis: '',
        level: '',
        diagnosedby: '',
        diagnoseddate: '',
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('/backend/diagnosis/getAllDiagnosis');
                setFormData(res.data);
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchData();
    }, []);

    const deleteDiagnosis = async (id) => {
        try {
            await fetch(`/backend/diagnosis/deleteDiagnosis/${id}`, {
                method: 'DELETE',
            });
            setFormData(formData.filter((diagnosis) => diagnosis._id !== id));
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
                <h1 className='text-4xl text-center font-bold mb-6 text-blue-600'>Diagnosis List</h1>
                <div className="flex justify-between items-center mb-5">
                    <input
                        type='text'
                        placeholder='Filter...'
                        className="border-2 border-gray-300 rounded-lg px-4 py-2 w-64 text-gray-800"
                        value={query}
                        onChange={(e) => handleSearch(e)}
                    />
                </div>
                <table className='w-full text-center rounded-lg shadow-lg bg-white'>
                    <thead>
                        <tr className='bg-blue-600 text-white'>
                            <th className='px-6 py-3'>Patient ID</th>
                            <th className='px-6 py-3'>Diagnosis Type</th>
                            <th className='px-6 py-3'>Diagnosis Level</th>
                            <th className='px-6 py-3'>Diagnosed By</th>
                            <th className='px-6 py-3'>Diagnosed Date</th>
                            <th className='px-6 py-3'>Edit</th>
                            <th className='px-6 py-3'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {formData.map((diagnosis) => (
                            <tr key={diagnosis._id} className='bg-gray-100 hover:bg-gray-200 text-gray-800'>
                                <td className='border px-4 py-2'>{diagnosis.patientID}</td>
                                <td className='border px-4 py-2'>{diagnosis.diagnosis}</td>
                                <td className='border px-4 py-2'>{diagnosis.level}</td>
                                <td className='border px-4 py-2'>{diagnosis.diagnosedby}</td>
                                <td className='border px-4 py-2'>{diagnosis.diagnoseddate}</td>
                                
                                
                                <td className='border px-4 py-2'>
                                    <Link to={`/diagnosis/editdiagnosis/${diagnosis._id}`}>
                                        <FaEdit className='text-blue-500 hover:text-blue-700 cursor-pointer' />
                                    </Link>
                                </td>
                                
                                
                                <td className='border px-4 py-2'>
                                    <button onClick={() => deleteDiagnosis(diagnosis._id)}>
                                        <FaTrash className='text-red-500 hover:text-red-700 cursor-pointer' />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="flex justify-center mt-9">
        <Link to="/adddiagnosis">
            <Button className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white py-2 px-6 rounded-xl text-lg text-center">
                + Another Diagnosis
            </Button>
        </Link>
            
        </div>
            </div>
        </div>
    );
}
