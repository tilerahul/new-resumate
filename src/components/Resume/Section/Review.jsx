import React, { useEffect, useState } from 'react'
import { BASEURL } from '../../BASEURL';
import Loader from '../../Loader/Loader';
import { FaRegStar, FaStar } from "react-icons/fa6";
import { Slide } from "react-slideshow-image";

function Review() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch(`${BASEURL}api/v1/review/getAllReviews`)
      .then(response => response.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      }
      );

  }, []);

  const generateStar = (n) => {
    return Array(5)
      .fill()
      .map((item, i) => <Star key={i} i={i} n={n} />)
  }
  const Star = ({ i, n }) => {
    return n > i ? <FaStar size={30} className='text-yellow-400 cursor-pointer' /> :
      <FaRegStar size={30} className='text-yellow-400 cursor-pointer' />
  }

  return (
    <>

      <div className="mt-5 mx-auto text-center md:max-w-xl lg:max-w-3xl">
        <h3
          className="mb-6 text-3xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
          Users Reviews
        </h3>
      </div>

      {loading ? <Loader /> :
        <div className="mt-10 mx-4 mr-4  text-center  flex md:flex-row flex-wrap gap-3 justify-center">
          {/* <Slide> */}
          {data.map((item, index) => (
            <div key={index} className="mb-12 md:mb-0 w-[350px] h-auto transform transition duration-500 hover:scale-105">
              <div className="mb-6 flex justify-center">
                <img
                  src={item.imgUrl}
                  className="w-32 rounded-full shadow-lg dark:shadow-black/30" />
              </div>
              <h5 className="mb-4 text-xl font-semibold">{item.username}</h5>
              <p className="mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="inline-block h-7 w-7 pr-2"
                  viewBox="0 0 24 24">
                  <path
                    d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                </svg>
                {item.comment}
              </p>
              <div className="mb-0 flex items-center justify-center">
                {generateStar(item.star)}
              </div>
            </div>
          ))}
          {/* </Slide> */}
          

        </div>
      }
    </>
  )
}

export default Review
