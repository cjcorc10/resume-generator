export const RESUMEFIELDS = [
    {
        title: "personal information",
        canAdd: false,
        fields: [
            { label: "name", type: "text" },
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
            { label: "company", type: "text" },
            { label: "role", type: "text" },
            { label: "from", type: "date" },
            { label: "to", type: "date" },
            { label: "details", type: "textarea"},
        ]
    },
    {
        title: "education",
        canAdd: true,
        fields: [
            { label: "school name", type: "text"},
            { label: "degree", type: "text"},
            { label: "field", type: "text"},
            { label: "from", type: "date" },
            { label: "to", type: "date"}
        ]
    },
    {
        title: "skills",
        canAdd: true,
        fields: [
            { label: "skills", type: "text"}
        ]
    },
]