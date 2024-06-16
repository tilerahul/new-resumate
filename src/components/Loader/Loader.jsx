import React from 'react'
import RingLoader from "react-spinners/RingLoader";

const Loader = () => {
  return (
    <div className='flex items-center justify-center h-[75vh] '>
        <RingLoader
        size={100}
        color={'#42b0f5'}
      />
    </div>
  )
}

export default Loader