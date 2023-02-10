import React, { Component } from 'react'
import logo from "./../Images/Car-Manager-logo.png"
import CloudBased from "./../Images/1a.gif"
import TimeSaving from "./../Images/2a.gif"
import Fast from "./../Images/6a.gif"
import InstantUpdates from "./../Images/7a.gif"
import UserFriendly from "./../Images/8a.gif"
import Statistics from "./../Images/9.gif"
import { BsInstagram, BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import { connect } from 'react-redux';
import { logout } from './../Actions/authActions';
import PropTypes from 'prop-types';

class home extends Component {

  static propTypes = {
    logout: PropTypes.func.isRequired
}

  render() {

    const { token } = this.props.auth

    return (
      <div>

        <div className='heroBg h-screen '>
          {/* Header */}
          <div className='flex'>
            <div className='sm:flex md:justify-between items-center bg-black bg-opacity-50  w-full top-0  '>
              {/* Left Side */}
              <div>
                <img src={logo} width="300px" height="300px" alt="Car Management Logo" />
              </div>
              {/* Right Side */}
              <div className='flex text-white mr-4 '>
                {/* <p className='hover:bg-red-700 py-8 px-4 '> <a href="#" className='text-white no-underline' > Features </a> </p>
            <p className='hover:bg-red-700 py-8 px-4 '> <a href="#" className='text-white no-underline' > About </a> </p> */}
                { !token? (
                  <div className='flex text-white mr-4 '>
                    <p className='hover:bg-red-700 py-8 px-4 '> <a href="/login" className='text-white no-underline' > Login </a> </p>
                    <p className='hover:bg-red-700 py-8 px-4 '> <a href="/signup" className='text-white no-underline' > Sign Up </a> </p>
                  </div>)
                  : (
                    <p className='hover:bg-red-700 py-8 px-4 '> <a onClick = {this.props.logout} href="/" className='text-white no-underline' > Logout </a> </p>
                  )}
              </div>
            </div>
          </div>

          {/* Hero Section */}
          <div className='text-center '>
            <div className='text-5xl font-bold text-center text-white pt-56 md:px-40' >
              <h1> Your Effective Car Management Solution </h1>
            </div>
            <div className='mt-4 text-white text-2xl '>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </div>
            <div>
              {token ? (<a href="/availablecars" className='bg-red-700 px-10 py-2 md:mt-32 sm:mt-20 mt-10 text-white font-bold inline-block no-underline
                        hover:bg-red-500 hover:text-white'> View Available Cars </a>) :
                (<a href="/login" className='bg-red-700 px-10 py-2 md:mt-32 sm:mt-20 mt-10 text-white font-bold inline-block no-underline
                      hover:bg-red-500 hover:text-white'> View Available Cars </a>)}

            </div>
          </div>
        </div>

        {/* Features */}
        <div className='pb-12 pt-4 '>
          {/* <p className='text-center text-blue-900 text-6xl text-black '> Features </p> */}
          <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center justify-center pl-28 pt-12 font-bold md:text-3xl sm:text-xl text-lg '>
            <div className='bg-white my-8 w-2/3 text-center border-2 drop-shadow-lg hover:border-1 hover:border-red-500 hover:scale-105 hover:shadow-2xl rounded-lg py-8 ' >
              <img src={CloudBased} className="md:ml-8 ml-2" />
              <p> Cloud Based </p>
            </div>
            <div className='bg-white my-8 w-2/3 text-center border-2 drop-shadow-lg hover:border-1 hover:border-red-500 hover:scale-105 hover:shadow-2xl rounded-lg py-8  '>
              <img src={TimeSaving} className="md:ml-8 ml-2" />
              <p> Time Saving </p>
            </div>
            <div className='bg-white my-8 w-2/3 text-center border-2 drop-shadow-lg hover:border-1 hover:border-red-500 hover:scale-105 hover:shadow-2xl rounded-lg py-8  '>
              <img src={Fast} className="md:ml-8 ml-2" />
              <p> Fast Performance </p>
            </div>
            <div className='bg-white my-8 w-2/3 text-center border-2 drop-shadow-lg hover:border-1 hover:border-red-500 hover:scale-105 hover:shadow-2xl rounded-lg py-8  '>
              <img src={InstantUpdates} className="md:ml-8 ml-2" />
              <p> Instant Updates </p>
            </div>
            <div className='bg-white my-8 w-2/3 text-center border-2 drop-shadow-lg hover:border-1 hover:border-red-500 hover:scale-105 hover:shadow-2xl rounded-lg py-8  '>
              <img src={UserFriendly} className="md:ml-8 ml-2" />
              <p> UserFriendly </p>
            </div>
            <div className='bg-white my-8 w-2/3 text-center items-center justify-center align-center border-2 drop-shadow-lg hover:border-1 hover:border-red-500 hover:scale-105 
          hover:shadow-2xl rounded-lg py-8  '>
              <img src={Statistics} className="md:ml-8 ml-2" />
              <p> Reliable Statistics </p>
            </div>
          </div>
        </div>


        {/* About Section */}
        <div className='aboutBg '>
          <div className='text-5xl font-bold text-center text-white pt-40 sm:px-40 px-20 ' >
            <h1> Your Effective Car Management Solution </h1>
          </div>
          <div className='text-white  text-center text-xl '>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet <br />
            dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation nibh <br />
            euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. <br />
          </div>
          <div className='text-center pb-12 '>
            {token ? (<a href="/availablecars" className='bg-white inline-block px-10 py-2 mt-24 text-blue-700 font-bold no-underline '> View Available Cars </a>) :
              (<a href="/login" className='bg-white inline-block px-10 py-2 mt-24 text-blue-700 font-bold no-underline '> View Available Cars </a>)}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-black  border-t border-gray-600 w-full ">
          <div className=" footerBg pt-28 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1  border-b border-gray-600 pb-12 ">
            <div className="px-10 ml-8 ">
              <div className='text-white font-extrabold text-6xl ml-4 '>
                Contact Us
              </div>
              <div className="grid grid-cols-2 md:flex text-white text-2xl">
                <a
                  href="#"
                  className=" text-2xl bg-white bg-opacity-20 m-4 p-2 rounded-lg "
                >
                  <BsInstagram />
                </a>
                <a
                  href="#"
                  className=" text-2xl bg-white bg-opacity-20 m-4 p-2 rounded-lg "
                >
                  <BsFacebook />
                </a>
                <a
                  href="#"
                  className=" text-2xl bg-white bg-opacity-20 m-4 p-2 rounded-lg "
                >
                  <BsTwitter />
                </a>
                <a
                  href="#"
                  className=" text-2xl bg-white bg-opacity-20 m-4 p-2 rounded-lg "
                >
                  <BsLinkedin />
                </a>
              </div>
            </div>
            <div className="px-20 ">
              <p className="text-white text-2xl font-sans font-bold mb-6 ">

                Quick Links
              </p>
              <p className="text-white text-base">
                {" "}
                <a href="/" className='text-white no-underline'> Home </a>{" "}
              </p>
              <p className="text-white text-base">
                <a href="/#" className='text-white no-underline' > About </a>
              </p>
              <p className="text-white text-base">
                <a href="#" className='text-white no-underline' > Features </a>
              </p>
            </div>
            <div className='text-center '>
              <p className='text-white text-2xl font-sans font-bold  mb-6 ' >{" "} About Car Manager {" "}</p>
              <div className='text-white text-lg font-sans mr-2 mb-6' > Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                sed diam  nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat  volutpat.
                Ut wisi enim ad minim veniam, quis nostrud exerci tation  nibh euismod tincidunt ut
                laoreet dolore magna aliquam  erat volutpat.
                Lorem ipsum dolor sit amet, consectetuer  adipiscing elit, sed diam nonummy. </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="flex text-center justify-center ">
            <p className="px-10 py-4 ">
              {" "}
              <img src="https://www.lootrush.com/images/yc.svg" />
            </p>
            <p className="px-10 py-4 ">
              {" "}
              <img src="https://www.lootrush.com/images/paradigm.svg" />
            </p>
            <p className="px-10 py-4 ">
              {" "}
              <img src="https://www.lootrush.com/images/a11z.svg" />
            </p>
          </div>
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

export default connect(mapStateToProps, { logout })(home);