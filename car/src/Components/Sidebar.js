import React from 'react'

function Sidebar() {
    return (
        <div className='w-1/5 bg-gray-800  text-white h-screen  '>

            <div className='mt-16  py-2  w-full text-2xl bg-red-700 text-white hover:bg-red-700 '>
                <a href="/register"  className='text-white no-underline md:ml-4'> Register Car </a>
            </div>
            <div className='mt-4  py-2  w-full text-2xl bg-red-700 text-white hover:bg-red-700 '>
                <a href="/availablecars"  className='text-white no-underline md:ml-4'> Available Cars </a>
            </div>
            <div className='mt-4  py-2  w-full text-2xl bg-red-700 text-white hover:bg-red-700 '>
                <a href="/carrequests"  className='text-white no-underline md:ml-4'> Car Requests </a>
            </div>
            <div className='mt-8  py-2  bg-white w-full text-2xl text-red-500 hover:bg-gray-200 '>
                <a href="#"  className='text-red-700 no-underline md:ml-4'> Logout </a>
            </div>

        </div>
    )
}

export default Sidebar