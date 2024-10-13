import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Admindashboard from '../components/Admindashboard';
import m6 from '../Image/m6.jpg';

const styles = {
    backgroundImage: `url(${m6})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '650px',
  };

export default function Editpatient() {

  const navigate = useNavigate();
  const { id } = useParams();
  
  const [formData, setFormData] = useState({
    patientId: '',
    name: '',
    age: '',
    dateofBirth: '',
    bloodgroup: '',
    gender: '',
    contact: '',
    address: '',
  });


  useEffect(() => {
    axios.get(`http://localhost:5173/backend/patient/onePatient/${id}`)
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
      await axios.put(`/backend/patient/updatePatient/${id}`, formData);
      alert('Patient update successful');
      navigate('/patient');
    } catch (err) {
      console.error(err);
      alert('Error updating daily status');
    }
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
              placeholder="PatientId" 
              name="patientId" 
              value={formData.patientId}  
              className="w-full p-3 rounded-lg text-gray-700 bg-[#eef0f2] border-2 border-[#cfd2d6] focus:border-[#5271ff] outline-none"
              disabled
            />

            <input 
              onChange={handleChange} 
              type="text" 
              placeholder="patientname" 
              name="name" 
              value={formData.name}  
              className="w-full p-3 rounded-lg text-gray-700 bg-[#eef0f2] border-2 border-[#cfd2d6] focus:border-[#5271ff] outline-none"
            />

            <input 
              onChange={handleChange} 
              type="text" 
              placeholder="age" 
              name="age" 
              value={formData.age}  
              className="w-full p-3 rounded-lg text-gray-700 bg-[#eef0f2] border-2 border-[#cfd2d6] focus:border-[#5271ff] outline-none"
            />

            <input 
              onChange={handleChange} 
              type="text" 
              placeholder="DurdateofBirthation" 
              name="dateofBirth" 
              value={formData.dateofBirth}  
              className="w-full p-3 rounded-lg text-gray-700 bg-[#eef0f2] border-2 border-[#cfd2d6] focus:border-[#5271ff] outline-none"
            />

            <input 
              onChange={handleChange} 
              type="text" 
              placeholder="bloodgroup" 
              name="bloodgroup" 
              value={formData.bloodgroup}  
              className="w-full p-3 rounded-lg text-gray-700 bg-[#eef0f2] border-2 border-[#cfd2d6] focus:border-[#5271ff] outline-none"
            />

            <input 
              type="text" 
              name="gender" 
              value={formData.gender }  
              className="w-full p-3 rounded-lg text-gray-500 bg-[#eef0f2] border-2 border-[#cfd2d6] outline-none" 
             
            />
            <input 
              type="text" 
              name="contact" 
              value={formData.contact }  
              className="w-full p-3 rounded-lg text-gray-500 bg-[#eef0f2] border-2 border-[#cfd2d6] outline-none" 
             
            />
            <input 
              type="text" 
              name="address" 
              value={formData.address }  
              className="w-full p-3 rounded-lg text-gray-500 bg-[#eef0f2] border-2 border-[#cfd2d6] outline-none" 
             
            />

            <button 
              type="submit" 
              className="bg-gradient-to-r from-blue-300 to-blue-500 text-white border-black rounded-lg p-3 uppercase text-xl font-bold hover:opacity-90 disabled:opacity-80 cen px-40"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
