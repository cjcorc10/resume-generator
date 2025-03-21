import clsx from "clsx"

const FormField = ({idx, field, section, setState, state}) => {

    return <div 
        key={field.label}
        className={clsx("flex flex-col px-8 py-1 text-gray-600", field.type==="textarea" && "w-full")}>
        <label
            >{field.label}</label>
        {field.type === "textarea" ?
            <textarea
                className="rounded-md border border-gray-300 px-2 py-1 mb-2"
                rows={3}
                onChange={(e) => setState(prev => {
                    const updatedEntries = [...prev[section.title]] 
                    updatedEntries[idx] = {...updatedEntries[idx], [field.label]: e.target.value}
                    return({...prev, [section.title]: updatedEntries});
                })}
                value={state[section.title][idx][field.label]}>
                
            </textarea> 
            :
        <input
        onChange={(e) => setState(prev => {
            const updatedEntries = [...prev[section.title]] 
            updatedEntries[idx] = {...updatedEntries[idx], [field.label]: e.target.value}
            return({...prev, [section.title]: updatedEntries});
        })}
        className="border border-gray-300 rounded-md px-2 py-1 mb-2 w-50"
        value={state[section.title][idx][field.label]}
        type={field.type}></input>
    }
</div>
}

export default FormField;