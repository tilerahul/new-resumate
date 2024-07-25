import { createContext, useState, useRef, useEffect } from "react";
import { useReactToPrint } from "react-to-print";
import toast from "react-hot-toast";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

  const compPDF = useRef();
  const [section, setSection] = useState('basicInfo');
  const [templete, setSetTemplete] = useState('One');
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

  const printHandler = useReactToPrint({
    content: () => compPDF.current,
    documentTitle: "ResumateResume",
    onAfterPrint: () => {
      toast.success("Resume Download Successfully");
    },
  });

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      localStorage.setItem('resumeDraft', JSON.stringify(resumeData));
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [resumeData]);

  useEffect(() => {
    const savedData = localStorage.getItem('resumeDraft');
    if (savedData) {
      setResumeData(JSON.parse(savedData));
    }
  }, []);

  const clearResume = () =>{
    localStorage.removeItem('resumeDraft');
    setResumeData({
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
  }

  const value = {
    section, setSection,
    resumeData, setResumeData,
    templete, setSetTemplete,
    printHandler, compPDF, clearResume
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;