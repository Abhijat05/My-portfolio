import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-between items-center w-full p-4'>
      <div className='text-2xl font-bold'>
        <Link className='hover:text-gray-600 transition-colors' to='/'>
          Abhijat Sinha
        </Link>
      </div>

      <div className='flex gap-4'>
        <div className='m-2 text-lg font-semibold'>
          <Link className='hover:text-gray-600 transition-colors' to='/'>
            Home
          </Link>
        </div>
        <div className='m-2 text-lg font-semibold'>
          <Link className='hover:text-gray-600 transition-colors' to='/contact'>
            Contact
          </Link>
        </div>
        <div className='m-2 text-lg font-semibold'>
          <Link className='hover:text-gray-600 transition-colors' to='/projects'>
            Projects
          </Link>
        </div>
        <div className='m-2 text-lg font-semibold'>
          <Link className='hover:text-gray-600 transition-colors' to='/skills'>
            Skills
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header