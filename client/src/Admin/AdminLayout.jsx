import React from 'react'
import AdminHeader from './AdminHeader'
import { Outlet } from 'react-router-dom'

export default function AdminLayout() {
  return (
    <>
        <AdminHeader/>
        <Outlet/>
        
    </>
    
  )
}
