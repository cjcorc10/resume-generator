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

    return <form className="min-w-xl flex flex-col border-3 border-blue-500 mt-24">

        {RESUMEFIELDS.map((section, idx) => ( <div 
            className="flex flex-col border rounded-md"
            key={idx}>
            <button 
                onClick={(e) => {
                    e.preventDefault();
                    setSeeForm(prev =>  ({...prev, [section.title]: !prev[section.title]}))}}
                    className={clsx("text-md py-2 overflow-clip flex-1", seeForm[section.title] && "border-b border-gray-500")}>
                {section.title}
            </button> 

            { seeForm[section.title] && 
                <div
                    className="py-6 flex"
                    ><FormSection setState={setState} state={resumeData} section={section}/></div>
            }

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
                    className="bg-violet-500 hover:bg-violet-600 p-2 overflow-clip rounded-md text-violet-100"
                    >add more</button>
            }
        </div>
        ))}
    </form>
}

export default ResumeInput;