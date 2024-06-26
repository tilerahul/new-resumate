import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { LuEye, LuEyeOff } from "react-icons/lu";
import { BASEURL } from "./BASEURL";
import Loader from "./Loader/Loader";

function CreateAccount() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    cpassword: ""
  });

  const [OTP, setOtp] = useState(['', '', '', '', '', '']);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoding] = useState(false);
  const [otpField, setOtpField] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoding(true);
      const response = await fetch(`${BASEURL}api/v1/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      setLoding(false);

      const responseData = await response.json();

      if (responseData.success) {
        sendOTP();
        setOtpField(true);
      } else {
        toast.error(responseData.message);
      }
    } catch (error) {
      setLoding(false);
      console.log(error);
      toast.error('Something went wrong');
    }
  };

  //otp ------------------------>
  const inputRefs = useRef([]);

  const handleChange = (index, event) => {
    const value = event.target.value;

    const newOTPFields = [...OTP];
    newOTPFields[index] = value;
    setOtp(newOTPFields);

    if (value.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const sendOTP = async () => {
    try {
      const {email} = formData;
      const name = formData.firstName + " " + formData.lastName;
      setLoding(true);
      const response = await fetch(`${BASEURL}api/v1/otp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, name})
      });
      setLoding(false);

      const responseData = await response.json();

      if (responseData.success) {
        toast.success(responseData.message);
      } else {
        toast.error(responseData.message);
      }
    } catch (error) {
      setLoding(false);
      console.log(error);
      toast.error('Something went wrong');
    }
  }

  const verifyOtp = async(e) => {
    e.preventDefault();
    const otp = OTP.join('');
    

    try {
      const {email} = formData;
      setLoding(true);
      const response = await fetch(`${BASEURL}api/v1/otp/verify`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, otp, formData})
      });
      setLoding(false);

      const responseData = await response.json();

      if (responseData.success) {
        toast.success(responseData.message);
        navigate("/login");
      } else {
        toast.error(responseData.message);
      }
    } catch (error) {
      setLoding(false);
      console.log(error);
      toast.error('Something went wrong');
    }
  }

  return (
    <>
      {
        loading ? <Loader /> :
          otpField ? <>
            <div className="bg-gray-100 flex flex-col items-center justify-center h-screen w-full dark:bg-gray-900">
              <div className="w-full max-w-md px-8 py-10 bg-white rounded-lg shadow-md dark:bg-gray-950 dark:text-gray-200">
                <h1 className="text-2xl font-semibold text-center mb-6">Enter OTP</h1>
                <p className="text-gray-600 text-center mb-4">Otp sent to</p>
                <form>
                  <div className="grid grid-cols-5 gap-x-4 my-2">
                    <div className="rounded-lg bg-gray-100 cursor-text dark:bg-gray-800 w-14 aspect-square flex items-center justify-center">
                      <input
                        ref={(el) => (inputRefs.current[0] = el)}
                        className="w-full h-full flex flex-col items-center justify-center text-center px-2 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type="text"
                        maxLength={1}
                        onChange={(event) => handleChange(0, event)}
                      />
                    </div>
                    <div className="rounded-lg bg-gray-100 cursor-text dark:bg-gray-800 w-14 aspect-square flex items-center justify-center">
                      <input
                        ref={(el) => (inputRefs.current[1] = el)}
                        className="w-full h-full flex flex-col items-center justify-center text-center px-2 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type="text"
                        maxLength={1}
                        onChange={(event) => handleChange(1, event)}
                      />
                    </div>
                    <div className="rounded-lg bg-gray-100 cursor-text dark:bg-gray-800 w-14 aspect-square flex items-center justify-center">
                      <input
                        ref={(el) => (inputRefs.current[2] = el)}
                        className="w-full h-full flex flex-col items-center justify-center text-center px-2 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type="text"
                        maxLength={1}
                        onChange={(event) => handleChange(2, event)}
                      />
                    </div>
                    <div className="rounded-lg bg-gray-100 cursor-text dark:bg-gray-800 w-14 aspect-square flex items-center justify-center">
                      <input
                        ref={(el) => (inputRefs.current[3] = el)}
                        className="w-full h-full flex flex-col items-center justify-center text-center px-2 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type="text"
                        maxLength={1}
                        onChange={(event) => handleChange(3, event)}
                      />
                    </div>
                    <div className="rounded-lg bg-gray-100 cursor-text dark:bg-gray-800 w-14 aspect-square flex items-center justify-center">
                      <input
                        ref={(el) => (inputRefs.current[4] = el)}
                        className="w-full h-full flex flex-col items-center justify-center text-center px-2 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type="text"
                        maxLength={1}
                        onChange={(event) => handleChange(4, event)}
                      />
                    </div>
                  </div>
                </form>
                <div className="flex items-center flex-col justify-between mb-6">
                  <p className="text-gray-600 text-sm">Didn't receive code?</p>
                  <div className="flex items-center space-x-2">
                    <button className="px-3 py-2 text-sm font-medium text-center rounded text-gray-500 hover:text-blue-500">Resend</button>
                  </div>
                </div>
                <button type='submit' onClick={(e) => verifyOtp(e)} className="bg-primary-600 w-full px-4 py-2 text-lg font-medium text-white rounded">Verify</button>

              </div>
            </div>
          </> :
            <section className="bg-gray-50 dark:bg-gray-900 pt-2">
              <div className="flex flex-col items-center px-6 py-8 mx-auto h-auto md:h-auto lg:py-4">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                  <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <div className="flex justify-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                      <img className="w-8 h-8 mr-2" src="logo.png" alt="logo" />
                      Resumate
                    </div>
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                      Create account
                    </h1>
                    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                          <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} id="firstName" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter first name" required="" />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                          <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} id="lastName" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter last name" required="" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                          <input type="email" name="email" value={formData.email} onChange={handleInputChange} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your Email" required="" />
                        </div>
                        <div>
                          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                          <div className='flex items-center'>
                            <input type={showPassword ? 'text' : 'password'} name="password" value={formData.password} onChange={handleInputChange} id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            {showPassword ? <LuEye className='w-9 -m-10' onClick={() => setShowPassword(!showPassword)} /> : <LuEyeOff className='w-9 -m-10' onClick={() => setShowPassword(!showPassword)} />}
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="cpassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                          <div className='flex items-center'>
                            <input type={showConfirmPassword ? 'text' : 'password'} name="cpassword" value={formData.cpassword} onChange={handleInputChange} id="cpassword" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            {showConfirmPassword ? <LuEye className='w-9 -m-10' onClick={() => setShowConfirmPassword(!showConfirmPassword)} /> : <LuEyeOff className='w-9 -m-10' onClick={() => setShowConfirmPassword(!showConfirmPassword)} />}
                          </div>
                        </div>
                        <div>
                          <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                          <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <Link className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</Link></label>
                        </div>
                      </div>
                      <button type="submit" className="w-full text-white bg-[#2CACD5] hover:bg-[rgb(103,176,200)] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Create an account</button>
                    </form>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500 text-decoration-none">Login here</Link>
                    </p>
                  </div>
                </div>
              </div>
            </section>
      }
    </>
  );
}

export default CreateAccount;
