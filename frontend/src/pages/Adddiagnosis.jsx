import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Admindashboard from '../components/Admindashboard';
import m11 from '../Image/m11.jpg';

const styles = {
    backgroundImage: `url(${m11})`,
   backgroundSize: 'cover',
   backgroundPosition: 'center',
   backgroundRepeat: 'no-repeat',
   width: '100%',
   height: '100vh',
};

export default function Adddiagnosis() {
   const [formData, setFormData] = useState([]);
   const [newDiagnosis, setNewPatient] = useState({
       patientID: '',
       diagnosis: '',
       level: '',
       diagnosedby: '',
       diagnoseddate: '',
   });

   const handleSubmit = async (e) => {
       e.preventDefault();
       try {
           const res = await axios.post('/backend/diagnosis/createDiagnosis', newDiagnosis);
           setFormData([...formData, res.data]);
           alert('Successfully Added');
       } catch (error) {
           console.log(error.message);
       }
   };

   const handleInputChange = (e) => {
       const { name, value } = e.target;
       setNewPatient({ ...newDiagnosis, [name]: value });
   };

   const handleLevelChange = (e) => {
       setNewPatient({ ...newDiagnosis, level: e.target.value });
   };

   return (
       <div className='flex' style={styles}>
           <div style={{ width: '250px', height: '100vh', background: 'black', padding: '0px' }}>
               <Admindashboard />
           </div>
           <div className='flex justify-center items-center w-full'>
               <div className='w-full max-w-md bg-white bg-opacity-90 p-8 rounded-lg shadow-lg'>
                   <h1 className='text-4xl text-center font-bold mb-6 text-blue-600'>Add New Diagnosis</h1>

                   <form onSubmit={handleSubmit} className="space-y-4">
                       <div className="mb-4">
                           <label className="block text-gray-700 font-semibold mb-2">Patient ID:</label>
                           <input
                               type="text"
                               name="patientID"
                               className="w-full border border-gray-300 rounded-lg px-4 py-2"
                               value={newDiagnosis.patientID}
                               onChange={handleInputChange}
                               required
                           />
                       </div>
                       <div className="mb-4">
                           <label className="block text-gray-700 font-semibold mb-2">Diagnosis:</label>
                           <input
                               type="text"
                               name="diagnosis"
                               className="w-full border border-gray-300 rounded-lg px-4 py-2"
                               value={newDiagnosis.diagnosis}
                               onChange={handleInputChange}
                               required
                           />
                       </div>
                       <div className="mb-4">
                           <label className="block text-gray-700 font-semibold mb-2">Level:</label>
                           <select
                               value={newDiagnosis.level}
                               onChange={handleLevelChange}
                               className="w-full border border-gray-300 rounded-lg px-4 py-2"
                               required
                           >
                               <option value="" disabled>Select Level</option>
                               <option value="level 1">Level 1</option>
                               <option value="level 2">Level 2</option>
                               <option value="level 3">Level 3</option>
                           </select>
                       </div>
                       <div className="mb-4">
                           <label className="block text-gray-700 font-semibold mb-2">Diagnosed By:</label>
                           <input
                               type="text"
                               name="diagnosedby"
                               className="w-full border border-gray-300 rounded-lg px-4 py-2"
                               value={newDiagnosis.diagnosedby}
                               onChange={handleInputChange}
                               required
                           />
                       </div>
                       <div className="mb-4">
                           <label className="block text-gray-700 font-semibold mb-2">Diagnosed Date:</label>
                           <input
                               type="date"
                               name="diagnoseddate"
                               className="w-full border border-gray-300 rounded-lg px-4 py-2"
                               value={newDiagnosis.diagnoseddate}
                               onChange={handleInputChange}
                               required
                           />
                       </div>

                       <div className="flex justify-between">
                           <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg">
                               Submit
                           </button>
                           <Link to="/">
                               <button type="button" className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-lg">
                                   Close
                               </button>
                           </Link>
                       </div>
                   </form>
               </div>
           </div>
       </div>
   )
}
