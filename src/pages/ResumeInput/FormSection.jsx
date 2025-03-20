import { useState } from "react";
import clsx from 'clsx';
import FormField from "./FormField";

const FormSection = ({ section, state, setState }) => {
    
    return <div className="flex max-w-xl flex-wrap justify-center">

            {state[section.title].map((entry, idx) => (
                section.fields.map(field => (
                    <FormField idx={idx} key={field.label} field={field} section={section} setState={setState} state={state} />
                ))
            ))}
    </div>
}

export default FormSection;