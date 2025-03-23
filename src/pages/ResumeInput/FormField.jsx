import clsx from "clsx"
import { useContext } from "react"
import SessionContext from "../../contexts/SessionContext"

const FormField = ({idx, field, section}) => {
    
    const {resumeData, setResumeData} = useContext(SessionContext);
    
    return <div 
        key={field.label}
        className={clsx("flex flex-col px-8 py-1 text-gray-600", field.type==="textarea" && "w-full")}>
        <label
            >{field.label}</label>
        {field.type === "textarea" ?
            <textarea
                className="rounded-md border border-gray-300 px-2 py-1 mb-2"
                rows={3}
                onChange={(e) => setResumeData(prev => {
                    const updatedEntries = [...prev[section.title]] 
                    updatedEntries[idx] = {...updatedEntries[idx], [field.label]: e.target.value}
                    return({...prev, [section.title]: updatedEntries});
                })}
                value={resumeData[section.title][idx][field.label]}>
                
            </textarea> 
            :
        <input
        onChange={(e) => setResumeData(prev => {
            const updatedEntries = [...prev[section.title]] 
            updatedEntries[idx] = {...updatedEntries[idx], [field.label]: e.target.value}
            return({...prev, [section.title]: updatedEntries});
        })}
        className="border border-gray-300 rounded-md px-2 py-1 mb-2 w-50"
        value={resumeData[section.title][idx][field.label]}
        type={field.type}></input>
    }
</div>
}

export default FormField;