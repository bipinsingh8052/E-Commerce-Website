import React from 'react'
import { useNavigate } from 'react-router-dom'
import HeaderCus from './pages/HeaderCus';

export default function Layout() {
    let nav=useNavigate();
    const goit=()=>{
        nav("/adminlogin")
    }
  return (
    <div>
      <HeaderCus/>
      <button onClick={goit}>
        admin
      </button>
    </div>
  )
}
