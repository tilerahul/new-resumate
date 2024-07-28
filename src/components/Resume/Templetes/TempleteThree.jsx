import React, { useContext } from 'react'
import { AppContext } from "../../../Context/appContext";
import { Link } from 'react-router-dom';

const TempleteThree = ({ setIsChange }) => {

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
                <div>
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
                        onClick={() => clearResume()}
                        className="text-white bg-[#2CACD5] hover:bg-[rgb(103,176,200)] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                        Clear Resume
                    </button>
                </div>
                <div className="border shadow-lg rounded  md:min-w-[650px] md:min-h-[900px] lg:w-[8.27in] lg:h-auto">
                    <div
                        className="bg-white w-full h-full rounded-lg p-8 inline-block m-auto"
                        ref={compPDF}
                        style={{ widows: "595px" }}
                    >
                        {/* Basic Information */}
                        {resumeData.BasicInfo &&
                            <header class="text-center my-2">
                                {resumeData.BasicInfo.name && <h1 class="text-lg font-bold">{resumeData.BasicInfo.name}</h1>}
                                <p className='text-sm'>
                                    {resumeData.BasicInfo.email && <span>{`${resumeData.BasicInfo.email} | `}</span>}
                                    {resumeData.BasicInfo.phone && <span>{`${resumeData.BasicInfo.phone} | `}</span>}
                                    {resumeData.BasicInfo.address && <span>{`${resumeData.BasicInfo.address}`}</span>}
                                </p>
                                <div class="flex justify-center space-x-4 font-bold underline">
                                    {resumeData.BasicInfo.linkedin &&
                                        <a href="https://www.linkedin.com/in/rahul-tile/" class="text-sm">LinkedIn</a>
                                    }
                                    {resumeData.BasicInfo.github &&
                                        <a href="https://github.com/tilerahul" class="text-sm">GitHub</a>
                                    }
                                </div>
                            </header>
                        }


                        {/* Summary */}
                        {resumeData.BasicInfo.objective &&
                            <section class="my-4">
                                <h2 class="text-md font-bold px-2 bg-[#D1E4E2]">SUMMARY</h2>
                                <p class="text-justify ml-8 max-w-3xl text-sm">{resumeData.BasicInfo.objective}</p>
                            </section>
                        }


                        {/* Education */}
                        {resumeData.Education[0] &&
                            <section class="my-4">
                                <h2 class="text-md font-bold  px-2 bg-[#D1E4E2]">EDUCATION</h2>
                                <ul class="list-disc ml-12 text-sm">
                                    {resumeData.Education.map((edu, index) => (
                                        <li key={index}>
                                            <div class="flex justify-between">
                                                <span>{`${edu.degree} | ${edu.college}`}</span>
                                                <span class="italic">{`${edu.CGPA} | ${formatedDate(edu.completionDate)}`}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        }


                        {/* Skills  */}
                        {resumeData.Skills[0] &&
                            <section class="my-4">
                                <h2 class="text-md font-bold px-2 bg-[#D1E4E2]">TECHNICAL SKILLS</h2>
                                <div className="ml-8">
                                    {resumeData.Skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="text-gray-600 p-1 underline underline-offset-4"
                                        >
                                            {skill.skill}
                                        </span>
                                    ))}
                                </div>
                            </section>
                        }

                        {/* Experience  */}
                        {resumeData.WorkExperience[0] &&
                            <section class="my-4">
                                <h2 class="text-md font-bold px-2 bg-[#D1E4E2]">EXPERIENCE</h2>
                                {resumeData.WorkExperience.map((exp, index) => (
                                    <div class="text-sm ml-8" key={index}>
                                        <div class="flex justify-between">
                                            {exp.cName &&
                                                <h3 class="font-bold">{`${exp.cName} | ${exp.jobTitle}`}</h3>
                                            }
                                            {exp.startDate &&
                                                <p class="italic">{`(${formatedDate(exp.startDate)} - ${formatedDate(exp.completionDate)})`}</p>
                                            }
                                        </div>
                                        <ul class="list-disc list-inside">
                                            {exp.description &&
                                                <>
                                                    {exp.description.trim().split('\n').map((line, index) => (
                                                        <li className='pl-6 text-justify' key={index}>{line}</li>
                                                    ))}
                                                </>
                                            }
                                        </ul>
                                    </div>
                                ))}
                            </section>
                        }


                        {/* Academic Projects  */}
                        {resumeData.Project[0] &&
                            <section class="my-4">
                                <h2 class="text-md font-bold px-2 bg-[#D1E4E2]">ACADEMIC PROJECTS</h2>
                                <div class="text-sm ml-8">
                                    {resumeData.Project.map((pro, index) => (
                                        <>
                                            <div class="flex justify-between">
                                                {pro.projectName &&
                                                    <h3 class="font-bold">{pro.projectName} <span>|</span> <Link to={pro.link} target='_blank' class="underline font-bold">LINK</Link></h3>
                                                }
                                                {pro.startDate &&
                                                    <p class="italic">{`(${formatedDate(pro.startDate)} - ${formatedDate(pro.completionDate)})`}</p>
                                                }
                                            </div>
                                            {pro.description &&
                                                <ul class="list-disc list-inside">
                                                    {/* <li>{pro.description}</li> */}
                                                    <>
                                                        {pro.description.trim().split('\n').map((line, index) => (
                                                            <li className='pl-6 text-justify' key={index}>{line}</li>
                                                        ))}
                                                    </>
                                                </ul>
                                            }
                                        </>
                                    ))}
                                </div>
                            </section>
                        }

                        {/* Achievements / Position of Responsibility  */}
                        {resumeData.Achievement[0] &&
                            <section class="my-4">
                                <h2 class="text-md font-bold px-2 bg-[#D1E4E2]">ACHIEVEMENTS / POSITION OF RESPONSIBILITY</h2>
                                <ul class="text-sm list-disc list-inside ml-8">
                                    {resumeData.Achievement.map((ach, index) => (
                                        <li key={index}>{ach.title}</li>
                                    ))}
                                </ul>
                            </section>
                        }

                        {/* Certification */}
                        {resumeData.Certification[0] &&
                            <section class="my-4">
                                <h2 class="text-md font-bold px-2 bg-[#D1E4E2]">CERTIFICATION</h2>
                                <ul class="text-sm list-disc list-inside ml-8">
                                    {resumeData.Certification.map((cer, index) => (
                                        <li>{cer.title}</li>
                                    ))}

                                </ul>
                            </section>
                        }
                        {/* Languages  */}
                        {resumeData.Languages[0] &&
                            <section class="my-4">
                                <h2 class="text-md font-bold px-2 bg-[#D1E4E2]">LANGUAGES</h2>
                                <div className="ml-8">
                                    {resumeData.Languages.map((lang) => (
                                        <span
                                            key={lang}
                                            className="text-gray-600 p-1 underline underline-offset-4"
                                        >
                                            {lang.language}
                                        </span>
                                    ))}
                                </div>
                            </section>
                        }

                        <div className="text-center text-slate-300 pt-2">resumate-resume.netlify.app</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TempleteThree