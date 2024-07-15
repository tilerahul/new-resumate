import React, { useEffect, useState, useRef } from "react";

function Otp() {
    const inputRefs = useRef(Array(5).fill(null));
    const [otp, setOtp] = useState(Array(5).fill(""));

    const handleInputChange = (index, event) => {
        const value = event.target.value;
        if (/^\d$/.test(value)) {  // Check if the input is a digit
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            if (index < inputRefs.current.length - 1) {
                inputRefs.current[index + 1].focus();
            }

            if (index === inputRefs.current.length - 1) {
                verifyOtp(newOtp.join(""));
            }
        }
    };

    const handleKeyDown = (index, event) => {
        if (event.key === "Backspace") {
            const newOtp = [...otp];
                newOtp[index] = "";
                setOtp(newOtp);
                if (index > 0) {
                    inputRefs.current[index - 1].focus();
                }
        }
    };

    const verifyOtp = (enteredOtp) => {
        // Placeholder for OTP verification logic
        console.log("OTP entered:", enteredOtp);
        // Make API call to verify OTP here
    };

    return (
        <>
            <div className="bg-gray-100 flex flex-col items-center justify-center h-screen w-full dark:bg-gray-900">
                <div className="w-full max-w-md px-8 py-10 bg-white rounded-lg shadow-md dark:bg-gray-950 dark:text-gray-200">
                    <h1 className="text-2xl font-semibold text-center mb-6">Enter OTP</h1>
                    <p className="text-gray-600 text-center mb-4">OTP sent to your email/phone</p>
                    <div className="grid grid-cols-5 gap-x-4 my-2">
                        {inputRefs.current.map((_, index) => (
                            <div key={index} className="rounded-lg bg-gray-100 cursor-text dark:bg-gray-800 w-14 aspect-square flex items-center justify-center">
                                <input
                                    ref={(el) => (inputRefs.current[index] = el)}
                                    className="w-full h-full flex flex-col items-center justify-center text-center px-2 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                                    type="text"
                                    maxLength={1}
                                    value={otp[index]}
                                    onChange={(event) => handleInputChange(index, event)}
                                    onKeyDown={(event) => handleKeyDown(index, event)}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center flex-col justify-between mb-6">
                        <p className="text-gray-600 text-sm">Didn't receive code?</p>
                        <div className="flex items-center space-x-2">
                            <button className="px-3 py-2 text-sm font-medium text-center rounded text-gray-500 hover:text-blue-500">Resend</button>
                        </div>
                    </div>
                    <button className="bg-[#2CACD5] hover:bg-[rgb(103,176,200)] focus:ring-4 focus:ring-blue-300 w-full px-4 py-2 text-lg font-medium text-white rounded"
                            onClick={() => verifyOtp(otp.join(""))}>
                        Verify
                    </button>
                </div>
            </div>
        </>
    );
}

export default Otp;
