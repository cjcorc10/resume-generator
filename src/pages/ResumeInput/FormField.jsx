import clsx from "clsx"


const FormField = ({idx, field, section, setState, state}) => {

    return <div 
        key={field.label}
        className="flex flex-col px-4 py-1">
        <label
            >{field.label}</label>
        {field.type === "textarea" ?
            <textarea
                onChange={(e) => setState(prev => {
                    const updatedEntries = [...prev[section.title]] 
                    updatedEntries[idx] = {...updatedEntries[idx], [field.label]: e.target.value}
                    return({...prev, [section.title]: updatedEntries});
                })}>

            </textarea> 
            :
        <input
        onChange={(e) => setState(prev => {
            const updatedEntries = [...prev[section.title]] 
            updatedEntries[idx] = {...updatedEntries[idx], [field.label]: e.target.value}
            return({...prev, [section.title]: updatedEntries});
        })}
        className={"border border-gray-300 rounded-md px-2 mb-2"}
        value={state[section.title][idx][field.label]}
        type={field.type}></input>
    }
</div>
}

export default FormField;