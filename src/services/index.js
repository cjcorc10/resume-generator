export const fetchSession = (resumeFields) => {
    const storedData = localStorage.getItem('ResumeDataKey');
    if(storedData) return JSON.parse(storedData)

    const initialData = {};
    resumeFields.forEach((section) => {
        initialData[section.title] = initializeFields(section.fields);
      });
      return initialData;
}

const initializeFields = (fields) => {
    const initialData = {};
    fields.forEach((field) => (initialData[field.label] = ""));
    return [initialData];
  };