import { useState } from 'react';
import { Link , useNavigate} from 'react-router-dom'

import b1 from '../Image/s5.jpg';


const styles = {
    backgroundImage: `url(${b1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '700px',
  };


export default function Signup() {

  const [formData,setFormData] = useState({})
  const[error,setError] = useState(null);
  const[loading,setLoading] = useState(false);
  const navigate=useNavigate();
  const handleChange = (e)=>{
    setFormData(
      {
        ...formData,
        [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      setLoading(true);
      const res = await fetch('/backend/auth/signup',
      {
        method:'POST',
        headers: {
          'Content-Type':'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if(data.success == false){
        setLoading(false);
        setError(data.message);
        return;

      }
      setLoading(false);
      setError(null);
      navigate('/employee');

    }catch(error){
      setLoading(false);
      setError(error.message);


    }
    
    
  };
  
  return (
   
    <div style={styles} >
       <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7 text-yellow-700'>Sign up</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type="text" placeholder='empname'className='border p-3 rounded-lg bg-slate-300 text-black black-placeholder' id='empname'onChange={handleChange}/>
        <select
            id="type"
            className="border p-3 rounded-lg bg-slate-300 text-black"
            onChange={handleChange}
            defaultValue=""  // Default value to prompt the user to select
          >
            <option value="" disabled>Select Role</option>
            <option value="doctor">Doctor</option>
            <option value="staff">Staff</option>
          </select>
        <input type="phone" placeholder='phone_number'className='border p-3 rounded-lg bg-slate-300' id='phone_number'onChange={handleChange}/>
        <input type="email" placeholder='username'className='border p-3 rounded-lg bg-slate-300' id='username'onChange={handleChange}/>
        <input type="password" placeholder='password'className='border p-3 rounded-lg bg-slate-300' id='password'onChange={handleChange}/>
        <button disabled={loading} className='bg-blue-700 text-white p-3 font-bold rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>{loading ?'Loading...':'Sign up'}</button>
        
      </form>
      
      {error && <p className='text-red-500 mt-5'>{error}</p>}
      </div>
    </div>
  )
}