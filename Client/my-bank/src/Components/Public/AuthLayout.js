import React from 'react'
import { Outlet } from 'react-router-dom'
import AuthNavbar from './AuthNavbar'

function AuthLayout() {
  return (
    <>
        
        <Outlet></Outlet>
    </>
  )
}

export default AuthLayout