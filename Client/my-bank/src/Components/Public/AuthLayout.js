import React from 'react'
import { Outlet } from 'react-router-dom'
import AuthNavbar from './AuthNavbar'

function AuthLayout() {
  return (
    <>
    <AuthNavbar></AuthNavbar>
        
        <Outlet></Outlet>
    </>
  )
}

export default AuthLayout