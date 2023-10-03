import React from 'react'

import { Route, Routes } from 'react-router-dom';
import AdminDashboard from '../Admin/Admin';
import Student from '../Student/student';
import Instructure from '../Instructure/Instructure';
import About from '../About/About';
import Footer from '../Footer/Footer';
import SignUp from '../Login/SignUp';
import Login from '../Login/LoginStudent';
import QO from '../QualityOfficer/QO';
import PrivateRouteForStudent from '../PrivateRoute/PrivateRouteForStudent';
import PrivateRouteForTeacher from '../PrivateRoute/PrivateRoutesForTeacher';

export default function Routing() {
  return (
    <div>
      <Routes>
        <Route path='/admin' element={<AdminDashboard/>}/>
        <Route path='/student' element={<PrivateRouteForStudent>
            <Student/></PrivateRouteForStudent>}/>
        <Route path='/instructure' element={<PrivateRouteForTeacher>
            <Instructure/>
        </PrivateRouteForTeacher>
        }/>
        <Route path='/' element={<About/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/QO' element={<QO/>}/>
     </Routes>
      
    
       <Footer/>
    </div>
  )
}
