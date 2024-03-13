import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [section, setSection] = useState('basicInfo');
    const [resumeData, setResumeData] = useState({
      BasicInfo: [],
      Education: [],
      Skills: [],
      WorkExperience: [],
      Project: [],
      Achievement: [],
      Certification: [],
      Languages: [],
      Other: [],
    })

    const value = {
        section, setSection,
        resumeData, setResumeData
    }
  
    return (
      <AppContext.Provider value={value}>
        {children}
      </AppContext.Provider>
    );
  };
  
  export default AppProvider;