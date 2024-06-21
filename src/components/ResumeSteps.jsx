import React from 'react'

function ResumeSteps(props) {
    const img1 = props.image1
    const img2 = props.image2
    return (
        <>
            <div className="w-auto flex flex-col lg:flex-row lg:items-center lg:justify-evenly mt-8 bg-gray-100 p-6 rounded-2xl shadow-md mx-4 lg:mx-auto lg:max-w-6xl">
                <div className="gap-6 flex flex-col lg:w-1/2 lg:mr-6">
                    <div className="flex justify-center lg:justify-end mb-4 lg:mb-0">
                        <img src={img1} alt="1" className="rounded-full w-12 h-12 lg:w-auto lg:h-auto transform transition duration-500 hover:scale-105" />
                    </div>
                    <div className="lg:ml-5 p-4 rounded-lg bg-slate-200 transform transition duration-500 hover:scale-105">
                        <h1 className="text-xl lg:text-2xl font-bold text-center lg:text-left">{props.title}</h1>
                        <p className="text-gray-700 text-lg lg:text-xl text-center lg:text-left">{props.description}</p>
                    </div>
                </div>
                <div className="flex justify-center lg:w-1/2 lg:mt-0 lg:ml-6">
                    <img src={img2} alt="Step-1" className="w-[400px] max-w-[300px] lg:max-w-none rounded-3xl mt-6 sm:mt-0 transform transition duration-500 hover:scale-105" />
                </div>
            </div>
        </>
    )
}

export default ResumeSteps
