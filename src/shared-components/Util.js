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
        ],
        icon: "fa-solid fa-person-dress",
        default: true,
    },
    {
        title: "summary",
        canAdd: false,
        fields: [
            { label: "summary", type: "textarea"},
        ],
        icon: "fa-solid fa-scroll",
        default: true,
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
        ],
        icon: "fa-solid fa-hammer",
        default: true,
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
        ],
        icon: "fa-solid fa-apple-whole",
        default: true,
    },
    {
        title: "skills",
        canAdd: false,
        fields: [
            { label: "skills", type: "textarea"}
        ],
        icon: "fa-solid fa-computer",
        default: true,
    },
    {
        title: "projects",
        canAdd: true,
        fields: [
            { label: "title", type: "text"},
            { label: "link", type: "text"},
            { label: "description", type: "textarea"}
        ],
        icon: "fa-solid fa-flask",
        default: false,
    },
    {
        title: "awards",
        canAdd: true,
        fields: [
            { label: "title", type: "text"},
            { label: "received", type: "date"}
        ],
        icon: "fa-solid fa-trophy",
        default: false,
    },
    {
        title: "certifications",
        canAdd: true,
        fields: [
            { label: "title", type: "text"},
            { label: "organization", type: "text"},
            { label: "date received", type: "date"}
        ],
        icon: "fa-solid fa-award",
        default: false,
    },
    {
        title: "socials",
        canAdd: true,
        fields: [
            { label: "site", type: "text"},
            { label: "link", type: "text"}
        ],
        icon: "fa-solid fa-link",
        default: false,
    }
]