import React from 'react'
import Adminheader from '../components/Adminheader'
import '../assets/css/style.css'
const Adminlogin = () => {
  return (
    <div>
      <Adminheader />
      Welcome to Admin Login Page
      <form>
        <input type='text' name='username' placeholder='Enter Admin Username' /><br />
        <input type='password' name='password' placeholder='Enter Admin Password' /><br />
        <button>Login</button>
      </form>
    </div>
  )
}

export default Adminlogin