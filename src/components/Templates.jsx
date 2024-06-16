import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  {
    url: "cv_template2.png",
  },
  {
    url: "cv_template4.png",
  },
  {
    url: "cv_template3.png",
  },
];

function Templates() {
  return (
    <>
      <div className="flex justify-center">
        <h2 className="mx-2 mr-2 text-3xl mt-0 dark:text-gray-400 text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 text-center sm:text-center">
          Pick a Resume Template and create your own Resume within minutes
        </h2>
      </div>
      <br />

      <div className="hidden lg:grid grid-cols-1 ml-6 mr-6 md:grid-cols-3 gap-2">
        <div className="flex items-center justify-center">
          <img
            src="cv_template2.png"
            alt="template"
            className="w-3/4 h-auto object-cover rounded-lg border border-gray-300"
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            src="cv_template4.png"
            alt="template"
            className="w-3/4 h-auto object-cover rounded-lg border border-gray-300"
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            src="cv_template3.png"
            alt="template"
            className="w-3/4 h-auto object-cover rounded-lg border border-gray-300"
          />
        </div>
      </div>

      <div className="slide-container lg:hidden md:-z-50">
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div className="flex items-center justify-center" key={index}>
              <img
                src={slideImage.url}
                alt="template"
                className="w-[300px] h-[430px] object-cover rounded-lg border border-gray-300"
              />
            </div>
          ))}
        </Slide>
      </div>
    </>
  );
}

export default Templates;
