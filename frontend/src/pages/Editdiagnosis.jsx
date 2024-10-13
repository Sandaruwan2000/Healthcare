import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Admindashboard from '../components/Admindashboard';
import m12 from '../Image/m12.jpg';


const styles = {
    backgroundImage: `url(${m12})`,
   backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '650px',
};

export default function Editdiagnosis() {

    const navigate = useNavigate();
    const { id } = useParams();
    
    const [formData, setFormData] = useState({
        patientID: '',
        diagnosis: '',
        level: '',
        diagnosedby: '',
        diagnoseddate: '',
    });

    useEffect(() => {
        axios.get(`/backend/diagnosis/oneDiagnosis/${id}`)
          .then((res) => {
             setFormData(res.data);
          })
          .catch((error) => {
              console.log(error);
          });
          
    }, [id]);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleEdit = async (e) => {
        e.preventDefault();
        try {
          await axios.put(`/backend/diagnosis/updateDiagnosis/${id}`, formData);
          alert('Diagnosis update successful');
          navigate('/diagnosis');
        } catch (err) {
          console.error(err);
          alert('Error updating diagnosis');
        }
    };

    const handleLevelChange = (e) => {
        setFormData({ ...formData, level: e.target.value });
    };

    return (
        <div style={styles} className="flex min-h-screen bg-[#f5f5f5]"> 
            <div style={{ width: '250px', height: '100vh', background: 'black', padding: '0px' }}>
                <Admindashboard />
            </div>
            <div className="flex-1 flex justify-center items-center p-10"> 
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full"> 
                    <h1 className="text-3xl text-center font-bold mb-6 text-blue-600">Update Patient List</h1>

                    <form onSubmit={handleEdit} className="space-y-4">
                        <input 
                            onChange={handleChange} 
                            type="text" 
                            placeholder="Patient ID" 
                            name="patientID" 
                            value={formData.patientID}  
                            className="w-full p-3 rounded-lg text-gray-700 bg-[#eef0f2] border-2 border-[#cfd2d6] focus:border-[#5271ff] outline-none"
                            disabled
                        />

                        <input 
                            onChange={handleChange} 
                            type="text" 
                            placeholder="Diagnosis" 
                            name="diagnosis" 
                            value={formData.diagnosis}  
                            className="w-full p-3 rounded-lg text-gray-700 bg-[#eef0f2] border-2 border-[#cfd2d6] focus:border-[#5271ff] outline-none"
                        />

                        {/* Dropdown for Diagnosis Level */}
                        <select
                            value={formData.level}
                            onChange={handleLevelChange}
                            className="border border-gray-300 p-2 rounded w-full"
                        >
                            <option value="level 1">Level 1</option>
                            <option value="level 2">Level 2</option>
                            <option value="level 3">Level 3</option>
                        </select>

                        <input 
                            onChange={handleChange} 
                            type="text" 
                            placeholder="Diagnosed By" 
                            name="diagnosedby" 
                            value={formData.diagnosedby}  
                            className="w-full p-3 rounded-lg text-gray-700 bg-[#eef0f2] border-2 border-[#cfd2d6] focus:border-[#5271ff] outline-none"
                        />

                        <input 
                            onChange={handleChange} 
                            type="text" 
                            placeholder="Diagnosed Date" 
                            name="diagnoseddate" 
                            value={formData.diagnoseddate}  
                            className="w-full p-3 rounded-lg text-gray-700 bg-[#eef0f2] border-2 border-[#cfd2d6] focus:border-[#5271ff] outline-none"
                        />

                        <button 
                            type="submit" 
                            className="bg-gradient-to-r from-blue-300 to-blue-500 text-white border-black rounded-lg p-3 uppercase text-xl font-bold hover:opacity-90 disabled:opacity-80 w-full"
                        >
                            Update
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
