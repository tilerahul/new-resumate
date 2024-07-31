import React from 'react'
import Title from '../../about/Title'

const JobDescription = () => {
    return (
        <div>
            <Title title='Job Description for Accenture' />

            <div className='flex flex-col items-center justify-center gap-8'>
                <a href="#" class="block max-w-5xl p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Associate Software Engineer (ASE)</h5>
                    <div><span className='font-bold'>Package Offer : </span><span>4.5 LPA</span></div>
                    <div class="font-normal text-gray-700 dark:text-gray-400">
                        <h2 className='font-bold'>Job Description : </h2>
                        <p>Developing, designing and maintaining technologies that improve the way our clients and the world works. Working in challenging and dynamic environments, they use their versatility to create and support technology solutions that meet client requirements from analysis to implementation. </p>
                        <p>Design, build, test, assemble, and configure application using business requirements</p>
                        <p>Understand business drivers that will impact performance and deliver software to those expectations</p>
                        <p>Bake technology trends into solutions; Participate in the development of automation solutions, new functionality and technologies and integrate them in existing solutions</p>
                        <p>Aptitude to learn, Good analytical and problem-solving skills and proficient in verbal and communication skills</p>
                        <p>Deliver code to time and quality expectations and participate in peer reviews</p>
                        <p>Take ownership of the successful implementation of the solution</p>
                    </div>
                </a>
                <a href="#" class="block max-w-5xl p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Advanced Associate Software Engineer (AASE)</h5>
                    <div><span className='font-bold'>Package Offer : </span><span>6.5 LPA</span></div>
                    <div class="font-normal text-gray-700 dark:text-gray-400">
                    <h2 className='font-bold'>Job Description : </h2>
                        <p>Developing software, end to end across all layers (front-end, middle layer, backend, test automation and deployment) in agile delivery model and taking a use story to a finished product. The person would be expected to work on networking, database, UI, API and Security. Responsibilities would include Analysis and Design, Development, Automated Code Review, Unit Testing / Automation / Performance Testing, Automated Build and Deployment.</p>
                        <p>Design, build, test, assemble, and configure application using business requirements</p>
                        <p>Hands on experience in writing code frontend / backend / database server and exposure to test automation frameworks</p>
                        <p>Good analytical and problem-solving skills and proficient in verbal and communication skills</p>
                        <p>Ability to troubleshoot problems independently</p>
                        <p>Deliver code to time and quality expectations and participate in peer reviews</p>
                        <p>Build and leverage reusable code and libraries for future use</p>
                        <p>Working knowledge with source control, build, deployments git/TFS, build definitions</p>
                        <p>Individuals who can ramp up on existing solution/project and quickly contribute towards bug fixes</p>
                        <p>Take ownership of the successful implementation and performance of the solution</p>
                    </div>
                </a>
            </div>

        </div>
    )
}

export default JobDescription