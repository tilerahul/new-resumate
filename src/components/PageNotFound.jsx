import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className='h-[100vh] flex justify-center items-center flex-col'>
            <h2 className='font-semibold text-2xl'>Page Not Found</h2>
            <Link to="/" className='underline mt-6 text-sky-800'>Go To Home Page</Link>
    </div>
  )
}

export default PageNotFound