import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Layout() {
    let nav=useNavigate();
    const goit=()=>{
        nav("/adminlogin")
    }
  return (
    <div>
      <button onClick={goit}>
        admin
      </button>
    </div>
  )
}
