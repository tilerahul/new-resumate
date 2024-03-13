import React, { useContext, useState } from 'react';
import toast from "react-hot-toast";
import { IoAddCircleSharp, IoPencil } from "react-icons/io5";
import { AppContext } from '../../../Context/appContext';
import { RxCross2 } from "react-icons/rx";
import { FaEdit } from "react-icons/fa";
const Skills = () => {
  const { setSection, setResumeData, resumeData } = useContext(AppContext);

  const [skillsData, setSkillsData] = useState({
    skill: ''
  });
  const [editIndex, setEditIndex] = useState(null);

  const changeHandler = (e) => {
    setSkillsData({
      ...skillsData,
      [e.target.name]: e.target.value,
    });
  };

  const clearForm = () => {
    setSkillsData({
      skill: ''
    });
    setEditIndex(null);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedSkills = [...resumeData.Skills];
      updatedSkills[editIndex] = skillsData;
      setResumeData({
        ...resumeData,
        Skills: updatedSkills
      });
      toast.success("Skill updated successfully");
      clearForm();
    } else {
      setResumeData((prev) => ({
        ...prev,
        Skills: [...prev.Skills, skillsData]
      }));
      toast.success("Skill saved successfully");
      clearForm();
    }
    
  };

  const addFields = () => {
    setResumeData((prev) => ({
      ...prev,
      Skills: [...prev.Skills, skillsData]
    }))
    setSkillsData({
      skill: ''
    })
  }

  const editSkill = (index) => {
    setEditIndex(index);
    const skillToEdit = resumeData.Skills[index];
    setSkillsData(skillToEdit);
  };

  const deleteSkill = (index) => {
    const updatedSkills = [...resumeData.Skills];
    updatedSkills.splice(index, 1);
    setResumeData({
      ...resumeData,
      Skills: updatedSkills
    });
    toast.success("Skill deleted successfully");
  };

  return (
    <div className="shadow-lg p-4">
      <div className='flex items-center justify-between'>
        <h3 className="font-bold py-3 text-xl">Skills</h3>
        <IoAddCircleSharp onClick={addFields} size={25} className='mx-3 cursor-pointer' />
      </div>
      {resumeData.Skills.length > 0 &&
        <div className='m-2 flex gap-2 flex-wrap'>
          {
            resumeData.Skills.map((data, index) => (
              <div key={index} className='flex items-center gap-2 bg-slate-200 px-3 py-1 rounded-lg'>
                <h3 className='font-medium'>{data.skill}</h3>
                <div className="flex gap-2">
                  <FaEdit onClick={() => editSkill(index)} size={15} className='text-blue-800 cursor-pointer font-medium' />
                  <RxCross2 onClick={() => deleteSkill(index)} size={20} className='text-red-800 cursor-pointer font-medium' />
                </div>
              </div>
            ))
          }
        </div>
      }
      <form className="space-y-4 md:space-y-6" onSubmit={submitHandler}>
        <div>
          <label
            htmlFor="skill"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Skill
          </label>
          <div className="flex items-center">
            <input
              type="text"
              name="skill"
              id="skill"
              value={skillsData.skill}
              onChange={changeHandler}
              placeholder="Enter Your Skills"
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
            onClick={() => clearForm()}
            className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Skills;
