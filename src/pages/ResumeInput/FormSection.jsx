import { useState } from "react"
import FormField from "./FormField";

const FormSection = ({ section, state, setState }) => {
    const [seeForm, setSeeForm] = useState(false);
    
    const fieldArray = state[section.title].map((entry, idx) => (
        // move this into it's own component FormField
        section.fields.map(field => (
            <FormField idx={idx} key={field.label} field={field} section={section} setState={setState} state={state} />
        ))

    ))


    return <div className="bg-white border rounded-md border-gray-500 flex flex-col m-2">
            <button 
                onClick={(e) => {
                    e.preventDefault();
                    setSeeForm(prev => !prev)}}
                className="text-xl py-4 overflow-clip">
                {section.title}
            </button>
            { seeForm && fieldArray }
            { seeForm && section.canAdd && 
                <button 
                    onClick={(e) => {
                        // Showing at next render instead of onclick
                        e.preventDefault();

                        const newObj = {};
                        for(let field in state[section.title][0])
                            newObj[field] = "";
                        state[section.title].push(newObj);
                    }}
                    className="bg-violet-500 hover:bg-violet-600 p-2 overflow-clip rounded-md text-violet-100"
                    >add more</button>
            }

    </div>
}

export default FormSection;