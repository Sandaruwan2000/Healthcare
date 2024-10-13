import React from 'react'
import { FaBook, FaClock, FaEdit, FaEnvelope, FaEye, FaFolderOpen, FaHeart, FaRegFolderOpen } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Repairdashboard() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ padding: '1rem', color: 'white' }}>
        <div className="text-xl font-bold mb-6  m-3 mx-10">Dashboard</div>
        <ul className='font-bold'>
          <Link to="/haryup">
            <li className="py-2  border p-3 bg-slate-500 hover:bg-yellow-600 text-white rounded-md cursor-pointer flex">
              <FaBook className="mr-2 my-1.5" />Hurryup
            </li>
          </Link>
          <Link to="/repairissue">
            <li className="py-2 border p-3 bg-slate-500 hover:bg-red-600 text-white rounded-md cursor-pointer flex">
              <FaEnvelope className="mr-2 my-1.5" />Repair Issues
            </li>
          </Link>
          <Link to="/view">
            <li className="py-2 border p-3 bg-slate-500 hover:bg-red-600 text-white rounded-md cursor-pointer flex">
              <FaEye className="mr-2 my-1.5" />Issues
            </li>
          </Link>
          <Link to="/reaction">
            <li className="py-2 border p-3 bg-slate-500 hover:bg-green-600 text-white rounded-md cursor-pointer flex">
              <FaHeart className="mr-2 my-1.5" />Customer Reaction
            </li>
          </Link>
          <Link to="/allstatus">
            <li className="py-2 border p-3 bg-slate-500 hover:bg-blue-600 text-white rounded-md cursor-pointer flex">
              <FaEdit className="mr-2 my-1.5" />Daily Status
            </li>
          </Link>
          <Link to="/vreport">
            <li className="py-2 border p-3 bg-slate-500 hover:bg-blue-600 text-white rounded-md cursor-pointer flex">
              <FaFolderOpen className="mr-2 my-1.5" />Report
            </li>
          </Link>
          <Link to="/rhisroty">
            <li className="py-2 border p-3 bg-slate-500 hover:bg-blue-600 text-white rounded-md cursor-pointer flex">
              <FaClock className="mr-2 my-1.5" />History
            </li>
          </Link>
        </ul>
      </div>
      <div className="flex-1 p-4">
        {/* Add image or other content here */}
      </div>
    </div>
  )
}
