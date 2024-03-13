import React from 'react'
import { Link } from 'react-router-dom'
function Blog() {
    return (
        <>
        <div className="p-15 pb-3 bg-white">
        <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Blogs to elevate your resume, job search & career to the top floor!
          </h2>
          <p className="mt-2 text-lg leading-6 text-gray-600">
            In today's competitive job market, having a well-crafted resume is essential for standing out from the crowd and landing your dream job.
          </p>
        </div>

        <div className="mt-10">
          <div className="flex flex-wrap -m-4">
            {/* First Blog */}
            <div className="lg:w-1/2 p-4">
              <div className="h-full bg-white shadow-lg overflow-hidden">
                <img className="w-auto h-[454px] object-cover object-center" src="blog1.jpg" alt="Resume Image" />
                <div className="p-6">
                  <h3 className="tracking-widest text-xs font-medium text-blue-500 uppercase">Resume Building</h3>
                  <h2 className="text-lg font-semibold text-gray-900">Crafting the Perfect Resume: Tips and Tricks</h2>
                  <p className="mt-2 text-gray-600">In this blog post, we'll explore the art of crafting the perfect resume by providing valuable tips and tricks to help you create a standout document that showcases your skills, experiences, and accomplishments effectively.</p>
                  <Link to="/blog1" className="mt-3 inline-block px-4 py-2 text-sm font-medium leading-5 text-white uppercase bg-blue-500 hover:bg-blue-600 focus:outline-none focus:bg-blue-600 rounded-lg">Read More</Link>
                </div>
              </div>
            </div>
            {/* Second Blog */}
            <div className="lg:w-1/2 p-4">
              <div className="h-full bg-white shadow-lg overflow-hidden">
                <img className="w-auto h-[454px] object-cover object-center" src="blog2.jpg" alt="Blog Image 2" />
                <div className="p-6">
                  <h3 className="tracking-widest text-xs font-medium text-blue-500 uppercase">Job Search</h3>
                  <h2 className="text-lg font-semibold text-gray-900">How to Tailor Your Resume for Each Job Application</h2>
                  <p className="mt-2 text-gray-600">Learn the importance of tailoring your resume for each job application and discover effective strategies for customizing your resume to match the specific requirements and preferences of potential employers.</p>
                  <Link to="/blog2" className="mt-3 inline-block px-4 py-2 text-sm font-medium leading-5 text-white uppercase bg-blue-500 hover:bg-blue-600 focus:outline-none focus:bg-blue-600 rounded-lg">Read More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>


        
        
        </>
        
    )
}

export default Blog
