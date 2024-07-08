import React, { useEffect, useState } from 'react'
import { BASEURL } from '../BASEURL';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const ContactAdmin = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(`${BASEURL}api/v1/contact/contacts`)
            .then(response => response.json())
            .then((data) => {
                setData(data)
            }
            );
    }, [data]);
    return (
        <div className='w-[86vw] pt-4'>
            {data != null ?
                <div class="overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope='col' class="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Messege
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Date
                                </th>
                                <th scope="col" class="px-6 py-3 text-center">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((contact, index) => (
                                <tr key={index} class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50">
                                    <th class="px-6 py-4">
                                        {contact.name}
                                    </th>
                                    <td class="px-6 py-4">
                                        {contact.email}
                                    </td>
                                    <td class="px-6 py-4">
                                        {contact.message}
                                    </td>
                                    <td class="px-6 py-4">
                                        {contact.createdAt.split('T')[0]}
                                    </td>
                                    <td className="flex justify-around px-6 py-4">
                                        <FaEdit
                                            className="text-blue-500 cursor-pointer"
                                        />
                                        <MdDelete
                                            size={18}
                                            color="red"
                                            className="cursor-pointer"
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                :
                <div className='w-full h-[80vh] flex items-center justify-center'>
                    <p className='font-bold text-xl'>No Contact Found</p>
                </div>
            }


        </div>
    )
}

export default ContactAdmin