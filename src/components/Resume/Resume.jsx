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
import { AppContext } from "../../Context/appContext";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { FaAnglesRight } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import TempleteTwo from './Templetes/TempleteTwo'
import TempleteOne from "./Templetes/TempleteOne";
import ChangeTemplete from "./Templetes/ChangeTemplete";
import { MdChangeCircle } from "react-icons/md";
import ReviewForm from "../Resume/ReviewForm";
import { VscFeedback } from "react-icons/vsc";

const Resume = () => {
  const { section, setSection, templete } = useContext(AppContext);
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const [isOpen, setIsOpen] = useState(false);
  const [isChange, setIsChange] = useState(false);
  const [feedback, setFeedback] = useState(false);

  useEffect(() => {
    document.body.style.overflowY = !isChange ? 'scroll' : "hidden"
    document.body.style.overflowY = !feedback ? 'scroll' : "hidden"
    if (!isLoggedIn) {
      toast.error("Please Login First !!");
      navigate("/login");
    }
  }, [isLoggedIn, navigate, isChange, feedback]);

  const handleSectionClick = (sectionName) => {
    setSection(sectionName);
    setIsOpen(false);
  };

  return (
    <>
      <div className="pt-0 py-16 flex gap-5">
        <div className="flex flex-col item-center">
          <div className="md:hidden p-2 mt-7 ml-4 mr-0 pr-0">
            {!isOpen && <FaAnglesRight onClick={() => setIsOpen(true)} />}
            <Link to="/resume/resumePreview">
              <FaEye
                size={20}
                className="mt-4"

              />

            </Link>
            <MdChangeCircle
              size={20}
              className="mt-4"
              onClick={() => setIsChange(true)}
            />
            <VscFeedback
              size={20}
              className="mt-4"
              onClick={() => setFeedback(true)}
            />
          </div>

          <div
            className={`bg-slate-100 pt-0 ${isOpen ? "block fixed h-[100vh]" : "hidden"
              } md:block`}
          >
            <div className="flex justify-center pt-7 px-5">
              <button
                type="button"
                onClick={() => setFeedback(true)}
                className="text-white w-full bg-[#2CACD5] hover:bg-[rgb(103,176,200)] font-medium text-sm px-3 py-2 rounded"
              >
                Give Feedback
              </button>
            </div>
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
        <div className="pt-7 hidden md:block">
          {templete === 'One' && <TempleteOne setIsChange={setIsChange} />}
          {templete === 'Two' && <TempleteTwo setIsChange={setIsChange} />}
        </div>
      </div>
      <div className={isChange ? "fixed top-16" : "hidden"}>
        <ChangeTemplete setIsChange={setIsChange} />
      </div>
      <div className={feedback ? "fixed top-16" : "hidden"}>
        <ReviewForm setFeedback={setFeedback} />
      </div>
    </>
  );
};

export default Resume;
