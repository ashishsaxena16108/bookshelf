import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex flex-row justify-between w-full'>
      <Link to='/'>
      <h2 className=' text-7xl p-11 text-fuchsia-400 flex flex-row m-auto'>
      <span className=' text-fuchsia-800 font-bold'>Book
      </span>
      She<span className="book w-6 h-20 m-0 mx-1 mt-[-5px] p-0 border-fuchsia-900 border-4 flex flex-col justify-between rounded">
        <div className="line bg-fuchsia-900 w-full h-2 my-2 m-0 p-0"></div>
        <div className="line bg-fuchsia-900 w-full h-2 my-2 m-0 p-0"></div>
      </span>f
      </h2>
      </Link>
      {window.location.href!=='localhost:5173/user' && 
      <Link to='/user'>
      <button className=' w-32 h-24 font-bold text-xl text-white p-0 m-5 border-4 flex flex-col items-center justify-center bg-fuchsia-600 rounded-lg hover:opacity-50 cursor-pointer'>
       <span>My</span> BookShelf
      </button>
      </Link>}
    </div>
  )
}

export default Navbar
