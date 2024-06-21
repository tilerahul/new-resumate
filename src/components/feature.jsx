import React from 'react'
import Review from './Resume/Section/Review'
import Faq from './faq/Faq'
import ResumeSteps from './ResumeSteps'

function Feature() {
    return (
        <>
            {/* steps to create resume section */}
            <section>
            <ResumeSteps image1="1.png" image2="Pro1.png" title="Pick a Template" description="Start your job search right. Choose from our ATS-friendly, expertly crafted resume templates."/>

            <ResumeSteps image1="2.png" image2="Pro2.png" title="Customize Your Layout" description="Personalize your resume to reflect your unique style, tailor the layout to match your level of experience."/>

            <ResumeSteps image1="3.png" image2="Pro3.png" title="Fill in the blanks" description="Enter your resume details and watch your resume transform in real time"/>

            <ResumeSteps image1="4.png" image2="Pro4.png" title="Hit the download button" description="It's completely free and no hidden charges after you finish your resume"/>
  
            </section>


            {/* why choose us section */}
            <section>
                <div className="bg-gray-200 px-2 py-10">

                    <div id="features" className="mx-auto max-w-6xl">

                        <h2 className="text-center font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                            Why Use Resumate, resume builder?
                        </h2>
                        <br />
                        <p className="text-center text-base font-semibold leading-7 text-primary-500">The best resume builder for your needs</p>
                        <ul className="mt-16 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-3">
                            <li className="rounded-xl bg-white px-6 py-8 shadow-sm  transform transition duration-500 hover:scale-105">

                                <img src="free.svg" alt="" className="mx-auto h-10 w-10" />
                                <h3 className="my-3 font-display font-medium">Totally Free</h3>
                                <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                                    Enjoy our free feature. If you want to give your resume an extra boost, feel free to use our resume builder at no cost.
                                </p>

                            </li>
                            <li className="rounded-xl bg-white px-6 py-8 shadow-sm transform transition duration-500 hover:scale-105">

                                <img src="professional.svg"
                                    alt="" className="mx-auto h-10 w-10" />
                                <h3 className="my-3 font-display font-medium">Professional Resume Templates</h3>
                                <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                                    Find the perfect template here! Whether you prefer a classNameic black & white design or something more creative we've got right on for you.
                                </p>

                            </li>
                            <li className="rounded-xl bg-white px-6 py-8 shadow-sm transform transition duration-500 hover:scale-105">
                                <img src="free.svg" alt="" className="mx-auto h-10 w-10" />
                                <h3 className="my-3 font-display font-medium">No Hidden Fees</h3>
                                <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                                    We value transparency. With us, what you see is what you get. There are no hidden fees or charges.
                                </p>

                            </li>
                            <li className="rounded-xl bg-white px-6 py-8 shadow-sm transform transition duration-500 hover:scale-105">
                                <a href="/pricing" className="group">
                                    <img src="AtsFriendly.svg" alt="" className="mx-auto h-10 w-10" />
                                    <h3 className="my-3 font-display font-medium group-hover:text-primary-500">ATS Friendly</h3>
                                    <p className="mt-1.5 text-sm leading-6 text-secondary-500">Our templates are designed to be Applicant Tracking System (ATS) friendly. This means they are optimized to make it through automated resume screening software used by many employers.</p>
                                </a>
                            </li>
                            <li className="rounded-xl bg-white px-6 py-8 shadow-sm transform transition duration-500 hover:scale-105">
                                <a href="/templates" className="group">
                                    <img src="editResume.svg" alt="" className="mx-auto h-10 w-10" />
                                    <h3 className="my-3 font-display font-medium group-hover:text-primary-500">
                                        Edit Your Resume in Real Time
                                    </h3>
                                    <p className="mt-1.5 text-sm leading-6 text-secondary-500">Our resume builder allows you to edit and update your resume in real time. This means you can see changes as you make them, allowing for easy customization and refinement. </p>
                                </a>
                            </li>
                            <li className="rounded-xl bg-white px-6 py-8 shadow-sm transform transition duration-500 hover:scale-105">
                                <a href="/download" className="group">
                                    <img src="EasyToUse.svg" alt="" className="mx-auto h-10 w-10" />
                                    <h3 className="my-3 font-display font-medium group-hover:text-primary-500">Easy to Use</h3>
                                    <p className="mt-1.5 text-sm leading-6 text-secondary-500">Our resume builder is user-friendly and intuitive. Even if you’re not tech-savvy, you’ll find our platform easy to navigate and use.</p>
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </section>

            {/* Review Section */}
            <Review />
            <br/>

            {/* FAQ section */}
            <Faq />

            {/* our vision section */}
            <section>
                <div className="flex flex-col items-center justify-center h-full py-8 px-4">
                    <div className="flex gap-2">
                        <img src="goal.png" alt="" className="h-10" />
                        <p className="text-3xl font-bold text-center mb-4">Our Vision</p>

                    </div>
                    <p className="text-lg text-gray-700 text-center">Help Everyone to find jobs across the galaxy</p>
                </div>

            </section>
        

        </>

    )
}

export default Feature
