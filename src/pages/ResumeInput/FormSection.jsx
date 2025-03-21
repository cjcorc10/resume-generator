import FormField from "./FormField";

const FormSection = ({ section, state, setState }) => {
    
    return <div className="flex flex-wrap justify-center w-full p-5 bg-white">

            {state[section.title].map((entry, idx) => (
                section.fields.map(field => (
                    <FormField idx={idx} key={field.label} field={field} section={section} setState={setState} state={state} />
                ))
            ))}
    </div>
}

export default FormSection;