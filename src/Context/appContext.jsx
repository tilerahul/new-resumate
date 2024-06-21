import { createContext, useState, useRef } from "react";
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

  const value = {
    section, setSection,
    resumeData, setResumeData,
    templete, setSetTemplete,
    printHandler, compPDF
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;