import React, { useEffect, useState } from 'react';
import { BASEURL } from '../BASEURL';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const ReviewsAdmin = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`${BASEURL}api/v1/review/getAllReviews`)
      .then(response => response.json())
      .then(data => {
        const sortedData = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setData(sortedData);
      })
      .catch(error => console.error('Error fetching reviews:', error));
  }, []);

  return (
    <div className="w-[86vw] pt-4">
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
      {data && <div className='font-bold m-3 text-sky-600'>{`Total Reviews By Users : ${data.length}`}</div>}
        {data ? (
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">Photo</th>
                <th scope="col" className="px-6 py-3">Name</th>
                <th scope="col" className="px-6 py-3">Rating</th>
                <th scope="col" className="px-6 py-3">Comment</th>
                <th scope="col" className="px-6 py-3">Date</th>
                <th scope="col" className="px-6 py-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((review, index) => (
                <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50">
                  <td className="px-6 py-4">
                    <img src={review.imgUrl} className="rounded-full size-8" alt="img" />
                  </td>
                  <td className="px-6 py-4">{review.username}</td>
                  <td className="px-6 py-4">{review.star}</td>
                  <td className="px-6 py-4 max-w-72">{review.comment}</td>
                  <td className="px-6 py-4">{review.createdAt.split('T')[0]}</td>
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
            <p className="font-bold text-xl">No Review Found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewsAdmin;
