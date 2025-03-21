import ResumeInput from "./ResumeInput";
import Resume from "./Resume";
import { RESUMEFIELDS } from "../shared-components/Util";
import { useState, useEffect } from "react";
import { PDFViewer } from "@react-pdf/renderer";

const initializeFields = (fields) => {
  const initialData = {};
  fields.forEach((field) => (initialData[field.label] = ""));
  return [initialData];
};

const HomePage = () => {
  // fetch data from localstorage or initialize
  const [resumeData, setResumeData] = useState(() => {
    const storedData = localStorage.getItem("ResumeDataKey");
    if (storedData) return JSON.parse(storedData);

    const initialData = {};
    RESUMEFIELDS.forEach((section) => {
      initialData[section.title] = initializeFields(section.fields);
    });
    return initialData;
  });

  // set state to localstorage when state changes
  useEffect(() => {
    localStorage.setItem("ResumeDataKey", JSON.stringify(resumeData));
  }, [resumeData]);

  return (
    <div className="flex justify-center bg-gray-50">
      <div className="block md:flex h-screen w-full max-w-[100rem]">
        <div className="w-full flex justify-center items-start flex-1 overflow-x-scroll px-4">
          <ResumeInput resumeData={resumeData} setState={setResumeData} />
        </div>
        <div className="flex-1 flex justify-center items-center">
          <PDFViewer>
            <Resume state={resumeData} />
          </PDFViewer>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
