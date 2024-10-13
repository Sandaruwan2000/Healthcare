import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Admindashboard from '../components/Admindashboard';
import m2 from '../Image/m2.jpg';

const styles = {
  backgroundImage: `url(${m2})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  width: '100%',
  height: '650px',
};

export default function EditMedicine() {

  const navigate = useNavigate();
  const { id } = useParams();
  
  const [formData, setFormData] = useState({
    medicinename: '',
    dosage: '',
    frequency: '',
    duration: '',
    instruction: '',
    date: '',
  });

  useEffect(() => {
    axios.get(`http://localhost:5173/backend/medicine/oneMedicine/${id}`)
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
      await axios.put(`/backend/medicine/updateMedicine/${id}`, formData);
      alert('Medicine update successful');
      navigate('/prescription');
    } catch (err) {
      console.error(err);
      alert('Error updating daily status');
    }
  };

  const getCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); 
    const day = String(currentDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return (
    <div style={styles} className="flex min-h-screen bg-[#f5f5f5]"> 
      <div style={{ width: '250px', height: '100vh', background: 'black', padding: '0px' }}>
                <Admindashboard />
            </div>
            <div className="flex-1 flex justify-center items-center p-10"> 
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full"> 
          <h1 className="text-3xl text-center font-bold mb-6 text-blue-600">Update Prescription List</h1>

          <form onSubmit={handleEdit} className="space-y-4">
            <input 
              onChange={handleChange} 
              type="text" 
              placeholder="Medicine Name" 
              name="medicinename" 
              value={formData.medicinename}  
              className="w-full p-3 rounded-lg text-gray-700 bg-[#eef0f2] border-2 border-[#cfd2d6] focus:border-[#5271ff] outline-none"
            />

            <input 
              onChange={handleChange} 
              type="text" 
              placeholder="Dosage" 
              name="dosage" 
              value={formData.dosage}  
              className="w-full p-3 rounded-lg text-gray-700 bg-[#eef0f2] border-2 border-[#cfd2d6] focus:border-[#5271ff] outline-none"
            />

            <input 
              onChange={handleChange} 
              type="text" 
              placeholder="Frequency" 
              name="frequency" 
              value={formData.frequency}  
              className="w-full p-3 rounded-lg text-gray-700 bg-[#eef0f2] border-2 border-[#cfd2d6] focus:border-[#5271ff] outline-none"
            />

            <input 
              onChange={handleChange} 
              type="text" 
              placeholder="Duration" 
              name="duration" 
              value={formData.duration}  
              className="w-full p-3 rounded-lg text-gray-700 bg-[#eef0f2] border-2 border-[#cfd2d6] focus:border-[#5271ff] outline-none"
            />

            <input 
              onChange={handleChange} 
              type="text" 
              placeholder="Instruction" 
              name="instruction" 
              value={formData.instruction}  
              className="w-full p-3 rounded-lg text-gray-700 bg-[#eef0f2] border-2 border-[#cfd2d6] focus:border-[#5271ff] outline-none"
            />

            <input 
              type="text" 
              name="date" 
              value={formData.date || getCurrentDate()}  
              className="w-full p-3 rounded-lg text-gray-500 bg-[#eef0f2] border-2 border-[#cfd2d6] outline-none" 
              disabled
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
  );
}
