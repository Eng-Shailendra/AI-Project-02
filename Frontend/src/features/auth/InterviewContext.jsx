import React, { createContext } from "react";
import { useState } from "react";

export const InterviewContext = createContext();

const InterviewContextProvider = ({ children }) => {
  const [loading, setLoding] = useState(true);
  const [report, setReport] = useState(null);
  const [reports, setReports] = useState([]);

  return (
    <InterviewContext.Provider value={loading,setLoding, report, setReport, reports, setReports}>
      {children}
    </InterviewContext.Provider>
  );
};

export default InterviewContextProvider;
