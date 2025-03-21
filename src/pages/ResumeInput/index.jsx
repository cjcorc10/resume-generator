import { RESUMEFIELDS } from "../../shared-components/Util";
import FormSection from "./FormSection";
import { useState } from "react";
import clsx from "clsx";


const ResumeInput = ({resumeData, setState}) => {
    const [seeForm, setSeeForm] = useState(() => {
        const formsObj = {};
        for(let i in resumeData)
            formsObj[i] = false;
        return formsObj;
    });

    return <form className="flex flex-col my-72 max-w-xl w-full">

        {RESUMEFIELDS.map((section, idx) => ( <div 
            className="flex flex-col border border-gray-300 overflow-clip rounded-lg"
            key={idx}>
            <button 
                onClick={(e) => {
                    e.preventDefault();
                    setSeeForm(prev =>  ({...prev, [section.title]: !prev[section.title]}))}}
                    className={clsx("flex items-center justify-between px-3 text-md text-slate-700 font-bold py-2 overflow-clip flex-1 hover:bg-yellow-100 duration-300", seeForm[section.title] && "bg-yellow-200", idx%2==0 && "bg-blue-100")}>
                <div className="flex flex-1 justify-start gap-2">
                    <i className={`${section.icon} text-2xl w-12 text-slate-600`}></i>
                    {section.title}
                </div>
                <i className="fa-solid fa-angle-down text-xl"></i>
            </button> 

            { seeForm[section.title] && 
                <div
                    className="flex"
                    ><FormSection setState={setState} state={resumeData} section={section}/></div>
            }
            <div
                className="flex justify-center">

            { seeForm[section.title] && section.canAdd && 
                <button 
                onClick={(e) => {
                    e.preventDefault();
                    
                    const newObj = {};
                    for(let field in resumeData[section.title][0])
                        newObj[field] = "";
                    setState(prev => ({
                        ...prev,
                        [section.title]: [...prev[section.title], newObj]
                    }))
                }}
                className="p-2 overflow-clip rounded-md bg-slate-300 w-48 m-4 shadow-md text-slate-700 hover:scale-105 duration-300 border border-slate-200"
                >add more {section.title}</button>
            }
            </div>
        </div>
        ))}
    </form>
}

export default ResumeInput;