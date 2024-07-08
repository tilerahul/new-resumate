import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const Profile = () => {
    const user = useSelector(state => state.login.user);
    const isLoggedIn = useSelector(state => state.login.isLoggedIn);

    const [data, setData] = useState({});
    const [edit, setEdit] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        if(!isLoggedIn){
            toast.error('Please Login First');
            navigate('/');
        }
        setData(user);
    }, [])

    const submitHandler = (e) => {
        e.preventDefault();
        if (edit) {
            setEdit(false);
        } else {
            setEdit(true);
            alert('Make Your Changes !!!')
        }
    }

    return (
        <div className="h-screen relative">
            <div className="w-full h-3/5 bg-gradient-to-r from-sky-400 to-emerald-600"></div>
            <div className="absolute lg:top-[15%] top-[10%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-10">
                <img src={data.imgUrl} alt="profile" className="w-40 h-40 rounded-full shadow-lg" />
            </div>
            <div className="w-11/12 md:w-3/4 lg:w-2/5 h-auto bg-white absolute top-[45%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center border-2 shadow-2xl rounded-lg p-6 -z-0">
                <form className="w-full space-y-4 ">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-24">
                        <div>
                            <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900">First name</label>
                            <input
                                readOnly={!edit}
                                type="text"
                                name="firstName"
                                value={data.firstName}
                                id="firstName"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                placeholder="Enter first name"
                                required=""
                            />
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900">Last name</label>
                            <input
                                readOnly={!edit}
                                type="text"
                                name="lastName"
                                value={data.lastName}
                                id="lastName"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                placeholder="Enter last name"
                                required=""
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                            <input
                                readOnly={!edit}
                                type="email"
                                name="email"
                                value={data.email}
                                id="email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                placeholder="Enter your Email"
                                required=""
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">Phone number</label>
                            <input
                                readOnly={!edit}
                                type="text"
                                name="phone"
                                value={data.phone}
                                id="phone"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                required=""
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="joinAt" className="block mb-2 text-sm font-medium text-gray-900">Join At</label>
                            <input
                                readOnly
                                type="text"
                                name="joinAt"
                                value={data.joinedAt}
                                id="joinAt"
                                placeholder="joinAt"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                required=""
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                name='submit'
                                className="mt-7 font-medium bg-sky-400 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                onClick={submitHandler}
                            >
                                {edit ? 'Update Profile' : 'Edit Profile'}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Profile