import React from 'react'
import { Link } from 'react-router-dom'
import Admindashboard from '../components/Admindashboard'

export default function Employee() {
  return (
    
    <div  >
      <div className="flex justify-center items-center ">
      <Link to='/signup'>
    <button className="bg-blue-800 rounded-lg border p-3 text-white hover:bg-blue-900 m-7">
      + Add Employee
    </button>
    </Link>
    </div>
    <div  className='flex justify-between'>
      <Admindashboard/>
    </div>
  </div>
  )
}
