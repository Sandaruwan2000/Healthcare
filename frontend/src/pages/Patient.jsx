import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Admindashboard from '../components/Admindashboard';
import { FaEdit, FaTrash, FaPrescriptionBottleAlt } from 'react-icons/fa'; // Import the prescription icon
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'flowbite-react';
import jsPdf from 'jspdf';
import 'jspdf-autotable';
import m3 from '../Image/m3.jpg';

const styles = {
  backgroundImage: `url(${m3})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  height: '100vh',
};

export default function Patient() {
  const [formData, setFormData] = useState([]);
  const [query, setQuery] = useState('');
  const navigate = useNavigate(); // Use the useNavigate hook

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/backend/patient/getAllPatient');
        setFormData(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  const deletePatient = async (id) => {
    try {
      await fetch(`/backend/patient/deletePatient/${id}`, {
        method: 'DELETE',
      });
      setFormData(formData.filter((patient) => patient._id !== id));
      alert('Successfully Deleted');
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSearch = (e) => {
    const getSearch = e.target.value;
    if (getSearch.length > 0) {
      const searchdata = formData.filter((item) =>
        item.patientId.toLowerCase().includes(getSearch)
      );
      setFormData(searchdata);
    } else {
      setFormData(filterData);
    }
    setQuery(getSearch);
  };

  function handleDownload() {
    const doc = new jsPdf();
    const marginLeft = 40;

    doc.setDrawColor(0);
    doc.setLineWidth(2);
    doc.roundedRect(
      10,
      20,
      doc.internal.pageSize.width - 20,
      doc.internal.pageSize.height - 40,
      10,
      10,
      'D'
    );

    doc.setFontSize(15);
    doc.text('Patient List', 90, 35);

    const headers = [
      ['Patient ID', 'Patient Name', 'Age', 'Date of Birth', 'Blood Group', 'Gender', 'Contact'],
    ];
    const data = formData.map((patient) => [
      patient.patientId,
      patient.name,
      patient.age,
      patient.dateofBirth,
      patient.bloodgroup,
      patient.gender,
      patient.contact,
    ]);

    const columnStyles = {
      0: { columnWidth: 20 },
      1: { columnWidth: 25 },
      2: { columnWidth: 20 },
      3: { columnWidth: 25 },
      4: { columnWidth: 20 },
      5: { columnWidth: 25 },
      6: { columnWidth: 30 },
    };

    const end = '<<< This is auto generated report. All rights Asiri Hospitals >>>';

    doc.autoTable({
      startY: 50,
      head: headers,
      body: data,
      columnStyles: columnStyles,
    });

    doc.text(end, marginLeft, 270);

    doc.save('Patient list.pdf');
  }

//   const handlePrescription = (id) => {
//     navigate(`patient/prescription/${id}`);
//   };

  return (
    <div className='flex' style={styles}>
      <div style={{ width: '250px', height: '100vh', background: 'black', padding: '0px' }}>
        <Admindashboard />
      </div>

      <div className='w-3/4 p-10 bg-white bg-opacity-80 rounded-lg shadow-lg'>
        <h1 className='text-4xl text-center font-bold mb-6 text-blue-600'>Patient Details</h1>
        <div className='flex justify-between items-center mb-5'>
          <input
            type='text'
            placeholder='Filter...'
            className='border-2 border-gray-300 rounded-lg px-4 py-2 w-64 text-gray-800'
            value={query}
            onChange={(e) => handleSearch(e)}
          />
        </div>
        <table className='w-full text-center rounded-lg shadow-lg bg-white'>
          <thead>
            <tr className='bg-blue-600 text-white'>
              <th className='px-6 py-3'>Patient ID</th>
              <th className='px-6 py-3'>Patient Name</th>
              <th className='px-6 py-3'>Age</th>
              <th className='px-6 py-3'>Date Of Birth</th>
              <th className='px-6 py-3'>Blood Group</th>
              <th className='px-6 py-3'>Gender</th>
              <th className='px-6 py-3'>Contact</th>
              <th className='px-6 py-3'>Edit</th>
              <th className='px-6 py-3'>Delete</th>
              <th className='px-6 py-3'>Prescription</th>
            </tr>
          </thead>
          <tbody>
            {formData.map((patient) => (
              <tr key={patient._id} className='bg-gray-100 hover:bg-gray-200 text-gray-800'>
                <td className='border px-4 py-2'>{patient.patientId}</td>
                <td className='border px-4 py-2'>{patient.name}</td>
                <td className='border px-4 py-2'>{patient.age}</td>
                <td className='border px-4 py-2'>{patient.dateofBirth}</td>
                <td className='border px-4 py-2'>{patient.bloodgroup}</td>
                <td className='border px-4 py-2'>{patient.gender}</td>
                <td className='border px-4 py-2'>{patient.contact}</td>
                <td className='border px-4 py-2'>
                  <Link to={`/patient/editpatient/${patient._id}`}>
                    <FaEdit className='text-blue-500 hover:text-blue-700 cursor-pointer' />
                  </Link>
                </td>
                <td className='border px-4 py-2'>
                  <button onClick={() => deletePatient(patient._id)}>
                    <FaTrash className='text-red-500 hover:text-red-700 cursor-pointer' />
                  </button>
                </td>
                <td className='border px-4 py-2'>
                    <Link to={`/patient/prescription/${patient.patientId}`}>
                  <button >
                    <FaPrescriptionBottleAlt className='text-green-500 hover:text-green-700 cursor-pointer' />
                  </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='flex justify-center mt-9'>
          <Link to='/addpatient'>
            <Button className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white py-2 px-6 rounded-xl text-lg text-center'>
              + Another Patient
            </Button>
          </Link>
          <Button
            className='bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-2 px-6 rounded-xl text-lg'
            onClick={handleDownload}
          >
            Download Patient
          </Button>
        </div>
      </div>
    </div>
  );
}
