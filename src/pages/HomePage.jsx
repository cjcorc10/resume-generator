import ResumeInput from "./ResumeInput";
import Resume from "./Resume";
import { RESUMEFIELDS } from "../shared-components/Util";
import { useState } from "react";

const initializeFields = (fields) => {
    const initialData = {};
    fields.forEach(field => initialData[field.label] = '')
    return [initialData];
}

const HomePage = () => {

    const [resumeData, setResumeData] = useState(() => {
        const initialData = {};
        RESUMEFIELDS.forEach(section => {
            initialData[section.title] = initializeFields(section.fields);
        })
        return initialData;
    })

    return <div className="flex w-full h-screen">
        <div className=" bg-neutral-50 w-full max-w-lg flex justify-center">
            <ResumeInput resumeData={resumeData} setState={setResumeData}/>
        </div>
        <div className="flex-1">
            <Resume state={resumeData} />
        </div>
    </div>
}

export default HomePage;