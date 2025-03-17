export const RESUMEFIELDS = [
    {
        title: "personal information",
        canAdd: false,
        fields: [
            { label: "name", type: "text" },
            { label: "email", type: "email" },
            { label: "phone", type: "phone" }
        ]
    },
    {
        title: "work history",
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
        title: "skills",
        canAdd: true,
        fields: [
            { label: "skills", type: "text"}
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
    }
]