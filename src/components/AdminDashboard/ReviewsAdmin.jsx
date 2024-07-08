import React, { useEffect, useState } from 'react'
import { BASEURL } from '../BASEURL';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const ReviewsAdmin = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(`${BASEURL}api/v1/review/getAllReviews`)
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
                                    Rating
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Comment
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
                            {data.map((review, index) => (
                                <tr key={index} class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50">
                                    <th class="px-6 py-4">
                                        <img src={review.imgUrl} className='rounded-full size-8' alt="img" />
                                    </th>
                                    <td class="px-6 py-4">
                                        {review.username}
                                    </td>
                                    <td class="px-6 py-4">
                                    {review.star}
                                    </td>
                                    <td class="px-6 py-4 max-w-72">
                                        {review.comment}
                                    </td>
                                    <td class="px-6 py-4">
                                    {review.createdAt.split('T')[0]}
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
                    </table> :
                    <div className='w-full h-[80vh] flex items-center justify-center'>
                        <p className='font-bold text-xl'>No Review Found</p>
                    </div>
                }

            </div>

        </div>
    )
}

export default ReviewsAdmin