
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';


import Hearder from './components/Header';

import Employee from './pages/Employee';

import Customer from './pages/Customer';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Customersignup from './pages/Customersignup';
import PrivateRoute from './components/PrivateRoute';
import Staffsignin from './pages/Staffsignin';

import Admindashboard from './components/Admindashboard';
import Customerdashboard from './components/Customerdashboard';
import Customerprofile from './components/Customerprofile';


import Search from './components/Search';

import Admin from './pages/Admin';
import User from './components/User';
import Prescription from './pages/Prescription';
import Addmedicine from './pages/Addmedicine';
import EditMedicine from './pages/EditMedicine';
import Patient from './pages/Patient';
import Editpatient from './pages/Editpatient';
import Addpatient from './pages/Addpatient';
import Doctordashboard from './components/Doctordashboard';
import Allergy from './pages/Allergy';
import EditAllergy from './pages/EditAllergy';
import Addallergy from './pages/Addallergy';
import Diagnosis from './pages/diagnosis';
import Editdiagnosis from './pages/Editdiagnosis';
import Adddiagnosis from './pages/Adddiagnosis';

export default function App() {
  return (
    <BrowserRouter>

    <Hearder/>
     <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin/>} />
        
        <Route  element={<PrivateRoute />} >
         <Route path="/signup" element={<Signup/>} />
        </Route>

        


        
        
        <Route  element={<PrivateRoute />} >
         <Route path="/employee" element={<Employee />} />
        </Route>
                            

        <Route  element={<PrivateRoute />} >
           <Route path="/customer" element={<Customer />} />
        </Route>
        
        <Route path="/customersignup" element={<Customersignup />} />

        <Route  element={<PrivateRoute />} >
           <Route path="/staffsignin" element={<Staffsignin />} />
        </Route>

        <Route  element={<PrivateRoute />} >
           <Route path="/user" element={<User />} />
        </Route>

        <Route  element={<PrivateRoute />} >
          <Route path="/admindashboard" element={<Admindashboard />} />
        </Route>

        

        
       <Route  element={<PrivateRoute />} >
               <Route path="/customerdashboard" element={<Customerdashboard />} />
       </Route>

       <Route  element={<PrivateRoute />} >
               <Route path="/doctordashboard" element={<Doctordashboard />} />
       </Route>

       <Route path="/customerprofile" element={<Customerprofile />} />

       <Route path="/user" element={<User />} />

      



       <Route path="/admin" element={<Admin />} />

       <Route path="/prescription" element={<Prescription />} />
       
       <Route path="/prescription/editMedicine/:id" element={<EditMedicine />} />


       <Route path="/search" element={<Search />} />
       <Route path="/addmedicine" element={<Addmedicine />} />
       <Route path="/patient" element={<Patient />} />
       <Route path="/patient/editpatient/:id" element={<Editpatient />} />
       <Route path="/addpatient" element={<Addpatient />} />
       <Route path="/allergy" element={<Allergy />} />
       <Route path="/allergy/editallergy/:id" element={<EditAllergy />} />
       <Route path="/addallergy" element={<Addallergy />} />
       <Route path="/diagnosis" element={<Diagnosis />} />
       <Route path="/diagnosis/editdiagnosis/:id" element={<Editdiagnosis />} />
       <Route path="/adddiagnosis" element={<Adddiagnosis />} />





     </Routes>
     </BrowserRouter>
  )
}
