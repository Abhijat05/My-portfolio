import React from 'react'
import transition from '../components/transition'

const NotFoundPage = () => {
  return (
    <div>
      <h1 className='text-4xl font-bold text-center mt-10'>
        404 - Page Not Found
      </h1>
    </div>
  )
}

export default transition(NotFoundPage)