import React, { Component } from 'react'
import logo from "./../Images/Car-Manager-logo.png"
import { connect } from 'react-redux';

class Navbar extends Component {

  render() {

    const { user } = this.props.auth
  
  return (

    <div>
        {/* Header */}
        <div className='flex justify-between items-center bg-gray-800 py-6 w-full top-0  '>
          {/* Left Side */}
          <div>
            <img src={logo} width="300px" height="300px" alt="Car Management Logo" />
          </div>
          {/* Right Side */}
          <div className='text-white text-xl mr-4'> Welcome, {user.name} </div>
        </div>
    </div>
  )
}

}

const mapStateToProps = state => ({
  isAuthenticated: state.car.isAuthenticated,
  error: state.error,
  auth: state.auth
});

export default connect( mapStateToProps)(Navbar)