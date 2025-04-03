import React from 'react'
import { useNavigate } from 'react-router-dom'
import HeaderCus from './pages/HeaderCus';
// import Navbar from './component/Navbar';
import NavbarMain from './component/NavbarMain';

export default function Layout() {
    // let nav=useNavigate();
    // const goit=()=>{
    //     nav("/adminlogin")
    // }
  return (
    <>
      <NavbarMain/>
      {/* <HeaderCus/> */}
      {/* <hr /> */}
      {/* <button onClick={goit}>
        admin
      </button> */}
    </>
  )
}
