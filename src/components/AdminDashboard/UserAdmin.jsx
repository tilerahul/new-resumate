import React, { useEffect, useState } from 'react';
import { BASEURL } from '../BASEURL';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const UserAdmin = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch(`${BASEURL}api/v1/auth/getUsers`);
                const result = await response.json();
                const sortedData = result.sort((a, b) => {
                    const nameA = `${a.firstName} ${a.lastName}`.toLowerCase();
                    const nameB = `${b.firstName} ${b.lastName}`.toLowerCase();
                    return nameA.localeCompare(nameB);
                });
                setData(sortedData);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="w-[86vw] pt-4">
            <div className="overflow-x-auto shadow-md sm:rounded-lg">
                {data ? (
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3">Photo</th>
                                <th scope="col" className="px-6 py-3">Name</th>
                                <th scope="col" className="px-6 py-3">Email</th>
                                <th scope="col" className="px-6 py-3">Phone</th>
                                <th scope="col" className="px-6 py-3">Join</th>
                                <th scope="col" className="px-6 py-3 text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((user, index) => (
                                <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50">
                                    <td className="px-6 py-4">
                                        <img src={user.imgUrl} className="rounded-full size-8" alt="User" />
                                    </td>
                                    <td className="px-6 py-4">
                                        {`${user.firstName} ${user.lastName}`}
                                    </td>
                                    <td className="px-6 py-4">{user.email}</td>
                                    <td className="px-6 py-4">{user.phone}</td>
                                    <td className="px-6 py-4">{user.joinedAt.split('T')[0]}</td>
                                    <td className="flex justify-around px-6 py-4">
                                        <FaEdit className="text-blue-500 cursor-pointer" />
                                        <MdDelete size={18} color="red" className="cursor-pointer" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <div className="w-full h-[80vh] flex items-center justify-center">
                        <p className="font-bold text-xl">No User Found</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserAdmin;
