import React, { useContext, useState } from 'react'
import toast from "react-hot-toast";
import { IoAddCircleSharp, IoPencil } from "react-icons/io5";
import { AppContext } from '../../../Context/appContext';
import { RxCross2 } from "react-icons/rx";
import { FaEdit } from "react-icons/fa";
const WorkExperience = () => {
  const { setSection, setResumeData, resumeData } = useContext(AppContext);
  const [experienceData, setExperienceData] = useState({
    cName: '',
    jobTitle: '',
    startDate: '',
    completionDate: '',
    description: ''
  });
  const [editIndex, setEditIndex] = useState(null);

  const changeHandler = (e) => {
    setExperienceData({
      ...experienceData,
      [e.target.name]: e.target.value,
    })
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedExperienceData = [...resumeData.WorkExperience];
      updatedExperienceData[editIndex] = experienceData;
      setResumeData((prev) => ({
        ...prev,
        WorkExperience: updatedExperienceData
      }))
      setEditIndex(null);
    } else {
      setResumeData((prev) => ({
        ...prev,
        WorkExperience: [...prev.WorkExperience, experienceData]
      }))
    }
    toast.success("Data saved Successfully");
    setExperienceData({
      cName: '',
      jobTitle: '',
      startDate: '',
      completionDate: '',
      description: ''
    });
    setSection('project');
  }

  const addFields = () => {
    setResumeData((prev) => ({
      ...prev,
      WorkExperience: [...prev.WorkExperience, experienceData]
    }))
    setExperienceData({
      cName: '',
      jobTitle: '',
      startDate: '',
      completionDate: '',
      description: ''
    })
  }

  const nextClick = (e) => {
    e.preventDefault();
    setSection('project');
  }

  const deleteData = (index) => {
    const updatedData = [...resumeData.WorkExperience];
    updatedData.splice(index, 1);
    setResumeData({
      ...resumeData,
      WorkExperience: updatedData
    })
  }

  const editData = (index) => {
    setExperienceData(resumeData.WorkExperience[index]);
    setEditIndex(index);
  }

  return (
    <div className="shadow-lg p-4">
      <div className='flex items-center justify-between'>
        <h3 className="font-bold py-3 text-xl">Work Experience</h3>
        <IoAddCircleSharp onClick={addFields} size={25} className='mx-3 cursor-pointer' />
      </div>
      {resumeData.WorkExperience.length > 0 &&
        <div className='m-2 flex gap-2 flex-wrap'>
          {
            resumeData.WorkExperience.map((data, index) => (
              <div key={index} className='flex items-center gap-2 bg-slate-200 w-36 px-3 py-1 rounded-lg'>
                <h3 className='font-medium'>Experience {index + 1}</h3>
                <RxCross2 onClick={() => deleteData(index)} size={20} className='text-red-800 cursor-pointer font-medium' />
                <FaEdit onClick={() => editData(index)} size={30} className='text-blue-800 cursor-pointer font-medium' />
              </div>
            ))
          }

        </div>
      }
      <form className="space-y-4 md:space-y-6" onSubmit={submitHandler}>
        <div>
          <label
            htmlFor="cName"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Company Name
          </label>
          <div className="flex items-center">
            <input
              type="text"
              name="cName"
              id="cName"
              value={experienceData.cName}
              onChange={changeHandler}
              placeholder="Company Name"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
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
              value={experienceData.jobTitle}
              onChange={changeHandler}
              placeholder="Eg. Web Developer"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>
        <div className="flex gap-2">
          <div className="w-1/2">
            <label
              htmlFor="startDate"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Start Date
            </label>
            <input
              type="date"
              name="startDate"
              id="startDate"
              value={experienceData.startDate}
              onChange={changeHandler}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="w-1/2">
            <label
              htmlFor="completionDate"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Completion Date
            </label>
            <div className="flex items-center">
              <input
                type="date"
                name="completionDate"
                id="completionDate"
                value={experienceData.completionDate}
                onChange={changeHandler}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
        </div>
        <div>
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Description
          </label>
          <div className="flex items-center">
            <textarea
              rows={3}
              type="text"
              name="description"
              id="description"
              value={experienceData.description}
              onChange={changeHandler}
              placeholder="Enter Your Description"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>
        <div className='flex gap-2'>
          <button
            type="submit"
            name='submit'
            className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            {editIndex !== null ? "Update" : "Save"}
          </button>
          <button
            onClick={nextClick}
            className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  )
}

export default WorkExperience;
