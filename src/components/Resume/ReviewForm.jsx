import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaRegStar, FaStar } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from 'react-redux';
import { BASEURL } from '../BASEURL';
import Loader from '../Loader/Loader';
import toast from 'react-hot-toast';

const ReviewForm = ({ setDisplayForm }) => {
    const isLoggedIn = useSelector(state => state.login.isLoggedIn);
    const user = useSelector(state => state.login.user);

    const [starData, setStar] = useState(0);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        userId : "",
        imgURL: "",
        userName: "",
        commment: "",
        star: 0
    });

    useEffect(() => {
        if (isLoggedIn) {
            setFormData({
                userId : user._id,
                imgURL: user.imgUrl,
                userName: `${user.firstName} ${user.lastName}`,
                star: starData
            })
        }
    }, [setStar])


    const changeHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
            star: starData
        });
        // console.log(formData);
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await fetch(`${BASEURL}api/v1/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            setLoading(false);

            const data = await response.json();

            if (response.ok) {
                toast.success("Send Successfully !!");
                navigate('/resume');
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            setLoading(false);
            console.log(error);
            toast.error('Something went wrong');
        }
    }

    const generateStar = () => {
        return Array(5)
            .fill()
            .map((item, i) => <Star key={i} i={i} />)
    }

    const Star = ({ i }) => {
        return starData > i ? <FaStar size={30} className='text-yellow-400 cursor-pointer' onClick={() => setStar(i + 1)} /> :
            <FaRegStar size={30} className='text-yellow-400 cursor-pointer' onClick={() => setStar(i + 1)} />
    }
    return (
        <div>
            {loading ? <Loader /> :
                <div className="flex justify-center h-auto">
                    <div className="w-full max-w-md bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700 mt-9">
                        <div className="p-6 space-y-4 md:space-y-6">
                            <div className='flex justify-end'>
                                <RxCross2 size={20} className='cursor-pointer' onClick={() => setDisplayForm(false)} />
                            </div>
                            <div className="flex justify-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                                <img className="w-8 h-8 mr-2" src="logo.png" alt="logo" />
                                Resumate
                            </div>
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                                Share Your Review
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={submitHandler}>
                                <div>
                                    <div className='flex justify-center'>
                                        {generateStar()}
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="comment" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Enter Your Comment
                                    </label>
                                    <textarea
                                        rows={4}
                                        name="comment"
                                        id="comment"
                                        onChange={changeHandler}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="e.g Excellent"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    name='submit'
                                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            }

        </div>
    )
}

export default ReviewForm