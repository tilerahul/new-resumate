import React from 'react'
import Templetes from '../../Templates'
import { IoClose } from "react-icons/io5";

const ChangeTemplete = ({ setIsChange }) => {
    return (
        <div className='w-[100vw] h-[100vh] bg-white pt-16 relative'>
            <IoClose size={30} className='absolute right-6 lg:right-12 top-8 cursor-pointer'
                onClick={() => setIsChange(false)}
            />
            <Templetes setIsChange={setIsChange} />
        </div>
    )
}

export default ChangeTemplete