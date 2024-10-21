import React, { useEffect, useState } from 'react';
import Admindashboard from '../components/Admindashboard';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';
import m1 from '../Image/m1.jpg';
import { Button } from 'flowbite-react';
import jsPdf from 'jspdf';
import 'jspdf-autotable';

const styles = {
    backgroundImage: `url(${m1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100vh', 
};

export default function Prescription() {
    const { patientId } = useParams();
    const [formData, setFormData] = useState([]);
    const [query, setQuery] = useState('');
    const [isFormVisible, setIsFormVisible] = useState(false); // State for form visibility
    const [newMedicine, setNewMedicine] = useState({
        patientId: patientId,
        medicinename: '',
        dosage: '',
        frequency: '',
        duration: '',
        instruction: '',
       
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/backend/medicine/getAllMedicine/${patientId}`);
                setFormData(res.data);
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchData();
    }, []);

    const deleteMedicine = async (id) => {
        try {
            await fetch(`/backend/medicine/deleteMedicine/${id}`, {
                method: 'DELETE',
            });
            setFormData(formData.filter((medicine) => medicine._id !== id));
            alert('Successfully Deleted');
        } catch (error) {
            console.log(error.message);
        }
    };


    const handleSearch = (e) => {

        const getSearch = e.target.value;
        
    
        if(getSearch.length > 0)
        {
          const searchdata = formData.filter( (item) => item.medicinename.toLowerCase().includes(getSearch));
          setFormData(searchdata);
        
        }else {
          setFormData(filterData);
        }
    
        setQuery(getSearch);
    
      };

   
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/backend/medicine/createMedicine', newMedicine);
            setFormData([...formData, res.data]);
            setIsFormVisible(false); 
            alert('Successfully Added');
        } catch (error) {
            console.log(error.message);
        }
    };

   
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewMedicine({ ...newMedicine, [name]: value });
    };


    function handleDownload() {
        const doc = new jsPdf();
        const marginLeft = 40;

        doc.setDrawColor(0);
        doc.setLineWidth(2);
        doc.roundedRect(10, 20, doc.internal.pageSize.width - 20, doc.internal.pageSize.height - 40, 10, 10, 'D');

        doc.setFontSize(15);
        doc.text('Prescription List', 90, 35);

        const headers = [['Medicine Name', 'Dosage', 'Frequency', 'Duration','Instruction','Date']];
        const data = formData.map((medicine) => [
            medicine.medicinename,
            medicine.dosage,
            medicine.frequency,
            medicine.duration,
            medicine.instruction,
            new Date(medicine.createdAt).toLocaleDateString(),
            
        ]);

        const columnStyles = {
          0: { columnWidth: 25 }, 
          1: { columnWidth: 25 }, 
          2: { columnWidth: 30 }, 
          3: { columnWidth: 20 }, 
          4: { columnWidth: 50 }, 
          5: { columnWidth: 30 }, 
      };
     
      const end =
      "<<< This is auto generated report. All rights Asiri Hospitals >>>";

        doc.autoTable({
            startY: 50,
            head: headers,
            body: data,
            columnStyles: columnStyles, 

        });

       
       // doc.addImage(logo, 'PNG', 85, 180, 50, 50);
        doc.text(end,marginLeft, 270)

        doc.save('Prescription list.pdf');
    }

    return (
        <div className='flex' style={styles}>
            <div style={{ width: '250px', height: '100vh', background: 'black', padding: '0px' }}>
                <Admindashboard />
            </div>
            <div className='w-3/4 p-10 bg-white bg-opacity-80 rounded-lg shadow-lg'>
                <h1 className='text-4xl text-center font-bold mb-6 text-blue-600'>Prescription List</h1>
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
                            <th className='px-6 py-3'>Medicine Name</th>
                            <th className='px-6 py-3'>Dosage</th>
                            <th className='px-6 py-3'>Frequency</th>
                            <th className='px-6 py-3'>Duration</th>
                            <th className='px-6 py-3'>Instruction</th>
                            <th className='px-6 py-3'>Date</th>
                            <th className='px-6 py-3'>Edit</th>
                            <th className='px-6 py-3'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {formData.map((medicine) => (
                            <tr key={medicine._id} className='bg-gray-100 hover:bg-gray-200 text-gray-800'>
                                <td className='border px-4 py-2'>{medicine.medicinename}</td>
                                <td className='border px-4 py-2'>{medicine.dosage}</td>
                                <td className='border px-4 py-2'>{medicine.frequency}</td>
                                <td className='border px-4 py-2'>{medicine.duration}</td>
                                <td className='border px-4 py-2'>{medicine.instruction}</td>
                                <td className='border px-4 py-2'>{new Date(medicine.createdAt).toLocaleDateString()}</td>
                                <td className='border px-4 py-2'>
                                    <Link to={`/prescription/editMedicine/${medicine._id}`}>
                                        <FaEdit className='text-blue-500 hover:text-blue-700 cursor-pointer' />
                                    </Link>
                                </td>
                                <td className='border px-4 py-2'>
                                    <button onClick={() => deleteMedicine(medicine._id)}>
                                        <FaTrash className='text-red-500 hover:text-red-700 cursor-pointer' />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="flex justify-center mt-9">
                    <Button
                        className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white py-2 px-6 rounded-xl text-lg"
                        onClick={() => setIsFormVisible(true)} // Show the form when clicked
                    >
                        + Add Another
                    </Button>
                    <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-2 px-6 rounded-xl text-lg "onClick={handleDownload}>
                        Download Prescription
                    </Button>
                </div>
            </div>

            {/* Transparent Form Overlay */}
            {isFormVisible && (
                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg w-96 relative">
                        <h2 className="text-2xl mb-4 text-center text-blue-600">Add New Medicine</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700">Medicine Name:</label>
                                <input
                                    type="text"
                                    name="medicinename"
                                    className="border-2 border-gray-300 rounded-lg px-4 py-2 w-full"
                                    value={newMedicine.medicinename}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Dosage:</label>
                                <input
                                    type="text"
                                    name="dosage"
                                    className="border-2 border-gray-300 rounded-lg px-4 py-2 w-full"
                                    value={newMedicine.dosage}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Frequency:</label>
                                <input
                                    type="text"
                                    name="frequency"
                                    className="border-2 border-gray-300 rounded-lg px-4 py-2 w-full"
                                    value={newMedicine.frequency}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Duration:</label>
                                <input
                                    type="text"
                                    name="duration"
                                    className="border-2 border-gray-300 rounded-lg px-4 py-2 w-full"
                                    value={newMedicine.duration}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Instruction:</label>
                                <input
                                    type="text"
                                    name="instruction"
                                    className="border-2 border-gray-300 rounded-lg px-4 py-2 w-full"
                                    value={newMedicine.instruction}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            {/* <div className="mb-4">
                                <label className="block text-gray-700">Date:</label>
                                <input
                                    type="date"
                                    name="date"
                                    className="border-2 border-gray-300 rounded-lg px-4 py-2 w-full"
                                    value={newMedicine.date}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div> */}
                            <div className="flex justify-between">
                                <button type="submit" className="bg-blue-500 text-white py-2 px-6 rounded-lg">
                                    Submit
                                </button>
                                <button
                                    type="button"
                                    className="bg-red-500 text-white py-2 px-6 rounded-lg"
                                    onClick={() => setIsFormVisible(false)}
                                >
                                    Close
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
