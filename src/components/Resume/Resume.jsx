import React, { useContext, useEffect, useRef } from "react";
import BasicInfo from "./Section/BasicInfo";
import Achievement from "./Section/Achievement"
import Certification from './Section/Certification'
import Education from './Section/Education'
import Languages from './Section/Languages'
import Other from './Section/Other'
import Project from './Section/Project'
import Skills from './Section/Skills'
import WorkExperience from './Section/WorkExperience'
import ResumePreview from "./ResumePreview";
import { AppContext } from "../../Context/appContext";
import { useAuth } from "../../../Reducers/Authentication/AuthContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Resume = () => {
  const { section, setSection } = useContext(AppContext);
  const navigate = useNavigate();
  const {isAuthenticated} = useAuth().state;

  useEffect(()=>{
    if(!isAuthenticated){
      toast.error('Please Login First !!');
      navigate('/login');
    }
  })

  return (
    <>
      <div className="pt-0 py-16 flex gap-5 ">
        <div className="h-auto bg-slate-100 pt-10 fixed">
          <ul className=" p-4 flex flex-col font-medium cursor-pointer gap-1">
            <li onClick={() => setSection("basicInfo")} className={section === 'basicInfo' ? 'bg-slate-300 px-2 py-1 rounded' : "bg-slate-100 px-2 py-1 rounded"}>Basic information</li>
            <li onClick={() => setSection("education")} className={section === 'education' ? 'bg-slate-300 px-2 py-1 rounded' : "bg-slate-100 px-2 py-1 rounded"}>Education</li>
            <li onClick={() => setSection("skills")} className={section === 'skills' ? 'bg-slate-300 px-2 py-1 rounded' : "bg-slate-100 px-2 py-1 rounded"}>Skills</li>
            <li onClick={() => setSection("workExperience")} className={section === 'workExperience' ? 'bg-slate-300 px-2 py-1 rounded' : "bg-slate-100 px-2 py-1 rounded"}>Work Experience</li>
            <li onClick={() => setSection("project")} className={section === 'project' ? 'bg-slate-300 px-2 py-1 rounded' : "bg-slate-100 px-2 py-1 rounded"}>Project</li>
            <li onClick={() => setSection("achievement")} className={section === 'achievement' ? 'bg-slate-300 px-2 py-1 rounded' : "bg-slate-100 px-2 py-1 rounded"}>Achievement</li>
            <li onClick={() => setSection("certification")} className={section === 'certification' ? 'bg-slate-300 px-2 py-1 rounded' : "bg-slate-100 px-2 py-1 rounded"}>Certification</li>
            <li onClick={() => setSection("languages")} className={section === 'languages' ? 'bg-slate-300 px-2 py-1 rounded' : "bg-slate-100 px-2 py-1 rounded"}>Languages</li>
            <li onClick={() => setSection("other")} className={section === 'other' ? 'bg-slate-300 px-2 py-1 rounded' : "bg-slate-100 px-2 py-1 rounded"}>Other</li>
          </ul>
        </div>
        <div className="ml-48 w-2/5">
          <div className="pt-6">
            {
              section === 'basicInfo' && <BasicInfo />
            }
            {
              section === 'achievement' && <Achievement />
            }
            {
              section === 'workExperience' && <WorkExperience />
            }
            {
              section === 'education' && <Education />
            }
            {
              section === 'certification' && <Certification />
            }
            {
              section === 'languages' && <Languages />
            }
            {
              section === 'other' && <Other />
            }
            {
              section === 'project' && <Project />
            }
            {
              section === 'skills' && <Skills />
            }
          </div>
        </div>
        <div className="pt-16">
          <ResumePreview/>
        </div>
      </div>
    </>
  );
};

export default Resume;
