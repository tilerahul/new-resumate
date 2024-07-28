import React, { useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";
import { AppContext } from "../../../Context/appContext";

const BasicInfo = () => {
  const { setSection, setResumeData, resumeData } = useContext(AppContext);
  const [basicInfo, setBasicInfo] = useState({
    name: '',
    lastName: '',
    jobTitle: '',
    email: '',
    phone: '',
    github: '',
    linkedin: '',
    address: '',
    objective: ''
  });

  useEffect(() => {
    if (resumeData.BasicInfo) {
      setBasicInfo(resumeData.BasicInfo);
    }
  }, [resumeData]);

  const changeHandler = (e) => {
    setBasicInfo({
      ...basicInfo,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setResumeData((prev) => ({
      ...prev,
      BasicInfo: basicInfo
    }));
    toast.success("Data saved successfully");
    setSection('education');
  };

  const nextClick = (e) => {
    e.preventDefault();
    setSection('education');
  };

  return (
    <div className="shadow-lg p-4  min-w-[22rem]">
      <h3 className="font-bold py-3 text-xl">Basic information</h3>
      <form className="space-y-4 md:space-y-6" onSubmit={submitHandler}>
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={basicInfo.name}
              onChange={changeHandler}
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your full Name"
            />
          </div>
        <div>
          <label
            htmlFor="jobTitle"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Job Title
          </label>
          <div className="flex items-center">
            <input
              type="text"
              name="jobTitle"
              id="jobTitle"
              value={basicInfo.jobTitle}
              onChange={changeHandler}
              placeholder="Eg. Full Stack Developer"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>
        <div className="flex gap-2">
          <div className="w-1/2">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <div className="flex items-center">
              <input
                type="text"
                name="email"
                id="email"
                value={basicInfo.email}
                onChange={changeHandler}
                placeholder="Eg, yourname@gmail.com"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
          <div className="w-1/2">
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Phone
            </label>
            <div className="flex items-center">
              <input
                type="text"
                name="phone"
                id="phone"
                value={basicInfo.phone}
                onChange={changeHandler}
                placeholder="9876543210"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="w-1/2">
            <label
              htmlFor="github"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Github
            </label>
            <div className="flex items-center">
              <input
                type="text"
                name="github"
                id="github"
                value={basicInfo.github}
                onChange={changeHandler}
                placeholder="https://github.com/username"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
          <div className="w-1/2">
            <label
              htmlFor="linkedin"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Linkedin
            </label>
            <div className="flex items-center">
              <input
                type="text"
                name="linkedin"
                id="linkedin"
                value={basicInfo.linkedin}
                onChange={changeHandler}
                placeholder="https://www.linkedin.com/in/username"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
        </div>
        <div>
          <label
            htmlFor="address"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Address
          </label>
          <div className="flex items-center">
            <input
              type="text"
              name="address"
              id="address"
              value={basicInfo.address}
              onChange={changeHandler}
              placeholder="Enter Your Address"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="objective"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Summary
          </label>
          <div className="flex items-center">
            <textarea
              rows={3}
              type="text"
              name="objective"
              id="objective"
              value={basicInfo.objective}
              onChange={changeHandler}
              placeholder="Enter Your Objective"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>
        <div className="flex gap-2">
          <button
            type="submit"
            name="submit"
            className="w-full text-white bg-primary-primary-blue hover:bg-[rgb(103,176,200)] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Save
          </button>
          
        </div>
      </form>
    </div>
  );
};

export default BasicInfo;
