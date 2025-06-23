import React from 'react'
import transition from '../components/transition'

const HomePage = () => {
  return (
    <div>
      <h1 className='text-4xl font-bold text-center mt-10'>
        HomePage
      </h1>
    </div>
  )
}

export default transition(HomePage)