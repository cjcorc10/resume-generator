import ResumeInput from "./ResumeInput";
import ResumeOutput from "./ResumeOutput";
import { useContext, useEffect, useState } from "react";
import { PDFViewer } from "@react-pdf/renderer";
import SessionContext from "../contexts/SessionContext";
import AdditionalSection from "./AdditionalSection";
import NavBar from "./Navbar";
import { RESUMEFIELDS } from "../shared-components/Util";

const HomePage = () => {

  const {resumeData} = useContext(SessionContext);
  const [showSection, setShowSection] = useState(() => {
    const shownSections = localStorage.getItem("optionalSections");
    if(shownSections) return JSON.parse(shownSections);
    
    const sections = [];
    for(let i of RESUMEFIELDS) {
        if(!i.default)
            sections.push(i.title)
    }
    return sections;
})
  const [render, setRender] = useState(false);

  useEffect(() => {
    setRender(false);
  },[resumeData]) 

  useEffect(() => {
    localStorage.setItem("optionalSections", JSON.stringify(showSection));
  }, [showSection])


  return ( <>
    <NavBar />
    <div className="flex justify-center bg-gray-50 h-screen pt-20">
      <div className="block md:flex w-full ">
        <div className="w-full flex flex-col justify-between  flex-1">
            <div className="w-full overflow-y-scroll flex-1 flex flex-col items-center py-8">
                <h2 className="text-xl  mb-4 font-bold text-slate-500">
                    Select section to edit
                </h2>
                <ResumeInput showSection={showSection} setShowSection={setShowSection} setRender={() => setRender(false)}/>
            </div>
            <div className="bg-gray-200  w-full p-2 flex flex-col rounded-md">
                <h2 className="text-xl text-center font-bold text-slate-500 border-b border-slate-400 py-2">
                    Add optional sections
                </h2>
                <div className="flex justify-around items-center m-4">
                    {showSection.map((title, idx) => <AdditionalSection key={idx} title={title} setShow={setShowSection}/>)}
                </div>
            </div>
        </div>
        <div className="flex-1 flex flex-col justify-center px-4 items-center py-12">
          { render ? ( 
          <PDFViewer className="border border-gray-300 shadow-md h-150 w-100 rounded-lg">
            <ResumeOutput resumeData={resumeData}/>
          </PDFViewer>) 
          : (
          <button 
          onClick={() => setRender(true)}
          className="border rounded-md p-2 font-bold bg-slate-700 shadow-lg text-white hover:scale-110 duration-300 text-xl text-wrap ">render resume</button>)
          } 
        </div>
      </div>
    </div>
  </>
  );
};

export default HomePage;