import FormField from "./FormField";
import { useContext } from "react";
import SessionContext from "../../contexts/SessionContext";

const FormSection = ({section}) => {

    const {resumeData} = useContext(SessionContext);
    
    return <div className="flex flex-wrap justify-center w-full p-5 bg-white">

            {resumeData[section.title].map((entry, idx) => (
                <>
                {idx>0 && <div className="border w-full my-10 border-slate-300"></div>}
                {section.fields.map(field => (
                    <FormField idx={idx} key={field.label} field={field} section={section}/>
                ))}
                </>
            ))}
    </div>
}

export default FormSection;