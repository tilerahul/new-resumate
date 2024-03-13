import React, { useContext, useState } from 'react'
import toast from "react-hot-toast";
import { IoAddCircleSharp, IoPencil } from "react-icons/io5";
import { AppContext } from '../../../Context/appContext';
import { RxCross2 } from "react-icons/rx";
import { FaEdit } from "react-icons/fa";

const Certification = () => {
  const { setSection, setResumeData, resumeData } = useContext(AppContext);
  const [certification, setCertification] = useState({
    title: '',
  });
  const [editIndex, setEditIndex] = useState(null);

  const changeHandler = (e) => {
    setCertification({
      ...certification,
      [e.target.name]: e.target.value,
    })
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedCertifications = [...resumeData.Certification];
      updatedCertifications[editIndex] = certification;
      setResumeData((prev) => ({
        ...prev,
        Certification: updatedCertifications
      }))
      setEditIndex(null);
    } else {
      setResumeData((prev) => ({
        ...prev,
        Certification: [...prev.Certification, certification]
      }))
    }
    toast.success("Data saved Successfully");
    setCertification({
      title: ''
    });
    setSection('languages');
  }

  const addFields = () => {
    setResumeData((prev) => ({
      ...prev,
      Certification: [...prev.Certification, certification]
    }));
    setCertification({
      title: ''
    })
  }

  const nextClick = (e) => {
    e.preventDefault();
    setSection('languages');
  }

  const deleteData = (index) => {
    const updatedData = [...resumeData.Certification];
    updatedData.splice(index, 1);
    setResumeData({
      ...resumeData,
      Certification: updatedData
    })
  }

  const editData = (index) => {
    setCertification(resumeData.Certification[index]);
    setEditIndex(index);
  }

  return (
    <div className="shadow-lg p-4">
      <div className='flex items-center justify-between'>
        <h3 className="font-bold py-3 text-xl">Certifications</h3>
        <IoAddCircleSharp onClick={addFields} size={25} className='mx-3 cursor-pointer' />
      </div>
      {resumeData.Certification.length > 0 &&
        <div className='m-2 flex gap-2 flex-wrap'>
          {
            resumeData.Certification.map((data, index) => (
              <div key={index} className='flex items-center gap-2 bg-slate-200 px-3 py-1 rounded-lg'>
                <h3 className='font-medium'>Certification {index + 1}</h3>
                <FaEdit onClick={() => editData(index)} size={15} className='text-blue-800 cursor-pointer font-medium' />
                <RxCross2 onClick={() => deleteData(index)} size={20} className='text-red-800 cursor-pointer font-medium' />
              </div>
            ))
          }

        </div>
      }
      <form className="space-y-4 md:space-y-6" onSubmit={submitHandler}>
        <div>
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Title
          </label>
          <div className="flex items-center">
            <input
              type="text"
              name="title"
              id="title"
              value={certification.title}
              onChange={changeHandler}
              placeholder="Enter your certification"
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

export default Certification;
