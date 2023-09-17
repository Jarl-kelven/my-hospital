import React from 'react'
import Contact from '../components/pages/Contact';
import Home from '../components/pages/Home';
import Login from '../components/pages/Login';
import Services from '../components/pages/Services';
import SignUp from '../components/pages/SignUp';
import Doctors from '../components/pages/Doctors/Doctors';
import Doctordetails from '../components/pages/Doctors/Doctordetails';
import { Routes, Route} from 'react-router-dom';


function Routers() {
  return (
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/services' element={<Services></Services>}></Route>
      <Route path='/register' element={<SignUp></SignUp>}></Route>
      <Route path='/doctors' element={<Doctors></Doctors>}></Route>
      <Route path='/contact' element={<Contact></Contact>}></Route>
      <Route path='/doctors:id' element={<Doctordetails></Doctordetails>}></Route>
    </Routes>
  )
}

export default Routers