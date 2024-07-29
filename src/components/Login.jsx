import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { login } from "../Store/slices/loginSlice"
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { BASEURL } from './BASEURL';
import Loader from './Loader/Loader';

function Login() {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: "",
    password: ""
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  }

  useEffect(()=>{
    const userExist = localStorage.getItem("user");
    if(userExist){
      dispatch(login(JSON.parse(userExist)));
      alert('Our site is under maintenance. To ensure the best quality of your resume, please build it on a laptop or desktop.')
      navigate("/")
    }
  }, [])

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await fetch(`${BASEURL}api/v1/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });
      setLoading(false);

      const data = await response.json();

      if (response.ok) {
        dispatch(login(data.user))
        toast.success("You are logged in !!");
        navigate('/');
        alert('Our site is under maintenance. To ensure the best quality of your resume, please build it on a laptop or desktop.')
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error('Something went wrong !!');
    }
  }

  return (
    <>
      {
        loading ? <Loader /> :
          <section className="bg-gray-50 dark:bg-gray-900 pt-0">
            <div className="flex justify-center h-auto">
              <div className="w-full max-w-md bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700 mt-9">
                <div className="p-6 space-y-4 md:space-y-6">
                  <div className="flex justify-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img className="w-8 h-8 mr-2" src="logo.png" alt="logo" />
                    Resumate
                  </div>
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Sign in to your account
                  </h1>
                  <form className="space-y-4 md:space-y-6" onSubmit={submitHandler}>
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Your email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={user.email}
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
                          value={user.password}
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
                    <div className="flex items-center justify-between">
                      <Link to="/forgotpassword" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                        Forgot password?
                      </Link>
                    </div>
                    <button
                      type="submit"
                      name='submit'
                      className="w-full text-white bg-[#2CACD5] hover:bg-[rgb(103,176,200)] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                    >
                      Sign in
                    </button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet?{' '}
                      <Link to="/CreateAccount" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                        Sign up
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>
      }
    </>
  );
}

export default Login;
