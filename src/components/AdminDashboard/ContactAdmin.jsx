import React, { useEffect, useState } from 'react';
import { BASEURL } from '../BASEURL';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const ContactAdmin = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`${BASEURL}api/v1/contact/contacts`)
      .then(response => response.json())
      .then(data => {
        const sortedData = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setData(sortedData);
      })
      .catch(error => console.error('Error fetching contacts:', error));
  }, []);

  return (
    <div className="w-[86vw] pt-4">
      {data ? (
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">Name</th>
                <th scope="col" className="px-6 py-3">Email</th>
                <th scope="col" className="px-6 py-3">Message</th>
                <th scope="col" className="px-6 py-3">Date</th>
                <th scope="col" className="px-6 py-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((contact, index) => (
                <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50">
                  <td className="px-6 py-4">{contact.name}</td>
                  <td className="px-6 py-4">{contact.email}</td>
                  <td className="px-6 py-4">{contact.message}</td>
                  <td className="px-6 py-4">{contact.createdAt.split('T')[0]}</td>
                  <td className="flex justify-around px-6 py-4">
                    <FaEdit className="text-blue-500 cursor-pointer" />
                    <MdDelete size={18} color="red" className="cursor-pointer" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="w-full h-[80vh] flex items-center justify-center">
          <p className="font-bold text-xl">No Contact Found</p>
        </div>
      )}
    </div>
  );
};

export default ContactAdmin;
