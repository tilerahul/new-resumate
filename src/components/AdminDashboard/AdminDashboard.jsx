import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import Sidebar from './Sidebar'
import UserAdmin from './UserAdmin';
import ReviewsAdmin from './ReviewsAdmin';
import ContactAdmin from './ContactAdmin';

const AdminDashboard = () => {
    const user = useSelector((state) => state.login.user);
    const navigate = useNavigate();
    const [section, setSection] = useState('users');
    useEffect(()=>{
        if(!user.isAdmin){
            toast.error('This is protected route for Admin only !!');
            navigate('/');
        }
    }, [])
  return (
    <div>
        <div className='pt-0 py-16 flex gap-5'>
            <Sidebar section={section} setSection={setSection} />
            {section === 'users' && <UserAdmin/>}
            {section === 'reviews' && <ReviewsAdmin/>}
            {section === 'contacts' && <ContactAdmin/>}
        </div>
    </div>
  )
}

export default AdminDashboard