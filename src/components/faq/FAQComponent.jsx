import React, { useState } from 'react'
import { FaPlus, FaMinus } from "react-icons/fa";

const faqComponent = ({ id, question, answer }) => {
  
  const [show, setShow] = useState(false);

  return (
    <>
      <div className='shadow-xl my-4 rounded-md'>
        <div className='flex items-center justify-between'>
          <p className='px-5 pt-3 m-2 font-medium'>Q.{id} {question}</p>
          <span className='mx-16'>{show ? <FaMinus onClick={() => setShow(false)}className='cursor-pointer' /> : <FaPlus onClick={() => setShow(true)}className='cursor-pointer' />}</span>
        </div>
        {show &&
          <div className='border-l-4 border-sky-800 rounded'>
            <p className='px-5 py-3 mx-9 pb-4'>{answer}</p>
          </div>
        }
      </div>
    </>
  )
}

export default faqComponent