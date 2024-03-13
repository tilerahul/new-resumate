import { useEffect, useState } from "react";
import { useAuth } from "../../Reducers/Authentication/AuthContext";

const Profile = () => {
    const { state } = useAuth();
    const [data, setData] = useState({});
    useEffect(() => {
        setData(state.user);
    }, [])
    return (
        <div className="h-[100vh]">
            <div className="w-[100vw] h-[60vh] bg-gradient-to-r to-emerald-600 from-sky-400 relative -z-50"></div>
            <div className="absolute top-[18%] left-[43%] z-50">
                <img src={data.imgUrl} alt="profile" className="w-[10rem] rounded-full" />
            </div>
            <div className="w-[40vw] h-[70vh] bg-white absolute z-25 top-[30%] left-[30%] flex flex-col items-center border-2 shadow-2xl rounded-lg">
                <form className="w-[80%] space-y-4 mt-[100px] md:space-y-6">
                    <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                            <input readOnly type="text" name="firstName" value={data.firstName} id="firstName" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter first name" required="" />
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                            <input readOnly type="text" name="lastName" value={data.lastName} id="lastName" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter last name" required="" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input readOnly type="email" name="email" value={data.email} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your Email" required="" />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                            <input readOnly type="text" name="phone" value={data.phone} id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                            <label htmlFor="joinAt" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Join At</label>
                            <input readOnly type="text" name="joinAt" value={data.joinedAt} id="joinAt" placeholder="joinAt" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                    </div>
                    <div>
                        <button className="mt-7 font-medium bg-sky-400 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">Update Profile</button>        
                    </div>
                        
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Profile