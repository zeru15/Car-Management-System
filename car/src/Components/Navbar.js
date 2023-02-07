import React from 'react'
import logo from "./../Images/Car-Manager-logo.png"

function Navbar() {
  return (
    <div>
        {/* Header */}
        <div className='flex justify-between items-center bg-gray-800 py-6 w-full top-0  '>
          {/* Left Side */}
          <div>
            <img src={logo} width="300px" height="300px" alt="Car Management Logo" />
          </div>
        </div>
    </div>
  )
}

export default Navbar