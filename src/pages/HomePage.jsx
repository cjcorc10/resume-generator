import ResumeInput from "./ResumeInput";
import Resume from "./Resume";
import { useContext } from "react";
import { PDFViewer } from "@react-pdf/renderer";
import SessionContext from "../contexts/SessionContext";
import NavBar from "./Navbar";

const HomePage = () => {

  const {resumeData} = useContext(SessionContext);

  return ( <>
    <NavBar />
    <div className="flex justify-center bg-gray-50 h-screen pt-20">
      <div className="block md:flex w-full ">
        <div className="w-full flex flex-col justify-between  flex-1">
            <div className="w-full overflow-y-scroll flex-1 flex flex-col items-center">
                <h2 className="text-xl mt-16 mb-4 font-bold text-slate-500">
                    Select section to edit
                </h2>
                <ResumeInput />
            </div>
            <div className="bg-gray-200  w-full p-2 flex flex-col rounded-md">
                <h2 className="text-xl text-center font-bold text-slate-500 border-b border-slate-400 py-2">
                    Add optional sections
                </h2>
                <div className="flex justify-around items-center m-4">

                <button className="text-slate-400 cursor-pointer hover:text-slate-600 hover:scale-105 duration-200">
                    certifications
                </button>
                <button className="text-slate-400 cursor-pointer hover:text-slate-600 hover:scale-105 duration-200">
                    projects
                </button>
                <button className="text-slate-400 cursor-pointer hover:text-slate-600 hover:scale-105 duration-200">
                    awards
                </button>
                <button className="text-slate-400 cursor-pointer hover:text-slate-600 hover:scale-105 duration-200">
                    summary
                </button>
                </div>
            </div>
        </div>
        <div className="flex-1 flex justify-center px-4 mt-24">
          <PDFViewer className="border border-gray-300 shadow-md h-150 w-100 rounded-lg">
            <Resume resumeData={resumeData}/>
          </PDFViewer>
        </div>
      </div>
    </div>
  </>
  );
};

export default HomePage;
