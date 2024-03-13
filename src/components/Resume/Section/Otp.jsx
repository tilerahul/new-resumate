import React, { useEffect, useState } from "react";
import { useAuth } from '../../../../Reducers/Authentication/AuthContext';
import { Link } from "react-router-dom";
function Otp() {
    const { state } = useAuth();
    const [data, setData] = useState({});

    useEffect(() => {
        setData(state.user || {});
    }, [state.user]);

    return (
        <>
            <div className="bg-gray-100 flex flex-col items-center justify-center h-screen w-full dark:bg-gray-900">
                <div className="w-full max-w-md px-8 py-10 bg-white rounded-lg shadow-md dark:bg-gray-950 dark:text-gray-200">
                    <h1 className="text-2xl font-semibold text-center mb-6">Enter OTP</h1>
                    <p className="text-gray-600 text-center mb-4">Otp sent to {data.email}</p>
                    <div className="grid grid-cols-5 gap-x-4 my-2">
                        <div contenteditable="true" className="rounded-lg bg-gray-100 cursor-text dark:bg-gray-800 w-14 aspect-square flex items-center justify-center">
                        <input class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id=""/>
                        </div>
                        <div contenteditable="true" className="rounded-lg bg-gray-100 cursor-text dark:bg-gray-800 w-14 aspect-square flex items-center justify-center">
                        <input class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id=""/>
                        </div>
                        <div contenteditable="true" className="rounded-lg bg-gray-100 cursor-text dark:bg-gray-800 w-14 aspect-square flex items-center justify-center">
                        <input class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id=""/>
                        </div>
                        <div contenteditable="true" className="rounded-lg bg-gray-100 cursor-text dark:bg-gray-800 w-14 aspect-square flex items-center justify-center">
                        <input class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id=""/>
                        </div>
                        <div contenteditable="true" className="rounded-lg bg-gray-100 cursor-text dark:bg-gray-800 w-14 aspect-square flex items-center justify-center">
                        <input class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id=""/>
                        </div>
                    </div>
                    <div className="flex items-center flex-col justify-between mb-6">
                        <p className="text-gray-600 text-sm">Didn't receive code?</p>
                        <div className="flex items-center space-x-2">
                            <button className="px-3 py-2 text-sm font-medium text-center rounded text-gray-500 hover:text-blue-500">Resend</button>
                        </div>
                    </div>
                    <button className="bg-primary-600 w-full px-4 py-2 text-lg font-medium text-white rounded">Verify</button>
                    
                </div>
            </div>
        </>
    );
}

export default Otp;
