import { RESUMEFIELDS } from "../../shared-components/Util";
import FormSection from "./FormSection";

const ResumeInput = ({resumeData, setState}) => {

    return <form className="my-16 min-w-md">
        {RESUMEFIELDS.map((section, idx) => (
            <FormSection key={section.title} setState={setState} state={resumeData} section={section}/>
        ))}
    </form>
}

export default ResumeInput;