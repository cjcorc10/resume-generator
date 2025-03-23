import FormField from "./FormField";
import { useContext } from "react";
import SessionContext from "../../contexts/SessionContext";

const FormSection = ({section}) => {

    const {resumeData} = useContext(SessionContext);
    
    return <div className="flex flex-wrap justify-center w-full p-5 bg-white relative">

            {resumeData[section.title].map((entry, idx) => (
                <div key={idx}>
                {idx>0 && 
                    (   <div className="flex flex-col w-full relative">
                            <div className="border w-full my-10 border-slate-300"></div>
                            <button className="absolute right-0 top-14 p-2 rounded-md flex justify-center hover:scale-125 duration-200"><i class="text-red-400 text-xl fa-solid fa-xmark"></i></button>
                        </div>)}
                {section.fields.map(field => (
                    
                    <FormField idx={idx} key={field.label} field={field} section={section}/>
                
                ))}
                </div>
            ))}
    </div>
}

export default FormSection;