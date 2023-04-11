import React from 'react'

import '../Assets/css/style.css'
const Adminlogin = () => {
  return (
    <div>
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