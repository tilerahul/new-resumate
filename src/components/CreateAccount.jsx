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
  const [otp, setOtp] = useState(Array(5).fill(""));
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [otpField, setOtpField] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const navigate = useNavigate();
  const inputRefs = useRef(Array(5).fill(null));

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOtpChange = (index, event) => {
    const value = event.target.value;
    if (/^\d$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleOtpKeyDown = (index, event) => {
    if (event.key === "Backspace") {
      if (otp[index] === "" && index > 0) {
        inputRefs.current[index - 1].focus();
      } else {
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if(!isChecked){
        toast.error('Please accept terms and conditions.');
        setLoading(false);
        return;
      }
      const response = await fetch(`${BASEURL}api/v1/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const responseData = await response.json();
      setLoading(false);
      if (responseData.success) {
        sendOTP();
        setOtpField(true);
      } else {
        toast.error(responseData.message);
      }
    } catch (error) {
      setLoading(false);
      toast.error('Something went wrong');
    }
  };

  const sendOTP = async () => {
    const { email, firstName, lastName } = formData;
    const name = `${firstName} ${lastName}`;
    setLoading(true);
    try {
      const response = await fetch(`${BASEURL}api/v1/otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name })
      });
      const responseData = await response.json();
      setLoading(false);
      if (responseData.success) {
        toast.success(responseData.message);
      } else {
        toast.error(responseData.message);
      }
    } catch (error) {
      setLoading(false);
      toast.error('Something went wrong');
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    const enteredOtp = otp.join('');
    setLoading(true);
    try {
      const response = await fetch(`${BASEURL}api/v1/otp/verify`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formData.email, otp: enteredOtp, formData })
      });
      const responseData = await response.json();
      setLoading(false);
      if (responseData.success) {
        toast.success(responseData.message);
        navigate("/login");
      } else {
        toast.error(responseData.message);
      }
    } catch (error) {
      setLoading(false);
      toast.error('Something went wrong');
    }
  };

  return (
    <>
      {loading ? <Loader /> :
        otpField ? (
          <div className="bg-gray-100 flex flex-col items-center justify-center h-screen w-full dark:bg-gray-900">
            <div className="w-full max-w-md px-8 py-10 bg-white rounded-lg shadow-md dark:bg-gray-950 dark:text-gray-200">
              <h1 className="text-2xl font-semibold text-center mb-6">OTP Verification</h1>
              <p className="text-gray-600 text-center mb-4">
                OTP sent to your Email: <span className='font-semibold'>{formData.email}</span>
              </p>
              <div className="grid grid-cols-5 gap-x-4 my-2">
                {inputRefs.current.map((_, index) => (
                  <div key={index} className="rounded-lg bg-gray-100 cursor-text dark:bg-gray-800 w-14 aspect-square flex items-center justify-center">
                    <input
                      ref={(el) => (inputRefs.current[index] = el)}
                      className="w-full h-full flex flex-col items-center justify-center text-center px-2 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                      type="text"
                      maxLength={1}
                      value={otp[index]}
                      onChange={(event) => handleOtpChange(index, event)}
                      onKeyDown={(event) => handleOtpKeyDown(index, event)}
                    />
                  </div>
                ))}
              </div>
              <div className="flex items-center flex-col justify-between mb-6">
                <p className="text-gray-600 text-sm">Didn't receive code?</p>
                <div className="flex items-center space-x-2">
                  <button className="px-3 py-2 text-sm font-medium text-center rounded text-gray-500 hover:text-blue-500" onClick={sendOTP}>Resend</button>
                </div>
              </div>
              <button className="bg-[#2CACD5] hover:bg-[rgb(103,176,200)] focus:ring-4 focus:ring-blue-300 w-full px-4 py-2 text-lg font-medium text-white rounded" onClick={verifyOtp}>
                Verify
              </button>
            </div>
          </div>
        ) : (
          <section className="bg-gray-50 dark:bg-gray-900 pt-2">
            <div className="flex flex-col items-center px-6 py-8 mx-auto h-auto md:h-auto lg:py-4">
              <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
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
                        <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} id="firstName" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter first name" required />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                        <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} id="lastName" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter last name" required />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your Email" required />
                      </div>
                      <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <div className='flex items-center'>
                          <input type={showPassword ? 'text' : 'password'} name="password" value={formData.password} onChange={handleInputChange} id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                          {showPassword ? <LuEye className='w-9 -m-10 cursor-pointer' onClick={() => setShowPassword(!showPassword)} /> : <LuEyeOff className='w-9 -m-10 cursor-pointer' onClick={() => setShowPassword(!showPassword)} />}
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="cpassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                        <div className='flex items-center'>
                          <input type={showConfirmPassword ? 'text' : 'password'} name="cpassword" value={formData.cpassword} onChange={handleInputChange} id="cpassword" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                          {showConfirmPassword ? <LuEye className='w-9 -m-10 cursor-pointer' onClick={() => setShowConfirmPassword(!showConfirmPassword)} /> : <LuEyeOff className='w-9 -m-10 cursor-pointer' onClick={() => setShowConfirmPassword(!showConfirmPassword)} />}
                        </div>
                      </div>
                      <div>
                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                        <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" checked={isChecked} onChange={(e)=>setIsChecked(e.target.checked)} type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <Link className="font-medium text-primary-600 hover:underline dark:text-primary-500" to="#">Terms and Conditions</Link></label>
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
        )
      }
    </>
  );
}

export default CreateAccount;
