import React, { useContext } from "react";
import { AppContext } from "../../../Context/appContext";
import { IoCall } from "react-icons/io5";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const TempleteTwo = ({ setIsChange }) => {
  const { resumeData, printHandler, compPDF, clearResume } = useContext(AppContext);

  const formatedDate = (date) => {
    const month = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const newDate = new Date(date);

    return `${month[newDate.getMonth()]} ${newDate.getFullYear()}`;
  };
  return (
    <>
      <div className="mt-4 ml-4 md:ml-0 mr-4  md:mt-0 md:pt-0">
        <button
          onClick={() => printHandler()}
          type="button"
          className="text-white bg-[#2CACD5] hover:bg-[rgb(103,176,200)] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Download Your Resume
        </button>
        <button
          type="button"
          onClick={() => setIsChange(true)}
          className="text-white bg-[#2CACD5] hover:bg-[rgb(103,176,200)] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Change Templete
        </button>
        <button
          type="button"
          onClick={()=>clearResume()}
          className="text-white bg-[#2CACD5] hover:bg-[rgb(103,176,200)] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Clear Resume
        </button>
        <div className="border shadow-lg rounded md:min-w-[650px] md:min-h-[900px] lg:w-[8.27in] lg:h-auto">
          <div
            className="bg-white w-full h-full rounded-lg  p-10 inline-block m-auto"
            ref={compPDF}
            style={{ widows: "595px" }}
          >
            {/* Basic Info Section */}
            <div className="mb-4">
              {resumeData.BasicInfo.name && (
                <h1 className="text-2xl font-semibold">
                  {`${resumeData.BasicInfo.name} `}
                </h1>
              )}
              {resumeData.BasicInfo.jobTitle && (
                <p className="font-bold text-[#2CACD5] text-xl">
                  {resumeData.BasicInfo.jobTitle}
                </p>
              )}
              <div className="flex flex-row justify-between">
                {resumeData.BasicInfo.phone && (
                  <div className="flex gap-1 items-center mx-3">
                    <IoCall />
                    <p className="text-gray-600">
                      {resumeData.BasicInfo.phone}
                    </p>
                  </div>
                )}
                {resumeData.BasicInfo.email && (
                  <div className="flex gap-1 items-center mx-3">
                    <MdEmail />
                    <p className="text-gray-600">
                      {resumeData.BasicInfo.email}
                    </p>
                  </div>
                )}
                {resumeData.BasicInfo.linkedin && (
                  <div className="flex gap-1 items-center mx-3">
                    <FaLinkedin />
                    <a
                      href={resumeData.BasicInfo.linkedin}
                      className="text-blue-500"
                    >
                      linkedin.com
                    </a>
                  </div>
                )}
                {resumeData.BasicInfo.github && (
                  <div className="flex gap-1 items-center mx-3">
                    <FaGithub />
                    <a
                      href={resumeData.BasicInfo.github}
                      className="text-blue-500"
                    >
                      github.com
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Summary section */}
            {resumeData.BasicInfo.objective && (
              <div className="pb-6">
                <h2 className="text-md font-semibold">Summary</h2>
                <div className="border-t-2 border-black"></div>
                <p className="text-gray-800 max-w-3xl text-justify">
                  {resumeData.BasicInfo.objective}
                </p>
              </div>
            )}

            {/* Education Section */}
            {resumeData.Education[0] && (
              <div className="mb-6">
                <h2 className="text-sm font-semibold">EDUCATION</h2>
                <div className="border-t-2 border-black"></div>
                {resumeData.Education.map((data, index) => (
                  <div key={index}>
                    <div className="flex justify-between">
                      <p className="text-gray-800 font-semibold">{`${data.college} - ${data.degree}`}</p>
                      <p className="text-gray-600">
                        {formatedDate(data.completionDate)}
                      </p>
                    </div>

                    <p className="text-gray-600"></p>
                    <p className="text-gray-600">{data.CGPA}</p>

                    <p className="text-gray-600">{data.description}</p>
                  </div>
                ))}
              </div>
            )}

            {/* skills section */}
            {resumeData.Skills[0] && (
              <div className="mb-6">
                <h2 className="text-sm font-semibold">SKILLS</h2>
                <div className="border-t-2 border-black"></div>
                <div className="flex flex-wrap  gap-x-4 gap-y-2">
                  {resumeData.Skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-gray-600 underline underline-offset-4"
                    >
                      {skill.skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Work Experience Section */}
            {resumeData.WorkExperience[0] && (
              <div className="mb-6">
                <h2 className="text-sm font-semibold">WORK EXPERIENCE</h2>
                <div className="border-t-2 border-black"></div>
                {resumeData.WorkExperience.map((data, index) => (
                  <div key={index} className="mb-4">
                    <div className="flex justify-between">
                      <p className="text-gray-600 font-medium">{`${data.cName} - ${data.jobTitle}`}</p>
                      <p className="text-gray-600">{`${formatedDate(
                        data.startDate
                      )} - ${formatedDate(data.completionDate)}`}</p>
                    </div>
                    <ul className="list-disc list-inside text-gray-600">
                      {data.description &&
                        <>
                          {data.description.trim().split('\n').map((line, index) => (
                            <li className='pl-6 text-justify' key={index}>{line}</li>
                          ))}
                        </>
                      }
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* Project Section */}
            {resumeData.Project[0] && (
              <div className="mb-6">
                <h2 className="text-sm font-semibold">PROJECTS</h2>
                <div className="border-t-2 border-black"></div>
                {resumeData.Project.map((data, index) => (
                  <div key={index}>
                    <div className="flex justify-between">
                      {data.projectName &&
                        <p className="text-gray-800 font-semibold">
                          <h3 class="font-semibold">{data.projectName} <span>|</span> <Link to={data.link} target='_blank' class="text-blue-600 underline font-semibold">LINK</Link></h3>
                        </p>
                      }
                      {data.startDate &&
                        <p className="text-gray-600">{`${formatedDate(
                          data.startDate
                        )} - ${formatedDate(data.completionDate)}`}
                        </p>
                      }
                    </div>
                    <ul className="list-disc list-inside text-gray-600">
                      {data.description &&
                        <>
                          {data.description.trim().split('\n').map((line, index) => (
                            <li className='pl-6 text-justify' key={index}>{line}</li>
                          ))}
                        </>
                      }
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* Achievement Section */}
            {resumeData.Achievement[0] && (
              <div className="mb-6">
                <h2 className="text-sm font-semibold">KEY ACHIEVEMENTS</h2>
                <div className="border-t-2 border-black"></div>
                <ul className="list-disc pl-6 list-inside text-gray-600">
                  {resumeData.Achievement.map((data, index) => (
                    <li key={index}>{data.title}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Certification Section */}
            {resumeData.Certification[0] && (
              <div className="mb-6">
                <h2 className="text-sm font-semibold">CERTIFICATIONS</h2>
                <div className="border-t-2 border-black"></div>
                <ul className="list-disc pl-6 list-inside text-gray-600">
                  {resumeData.Certification.map((data, index) => (
                    <li key={index}>{data.title}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Languages Section */}
            {resumeData.Languages[0] && (
              <div>
                <h2 className="text-sm font-semibold">LANGUAGES</h2>
                <div className="border-t-2 border-black"></div>
                <div className="flex gap-3">
                  {resumeData.Languages.map((data, index) => (
                    <p key={index} className="text-gray-600">
                      {data.language}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* Other Section */}
            {resumeData.Other[0] && (
              <div>
                {resumeData.Other.map((data, index) => (
                  <div className="mt-6" key={index}>
                    <h2 className="text-sm font-semibold">{data.title}</h2>
                    <div className="border-t-2 border-black"></div>
                    <p className="text-gray-600">{data.description}</p>
                  </div>
                ))}
              </div>
            )}
            <div className="text-center text-slate-300 pt-2">resumate-resume.netlify.app</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TempleteTwo;
