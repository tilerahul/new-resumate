import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { BASEURL } from './BASEURL';
import Loader from './Loader/Loader';
import Otp from './Resume/Section/Otp';

function Contact() {
  const isLoggedIn = useSelector(state => state.login.isLoggedIn);
  const user = useSelector(state => state.login.user);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userID: "",
    name: "",
    email: "",
    message: ''
  });

  const [loading, setLoding] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      setFormData({
        userID: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        name: `${user.firstName} ${user.lastName}`
      })
    } else {
      toast.error('Please login first');
      navigate('/login');
    }
  }, [isLoggedIn]);

  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoding(true);
      const response = await fetch(`${BASEURL}api/v1/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      setLoding(false);
      const responseData = await response.json();


      if (response.ok) {
        toast.success(responseData.message);
      } else {
        toast.error(responseData.message);
      }
    } catch (error) {
      console.log(error);
      setLoding(false);
      toast.error('Something went wrong');
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 pt-4 pb-0">
      {
        loading ? <Loader /> :
          <div className="flex justify-center h-auto">
            <div className="w-full max-w-md bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700 mt-9">
              <div className="p-6 space-y-4 md:space-y-6">
                <div className="flex justify-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                  <img className="w-8 h-8 mr-2" src="logo.png" alt="logo" />
                  Resumate
                </div>
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                  Contact With Us
                </h1>
                <form className="space-y-4 md:space-y-6" onSubmit={submitHandler}>
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={`${formData.firstName} ${formData.lastName}`}
                      onChange={changeHandler}
                      placeholder="Enter Your Name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                      disabled
                    />
                  </div>
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
                      disabled
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      name="message"
                      id="message"
                      onChange={changeHandler}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter your message"
                      required
                    />
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
      }
    </section>
  );
}

export default Contact;
