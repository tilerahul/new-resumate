import React, { useContext, useEffect, useState } from "react";
import BasicInfo from "./Section/BasicInfo";
import Achievement from "./Section/Achievement";
import Certification from "./Section/Certification";
import Education from "./Section/Education";
import Languages from "./Section/Languages";
import Other from "./Section/Other";
import Project from "./Section/Project";
import Skills from "./Section/Skills";
import WorkExperience from "./Section/WorkExperience";
import ResumePreview from "./ResumePreview";
import { AppContext } from "../../Context/appContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import ReviewForm from "./ReviewForm";
import { FaAnglesRight } from "react-icons/fa6";

const Resume = () => {
  const { section, setSection } = useContext(AppContext);
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const [isOpen, setIsOpen] = useState(false);
  const [displayForm, setDisplayForm] = useState(false);

  useEffect(() => {
    if (!isLoggedIn) {
      toast.error("Please Login First !!");
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  const handleSectionClick = (sectionName) => {
    setSection(sectionName);
    setIsOpen(false);
  };

  return (
    <>
      {displayForm ? (
        <ReviewForm setDisplayForm={setDisplayForm} />
      ) : (
        <div className="pt-0 py-16 flex gap-5">
          
          <div className="flex flex-col">

          <div className="md:hidden p-4">
            {!isOpen && <FaAnglesRight onClick={() => setIsOpen(true)} />}
          </div>

          <div
            className={`bg-slate-100 pt-0 ${
              isOpen ? "block" : "hidden"
            } md:block`}
          >
            <ul className="p-4 flex flex-col font-medium cursor-pointer gap-1">
              <li
                onClick={() => handleSectionClick("basicInfo")}
                className={
                  section === "basicInfo"
                    ? "bg-slate-300 px-2 py-1 rounded"
                    : "bg-slate-100 px-2 py-1 rounded"
                }
              >
                Basic information
              </li>
              <li
                onClick={() => handleSectionClick("education")}
                className={
                  section === "education"
                    ? "bg-slate-300 px-2 py-1 rounded"
                    : "bg-slate-100 px-2 py-1 rounded"
                }
              >
                Education
              </li>
              <li
                onClick={() => handleSectionClick("skills")}
                className={
                  section === "skills"
                    ? "bg-slate-300 px-2 py-1 rounded"
                    : "bg-slate-100 px-2 py-1 rounded"
                }
              >
                Skills
              </li>
              <li
                onClick={() => handleSectionClick("workExperience")}
                className={
                  section === "workExperience"
                    ? "bg-slate-300 px-2 py-1 rounded"
                    : "bg-slate-100 px-2 py-1 rounded"
                }
              >
                Work Experience
              </li>
              <li
                onClick={() => handleSectionClick("project")}
                className={
                  section === "project"
                    ? "bg-slate-300 px-2 py-1 rounded"
                    : "bg-slate-100 px-2 py-1 rounded"
                }
              >
                Project
              </li>
              <li
                onClick={() => handleSectionClick("achievement")}
                className={
                  section === "achievement"
                    ? "bg-slate-300 px-2 py-1 rounded"
                    : "bg-slate-100 px-2 py-1 rounded"
                }
              >
                Achievement
              </li>
              <li
                onClick={() => handleSectionClick("certification")}
                className={
                  section === "certification"
                    ? "bg-slate-300 px-2 py-1 rounded"
                    : "bg-slate-100 px-2 py-1 rounded"
                }
              >
                Certification
              </li>
              <li
                onClick={() => handleSectionClick("languages")}
                className={
                  section === "languages"
                    ? "bg-slate-300 px-2 py-1 rounded"
                    : "bg-slate-100 px-2 py-1 rounded"
                }
              >
                Languages
              </li>
              <li
                onClick={() => handleSectionClick("other")}
                className={
                  section === "other"
                    ? "bg-slate-300 px-2 py-1 rounded"
                    : "bg-slate-100 px-2 py-1 rounded"
                }
              >
                Other
              </li>
            </ul>
          </div>

          </div>
          

          <div className="w-auto">
            <div className="pt-0">
              {section === "basicInfo" && <BasicInfo />}
              {section === "achievement" && <Achievement />}
              {section === "workExperience" && <WorkExperience />}
              {section === "education" && <Education />}
              {section === "certification" && <Certification />}
              {section === "languages" && <Languages />}
              {section === "other" && <Other />}
              {section === "project" && <Project />}
              {section === "skills" && <Skills />}
            </div>
          </div>
          <div className="pt-16 hidden md:block">
            <ResumePreview setDisplayForm={setDisplayForm} />
          </div>
        </div>
      )}
    </>
  );
};

export default Resume;
