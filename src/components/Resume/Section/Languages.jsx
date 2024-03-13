import React, { useContext, useState } from 'react'
import toast from "react-hot-toast";
import { IoAddCircleSharp, IoPencil } from "react-icons/io5";
import { AppContext } from '../../../Context/appContext';
import { RxCross2 } from "react-icons/rx";
import { FaEdit } from "react-icons/fa";
const Languages = () => {
  const { setSection, setResumeData, resumeData } = useContext(AppContext);
  const [language, setLanguage] = useState({
    language: ''
  });
  const [editIndex, setEditIndex] = useState(null);

  const changeHandler = (e) => {
    setLanguage({
      ...language,
      [e.target.name]: e.target.value,
    })
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedLanguages = [...resumeData.Languages];
      updatedLanguages[editIndex] = language;
      setResumeData((prev) => ({
        ...prev,
        Languages: updatedLanguages
      }))
      setEditIndex(null);
    } else {
      setResumeData((prev) => ({
        ...prev,
        Languages: [...prev.Languages, language]
      }))
    }
    toast.success("Data saved Successfully");
    setLanguage({
      language: ''
    });
    setSection('other');
  }

  const addFields = () => {
    setResumeData((prev) => ({
      ...prev,
      Languages: [...prev.Languages, language]
    }));
    setLanguage({
      language: ''
    })
  }

  const nextClick = (e) => {
    e.preventDefault();
    setSection('other');
  }

  const deleteData = (index) => {
    const updatedData = [...resumeData.Languages];
    updatedData.splice(index, 1);
    setResumeData({
      ...resumeData,
      Languages: updatedData
    })
  }

  const editData = (index) => {
    setLanguage(resumeData.Languages[index]);
    setEditIndex(index);
  }

  return (
    <div className="shadow-lg p-4">
      <div className='flex items-center justify-between'>
        <h3 className="font-bold py-3 text-xl">Languages</h3>
        <IoAddCircleSharp onClick={addFields} size={25} className='mx-3 cursor-pointer' />
      </div>
      {resumeData.Languages.length > 0 &&
        <div className='m-2 flex gap-2 flex-wrap'>
          {
            resumeData.Languages.map((data, index) => (
              <div key={index} className='flex items-center gap-2 bg-slate-200 px-3 py-1 rounded-lg'>
                <h3 className='font-medium'>{data.language}</h3>
                <RxCross2 onClick={() => deleteData(index)} size={20} className='text-red-800 cursor-pointer font-medium' />
                <FaEdit onClick={() => editData(index)} size={15} className='text-blue-800 cursor-pointer font-medium' />
              </div>
            ))
          }

        </div>
      }
      <form className="space-y-4 md:space-y-6" onSubmit={submitHandler}>
        <div>
          <label
            htmlFor="language"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Languages
          </label>
          <div className="flex items-center">
            <input
              type="text"
              name="language"
              id="language"
              value={language.language}
              onChange={changeHandler}
              placeholder="Enter Your languages"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>
        <div className='flex gap-2'>
          <button
            type="submit"
            name='submit'
            onClick={submitHandler}
            className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Save
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

export default Languages;
