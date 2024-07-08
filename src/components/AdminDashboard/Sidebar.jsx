import React from 'react'

const Sidebar = ({section, setSection}) => {
    return (
        <div className='h-[90vh] shadow-xl'>
            <div className="flex flex-col item-center bg-slate-200 h-full">
                <div>
                    <ul className="p-4 flex flex-col font-medium cursor-pointer gap-2">
                        <li
                            onClick={()=>setSection('users')}
                            className={
                                section === "users"
                                    ? "bg-slate-300 px-2 py-1 rounded"
                                    : "bg-slate-100 px-2 py-1 rounded"
                            }
                        >
                            Users
                        </li>
                        <li
                        onClick={()=>setSection('reviews')}
                            className={
                                section === "reviews"
                                    ? "bg-slate-300 px-2 py-1 rounded"
                                    : "bg-slate-100 px-2 py-1 rounded"
                            }
                        >
                            Reviews
                        </li>
                        <li
                        onClick={()=>setSection('contacts')}
                            className={
                                section === "contacts"
                                    ? "bg-slate-300 px-2 py-1 rounded"
                                    : "bg-slate-100 px-2 py-1 rounded"
                            }
                        >
                            Contacts
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar