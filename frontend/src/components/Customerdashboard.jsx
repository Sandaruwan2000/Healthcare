import React from 'react'
import { FaBook, FaDownload, FaEdit, FaEnvelope, FaEye, FaHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Customerdashboard() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
    <div style={{ padding: '1rem',  color: 'white' }}>
      <div className="text-xl font-bold mb-6  m-3 mx-10">Dashboard</div>
      <ul className='font-bold'>
        <Link to="/customerview">
          <li className="py-2 border p-3 bg-slate-500 hover:bg-yellow-600 text-white rounded-md cursor-pointer flex">
            <FaBook className="mr-2 my-1.5" />Vehicle Data
          </li>
        </Link>
        <Link to="/customerdailyupdate">
          <li className="py-2 border p-3 bg-slate-500 hover:bg-red-600 text-white rounded-md cursor-pointer flex">
            <FaEnvelope className="mr-2 my-1.5" />Daily Status
          </li>
        </Link>
        <Link to="/cusreport">
          <li className="py-2 border p-3 bg-slate-500 hover:bg-blue-600 text-white rounded-md cursor-pointer flex">
            <FaDownload className="mr-2 my-1.5" />Report
          </li>
        </Link>
      </ul>
    </div>
    <div className="flex-1 p-4">
    </div>
  </div>
  )
}
