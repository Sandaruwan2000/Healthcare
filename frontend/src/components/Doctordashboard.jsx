import { Sidebar } from 'flowbite-react';
import { HiHeart, HiOutlineClipboardList, HiUser } from 'react-icons/hi';
import { MdMedicalServices, MdOutlineMedicalServices } from 'react-icons/md';
import { Link } from 'react-router-dom';

export default function Doctordashboard() {
  return (
    <Sidebar aria-label="Doctor dashboard sidebar" className="bg-slate-100 w-60">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Link to="/profile">
            <Sidebar.Item 
              icon={HiUser}
              className='bg-sky-400 hover:bg-teal-600 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4 transition-colors duration-300'>
            </Sidebar.Item>
          </Link>

          <Link to="/patients">
            <Sidebar.Item
              icon={HiHeart}
              className='bg-sky-400 hover:bg-teal-600 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4 transition-colors duration-300'>
            </Sidebar.Item>
          </Link>

          <Link to="/appointments">
            <Sidebar.Item
              icon={HiOutlineClipboardList}
              className='bg-sky-400 hover:bg-teal-600 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4 transition-colors duration-300'>
            </Sidebar.Item>
          </Link>

          <Link to="/medical-services">
            <Sidebar.Item
              icon={MdMedicalServices}
              className='bg-sky-400 hover:bg-teal-600 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4 transition-colors duration-300'>
            </Sidebar.Item>
          </Link>

          <Link to="/outline-medical-services">
            <Sidebar.Item
              icon={MdOutlineMedicalServices}
              className='bg-sky-400 hover:bg-teal-600 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4 transition-colors duration-300'>
            </Sidebar.Item>
          </Link>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
