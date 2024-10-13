import { Sidebar } from 'flowbite-react';
import { HiUser, HiCalendar, HiClipboard, HiChartSquareBar, HiPhone, HiCog, HiInformationCircle } from 'react-icons/hi';

import { Link } from 'react-router-dom';
export default function Admindashboard() {
  return (
    
    <Sidebar className='p-10 flex flex-col gap-4 bg-gradient-to-r from-sky-300 to-sky-600'>
    <Sidebar.Items>
      <Sidebar.ItemGroup>
        <Link to='/dashboard'>
          <Sidebar.Item
            active
            icon={HiChartSquareBar} // Change this to your desired icon
            //label={'Dashboard'}
            labelColour='white'
            as='div'
            className='bg-sky-700 hover:bg-teal-700 text-white rounded-md p-2 cursor-pointer mb-4'
          >
            Dashboard
          </Sidebar.Item>
        </Link>
        <Link to='/schedule'>
          <Sidebar.Item
            active
            icon={HiCalendar}
           // label={'Schedule'}
            labelColour='white'
            className='bg-sky-700 hover:bg-teal-700 text-white rounded-md p-2 cursor-pointer mb-4'
          >
            Schedule
          </Sidebar.Item>
        </Link>
        <Link to='/appointments'>
          <Sidebar.Item
            active
            icon={HiClipboard}
           // label={'Appointments'}
            labelColour='white'
            className='bg-sky-700 hover:bg-teal-700 text-white rounded-md p-2 cursor-pointer mb-4'
          >
            Appointments
          </Sidebar.Item>
        </Link>
        <Link to='/patient'>
          <Sidebar.Item
            active
            icon={HiUser}
            //label={'Patients'}
            labelColour='white'
            className='bg-sky-700 hover:bg-teal-700 text-white rounded-md p-2 cursor-pointer mb-4'
          >
            Patients
          </Sidebar.Item>
        </Link>
        <Link to='/telemedicine'>
          <Sidebar.Item
            icon={HiPhone}
           // label={'Telemedicine'}
            labelColour='white'
            className='bg-sky-700 hover:bg-teal-700 text-white rounded-md p-2 cursor-pointer mb-4'
          >
            Telemedicine
          </Sidebar.Item>
        </Link>
        <Link to='/settings'>
          <Sidebar.Item
            icon={HiCog}
           // label={'Settings'}
            labelColour='white'
            className='bg-sky-700 hover:bg-teal-700 text-white rounded-md p-2 cursor-pointer mb-4'
          >
            Settings
          </Sidebar.Item>
        </Link>
        <Link to='/help'>
          <Sidebar.Item
            icon={HiInformationCircle}
           // label={'Help & Support'}
            labelColour='white'
            className='bg-sky-700 hover:bg-teal-700 text-white rounded-md p-2 cursor-pointer mb-4'
          >
            Help 
          </Sidebar.Item>
        </Link>
      </Sidebar.ItemGroup>
    </Sidebar.Items>
  </Sidebar>
  
    
  )
}
