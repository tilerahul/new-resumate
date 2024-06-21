import React, { useContext } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { AppContext } from "../Context/appContext";
import { useNavigate } from "react-router-dom";

const slideImages = [
  {
    url: "cv_template5.jpg",
    templete : 'One'
  },
  {
    url: "cv_template2.png",
    templete : 'Two'
  },
  {
    url: "cv_template4.png",
    templete : 'One'
  },
];

function Templates() {
  const { setSetTemplete } = useContext(AppContext);
  const navigate = useNavigate();
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
            src="cv_template5.jpg"
            alt="template"
            className="w-5/6 h-auto object-cover rounded-lg border border-gray-300 cursor-pointer transform transition duration-500 hover:scale-105"
            onClick={() => {
              setSetTemplete('One')
              navigate('/resume')
            }}
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            src="cv_template2.png"
            alt="template"
            className="w-3/4 h-auto object-cover rounded-lg border border-gray-300 cursor-pointer transform transition duration-500 hover:scale-105"
            onClick={() => {
              setSetTemplete('Two')
              navigate('/resume')
            }
            }
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            src="cv_template4.png"
            alt="template"
            className="w-3/4 h-auto object-cover rounded-lg border border-gray-300 cursor-pointer transform transition duration-500 hover:scale-105"
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
                onClick={() => {
                  setSetTemplete(slideImage.templete)
                  navigate('/resume')
                }}
                className="w-[300px] h-[430px] object-cover rounded-lg border border-gray-300 cursor-pointer"
              />
            </div>
          ))}
        </Slide>
      </div>
    </>
  );
}

export default Templates;
