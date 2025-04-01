import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Layout from './Layout'
import Login from './Admin/Login'
import SignUp from './Admin/SignUp'
import AdminLayout from './Admin/AdminLayout'
import AdminProtocted from './protoced/AdminProtocted'
import AddProduct from './Admin/AddProduct'

export default function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Layout/>}></Route>
   </Routes>
   <Routes>
    <Route path='adminlogin' element={<AdminProtocted Child={Login}/>}>
    </Route>
   </Routes>
   <Routes>
    <Route path='adminsign' element={ <AdminProtocted Child={SignUp}/>}>
    </Route>
   </Routes>

   <Routes >
    <Route path='admindas' element={<AdminProtocted Child={AdminLayout}/>}>
    <Route index element={<AdminProtocted Child={AddProduct}/>}/>
    <Route path='/admindas/addProduct' element={<AdminProtocted Child={AddProduct}/>}/>


    </Route>
   </Routes>
   
   </BrowserRouter> 
  )
}
