import React, { Component } from 'react'
import { connect } from 'react-redux';
import { logout } from './../Actions/authActions';
import PropTypes from 'prop-types';
import { Navigate } from "react-router-dom";

class Sidebar extends Component {

    static propTypes = {
        logout: PropTypes.func.isRequired
    }

    render() {

        const { token, user } = this.props.auth

        return (
            <div className='w-1/5 bg-gray-800  text-white h-screen  '>

                {!token ? <Navigate to="/login" replace={true} /> : null}
                
                {(user.name == "admin" || user.name == "dispatcher123") ?
                    <div>
                        <div className='mt-16  py-2  w-full text-2xl bg-red-700 text-white hover:bg-red-700 '>
                            <a href="/register" className='text-white no-underline md:ml-4'> Register Car </a>
                        </div>
                        <div className='mt-4  py-2  w-full text-2xl bg-red-700 text-white hover:bg-red-700 '>
                            <a href="/carrequests" className='text-white no-underline md:ml-4'> Car Requests </a>
                        </div>
                    </div>
                     : null
                } 


                <div className='mt-4  py-2  w-full text-2xl bg-red-700 text-white hover:bg-red-700 '>
                    <a href="/availablecars" className='text-white no-underline md:ml-4'> Available Cars </a>
                </div>

                <div className='mt-4  py-2  w-full text-2xl bg-red-700 text-white hover:bg-red-700 '>
                    <a href="/approvedcar" className='text-white no-underline md:ml-4'> Approved Cars </a>
                </div>
                <div className='mt-8  py-2  bg-white w-full text-2xl text-red-500 hover:bg-gray-200 '>
                    <a onClick={this.props.logout} href="/" className='text-red-700 no-underline md:ml-4'> Logout </a>
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

export default connect(mapStateToProps, { logout })(Sidebar)