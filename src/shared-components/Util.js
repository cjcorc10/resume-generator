export const RESUMEFIELDS = [
    {
        title: "personal information",
        canAdd: false,
        fields: [
            { label: "first name", type: "text" },
            { label: "last name", type: "text" },
            { label: "role", type: "text"},
            { label: "email", type: "email" },
            { label: "phone", type: "phone" },
            { label: "location", type: "text"},
        ]
    },
    {
        title: "summary",
        canAdd: false,
        fields: [
            { label: "summary", type: "textarea"},
        ]
    },
    {
        title: "work experience",
        canAdd: true,
        fields: [
            { label: "role", type: "text" },
            { label: "company", type: "text" },
            { label: "from", type: "date" },
            { label: "to", type: "date" },
            { label: "responsibilities", type: "textarea"},
        ]
    },
    {
        title: "education",
        canAdd: true,
        fields: [
            { label: "school name", type: "text"},
            { label: "location", type: "text"},
            { label: "degree", type: "text"},
            { label: "field", type: "text"},
            { label: "from", type: "date" },
            { label: "to", type: "date"}
        ]
    },
    {
        title: "skills",
        canAdd: false,
        fields: [
            { label: "skills", type: "textarea"}
        ]
    },
]