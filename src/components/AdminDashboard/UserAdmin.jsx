import React, { useEffect, useState } from 'react'
import { BASEURL } from '../BASEURL';

const UserAdmin = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(`${BASEURL}api/v1/auth/getUsers`)
            .then(response => response.json())
            .then((data) => {
                setData(data)
            }
            );
    }, []);

    return (
        <div className='w-[86vw] pt-4'>
            <div class="overflow-x-auto shadow-md sm:rounded-lg">
                {data ?
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope='col' class="px-6 py-3">
                                    Photo
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Phone
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Join
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((user, index) => (
                                <tr key={index} class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50">
                                    <th class="px-6 py-4">
                                        <img src={user.imgUrl} className='rounded-full size-8' alt="img" />
                                    </th>
                                    <td class="px-6 py-4">
                                        {`${user.firstName} ${user.lastName}`}
                                    </td>
                                    <td class="px-6 py-4">
                                        {user.email}
                                    </td>
                                    <td class="px-6 py-4">
                                        {user.phone}
                                    </td>
                                    <td class="px-6 py-4">
                                        {user.joinedAt.split('T')[0]}
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                    : <div className='w-full h-[80vh] flex items-center justify-center'>
                        <p className='font-bold text-xl'>No User Found</p>
                    </div>}

            </div>

        </div>
    )
}

export default UserAdmin