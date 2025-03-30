import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Layout from './Layout'
import Login from './Admin/Login'
import SignUp from './Admin/SignUp'
import AdminLayout from './Admin/AdminLayout'

export default function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Layout/>}></Route>
   </Routes>
   <Routes>
    <Route path='adminlogin' element={<Login/>}>
    </Route>
   </Routes>
   <Routes>
    <Route path='adminsign' element={<SignUp/>}>
    </Route>
   </Routes>

   <Routes >
    <Route path='admindas' element={<AdminLayout/>}>


    </Route>
   </Routes>
   
   </BrowserRouter> 
  )
}
