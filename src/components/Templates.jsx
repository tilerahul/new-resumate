import React from 'react';

function Templates() {
  return (
    <>
      <div className="flex justify-center">
        <h2 className="text-3xl mt-0 dark:text-gray-400 text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Pick a Resume Template and create your own Resume within minutes</h2>
      </div>
      <br />

      <div className="grid grid-cols-1 ml-6 mr-6 md:grid-cols-3 gap-2">
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
    </>
  );
}

export default Templates;
