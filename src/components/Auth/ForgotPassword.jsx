import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { BASEURL } from '../BASEURL';
import Loader from '../Loader/Loader';

const ForgotPassword = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [loading, setLoading] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isCPasswordVisible, setIsCPasswordVisible] = useState(false);

    const changeHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await fetch(`${BASEURL}api/v1/auth/forgotPassword`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            setLoading(false);
            const responseData = await response.json();

            if (response.ok) {
                toast.success(responseData.message);
            } else {
                toast.error(responseData.message || 'Error while updating password');
            }
        } catch (error) {
            console.error(error);
            setLoading(false);
            toast.error('Something went wrong');
        }
    };

    return (
        <section className="bg-gray-50 dark:bg-gray-900 pt-4 pb-0">
            {loading ? <Loader /> : (
                <div className="flex justify-center h-auto">
                    <div className="w-full max-w-md bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700 mt-9">
                        <div className="p-6 space-y-4 md:space-y-6">
                            <div className="flex justify-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                                <img className="w-8 h-8 mr-2" src="logo.png" alt="logo" />
                                Resumate
                            </div>
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                                Reset Password
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={submitHandler}>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={changeHandler}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Enter your Email"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Password
                                    </label>
                                    <div className='flex items-center'>
                                        <input
                                            type={isPasswordVisible ? 'text' : 'password'}
                                            name="password"
                                            id="password"
                                            value={formData.password}
                                            onChange={changeHandler}
                                            placeholder="••••••••"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            required
                                        />
                                        {isPasswordVisible ? (
                                            <FaEyeSlash className='w-9 -m-10 cursor-pointer' onClick={() => setIsPasswordVisible(!isPasswordVisible)} />
                                        ) : (
                                            <FaEye className='w-9 -m-10 cursor-pointer' onClick={() => setIsPasswordVisible(!isPasswordVisible)} />
                                        )}
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Confirm Password
                                    </label>
                                    <div className='flex items-center'>
                                        <input
                                            type={isCPasswordVisible ? 'text' : 'password'}
                                            name="confirmPassword"
                                            id="confirmPassword"
                                            value={formData.confirmPassword}
                                            onChange={changeHandler}
                                            placeholder="••••••••"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            required
                                        />
                                        {isCPasswordVisible ? (
                                            <FaEyeSlash className='w-9 -m-10 cursor-pointer' onClick={() => setIsCPasswordVisible(!isCPasswordVisible)} />
                                        ) : (
                                            <FaEye className='w-9 -m-10 cursor-pointer' onClick={() => setIsCPasswordVisible(!isCPasswordVisible)} />
                                        )}
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    name='submit'
                                    className="w-full text-white bg-[#2CACD5] hover:bg-[rgb(103,176,200)] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ForgotPassword;
