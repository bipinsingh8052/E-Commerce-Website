import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import HeaderCus from './pages/HeaderCus';
// import Navbar from './component/Navbar';
import NavbarMain from './component/NavbarMain';
import Footer from './component/Footer';
import PrimeCart from './pages/PrimeCart';

export default function Layout() {
    // let nav=useNavigate();
    // const goit=()=>{
    //     nav("/adminlogin")
    // }
  return (
    <>
      <NavbarMain/>
      <HeaderCus/>
      <PrimeCart/>
      {/* <Outlet/> */}
      <Footer/>
    </>
  )
}
