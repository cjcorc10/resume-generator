import HomePage from "./pages/HomePage"
import SessionContext from "./contexts/SessionContext"
import { RESUMEFIELDS } from "./shared-components/Util"
import { useEffect, useState } from "react"
import * as services from "./services/index";

function App() {

  const [resumeData, setResumeData] = useState(() => services.fetchSession(RESUMEFIELDS))
  useEffect(() => {
    localStorage.setItem("ResumeDataKey", JSON.stringify(resumeData));
  }, [resumeData]);

  return <SessionContext.Provider value={{
    resumeData: resumeData,
    setResumeData: setResumeData 
    }}>
      <HomePage />
    </SessionContext.Provider>
}

export default App
