import React, { useContext, useState } from 'react';
import toast from "react-hot-toast";
import { IoAddCircleSharp, IoPencil } from "react-icons/io5";
import { AppContext } from '../../../Context/appContext';
import { RxCross2 } from "react-icons/rx";
import { FaEdit } from "react-icons/fa";
const Education = () => {
  const { setSection, setResumeData, resumeData } = useContext(AppContext);
  const [education, setEducation] = useState({
    college: '',
    degree: '',
    CGPA: '',
    completionDate: '',
    description: ''
  });
  const [editIndex, setEditIndex] = useState(null);

  const changeHandler = (e) => {
    setEducation({
      ...education,
      [e.target.name]: e.target.value,
    });
  };

  const clearForm = () => {
    setEducation({
      college: '',
      degree: '',
      CGPA: '',
      completionDate: '',
      description: ''
    });
    setEditIndex(null);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedEducation = [...resumeData.Education];
      updatedEducation[editIndex] = education;
      setResumeData({
        ...resumeData,
        Education: updatedEducation
      });
      toast.success("Education updated successfully");
      clearForm();
    } else {
      setResumeData((prev) => ({
        ...prev,
        Education: [...prev.Education, education]
      }));
      toast.success("Education saved successfully");
      clearForm();
    }s
  };

  const addFields = () => {
    setResumeData((prev) => ({
      ...prev,
      Education: [...prev.Education, education]
    }))
    setEducation({
      college: '',
      degree: '',
      CGPA: '',
      completionDate: '',
      description: ''
    })
  }

  const editEducation = (index) => {
    setEditIndex(index);
    const educationToEdit = resumeData.Education[index];
    setEducation(educationToEdit);
  };

  const deleteEducation = (index) => {
    const updatedEducation = [...resumeData.Education];
    updatedEducation.splice(index, 1);
    setResumeData({
      ...resumeData,
      Education: updatedEducation
    });
    toast.success("Education deleted successfully");
  };

  const nextClick = (e) => {
    e.preventDefault();
    setSection('skills');
  };

  return (
    <div className="shadow-lg p-4">
      <div className='flex items-center justify-between'>
        <h3 className="font-bold py-3 text-xl">Education</h3>
        <IoAddCircleSharp onClick={addFields} size={25} className='mx-3 cursor-pointer' />
      </div>
      {resumeData.Education.length > 0 &&
        <div className='m-2 flex gap-2 flex-wrap'>
          {
            resumeData.Education.map((data, index) => (
              <div key={index} className='flex items-center gap-2 bg-slate-200 px-3 py-1 rounded-lg'>
                <h3 className='font-medium'>Education {index + 1}</h3>
                <div className="flex gap-2">
                  <FaEdit onClick={() => editEducation(index)} size={15} className='text-blue-800 cursor-pointer font-medium' />
                  <RxCross2 onClick={() => deleteEducation(index)} size={20} className='text-red-800 cursor-pointer font-medium' />
                </div>
              </div>
            ))
          }

        </div>
      }
      <form className="space-y-4 md:space-y-6" onSubmit={submitHandler}>
        <div>
          <label
            htmlFor="college"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            College Name
          </label>
          <div className="flex items-center">
            <input
              type="text"
              name="college"
              id="college"
              value={education.college}
              onChange={changeHandler}
              placeholder="College Name"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="degree"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Degree
          </label>
          <div className="flex items-center">
            <input
              type="text"
              name="degree"
              id="degree"
              value={education.degree}
              onChange={changeHandler}
              placeholder="EX. BE, B.tech, BCA"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>
        <div className="flex gap-2">
          <div className="w-1/2">
            <label
              htmlFor="CGPA"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              CGPA/Percentage
            </label>
            <input
              type="text"
              name="CGPA"
              id="CGPA"
              value={education.CGPA}
              onChange={changeHandler}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder='9.1 CGPA or 86.4 %'
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
                value={education.completionDate}
                onChange={changeHandler}
                placeholder="Enter Your Last Name"
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
              value={education.description}
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
  );
};

export default Education;
